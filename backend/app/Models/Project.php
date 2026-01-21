<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Model;
use MongoDB\Laravel\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Project extends Model
{
    protected $guarded = [];

    protected $appends = ['image_full_url'];

    public function getImageFullUrlAttribute(): ?string
    {
        $value = $this->attributes['image_url'] ?? null;
        return ($value && !str_starts_with($value, 'http')) 
            ? Storage::disk('public')->url($value) 
            : $value;
    }
}
