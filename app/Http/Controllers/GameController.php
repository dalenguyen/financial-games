<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Progress;

class GameController extends Controller
{
    /*
     * Show Balance Sheet Tutorial
     */
    public function bsheet(){
      return view('games.balancesheet.index');
    }

    /*
     * Show Balance Sheet Final
     */
    public function bsheetFinal(){
      // AJAX request
      if(request()->ajax()){
        return $this->updateProgress('Final');
      }

      return view('games.balancesheet.final');
    }

    /*
     * Show Balance Sheet Quiz
     */
    public function bsheetQuiz(){
      // AJAX request
      if(request()->ajax()){
        return $this->updateProgress('Quiz');
      }

      return view('games.balancesheet.quiz');
    }

    /*
     * Show Balance Sheet Explanation
     */
    public function bsheetExplanation(){
      // AJAX request
      if(request()->ajax()){
        return $this->updateProgress('Explanation');
      }

      return view('games.balancesheet.explanation');
    }

    /*
     * Show Balance Sheet Line Items
     */
    public function bsheetLineItems(){
      // AJAX request
      if(request()->ajax()){
        return $this->updateProgress('Line Items');
      }

      return view('games.balancesheet.line-items');
    }

    /*
     * Update the progress status on each lesson
     */
    private function updateProgress($lesson){

      $user_id = request()->input('user_id');
      // Check if lesson has finished
      $progress = Progress::where('lesson', $lesson)
                                  ->where('user_id', $user_id)->first();

      // GET status for checked value
      if(request()->input('checkStatus')){
        return $progress !== null && $progress->count() > 0 && $progress->percentage > 0 ? 1 : 0;
      }else{ // POST request to update Progress
        $checked = request()->input('checked');

        // If student check to finish the Explanation
        if($checked){
          // check if the progress is in the Database
          if($progress !== null && $progress->count()){
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
}
