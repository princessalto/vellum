@extends('Theme::layouts.admin')

@section('page:header')
  @parent
  @if (isset($buttons['primary']))
    <a role="button" href="{{ $buttons['primary']['url'] }}" class="{{ $buttons['primary']['class'] ?? 'btn btn-primary' }}">
      @isset ($buttons['primary']['icon'])
        <i class="{{ $buttons['primary']['icon'] }}"></i>&nbsp;
      @endisset
      {{ @$buttons['primary']['text'] }}
    </a>
  @endif
@endsection

@section('page:content')
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quam mollitia dolorum, optio cumque explicabo sapiente ab velit eligendi nam consectetur aliquid modi temporibus voluptatum eveniet iste facere ea veniam.
      </div>
    </div>
  </div>
@endsection
