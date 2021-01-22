import React, { useEffect, useState } from 'react';


import employeeServices from "../../services/Employee";

function List() {
    const [listEmployee, setListEmployee] = useState([]);

    useEffect(() => {

        async function fetchDataEmployee() {
            const res = await employeeServices.listEmployee();
            setListEmployee(res.data);
        }
        fetchDataEmployee();
    }, [])

    return (
        <section>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listEmployee.map((item) => {
                            return (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name_lastname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.direction}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.role.role_name}</td>
                                    <td>
                                        <a href="#" className="btn btn-light"> Edit </a>
                                        <a href="#" className="btn btn-danger"> Delete </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

export default List;
