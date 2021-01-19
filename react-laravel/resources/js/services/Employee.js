const baseUrl = "http://127.0.0.1:8000/api/employee";

import axios from 'axios';

const employee = {};

employee.list = async () => {
    try {
        const urlList = baseUrl + "/role";
        const res = await axios.get(urlList)
            .then(response => { return response.data; })
        return res;

    } catch (error) {
        return error;
    }
}