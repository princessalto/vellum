<?php

use Category\Models\Category;
use Template\Models\Template;

/**
 * -----------------------------------------------------------------------------
 * API Route
 * -----------------------------------------------------------------------------
 *
 * Handles API routes.
 *
 */

Route::group(['prefix' => 'v1'], function () {
    Route::get('pages/all', 'PageController@getAll')->name('pages.all');
    Route::get('pages/trashed', 'PageController@getTrashed')->name('pages.trashed');
    Route::get('pages/find', 'PageController@postFind')->name('pages.find');
    Route::get('pages/search', 'PageController@postFind')->name('pages.search');
    Route::get('pages/{page}', 'PageController@getShow')->name('pages.show');
    Route::get('pages/edit/{page}', 'PageController@getEdit')->name('pages.edit');
    Route::get('pages/restore/{page}', 'PageController@postRestore')->name('pages.restore');

    Route::post('pages/save', 'PageController@postStore')->name('pages.save');
    Route::post('pages/store', 'PageController@postStore')->name('pages.store');
    Route::post('pages/update/{page}', 'PageController@putUpdate')->name('pages.update');

    Route::delete('pages/destroy/{page}', 'PageController@deleteDestroy')->name('pages.destroy');
    Route::delete('pages/delete/{page}', 'PageController@deleteDelete')->name('pages.delete');

    // Attributes
    # Template
    Route::post('pages/templates', function () {
        $data = Template::getTemplatesFromFiles('Page');

        return response()->json($data);
    })->name('pages.templates');

    # Tags
    Route::post('pages/tags', function () {
        $data = Category::type('pages')
                        ->select(['name', 'icon', 'id'])
                        ->get();

        return response()->json($data);
    })->name('pages.tags');
});

// v2
// ...
