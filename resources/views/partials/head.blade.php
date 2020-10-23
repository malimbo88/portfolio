{{-- Partials / head.blade.php --}}

<head>
    <meta charset="utf-8">

    {{-- Title --}}
    <title>
      @yield("title")
    </title>
    {{-- Title --}}

    {{-- Viewport --}}
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    {{-- JavaScript --}}
    <script type="text/javascript" src="{{ asset("js/app.js") }}" defer></script>
</head>
