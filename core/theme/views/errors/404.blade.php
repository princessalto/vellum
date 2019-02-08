@extends('Theme::layouts.blank')

@section('head:title', '404 Page Not Found')

@section('page:content')
  <div class="page">
    <div class="page-content">
       <div class="container">
        <div class="row align-items-center justify-content-center">
          {{-- illustration --}}
          <div class="col-12 col-md-5 offset-xl-2 offset-md-1 order-md-2 mb-5 mb-md-0">
            <div class="text-center">
              <img class="img-fluid" src="{{ theme('dist/img/illustrations/lost.svg') }}" alt="">
              </div>
          </div>
          {{-- illustration --}}

          <div class="col-12 col-md-6 col-xl-4 order-md-1 mb-5">
            <div class="text-center">
              <div class="my-5">
                <h6 class="text-uppercase text-muted">
                  <strong>{{ __("404 Error") }}</strong>
                </h6>
              </div>
              <h3><strong>{{ __("There's no page here 😭") }}</strong></h3>
              <h5 class="text-muted">
                <small>{{ __('Looks like you ended up here by accident?') }}</small>
              </h5>
              <div class="mt-5">
                <a class="btn btn-primary" href="{{ home() }}">{{ __('Return to your dashboard') }}</a>
              </div>

              {{-- <h1 class="display-1 page-title-primary mb-3">{{ __('Oops!') }}</h1>
              <p class="h4 text-muted font-weight-normal">{{ __($error['description']) }}</p>
              <p class="text-muted">{{ __('Error Code: 404') }}</p>
              <p>{{ __("Here are some helpful links instead:") }}</p>
              <p class="mb-0"><a href="{{ home() }}">{{ __('Home') }}</a></p>
              <p class="mb-0"><a href="{{ route('login.show') }}">{{ __('Sign in') }}</a></p> --}}
              @include('Theme::errors.superadminsonly')
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
@endsection

