<?php

/**
 *------------------------------------------------------------------------------
 * Admin Mockup Route
 *------------------------------------------------------------------------------
 *
 * Handles the admin routes.
 *
 */

// Category routes
// Route::resource('mockups/categories', 'CategoryController', [
//         'except' => ['show', 'create'],
//         'as' => 'mockups',
//     ]);

Route::middleware(['breadcrumbs:\Mockup\Models\Mockup'])->group(function () {
    # Owned resource
    Route::get('mockups/owned', 'MockupController@owned')->name('mockups.owned');

    # SoftDelete routes
    Route::softDeletes('mockups', 'MockupController');

    # Main resource
    Route::resource('mockups', 'MockupController');
});
