import React, { useEffect, useState } from 'react';

import employeeServices from '../../services/Employee'

function Form() {

    const [name_lastname, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [city, setCity] = useState(null);
    const [direction, setDirection] = useState(null);
    const [phone, setPhone] = useState(null);
    const [rol, setRol] = useState(null);


    const [ListRow, setListRow] = useState([]);
    useEffect(() => {
        console.log("Entra no Effect");
        async function fetchDataRol() {
            const res = await employeeServices.listRole();
            setListRow(res.data);
        }
        fetchDataRol();
    }, [])

    const saveEmployee = async (e) => {
        e.preventDefault();
        console.log("Entra no save");
        const data = {
            name_lastname,
            email,
            city,
            direction,
            phone,
            rol,
        }
        const res = await employeeServices.save(data);

        if (res.success) {
            return alert(res.message);
        } else {
            return alert(res.message);
        }
    }
    return (
        <div>
            <form onSubmit={saveEmployee}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Name employee</label>
                        <input type="text" className="form-control"
                            placeholder="Name"
                            onChange={(event) => setName(event.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Email</label>
                        <input type="email" className="form-control"
                            placeholder="you@example.com"
                            onChange={(event) => setEmail(event.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>City {city}</label>
                        <select id="inputState" className="form-control"
                            onChange={(event) => setCity(event.target.value)}>
                            <option>Choose...</option>
                            <option defaultValue="New York">New York</option>
                            <option defaultValue="Palmas-TO">Palmas-TO</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label >Address</label>
                        <input type="text" className="form-control"
                            placeholder="1234 Main St"
                            onChange={(event) => setDirection(event.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Phone </label>
                        <input type="text" className="form-control"
                            placeholder="123467890"
                            onChange={(event) => setPhone(event.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Rol {rol}</label>
                        <select id="inputState" className="form-control"
                            onChange={(event) => setRol(event.target.value)}>
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
            </form>
        </div>
    )
}
export default Form;
