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

    {{-- Google fonts --}}
    {{-- -> Courier prime --}}
    <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

    {{-- -> Assistant --}}
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">

    {{-- -> M-plus 1p --}}
    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    {{-- JavaScript --}}
    <script type="text/javascript" src="{{ asset("js/app.js") }}" defer></script>
</head>
