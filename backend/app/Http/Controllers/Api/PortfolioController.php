<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        return response()->json([
            'profile' => \App\Models\Profile::first(),
            'skills' => \App\Models\Skill::orderBy('sort', 'asc')->get(),
            'projects' => \App\Models\Project::orderBy('sort_order', 'asc')->get(),
            'experiences' => \App\Models\Experience::latest()->get(),
        ]);
    }
}
