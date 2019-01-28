<?php

namespace Setting\Controllers;

use Frontier\Controllers\AdminController;
use Illuminate\Http\Request;
use Setting\Models\Setting;
use Setting\Requests\SettingRequest;

class EmailSettingController extends AdminController
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return view('Setting::settings.email');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Illuminate\Http\Request $request
     * @param  int  $id
     * @return Illuminate\Http\Response
     */
    public function getEmail(Request $request)
    {
        $setting = [
            'mail_from_name' => settings('mail_from_name'),
            'mail_from_address' => settings('mail_from_address'),
            'mail_driver' => settings('mail_driver'),
            'mail_host' => settings('mail_host'),
            'mail_port' => settings('mail_port'),
            'mail_username' => settings('mail_username'),
            'mail_password' => settings('mail_password'),
            'mail_encryption' => settings('mail_encryption'),
        ];

        return response()->json($setting);
    }
}
