<?php

namespace Menu\Controllers\Resources;

use Illuminate\Http\Request;
use Menu\Models\Menu;
use Menu\Requests\MenuRequest;

trait MenuResourceApiTrait
{
    /**
     * Retrieve list of resources.
     *
     * @param  Illuminate\Http\Request $request
     * @return Illuminate\Http\Response
     */
    public function getAll(Request $request)
    {
        return response()->json(Menu::locations());
    }
}
