<?php

use App\Http\Controllers\BusinessApiController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'app' => 'LINDBERG',
        'status' => 'ready',
        'message' => 'Business starter API is running.',
        'endpoints' => [
            '/api/dashboard',
            '/api/customers',
            '/api/leads',
            '/api/opportunities',
            '/api/tasks',
            '/api/search?q=',
        ],
    ]);
});

Route::prefix('api')->group(function () {
    Route::get('/dashboard', [BusinessApiController::class, 'dashboard']);
    Route::get('/customers', [BusinessApiController::class, 'customers']);
    Route::get('/leads', [BusinessApiController::class, 'leads']);
    Route::get('/opportunities', [BusinessApiController::class, 'opportunities']);
    Route::get('/tasks', [BusinessApiController::class, 'tasks']);
    Route::get('/search', [BusinessApiController::class, 'search']);
});
