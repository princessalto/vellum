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
});

// v2
// ...
