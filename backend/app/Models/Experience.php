<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Model;
use MongoDB\Laravel\Eloquent\Model;

class Experience extends Model
{
    protected $guarded = [];

    protected $casts = [
        'description' => 'array',
    ];
}
