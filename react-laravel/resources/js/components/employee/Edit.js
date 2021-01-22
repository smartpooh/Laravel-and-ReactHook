import React, { useEffect, useState } from 'react';

import employeeServices from '../../services/Employee';

function Edit(props) {


    useEffect(() => {
        async function fetchDataEmployee() {

            let id = props.match.params.id;
            const res = await employeeServices.get(id);
        }

    }, [])

    return (
        <div>
            <h4>Edit</h4>
            <hr />
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="firstName">Name employee</label>
                    <input type="text" className="form-control" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" placeholder="you@example.com" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" placeholder="1234 Main St" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="address">Phone </label>
                    <input type="text" className="form-control" placeholder="123467890" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="phone">Rol </label>
                    <select id="inputState" className="form-control" onChange={(event) => this.setState({ selectJob: event.target.value })}>
                        <option selected>Choose...</option>
                        <option>Admin</option>
                        <option>Programmer</option>
                        <option>Tester</option>
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
