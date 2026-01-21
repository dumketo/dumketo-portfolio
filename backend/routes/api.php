<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/portfolio', [\App\Http\Controllers\Api\PortfolioController::class, 'index']);
Route::post('/contact', [\App\Http\Controllers\Api\ContactController::class, 'store']);
