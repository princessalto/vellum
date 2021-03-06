<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  @stack('before:meta')
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Language" content="{{ app()->getLocale() }}">
  <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
  <title>
    @section('head:title')
      {{ $application->page->title }}
    @show
    @section('head:subtitle')
      {{ $application->page->subtitle }}
    @show
  </title>
  {{-- <base href="{{ url('/') }}"> --}}
  <meta name="description" content="{{ __(@$application->head->description) }}">
  <!-- CSRF Token -->
  @stack('tokens')
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="_token" content="{{ csrf_token() }}">
    <meta name="base-url" content="{{ url('/') }}">
  @show
  <!-- Add to homescreen for Chrome on Android -->
  <meta name="mobile-web-app-capable" content="yes">
  <!-- Favicon -->
  <link rel="apple-touch-icon" sizes="180x180" href="{{ theme('favicons/apple-touch-icon.png') }}">
  <link rel="icon" type="image/png" sizes="32x32" href="{{ theme('favicons/favicon-32x32.png') }}">
  <link rel="icon" type="image/png" sizes="16x16" href="{{ theme('favicons/favicon-16x16.png') }}">
  <link rel="manifest" href="{{ theme('favicons/manifest.json') }}">
  <link rel="mask-icon" color="{{ settings('site_theme_color', '#3984e8') }}" href="{{ theme('favicons/safari-pinned-tab.svg') }}">
  <meta name="theme-color" content="{{ settings('site_theme_color', '#3984e8') }}">
  @stack('seo')
    <!-- SEO: If your mobile URL is different from the desktop URL, add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones -->
    <!-- <link rel="canonical" href="{{ url('/') }}"> -->
  @show
  @stack('after:meta')
  @stack('fonts')
    {{-- Display the links specified in config/stylesheets.php --}}
    {{-- TODO: do something about loading fonts --}}
    {{-- {!! font_link_tags('stylesheets') !!} --}}
  @show
  @stack('before:css')
    <link rel="preload" href="{{ theme('dist/vendor.min.css') }}?v={{ app()->environment() === 'development' ? date('hi') : $application->version }}" as="style">
    <link rel="preload" href="{{ theme('dist/vendor.min.js') }}?v={{ app()->environment() === 'development' ? date('hi') : $application->version }}" as="script">
    <link rel="preload" href="{{ theme('dist/app.min.css') }}?v={{ app()->environment() === 'development' ? date('hi') : $application->version }}" as="style">
    <link rel="preload" href="{{ theme('dist/app.min.js') }}?v={{ app()->environment() === 'development' ? date('hi') : $application->version }}" as="script">
  @show
  <!-- css -->
  @stack('css')
    <link rel="stylesheet" type="text/css" href="{{ theme('dist/vendor.min.css') }}?v={{ app()->environment() === 'development' ? date('hi') : $application->version }}">
    <link rel="stylesheet" type="text/css" href="{{ theme('dist/fonts.min.css') }}?v={{ app()->environment() === 'development' ? date('hi') : $application->version }}">
    <link rel="stylesheet" type="text/css" href="{{ theme('dist/app.min.css') }}?v={{ app()->environment() === 'development' ? date('hi') : $application->version }}">
  @show
  <!-- css -->
  @stack('after:css')
</head>
<body>
  @stack('noscript')
    @include('Theme::partials.noscript')
  @show
