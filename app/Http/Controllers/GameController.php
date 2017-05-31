<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GameController extends Controller
{
    public function bsheet(){
      return view('games.balancesheet.index');
    }

    public function bsheetQuiz(){
      return view('games.balancesheet.quiz');
    }

    public function bsheetExplanation(){
      return view('games.balancesheet.explanation');
    }

    public function bsheetLineItems(){
      return view('games.balancesheet.line-items');
    }
}
