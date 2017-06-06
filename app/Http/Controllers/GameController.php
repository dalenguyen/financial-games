<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Progress;

class GameController extends Controller
{
    public function bsheetFinal(){
      return view('games.balancesheet.final');
    }

    public function bsheetQuiz(){
      return view('games.balancesheet.quiz');
    }

    /*
     * Show Balance Sheet Explanation
     */
    public function bsheetExplanation(){
      // AJAX request
      if(request()->ajax()){
        $user_id = request()->input('user_id');
        // Check if lesson has finished
        $progress = Progress::where('lesson', 'Explanation')
                                    ->where('user_id', $user_id)->first();

        // GET status for checked value
        if(request()->input('checkStatus')){
          return $progress->count() > 0 && $progress->percentage > 0 ? 1 : 0;
        }else{ // POST request to update Progress
          $checked = request()->input('checked');
          $lesson = request()->input('lesson');

          // If student check to finish the Explanation
          if($checked){
            // check if the progress is in the Database
            if($progress->count()){
              $progress->percentage = 25;
              $progress->save();
            }else{ // // create progress if not
              Progress::create([
                'user_id' => $user_id,
                'type'  => "Balance Sheet",
                'lesson'  => $lesson,
                'percentage'  => 25
              ]);
            }
            return 25; // when checked
          }else { // student uncheck the lesson
            if($progress->count()){
              $progress->percentage = 0;
              $progress->save();
            }
            return -25; // unwhen checked 
          }
        }
      }

      return view('games.balancesheet.explanation');
    }

    public function bsheetLineItems(){
      return view('games.balancesheet.line-items');
    }
}
