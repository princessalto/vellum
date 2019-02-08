<?php

namespace Mockup\Controllers\Resources;

use Catalogue\Models\Catalogue;
use Category\Models\Category;
use Illuminate\Http\Request;
use Mockup\Models\Mockup;
use Mockup\Requests\MockupRequest;
use Template\Models\Template;
use User\Models\User;

trait MockupResourceAdminTrait
{
    /**
     * Show list of resources.
     *
     * @param  Request $request
     * @return Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $resources = Mockup::search($request->all())->paginate();

        return view('Mockup::admin.index');
    }

    /**
     * Show a given mockup resource.
     *
     * @param  Request $request
     * @param  int     $id
     * @return Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $resource = Mockup::findOrFail($id);

        return view("Mockup::mockups.show")->with(compact('resource'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  Request $request
     * @return Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $templates = Template::getTemplatesFromFiles('Mockup');
        // $categories = Category::type('mockups')->select(['name', 'icon', 'id'])->get();
        // $catalogues = Catalogue::mediabox();

        return view('Mockup::admin.create')->with(compact('templates'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Mockup\Requests\MockupRequest  $request
     * @return Illuminate\Http\Response
     */
    public function store(MockupRequest $request)
    {
        $mockup = new Mockup();
        $mockup->title = $request->input('title');
        $mockup->code = $request->input('code');
        $mockup->feature = $request->input('feature');
        $mockup->body = $request->input('body');
        $mockup->delta = $request->input('delta');
        $mockup->template = $request->input('template');
        $mockup->user()->associate(User::find(user()->id));
        $mockup->category()->associate(Category::find($request->input('category_id')));
        $mockup->save();

        return back();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Illuminate\Http\Request $request
     * @param  int  $id
     * @return Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        $resource = Mockup::findOrFail($id);

        $this->authorize('update', $resource);
        // $templates = Template::getTemplatesFromFiles();
        // $categories = Category::type('mockups')->select(['name', 'icon', 'id'])->get();
        // $catalogues = Catalogue::mediabox();

        return view('Mockup::mockups.edit')->with(compact('resource'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Illuminate\Http\Request  $request
     * @param  Mockup\Models\Mockup  $mockup
     * @return Illuminate\Http\Response
     */
    public function update(MockupRequest $request, Mockup $mockup)
    {
        $mockup->title = $request->input('title');
        $mockup->code = str_slug($request->input('code'));
        $mockup->feature = $request->input('feature');
        $mockup->body = $request->input('body');
        $mockup->delta = $request->input('delta');
        $mockup->template = $request->input('template');
        $mockup->category()->associate(Category::find($request->input('category_id')));
        $mockup->save();

        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Illuminate\Http\Request  $request
     * @param  int  $id
     * @return Illuminate\Http\Response
     */
    public function destroy(Request $request, $id = null)
    {
        Mockup::destroy($request->has('id') ? $request->input('id') : $id);

        return back();
    }
}
