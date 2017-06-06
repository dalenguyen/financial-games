<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
  <head>
    <title>@yield('title') - Dale nguyen</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="/favicon.ico"/>

    <!--[if lte IE 8]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script><![endif]-->

    <link rel="stylesheet" href="/css/app.css">
    @yield('header_script')
    <script>
      window.Laravel = {!! json_encode([
          'csrfToken' => csrf_token(),
      ]) !!};
    </script>
  </head>
  <body>
     <div id="content">
       <div class="container-fluid">
         @include('games.balancesheet.includes._header')

         <div class="row">
             <div class="col-sm-3 nav-sidebar">
               @include('games.balancesheet.includes._sidebar')
             </div>
             <div class="col-sm-9 main-content">
               @yield('content')
             </div>
             <div class="col-sm-2">
                 <!-- @include('games.balancesheet.includes._leaderboard') -->
             </div>
         </div>
         @include('games.balancesheet.includes._footer')
     </div>
   </div>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.3.3/vue.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.3.3/vue-resource.min.js"></script>
     <script src="/js/app.js"></script>
     @yield('footer_script')
   </body>
 </html>
