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
    Route::get('menus/all', 'MenuController@getAll')->name('menus.all');
});

// v2
// ...
