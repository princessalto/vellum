<?php

namespace Page\Controllers\Resources;

use Illuminate\Http\Request;
use Page\Models\Page;
use Page\Requests\PageRequest;
use User\Models\User;

trait PageResourceApiTrait
{

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Illuminate\Http\Request $request
     * @param  int  $id
     * @return Illuminate\Http\Response
     */
    public function getEdit(Request $request, $id)
    {
        $page = Page::fintOrFail($id);

        $this->authorize('update', $page);
        return response()->json($page);
    }

    /**
     * Retrieve the resource with the parameters.
     *
     * @param  Illuminate\Http\Request $request
     * @return Illuminate\Http\Response
     */
    public function postFind(Request $request)
    {
        $searches = $request->get('search') !== 'null' && $request->get('search')
                        ? $request->get('search')
                        : $request->all();

        $onlyTrashed = $request->get('only_trashed') !== 'null' && $request->get('only_trashed')
                        ? $request->get('only_trashed')
                        : false;

        $order = $request->get('descending') === 'true' && $request->get('descending') !== 'null'
                        ? 'DESC'
                        : 'ASC';

        $sort = $request->get('sort') && $request->get('sort') !== 'null'
                        ? $request->get('sort')
                        : 'id';

        $take = $request->get('take') && $request->get('take') > 0
                        ? $request->get('take')
                        : 0;

        $resources = Page::search($searches)->orderBy($sort, $order);

        if ($onlyTrashed) {
            $resources->onlyTrashed();
        }

        $pages = $resources->paginate($take);

        return response()->json($pages);
    }

    /**
     * Retrieve list of resources.
     *
     * @param  Illuminate\Http\Request $request
     * @return Illuminate\Http\Response
     */
    public function getAll(Request $request)
    {
        // dd($request->all());
        $onlyTrashed = (bool) $request->get('only_trashed');

        $order = $request->get('descending') === 'true'
                 ? 'DESC'
                 : 'ASC';

        $searches = (bool) $request->get('search')
                    ? $request->get('search')
                    : $request->all();

        $sort = (bool) $request->get('sort')
                ? $request->get('sort')
                : 'id';

        $take = (int) $request->get('take') > 0
                ? $request->get('take')
                : 0;

        $resources = Page::search($searches)->orderBy($sort, $order);

        if ($onlyTrashed) {
            $resources->onlyTrashed();
        }

        // $pages = $take ? $resources->paginate($take) : $resources->get();
        $pages = $take ? $resources->paginate($take) : $resources->paginate(Page::count());

        // $pages->each(function ($item) {
        //     return $item->append(['author', 'created', 'modified']);
        // });

        return response()->json($pages);
    }

    /**
     * Display a listing of the trashed resource.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function getTrashed(Request $request)
    {
        $resources = Page::onlyTrashed()
            ->search($request->all())
            ->paginate();

        return response()->json($resources);
    }

    /**
     * Store a newly created resource in storage
     *
     * @param  Page\Requests\PageRequest $request
     * @return Illuminate\Http\Response
     */
    public function postStore(PageRequest $request)
    {
        $page = new Page();
        $page->title = $request->input('title');
        $page->code = $request->input('code');
        $page->feature = $request->input('feature');
        $page->body = $request->input('body');
        $page->delta = $request->input('delta');
        $page->template = $request->input('attributes')['template'] ?? 'generic';
        $page->user()->associate(User::find($request->input('user_id') ?? user()->id));
        $page->save();

        return response()->json($page->id);
    }

    /**
     * Retrieve the resource specified by the slug.
     *
     * @param  Illuminate\Http\Request $request
     * @param  string  $slug
     * @return Illuminate\Http\Response
     */
    public function getShow(Request $request, $slug = null)
    {
        $page = Page::codeOrFail($slug);

        return response()->json($page);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function putUpdate(Request $request, $id)
    {
        $page = Page::findOrFail($id);
        $page->title = $request->input('title');
        $page->code = $request->input('code');
        $page->feature = $request->input('feature');
        $page->body = $request->input('body');
        $page->delta = $request->input('delta');
        $page->template = $request->input('attributes')['template'] ?? 'generic';
        $page->user()->associate(User::find($request->input('user_id') ?? user()->id));
        $page->save();

        return response()->json($page->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteDestroy(Request $request, $id = null)
    {
        $success = Page::destroy($request->has('id') ? $request->input('id') : $id);

        return response()->json($success);
    }



    /**
     * Restore the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function postRestore(Request $request, $id = null)
    {
        $page = Page::onlyTrashed()->find($id);
        $page->exists() || $page->restore();

        if (is_array($request->input('id'))) {
            foreach ($request->input('id') as $id) {
                $page = Page::onlyTrashed()->find($id);
                $page->restore();
            }
        }

        return response()->json($page);
    }

    /**
     * Delete the specified resource from storage permanently.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteDelete(Request $request, $id = null)
    {
        $page = Page::forceDelete($id ? $id : $request->input('id'));

        return response()->json($page);
    }
}
