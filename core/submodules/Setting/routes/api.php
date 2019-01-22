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
    // Route::post('settings/store', 'SettingController@store')->name('settings.store');
    Route::post('store', 'SettingController@store')->name('settings.store');
});

// v2
// ...
