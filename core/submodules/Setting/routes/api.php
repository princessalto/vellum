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
    Route::post('settings/store', 'Api\SettingController@store')->name('settings.store');


    # Branding
    Route::post('branding', 'BrandingSettingController@store')->name('settings.branding.store');
    Route::get('settings/branding', 'BrandingSettingController@getPreferences')->name('settings.branding.getPreferences');

    # Preferences
});

// v2
// ...
