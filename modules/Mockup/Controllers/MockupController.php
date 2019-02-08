<?php

namespace Mockup\Controllers;

use Frontier\Controllers\GeneralController;
use Illuminate\Http\Request;

class MockupController extends GeneralController
{
    use Resources\MockupResourceAdminTrait;

    /**
     * The constructor of the controller.
     *
     * @param DummyFullModelClass $dummyModelClass
     * @return void
     */
    public function __contruct()
    {
        //
    }
}
