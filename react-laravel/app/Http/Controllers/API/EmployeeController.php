<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Employee;
use PhpParser\Node\Stmt\TryCatch;

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

            $insert['name_lastname'] = $request['name_lastname'];
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
    public function list()
    {
        try {
            $data = Employee::with("role")->get();

            $response['data'] = $data;
            $response['message'] = "List sucessful";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['sucess'] = false;
        }
        return $response;
    }
    public function get($id)
    {
        try {

            $data = Employee::with("role")->find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Loader sucessful";
                $response['success'] = true;
            }else {
                $response['data'] = null;
                $response['message'] = "Loader falied id => $id";
                $response['success'] = false; 
            }
            
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['sucess'] = false;
        }
        return $response;
    }
}
