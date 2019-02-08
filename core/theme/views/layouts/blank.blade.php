@extends('Theme::layouts.master')

@section('app')
  <div class="d-flex align-items-center">
  @yield('page:content')
    </div>
@endsection

@section('footer', '')
