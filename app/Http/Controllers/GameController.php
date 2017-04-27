<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GameController extends Controller
{
    public function bsheet(){
      return view('games.balancesheet.index');
    }
}
