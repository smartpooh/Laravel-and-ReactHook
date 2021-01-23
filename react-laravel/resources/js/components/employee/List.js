import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import employeeServices from "../../services/Employee";
import './global.css'

function List() {

    const [listEmployee, setListEmployee] = useState([]);

    useEffect(() => {

        async function fetchDataEmployee() {
            const res = await employeeServices.listEmployee();
            setListEmployee(res.data);
        }
        fetchDataEmployee();
    }, [])

    const onClickDelete = async (i, id) => {

        var yes = confirm("Tem certeza do que está fazendo?");

        if (yes === true) {
            const res = await employeeServices.delete(id);

            if (res.success) {
                alert(res.message);

                const newList = listEmployee
                newList.splice(i,1);
                setListEmployee(newList);
            }else{
                alert(res.message);
            }

        }
    }
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
                        listEmployee.map((item, i) => {
                            return (
                                <tr>
                                    <th scope="row">{i}</th>
                                    <td>{item.name_lastname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.direction}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.role.role_name}</td>
                                    <td>
                                        <Link className="btn btn-light"
                                            to={"/employee/edit/" + item.id}>Edit</Link>
                                        <a className="btn btn-danger"
                                            onClick={(() => onClickDelete(i, item.id))}> Delete </a>
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
