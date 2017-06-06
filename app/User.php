<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Progress;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'student_number','email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Get the the process of the user.
     */
    public function progress(){
      return $this->hasOne('App\Progress');
    }

    /**
     * Get the the percentage value.
     */
    public function getProgress(){
      $progresses = Progress::where('user_id', $this->id)->pluck('percentage')->toArray();      
      return array_sum($progresses);
    }
}
