{{-- Partials / structure / header.blade.php --}}

{{-- Header --}}
<header>

  {{-- Ui interface --}}
  <div class="ui">

    {{-- Top ui --}}
    <div class="top_ui d-flex justify-content-between align-items-end">

      {{-- Ui info --}}
      <div class="ui_info">
        <span>Info sul mio portfolio</span>
      </div>
      {{-- end Ui info --}}

      {{-- Square colors --}}
      <div class="colors_palette d-flex justify-content-end">
        <span class="square color_1"></span>
        <span class="square color_2"></span>
        <span class="square color_3"></span>
        <span class="square color_4"></span>
        <span class="square color_5"></span>
      </div>
      {{-- Square colors --}}

    </div>
    {{-- end Top ui --}}

    {{-- Crop marks --}}
    <div class="crop_marks d-flex justify-content-between">

      {{-- Left crop mark --}}
      <div class="corner left d-flex justify-content-end align-items-center">
        <span id="animation" class="crop_icon glitch glitch_top">+</span>
        <span id="animation" class="crop_icon glitch glitch_bottom">+</span>
        <span id="animation" class="crop_icon main_icon">+</span>
      </div>
      {{-- end Left crop mark --}}

      {{-- Right crop mark --}}
      <div class="corner right d-flex justify-content-start align-items-center">
        <span id="animation" class="crop_icon glitch glitch_top">+</span>
        <span id="animation" class="crop_icon glitch glitch_bottom">+</span>
        <span id="animation" class="crop_icon main_icon">+</span>
      </div>
      {{-- end Right crop mark --}}
      
    </div>
    {{-- end Crop marks --}}

  </div>
  {{-- end Ui interface --}}

</header>
{{-- end Header --}}
