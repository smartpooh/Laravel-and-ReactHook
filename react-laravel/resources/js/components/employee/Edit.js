import React, { useEffect, useState } from 'react';

import employeeServices from '../../services/Employee';

function Edit(props) {

    const [id, setId] = useState(null);
    const [name_lastname, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [city, setCity] = useState(null);
    const [direction, setDirection] = useState(null);
    const [phone, setPhone] = useState(null);
    const [rol, setRol] = useState(null);

    const [ListRow, setListRow] = useState([]);

    useEffect(() => {
        async function fetchDataEmployee() {

            let id = props.match.params.id;
            const res = await employeeServices.get(id);

            if (res.success) {
                console.log(res.data);
                const data = res.data;

                setId(data.id);
                setName(data.name_lastname);
                setEmail(data.email);
                setCity(data.city);
                setDirection(data.direction);
                setPhone(data.phone);
                setRol(data.rol)

            }
            else {
                alert(res.message);
            }
        }
        fetchDataEmployee();

        async function fetchDataRol() {
            const res = await employeeServices.listRole();
            setListRow(res.data);
        }
        fetchDataRol();

    }, [])

    const updateEmployee = async () => {

        const data = {
            id,
            name_lastname,
            email,
            city,
            direction,
            phone,
            rol
        }
        const res = await employeeServices.update(data);

        console.log(res.success);
        if (res.success) {
            return alert(res.message);
        } else {
            return alert(res.message);
        }
        
    }

    return (
        <div>
            <h4>Edit</h4>
            <hr />
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label >Name employee</label>
                    <input type="text" className="form-control"
                        value={name_lastname}
                        onChange={(event) => setName(event.target.value)} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label>City {city}</label>
                    <select id="inputState" className="form-control"
                        onChange={(event) => setCity(event.target.value)} value={city}>
                        <option>Choose...</option>
                        <option defaultValue="New York">New York</option>
                        <option defaultValue="Palmas-TO">Palmas-TO</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="1234 Main St"
                        value={direction}
                        onChange={(event) => setDirection(event.target.value)} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label>Phone </label>
                    <input type="text" className="form-control" placeholder="123467890"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label>Rol {rol}</label>
                    <select id="inputState" className="form-control"
                        onChange={(event) => setRol(event.target.value)} value={rol}>
                        <option>Choose...</option>
                        {
                            ListRow.map((itemselect) => {
                                return (
                                    <option value={itemselect.rol_id}>{itemselect.role_name}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <button onClick={() =>updateEmployee()}
                    className="btn btn-primary btn-block" type="submit">Save</button>
                </div>
            </div>
        </div>
    )

}

export default Edit;
