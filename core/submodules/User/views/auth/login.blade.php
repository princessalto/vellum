@extends('Theme::layouts.auth')

@section('content')
  <div class="container">
    <div class="row align-items-center justify-content-center">
      {{-- illustration --}}
      <div class="col-12 col-md-6 offset-xl-2 offset-md-1 order-md-2 mb-5 mb-md-0">
        <div class="text-center">
          <img class="img-fluid" src="{{ theme('dist/img/illustrations/login.svg') }}" alt="">
          </div>
      </div>
      {{-- illustration --}}

      <div class="col-12 col-md-5 col-xl-4 order-md-1 mb-5">
        {{-- <div class="card-body card-login">
          @include('Theme::partials.brand', ['color' => 'text-primary'])
        </div> --}}
        <form class="card-login" action="{{ route('login.login') }}" method="POST">
          {{ csrf_field() }}
          <div class="p-6">
            {{-- <p class="lead mt-1">{{ __("Sign in with your {$application->site->title} account") }}</p> --}}
            <div class="text-center p-5">
              <h2 class="mt-1"><strong>{{ __("Sign In") }}</strong></h2>
              <p class="text-muted">{{ __("Sign in with your {$application->site->title} account") }}</p>
            </div>

            @field('input', ['name' => 'username', 'placeholder' => 'name@address.com', 'label' => __('Email or username')])

            @field('input', ['type' => 'password', 'placeholder' => 'Enter your password', 'name' => 'password', 'label' => __('Password')])

            <div class="form-footer">
              @field('submit', ['label' => __('Sign in'), 'class' => 'btn btn-primary btn-block'])
            </div>

            {{-- <div class="form-group mt-2 mb-5">
              @field('checkbox', ['name' => 'remember', 'checked' => true, 'value' => 1, 'label' => __('Remember me')])
            </div> --}}

            <div class="text-left text-muted small mt-1">
              <small>{{ __("Don't have account yet?") }} <a href="{{ route('register.show') }}">{{ __('Sign up') }}</a></small>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
@endsection
