<?php

namespace Theme\Controllers\Resources;

use Illuminate\Http\Request;
use Theme\Models\Theme;
use Theme\Requests\ThemeRequest;

trait ThemeResourceApiTrait
{
    /**
     * Retrieve list of resources.
     *
     * @param  Illuminate\Http\Request $request
     * @return Illuminate\Http\Response
     */
    public function getAll(Request $request)
    {
        return response()->json(Theme::theme($theme));
    }
}
