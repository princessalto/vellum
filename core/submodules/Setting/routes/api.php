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

    # General

    # Display
    Route::get('settings/display', 'DisplaySettingController@getDisplay')->name('settings.display.getDisplay');

    #Email
    Route::get('settings/email', 'EmailSettingController@getEmail')->name('settings.email.getEmail');
});

// v2
// ...
