<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
  <head>
    <title>@yield('title') - Dale nguyen</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/favicon.ico"/>

    <!--[if lte IE 8]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script><![endif]-->

    <link rel="stylesheet" href="/public/css/app.css">
    @yield('header_script')
  </head>
  <body>
     <div id="content">
         @yield('content')
     </div>

     <script src="/public/js/app.js"></script>
   </body>
 </html>
