<?php

namespace Setting\Controllers;

use Blacksmith\Support\Facades\Blacksmith;
use Illuminate\Http\Request;
use Setting\Controllers\SettingController;
use Setting\Models\Setting;
use Setting\Requests\SettingRequest;

class PreferenceSettingController extends SettingController
{
    /**
     * Display a listing of the resource.
     *
     * @param  Request $request
     * @return Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return view('Setting::settings.preferences');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Illuminate\Http\Request $request
     * @param  int  $id
     * @return Illuminate\Http\Response
     */
    public function getPreferences(Request $request)
    {
        // $setting = Setting::findOrFail($id);
        $setting = [
            'date_format' => settings('date_format'),
            'items_per_page' => settings('items_per_page'),
            'center_main_content' => settings('center_main_content'),
        ];

        return response()->json($setting);
    }
}
