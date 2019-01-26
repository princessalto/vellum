<?php

namespace Setting\Controllers\Api;

use Illuminate\Http\Request;
use Pluma\Controllers\ApiController;
use Setting\Models\General;
use Setting\Models\Setting;
use Setting\Requests\SettingRequest;

class SettingController extends ApiController
{
    /**
     * Display the General Settings Form.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function getGeneralForm(Request $request)
    {
        return view('Theme::settings.general');
    }

    /**
     * Display the Social Settings Form.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function getSocialForm(Request $request)
    {
        $setting = Setting::where('key', 'social_links')->first();
        $resources = $setting ? unserialize($setting->value) : [];

        return view('Theme::settings.social')->with(compact('resources'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Setting\Requests\SettingRequest  $request
     * @return Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        foreach ($request->except(['_token', 'user_id']) as $key => $value) {
            Setting::updateOrCreate([
                'key' => $key,
            ], [
                'value' => is_array($value) ? serialize($value) : $value,
                'user_id' => $request->input('user_id'),
            ]);
        }

        return response()->json('success');
    }
}
