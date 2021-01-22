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

    return (
        <div>
            <h4>Edit</h4>
            <hr />
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="firstName">Name employee</label>
                    <input type="text" className="form-control" value={name_lastname}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" placeholder="you@example.com" value={email}/>
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
                    <label for="address">Address</label>
                    <input type="text" className="form-control" placeholder="1234 Main St" value={direction}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="address">Phone </label>
                    <input type="text" className="form-control" placeholder="123467890" value={phone}/>
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
                    <button className="btn btn-primary btn-block" type="submit">Save</button>
                </div>
            </div>
        </div>
    )

}

export default Edit;
