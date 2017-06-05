<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Progress extends Model
{

      /**
       * The attributes that are mass assignable.
       *
       * @var array
       */
      protected $fillable = [
          'user_id', 'percentage', 'type'
      ];

    /**
     * Get the user that owns this percentage.
     */
      public function user(){
        return $this->belongsTo('App\User');
      }    
}
