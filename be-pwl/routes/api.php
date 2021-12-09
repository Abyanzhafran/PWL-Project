<?php

use App\Http\Controllers\ApasiController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::resource('Apasi', 'ApasiController')->except(['create', 'edit']);

Route::get('/apasi', function () {
    return 'mamen';
});

Route::get('/index', [ApasiController::class, 'index']);
