<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/balance-sheet-final', 'GameController@bsheetFinal');

Route::get('/balance-sheet-explanation', 'GameController@bsheetExplanation');
Route::post('/balance-sheet-explanation', 'GameController@bsheetExplanation');

Route::get('/balance-sheet-line-items', 'GameController@bsheetLineItems');
Route::post('/balance-sheet-line-items', 'GameController@bsheetLineItems');

Route::get('/balance-sheet-quiz', 'GameController@bsheetQuiz');

Route::get('/home', 'HomeController@index')->name('home');
