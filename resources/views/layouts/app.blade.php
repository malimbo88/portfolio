{{-- Layouts / app.blade.php --}}

<!DOCTYPE html>
<html lang="en" dir="ltr">

  {{-- Head --}}
  @include("partials.head")

  <body>

    {{-- Wrapper --}}
    <div class="main_wrapper">

      {{-- Header --}}
      @include("partials.structure.header")

      {{-- Main --}}
      <main>
        @yield('content')
      </main>
      {{-- end Main --}}

      {{-- Footer --}}
      @include("partials.structure.footer")

    </div>
    {{-- end Wrapper --}}

  </body>
</html>
