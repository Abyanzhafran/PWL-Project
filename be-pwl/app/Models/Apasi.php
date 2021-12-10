<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Apasi extends Model
{
    // use HasFactory;

    protected $table = 'tbl_homepage';
    protected $fillable = ['name', 'job'];
}
