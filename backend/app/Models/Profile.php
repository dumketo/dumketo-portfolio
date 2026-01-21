<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Model;
use MongoDB\Laravel\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Profile extends Model
{
    protected $guarded = [];

    protected $appends = ['resume_full_url', 'image_full_url'];

    public function getResumeFullUrlAttribute(): ?string
    {
        $value = $this->attributes['resume_url'] ?? null;
        return ($value && !str_starts_with($value, 'http')) 
            ? Storage::disk('public')->url($value) 
            : $value;
    }

    public function getImageFullUrlAttribute(): ?string
    {
        $value = $this->attributes['image'] ?? null;
        return ($value && !str_starts_with($value, 'http')) 
            ? Storage::disk('public')->url($value) 
            : $value;
    }
}
