{{-- Partials / structure / footer.blade.php --}}

{{-- Footer --}}
<footer>

  {{-- Ui interface --}}
  <div class="ui">

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

    {{-- Bottom ui --}}
    <div class="bottom_ui d-flex justify-content-between align-items-start">

      {{-- Square colors --}}
      <div class="colors_palette d-flex justify-content-start">
        <span class="square color_1"></span>
        <span class="square color_2"></span>
        <span class="square color_3"></span>
        <span class="square color_4"></span>
        <span class="square color_5"></span>
      </div>
      {{-- end Square colors --}}

      {{-- Ui info --}}
      <div class="ui_info">
        <ul class="socials_list d-flex">

          {{-- Git --}}
          <li class="git">
            <a href="https://github.com/malimbo88">
              <i class="fab fa-github"></i>
            </a>
          </li>
          {{-- Linkedin --}}
          <li class="linkedin">
            <a href="https://www.linkedin.com/in/nicola-valente-339a0010a/">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          {{-- Behance --}}
          <li class="linkedin">
            <a href="https://www.behance.net/malimbo">
              <i class="fab fa-behance"></i>
            </a>
          </li>
          {{-- Mail --}}
          <li class="linkedin">
            <a href="https://www.gmail.com">
              <i class="fas fa-at"></i>
            </a>
          </li>
        </ul>
      </div>
      {{-- end Ui info --}}

    </div>
    {{-- end Bottom ui --}}

  </div>
  {{-- end Ui interface --}}

</footer>
{{-- end Footer --}}
