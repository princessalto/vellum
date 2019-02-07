<?php


/**
 * -----------------------------------------------------------------------------
 * API Route
 * -----------------------------------------------------------------------------
 *
 * Handles API routes.
 *
 */

Route::group(['prefix' => 'v1'], function () {
    Route::get('themes/all', 'ThemeController@getAll')->name('themes.all');
    Route::get('themes/active', 'ThemeController@getActive')->name('themes.active');
});

// v2
// ...
