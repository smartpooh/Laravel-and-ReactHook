import React, { Component } from 'react';

function Form() {
    return (
        <div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName">Name employee</label>
                    <input type="text" class="form-control" placeholder="Name" />
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" placeholder="you@example.com" />
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" placeholder="1234 Main St" />
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="phone">Phone </label>
                    <input type="text" class="form-control" placeholder="123467890" />
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="phone">Rol </label>
                    <select id="inputState" class="form-control" onChange={(event) => this.setState({ selectJob: event.target.value })}>
                        <option selected>Choose...</option>
                        <option>Admin</option>
                        <option>Programmer</option>
                        <option>Tester</option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <button class="btn btn-primary btn-block" type="submit">Save</button>
                </div>
            </div>
        </div>
    )
}

export default Form;
