<?php

include core_path('routes/fuzzy.php');

Route::namespace('Pluma\Controllers')->group(function () {
    // Route::get('login', 'AppController@index');
    Route::get('{any}', 'AppController@index')->where('any', '.*');
});
