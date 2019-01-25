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
    Route::post('settings/store', 'SettingController@store')->name('settings.store');


    # Branding
    Route::post('branding', 'BrandingSettingController@store')->name('settings.branding.store');

    # Preferences
});

// v2
// ...
