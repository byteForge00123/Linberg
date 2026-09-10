<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Opportunity extends Model
{
    protected $fillable = [
        'title',
        'customer_name',
        'company',
        'value',
        'stage',
        'probability',
        'expected_close_date',
        'assigned_to',
        'notes',
    ];
}
