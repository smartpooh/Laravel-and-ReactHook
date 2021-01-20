<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function list_role()
    {
        $data = Role::get();

        $response['data'] = $data;
        $response['sucess'] = true;

        return $response;
    }
    public function create(Request $request)
    {
        try {

            $insert['name_lastname'] = $request['nome'];
            $insert['email'] = $request['email'];
            $insert['city'] = $request['city'];
            $insert['direction'] = $request['direction'];
            $insert['phone'] = $request['phone'];
            $insert['rol'] = $request['rol'];

            Employee::insert($insert);
            
            $response['message'] = "Save sucessful";
            $response['sucess'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['sucess'] = false;
        }
        return $response;
    }
}
