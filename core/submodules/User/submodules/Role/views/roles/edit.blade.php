@extends('Theme::layouts.admin')

@section('head:title', __('Edit Role'))
@section('page:title', __('Edit Role'))

@section('page:back')
  <a href="{{ route('roles.index') }}" role="button" class="btn btn-icon"><i class="mdi mdi-arrow-left"></i></a>
@endsection

@section('page:content')
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8">
        <form class="card" action="{{ route('roles.update', $resource->id) }}" method="POST">
          @csrf
          @method('PUT')

          <div class="card-body">
            @field('input', ['name' => 'name', 'attr' => 'data-slugger=[name=code]', 'value' => $resource->name])

            @field('input', ['name' => 'code', 'value' => $resource->code])

            @field('textarea', ['name' => 'description', 'value' => $resource->description])

            @field('checkbox', [
              'label' => __('Throw 404 instead of 403 error'),
              'text' => __('(Recommended) Show the "Page not Found" page on restricted pages.'),
              'name' => 'return_404_on_403', 'checked' => $resource->is_404, 'value' => 1,
              'hint' => __('Instead of showing the 403 page to a restricted page, show the 404 page instead. This is ideal in hiding the restricted pages.'),
            ])

            @field('treeview', [
              'name' => 'permissions[]',
              'collapsed' => true,
              'label' => __('Permissions'),
              'value' => $resource->permissions->pluck('id')->toArray(),
              'items' => $repository->permissions(),
              'key' => 'code',
              'field' => 'permissions',
              'text' => 'description',
            ])
          </div>

          <div class="card-footer border-0 text-right">
            @submit('Update')
          </div>
        </form>
      </div>
    </div>
  </div>
@endsection
