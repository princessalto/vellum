<?php

namespace Setting\Controllers;

use Catalogue\Models\Catalogue;
use Frontier\Controllers\AdminController;
use Illuminate\Http\Request;
use Setting\Models\Setting;
use Setting\Requests\SettingRequest;

class BrandingSettingController extends AdminController
{
    /**
     * Display the General Settings Form.
     *
     * @param  Illuminate\Http\Request $request
     * @return Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return view('Setting::settings.branding');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Setting\Requests\SettingRequest  $request
     * @return Illuminate\Http\Response
     */
    public function store(SettingRequest $request)
    {
        if ($request->has('site_logo')) {
            $file = $request->file('site_logo');
            $filePath = public_path();
            $originalName = "logo.png";
            $file->move($filePath, $originalName);
            $logoName = "$originalName?ts=" . date('Ymdhis');
            Setting::updateOrCreate(['key' => 'site_logo'], ['value' => $logoName]);
        }

        foreach ($request->except(['_token', 'site_logo']) as $key => $value) {
            Setting::updateOrCreate(['key' => $key], ['value' => is_array($value) ? serialize($value) : $value]);
        }

        return back();
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
        ];

        return response()->json($setting);
    }
}
