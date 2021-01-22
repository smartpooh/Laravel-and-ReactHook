<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/employee/role', 'App\Http\Controllers\API\EmployeeController@list_role');
Route::post('/employee/create', 'App\Http\Controllers\API\EmployeeController@create');
Route::get('/employee/list', 'App\Http\Controllers\API\EmployeeController@list');
Route::get('/employee/get/{id}', 'App\Http\Controllers\API\EmployeeController@get');
Route::put('/employee/update/{id}', 'App\Http\Controllers\API\EmployeeController@update');



