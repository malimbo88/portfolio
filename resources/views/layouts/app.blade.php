{{-- Layouts / app.blade.php --}}

<!DOCTYPE html>
<html lang="en" dir="ltr">

  {{-- Head --}}
  @include("partials.head")

  <body>

    {{-- Wrapper --}}
    <div class="main_wrapper d-flex flex-column justify-space-between">

      {{-- Header --}}
      @include("partials.structure.header")

      {{-- Main --}}
      <main class="flex-grow-1">
        @yield('content')
      </main>
      {{-- end Main --}}

      {{-- Footer --}}
      @include("partials.structure.footer")

    </div>
    {{-- end Wrapper --}}

  </body>
</html>
