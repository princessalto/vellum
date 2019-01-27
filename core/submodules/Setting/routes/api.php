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
    Route::get('settings/branding', 'BrandingSettingController@getBranding')->name('settings.branding.getBranding');

    # Preferences
    Route::get('settings/preferences', 'PreferenceSettingController@getPreferences')->name('settings.preferences.getPreferences');
});

// v2
// ...
