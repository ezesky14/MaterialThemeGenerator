export const theme = `
$cdk-z-index-overlay-container: 1000;
$cdk-z-index-overlay: 1000;
$cdk-z-index-overlay-backdrop: 1000;
$cdk-overlay-dark-backdrop-background: rgba(0, 0, 0, 0.32);


$backdrop-animation-duration: 400ms !default;
$backdrop-animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1) !default;


@mixin cdk-overlay() {
  .cdk-overlay-container, .cdk-global-overlay-wrapper {
    pointer-events: none;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .cdk-overlay-container {
    position: fixed;
    z-index: $cdk-z-index-overlay-container;
    &:empty {
      display: none;
    }
  }

  .cdk-global-overlay-wrapper {
    display: flex;
    position: absolute;
    z-index: $cdk-z-index-overlay;
  }

  .cdk-overlay-pane {
    position: absolute;
    pointer-events: auto;
    box-sizing: border-box;
    z-index: $cdk-z-index-overlay;
    display: flex;
    max-width: 100%;
    max-height: 100%;
  }

  .cdk-overlay-backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: $cdk-z-index-overlay-backdrop;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;
    transition: opacity $backdrop-animation-duration $backdrop-animation-timing-function;
    opacity: 0;

    &.cdk-overlay-backdrop-showing {
      opacity: 1;
      @media screen and (-ms-high-contrast: active) {
        opacity: 0.6;
      }
    }
  }

  .cdk-overlay-dark-backdrop {
    background: $cdk-overlay-dark-backdrop-background;
  }

  .cdk-overlay-transparent-backdrop {
    &, &.cdk-overlay-backdrop-showing {
      opacity: 0;
    }
  }

  .cdk-overlay-connected-position-bounding-box {
    position: absolute;
    z-index: $cdk-z-index-overlay;
    display: flex;
    flex-direction: column;
    min-width: 1px;
    min-height: 1px;
  }

  .cdk-global-scrollblock {
    position: fixed;
    width: 100%;
    overflow-y: scroll;
  }
}

@mixin cdk-a11y {
  .cdk-visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    outline: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
}

@mixin cdk-high-contrast($target: active) {
  @media screen and (-ms-high-contrast: $target) {
    @content;
  }
}

@mixin cdk-text-field {
  @keyframes cdk-text-field-autofill-start {/*!*/}
  @keyframes cdk-text-field-autofill-end {/*!*/}

  .cdk-text-field-autofill-monitored:-webkit-autofill {
    animation-name: cdk-text-field-autofill-start;
  }

  .cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
    animation-name: cdk-text-field-autofill-end;
  }

  textarea.cdk-textarea-autosize {
    resize: none;
  }

  textarea.cdk-textarea-autosize-measuring {
    height: auto !important;
    overflow: hidden !important;


    padding: 2px 0 !important;
    box-sizing: content-box !important;
  }
}

$cdk-text-field-autofill-color-frame-count: 0;

@mixin cdk-text-field-autofill-color($background, $foreground:'') {
  @keyframes cdk-text-field-autofill-color-#{$cdk-text-field-autofill-color-frame-count} {
    to {
      background: $background;
      @if $foreground != '' { color: $foreground; }
    }
  }

  &:-webkit-autofill {
    animation-name: cdk-text-field-autofill-color-#{$cdk-text-field-autofill-color-frame-count};
    animation-fill-mode: both;
  }

  &.cdk-text-field-autofill-monitored:-webkit-autofill {
    animation-name: cdk-text-field-autofill-start,
                    cdk-text-field-autofill-color-#{$cdk-text-field-autofill-color-frame-count};
  }

  $cdk-text-field-autofill-color-frame-count:
      $cdk-text-field-autofill-color-frame-count + 1 !global;
}

$mat-xsmall: 'max-width: 599px';
$mat-small: 'max-width: 959px';
$z-index-fab: 20 !default;
$z-index-drawer: 100 !default;
$pi: 3.14159265;
$mat-toggle-padding: 8px !default;
$mat-toggle-size: 20px !default;
$mat-linear-out-slow-in-timing-function: cubic-bezier(0, 0, 0.2, 0.1) !default;
$mat-fast-out-slow-in-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !default;
$mat-fast-out-linear-in-timing-function: cubic-bezier(0.4, 0, 1, 1) !default;
$ease-in-out-curve-function: cubic-bezier(0.35, 0, 0.25, 1) !default;
$swift-ease-out-duration: 400ms !default;
$swift-ease-out-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1) !default;
$swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;
$swift-ease-in-duration: 300ms !default;
$swift-ease-in-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2) !default;
$swift-ease-in: all $swift-ease-in-duration $swift-ease-in-timing-function !default;
$swift-ease-in-out-duration: 500ms !default;
$swift-ease-in-out-timing-function: $ease-in-out-curve-function !default;
$swift-ease-in-out: all $swift-ease-in-out-duration $swift-ease-in-out-timing-function !default;
$swift-linear-duration: 80ms !default;
$swift-linear-timing-function: linear !default;
$swift-linear: all $swift-linear-duration $swift-linear-timing-function !default;

@function _get-umbra-map($color, $opacity) {
  @return (
    0: '0px 0px 0px 0px #{rgba($color, $opacity * 0.2)}',
    1: '0px 2px 1px -1px #{rgba($color, $opacity * 0.2)}',
    2: '0px 3px 1px -2px #{rgba($color, $opacity * 0.2)}',
    3: '0px 3px 3px -2px #{rgba($color, $opacity * 0.2)}',
    4: '0px 2px 4px -1px #{rgba($color, $opacity * 0.2)}',
    5: '0px 3px 5px -1px #{rgba($color, $opacity * 0.2)}',
    6: '0px 3px 5px -1px #{rgba($color, $opacity * 0.2)}',
    7: '0px 4px 5px -2px #{rgba($color, $opacity * 0.2)}',
    8: '0px 5px 5px -3px #{rgba($color, $opacity * 0.2)}',
    9: '0px 5px 6px -3px #{rgba($color, $opacity * 0.2)}',
    10: '0px 6px 6px -3px #{rgba($color, $opacity * 0.2)}',
    11: '0px 6px 7px -4px #{rgba($color, $opacity * 0.2)}',
    12: '0px 7px 8px -4px #{rgba($color, $opacity * 0.2)}',
    13: '0px 7px 8px -4px #{rgba($color, $opacity * 0.2)}',
    14: '0px 7px 9px -4px #{rgba($color, $opacity * 0.2)}',
    15: '0px 8px 9px -5px #{rgba($color, $opacity * 0.2)}',
    16: '0px 8px 10px -5px #{rgba($color, $opacity * 0.2)}',
    17: '0px 8px 11px -5px #{rgba($color, $opacity * 0.2)}',
    18: '0px 9px 11px -5px #{rgba($color, $opacity * 0.2)}',
    19: '0px 9px 12px -6px #{rgba($color, $opacity * 0.2)}',
    20: '0px 10px 13px -6px #{rgba($color, $opacity * 0.2)}',
    21: '0px 10px 13px -6px #{rgba($color, $opacity * 0.2)}',
    22: '0px 10px 14px -6px #{rgba($color, $opacity * 0.2)}',
    23: '0px 11px 14px -7px #{rgba($color, $opacity * 0.2)}',
    24: '0px 11px 15px -7px #{rgba($color, $opacity * 0.2)}'
  );
}

@function _get-penumbra-map($color, $opacity) {
  @return (
    0: '0px 0px 0px 0px #{rgba($color, $opacity * 0.14)}',
    1: '0px 1px 1px 0px #{rgba($color, $opacity * 0.14)}',
    2: '0px 2px 2px 0px #{rgba($color, $opacity * 0.14)}',
    3: '0px 3px 4px 0px #{rgba($color, $opacity * 0.14)}',
    4: '0px 4px 5px 0px #{rgba($color, $opacity * 0.14)}',
    5: '0px 5px 8px 0px #{rgba($color, $opacity * 0.14)}',
    6: '0px 6px 10px 0px #{rgba($color, $opacity * 0.14)}',
    7: '0px 7px 10px 1px #{rgba($color, $opacity * 0.14)}',
    8: '0px 8px 10px 1px #{rgba($color, $opacity * 0.14)}',
    9: '0px 9px 12px 1px #{rgba($color, $opacity * 0.14)}',
    10: '0px 10px 14px 1px #{rgba($color, $opacity * 0.14)}',
    11: '0px 11px 15px 1px #{rgba($color, $opacity * 0.14)}',
    12: '0px 12px 17px 2px #{rgba($color, $opacity * 0.14)}',
    13: '0px 13px 19px 2px #{rgba($color, $opacity * 0.14)}',
    14: '0px 14px 21px 2px #{rgba($color, $opacity * 0.14)}',
    15: '0px 15px 22px 2px #{rgba($color, $opacity * 0.14)}',
    16: '0px 16px 24px 2px #{rgba($color, $opacity * 0.14)}',
    17: '0px 17px 26px 2px #{rgba($color, $opacity * 0.14)}',
    18: '0px 18px 28px 2px #{rgba($color, $opacity * 0.14)}',
    19: '0px 19px 29px 2px #{rgba($color, $opacity * 0.14)}',
    20: '0px 20px 31px 3px #{rgba($color, $opacity * 0.14)}',
    21: '0px 21px 33px 3px #{rgba($color, $opacity * 0.14)}',
    22: '0px 22px 35px 3px #{rgba($color, $opacity * 0.14)}',
    23: '0px 23px 36px 3px #{rgba($color, $opacity * 0.14)}',
    24: '0px 24px 38px 3px #{rgba($color, $opacity * 0.14)}'
  );
}

@function _get-ambient-map($color, $opacity) {
  @return (
    0: '0px 0px 0px 0px #{rgba($color, $opacity * 0.12)}',
    1: '0px 1px 3px 0px #{rgba($color, $opacity * 0.12)}',
    2: '0px 1px 5px 0px #{rgba($color, $opacity * 0.12)}',
    3: '0px 1px 8px 0px #{rgba($color, $opacity * 0.12)}',
    4: '0px 1px 10px 0px #{rgba($color, $opacity * 0.12)}',
    5: '0px 1px 14px 0px #{rgba($color, $opacity * 0.12)}',
    6: '0px 1px 18px 0px #{rgba($color, $opacity * 0.12)}',
    7: '0px 2px 16px 1px #{rgba($color, $opacity * 0.12)}',
    8: '0px 3px 14px 2px #{rgba($color, $opacity * 0.12)}',
    9: '0px 3px 16px 2px #{rgba($color, $opacity * 0.12)}',
    10: '0px 4px 18px 3px #{rgba($color, $opacity * 0.12)}',
    11: '0px 4px 20px 3px #{rgba($color, $opacity * 0.12)}',
    12: '0px 5px 22px 4px #{rgba($color, $opacity * 0.12)}',
    13: '0px 5px 24px 4px #{rgba($color, $opacity * 0.12)}',
    14: '0px 5px 26px 4px #{rgba($color, $opacity * 0.12)}',
    15: '0px 6px 28px 5px #{rgba($color, $opacity * 0.12)}',
    16: '0px 6px 30px 5px #{rgba($color, $opacity * 0.12)}',
    17: '0px 6px 32px 5px #{rgba($color, $opacity * 0.12)}',
    18: '0px 7px 34px 6px #{rgba($color, $opacity * 0.12)}',
    19: '0px 7px 36px 6px #{rgba($color, $opacity * 0.12)}',
    20: '0px 8px 38px 7px #{rgba($color, $opacity * 0.12)}',
    21: '0px 8px 40px 7px #{rgba($color, $opacity * 0.12)}',
    22: '0px 8px 42px 7px #{rgba($color, $opacity * 0.12)}',
    23: '0px 9px 44px 8px #{rgba($color, $opacity * 0.12)}',
    24: '0px 9px 46px 8px #{rgba($color, $opacity * 0.12)}'
  );
}

$mat-elevation-transition-duration: 280ms !default;
$mat-elevation-transition-timing-function: $mat-fast-out-slow-in-timing-function;
$mat-elevation-color: black !default;
$mat-elevation-opacity: 1 !default;
$_mat-elevation-prefix: 'mat-elevation-z';

@mixin mat-elevation($zValue, $color: $mat-elevation-color, $opacity: $mat-elevation-opacity) {
  @if type-of($zValue) != number or not unitless($zValue) {
    @error '$zValue must be a unitless number';
  }
  @if $zValue < 0 or $zValue > 24 {
    @error '$zValue must be between 0 and 24';
  }

  box-shadow: #{map-get(_get-umbra-map($color, $opacity), $zValue)},
              #{map-get(_get-penumbra-map($color, $opacity), $zValue)},
              #{map-get(_get-ambient-map($color, $opacity), $zValue)};
}

@mixin _mat-theme-elevation($zValue, $theme, $opacity: $mat-elevation-opacity) {
  $foreground: map-get($theme, foreground);
  $elevation-color: map-get($foreground, elevation);
  $elevation-color-or-default: if($elevation-color == null, $mat-elevation-color, $elevation-color);

  @include mat-elevation($zValue, $elevation-color-or-default, $opacity);
}

@mixin mat-overridable-elevation(
    $zValue,
    $color: $mat-elevation-color,
    $opacity: $mat-elevation-opacity) {
  &:not([class*='#{$_mat-elevation-prefix}']) {
    @include mat-elevation($zValue, $color, $opacity);
  }
}

@mixin _mat-theme-overridable-elevation($zValue, $theme, $opacity: $mat-elevation-opacity) {
  $foreground: map-get($theme, foreground);
  $elevation-color: map-get($foreground, elevation);
  $elevation-color-or-default: if($elevation-color == null, $mat-elevation-color, $elevation-color);

  @include mat-overridable-elevation($zValue, $elevation-color-or-default, $opacity);
}

@function mat-elevation-transition-property-value(
    $duration: $mat-elevation-transition-duration,
    $easing: $mat-elevation-transition-timing-function) {
  @return box-shadow #{$duration} #{$easing};
}

@mixin mat-elevation-transition(
    $duration: $mat-elevation-transition-duration,
    $easing: $mat-elevation-transition-timing-function) {
  transition: mat-elevation-transition-property-value($duration, $easing);
}

$black-87-opacity: rgba(black, 0.87);
$white-87-opacity: rgba(white, 0.87);
$black-12-opacity: rgba(black, 0.12);
$white-12-opacity: rgba(white, 0.12);
$black-6-opacity: rgba(black, 0.06);
$white-6-opacity: rgba(white, 0.06);
$dark-primary-text: rgba(black, 0.87);
$dark-accent-text: rgba(black, 0.54);
$dark-disabled-text: rgba(black, 0.38);
$dark-dividers: rgba(black, 0.12);
$dark-focused: rgba(black, 0.12);
$light-primary-text: white;
$light-accent-text: rgba(white, 0.7);
$light-disabled-text: rgba(white, 0.5);
$light-dividers: rgba(white, 0.12);
$light-focused: rgba(white, 0.12);

$mat-red: (
  50: #ffebee,
  100: #ffcdd2,
  200: #ef9a9a,
  300: #e57373,
  400: #ef5350,
  500: #f44336,
  600: #e53935,
  700: #d32f2f,
  800: #c62828,
  900: #b71c1c,
  A100: #ff8a80,
  A200: #ff5252,
  A400: #ff1744,
  A700: #d50000,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $dark-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $light-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);


$mat-grey: (
  50: #fafafa,
  100: #f5f5f5,
  200: #eeeeee,
  300: #e0e0e0,
  400: #bdbdbd,
  500: #9e9e9e,
  600: #757575,
  700: #616161,
  800: #424242,
  900: #212121,
  A100: #ffffff,
  A200: #eeeeee,
  A400: #bdbdbd,
  A700: #616161,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $dark-primary-text,
    500: $dark-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $dark-primary-text,
    A400: $dark-primary-text,
    A700: $light-primary-text,
  )
);

$mat-light-theme-background: (
  status-bar: map_get($mat-grey, 300),
  app-bar:    map_get($mat-grey, 100),
  background: map_get($mat-grey, 50),
  hover:      rgba(black, 0.04), // TODO(kara): check style with Material Design UX
  card:       white,
  dialog:     white,
  disabled-button: rgba(black, 0.12),
  raised-button: white,
  focused-button: $dark-focused,
  selected-button: map_get($mat-grey, 300),
  selected-disabled-button: map_get($mat-grey, 400),
  disabled-button-toggle: map_get($mat-grey, 200),
  unselected-chip: map_get($mat-grey, 300),
  disabled-list-option: map_get($mat-grey, 200),
);

$mat-dark-theme-background: (
  status-bar: black,
  app-bar:    map_get($mat-grey, 900),
  background: #303030,
  hover:      rgba(white, 0.04), // TODO(kara): check style with Material Design UX
  card:       map_get($mat-grey, 800),
  dialog:     map_get($mat-grey, 800),
  disabled-button: rgba(white, 0.12),
  raised-button: map-get($mat-grey, 800),
  focused-button: $light-focused,
  selected-button: map_get($mat-grey, 900),
  selected-disabled-button: map_get($mat-grey, 800),
  disabled-button-toggle: black,
  unselected-chip: map_get($mat-grey, 700),
  disabled-list-option: black,
);

$mat-light-theme-foreground: (
  base:              black,
  divider:           $dark-dividers,
  dividers:          $dark-dividers,
  disabled:          $dark-disabled-text,
  disabled-button:   rgba(black, 0.26),
  disabled-text:     $dark-disabled-text,
  elevation:         black,
  hint-text:         $dark-disabled-text,
  accent-text:    $dark-accent-text,
  icon:              rgba(black, 0.54),
  icons:             rgba(black, 0.54),
  text:              rgba(black, 0.87),
  slider-min:        rgba(black, 0.87),
  slider-off:        rgba(black, 0.26),
  slider-off-active: rgba(black, 0.38),
);

$mat-dark-theme-foreground: (
  base:              white,
  divider:           $light-dividers,
  dividers:          $light-dividers,
  disabled:          $light-disabled-text,
  disabled-button:   rgba(white, 0.3),
  disabled-text:     $light-disabled-text,
  elevation:         black,
  hint-text:         $light-disabled-text,
  accent-text:    $light-accent-text,
  icon:              white,
  icons:             white,
  text:              white,
  slider-min:        white,
  slider-off:        rgba(white, 0.3),
  slider-off-active: rgba(white, 0.3),
);

@function mat-contrast($palette, $hue) {
  @return map-get(map-get($palette, contrast), $hue);
}

@function mat-palette($base-palette, $default: 500, $lighter: 100, $darker: 700) {
  $result: map_merge($base-palette, (
    default: map-get($base-palette, $default),
    lighter: map-get($base-palette, $lighter),
    darker: map-get($base-palette, $darker),

    default-contrast: mat-contrast($base-palette, $default),
    lighter-contrast: mat-contrast($base-palette, $lighter),
    darker-contrast: mat-contrast($base-palette, $darker)
  ));


  @each $hue, $color in $base-palette {
    $result: map_merge($result, (
      '#{$hue}-contrast': mat-contrast($base-palette, $hue)
    ));
  }

  @return $result;
}

@function mat-color($palette, $hue: default, $opacity: null) {
  @if type-of($hue) == number and $hue >= 0 and $hue <= 1 {
    @return mat-color($palette, default, $hue);
  }

  $color: map-get($palette, $hue);
  $opacity: if($opacity == null, opacity($color), $opacity);

  @return rgba($color, $opacity);
}

@function mat-light-theme($primary, $accent, $warn: mat-palette($mat-red)) {
  @return (
    primary: $primary,
    accent: $accent,
    warn: $warn,
    is-dark: false,
    foreground: $mat-light-theme-foreground,
    background: $mat-light-theme-background,
  );
}

@function mat-dark-theme($primary, $accent, $warn: mat-palette($mat-red)) {
  @return (
    primary: $primary,
    accent: $accent,
    warn: $warn,
    is-dark: true,
    foreground: $mat-dark-theme-foreground,
    background: $mat-dark-theme-background,
  );
}

$mat-ripple-color-opacity: 0.1;

@mixin mat-ripple() {
  .mat-ripple {
    overflow: hidden;
    position: relative;
  }

  .mat-ripple.mat-ripple-unbounded {
    overflow: visible;
  }

  .mat-ripple-element {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;

    transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
    transform: scale(0);


    @include cdk-high-contrast {
      display: none;
    }
  }
}

@mixin mat-ripple-theme($theme) {
  $foreground: map_get($theme, foreground);
  $foreground-base: map_get($foreground, base);

  .mat-ripple-element {
    background-color: rgba($foreground-base, $mat-ripple-color-opacity);
  }
}
@function _mat-get-type-value($config, $level, $name) {
  @return map-get(map-get($config, $level), $name);
}
@function mat-font-size($config, $level) {
  @return _mat-get-type-value($config, $level, font-size);
}
@function mat-line-height($config, $level) {
  @return _mat-get-type-value($config, $level, line-height);
}
@function mat-font-weight($config, $level) {
  @return _mat-get-type-value($config, $level, font-weight);
}
@function mat-letter-spacing($config, $level) {
  @return _mat-get-type-value($config, $level, letter-spacing);
}
@function mat-font-family($config, $level: null) {
  $font-family: map-get($config, font-family);

  @if $level != null {
    $font-family: _mat-get-type-value($config, $level, font-family);
  }

  @return if($font-family == null, $font-family, unquote($font-family));
}
@mixin mat-typography-font-shorthand($font-size, $font-weight, $line-height, $font-family) {
  @if ($font-size == inherit or
       $font-weight == inherit or
       $line-height == inherit or
       $font-family == inherit or
       $font-size == null or
       $font-weight == null or
       $line-height == null or
       $font-family == null) {

    font-size: $font-size;
    font-weight: $font-weight;
    line-height: $line-height;
    font-family: $font-family;
  }
  @else {
    font: $font-weight #{$font-size}/#{$line-height} $font-family;
  }
}


@mixin mat-typography-level-to-styles($config, $level) {
  $font-size: mat-font-size($config, $level);
  $font-weight: mat-font-weight($config, $level);
  $line-height: mat-line-height($config, $level);
  $font-family: mat-font-family($config, $level);

  @include mat-typography-font-shorthand($font-size, $font-weight, $line-height, $font-family);
  letter-spacing: mat-letter-spacing($config, $level);
}


@mixin mat-option-theme($theme) {
  $foreground: map-get($theme, foreground);
  $background: map-get($theme, background);
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);

  .mat-option {
    color: mat-color($foreground, text);

    &:hover:not(.mat-option-disabled),
    &:focus:not(.mat-option-disabled) {
      background: mat-color($background, hover);
    }


    &.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {
      background: mat-color($background, hover);
    }

    &.mat-active {
      background: mat-color($background, hover);
      color: mat-color($foreground, text);
    }

    &.mat-option-disabled {
      color: mat-color($foreground, hint-text);
    }
  }

  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {
    color: mat-color($primary);
  }

  .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {
    color: mat-color($accent);
  }

  .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {
    color: mat-color($warn);
  }
}

@mixin mat-option-typography($config) {
  .mat-option {
    font: {
      family: mat-font-family($config, subheading-2);
      size: mat-font-size($config, subheading-2);
    }
  }
}

@mixin mat-optgroup-theme($theme) {
  $foreground: map-get($theme, foreground);

  .mat-optgroup-label {
    color: mat-color($foreground, accent-text);
  }

  .mat-optgroup-disabled .mat-optgroup-label {
    color: mat-color($foreground, hint-text);
  }
}

@mixin mat-optgroup-typography($config) {
  .mat-optgroup-label {
    @include mat-typography-level-to-styles($config, body-2);
  }
}

@mixin mat-pseudo-checkbox-theme($theme) {
  $is-dark-theme: map-get($theme, is-dark);
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $background: map-get($theme, background);

  $white-30pct-opacity-on-dark: #686868;
  $black-26pct-opacity-on-light: #b0b0b0;
  $disabled-color: if($is-dark-theme, $white-30pct-opacity-on-dark, $black-26pct-opacity-on-light);
  $colored-box-selector: '.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-indeterminate';

  .mat-pseudo-checkbox {
    color: mat-color(map-get($theme, foreground), accent-text);

    &::after {
      color: mat-color($background, background);
    }
  }

  .mat-pseudo-checkbox-checked,
  .mat-pseudo-checkbox-indeterminate,
  .mat-accent .mat-pseudo-checkbox-checked,
  .mat-accent .mat-pseudo-checkbox-indeterminate {
    background: mat-color(map-get($theme, accent));
  }

  .mat-primary .mat-pseudo-checkbox-checked,
  .mat-primary .mat-pseudo-checkbox-indeterminate {
    background: mat-color(map-get($theme, primary));
  }

  .mat-warn .mat-pseudo-checkbox-checked,
  .mat-warn .mat-pseudo-checkbox-indeterminate {
    background: mat-color(map-get($theme, warn));
  }

  .mat-pseudo-checkbox-checked {
    &.mat-pseudo-checkbox-disabled {
      background: $disabled-color;
    }
  }
}

@function mat-typography-level(
  $font-size,
  $line-height: $font-size,
  $font-weight: 400,
  $font-family: null,
  $letter-spacing: null) {

  @return (
    font-size: $font-size,
    line-height: $line-height,
    font-weight: $font-weight,
    font-family: $font-family,
    letter-spacing: $letter-spacing
  );
}

@function mat-typography-config(
  $font-family:   'Roboto, "Helvetica Neue", sans-serif',
  $display-4:     mat-typography-level(112px, 112px, 300),
  $display-3:     mat-typography-level(56px, 56px, 400),
  $display-2:     mat-typography-level(45px, 48px, 400),
  $display-1:     mat-typography-level(34px, 40px, 400),
  $headline:      mat-typography-level(24px, 32px, 400),
  $title:         mat-typography-level(20px, 32px, 500),
  $subheading-2:  mat-typography-level(16px, 28px, 400),
  $subheading-1:  mat-typography-level(15px, 24px, 400),
  $body-2:        mat-typography-level(14px, 24px, 500),
  $body-1:        mat-typography-level(14px, 20px, 400),
  $caption:       mat-typography-level(12px, 20px, 400),
  $button:        mat-typography-level(14px, 14px, 500),

  $input:         mat-typography-level(inherit, 1.125, 400)
) {


  $config: (
    display-4:      $display-4,
    display-3:      $display-3,
    display-2:      $display-2,
    display-1:      $display-1,
    headline:       $headline,
    title:          $title,
    subheading-2:   $subheading-2,
    subheading-1:   $subheading-1,
    body-2:         $body-2,
    body-1:         $body-1,
    caption:        $caption,
    button:         $button,
    input:          $input,
  );



  @each $key, $level in $config {
    @if map-get($level, font-family) == null {
      $new-level: map-merge($level, (font-family: $font-family));
      $config: map-merge($config, ($key: $new-level));
    }
  }


  @return map-merge($config, (font-family: $font-family));
}


@mixin mat-base-typography($config, $selector: '.mat-typography') {
  .mat-h1, .mat-headline, #{$selector} h1 {
    @include mat-typography-level-to-styles($config, headline);
    margin: 0 0 16px;
  }

  .mat-h2, .mat-title, #{$selector} h2 {
    @include mat-typography-level-to-styles($config, title);
    margin: 0 0 16px;
  }

  .mat-h3, .mat-subheading-2, #{$selector} h3 {
    @include mat-typography-level-to-styles($config, subheading-2);
    margin: 0 0 16px;
  }

  .mat-h4, .mat-subheading-1, #{$selector} h4 {
    @include mat-typography-level-to-styles($config, subheading-1);
    margin: 0 0 16px;
  }




  .mat-h5, #{$selector} h5 {
    @include mat-typography-font-shorthand(
      mat-font-size($config, body-1) * 0.83,
      mat-font-weight($config, body-1),
      mat-line-height($config, body-1),
      mat-font-family($config, body-1)
    );

    margin: 0 0 12px;
  }

  .mat-h6, #{$selector} h6 {
    @include mat-typography-font-shorthand(
      mat-font-size($config, body-1) * 0.67,
      mat-font-weight($config, body-1),
      mat-line-height($config, body-1),
      mat-font-family($config, body-1)
    );

    margin: 0 0 12px;
  }

  .mat-body-strong, .mat-body-2 {
    @include mat-typography-level-to-styles($config, body-2);
  }

  .mat-body, .mat-body-1, #{$selector} {
    @include mat-typography-level-to-styles($config, body-1);

    p {
      margin: 0 0 12px;
    }
  }

  .mat-small, .mat-caption {
    @include mat-typography-level-to-styles($config, caption);
  }



  .mat-display-4, #{$selector} .mat-display-4 {
    @include mat-typography-level-to-styles($config, display-4);
    margin: 0 0 56px;
    letter-spacing: -0.05em;
  }

  .mat-display-3, #{$selector} .mat-display-3 {
    @include mat-typography-level-to-styles($config, display-3);
    margin: 0 0 64px;
    letter-spacing: -0.02em;
  }

  .mat-display-2, #{$selector} .mat-display-2 {
    @include mat-typography-level-to-styles($config, display-2);
    margin: 0 0 64px;
    letter-spacing: -0.005em;
  }

  .mat-display-1, #{$selector} .mat-display-1 {
    @include mat-typography-level-to-styles($config, display-1);
    margin: 0 0 64px;
  }
}




@mixin mat-autocomplete-theme($theme) {
  $foreground: map-get($theme, foreground);
  $background: map-get($theme, background);

  .mat-autocomplete-panel {
    @include _mat-theme-overridable-elevation(4, $theme);
    background: mat-color($background, card);
    color: mat-color($foreground, text);






    .mat-option.mat-selected:not(.mat-active):not(:hover) {
      background: mat-color($background, card);

      &:not(.mat-option-disabled) {
        color: mat-color($foreground, text);
      }
    }
  }

}

@mixin mat-autocomplete-typography($config) { }









$mat-badge-font-size: 12px;
$mat-badge-font-weight: 600;
$mat-badge-default-size: 22px !default;
$mat-badge-small-size: $mat-badge-default-size - 6;
$mat-badge-large-size: $mat-badge-default-size + 6;


@mixin _mat-badge-size($size) {
  .mat-badge-content {
    width: $size;
    height: $size;
    line-height: $size;

    @include cdk-high-contrast {
      outline: solid 1px;
      border-radius: 0;
    }
  }

  &.mat-badge-above {
    .mat-badge-content {
      top: -$size / 2;
    }
  }

  &.mat-badge-below {
    .mat-badge-content {
      bottom: -$size / 2;
    }
  }

  &.mat-badge-before {
    .mat-badge-content {
      left: -$size;
    }
  }

  [dir='rtl'] &.mat-badge-before {
    .mat-badge-content {
      left: auto;
      right: -$size;
    }
  }

  &.mat-badge-after {
    .mat-badge-content {
      right: -$size;
    }
  }

  [dir='rtl'] &.mat-badge-after {
    .mat-badge-content {
      right: auto;
      left: -$size;
    }
  }

  &.mat-badge-overlap {
    &.mat-badge-before {
      .mat-badge-content {
        left: -$size / 2;
      }
    }

    [dir='rtl'] &.mat-badge-before {
      .mat-badge-content {
        left: auto;
        right: -$size / 2;
      }
    }

    &.mat-badge-after {
      .mat-badge-content {
        right: -$size / 2;
      }
    }

    [dir='rtl'] &.mat-badge-after {
      .mat-badge-content {
        right: auto;
        left: -$size / 2;
      }
    }
  }
}

@mixin mat-badge-theme($theme) {
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $primary: map-get($theme, primary);
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .mat-badge-content {
    color: mat-color($primary, default-contrast);
    background: mat-color($primary);
  }

  .mat-badge-accent {
    .mat-badge-content {
      background: mat-color($accent);
      color: mat-color($accent, default-contrast);
    }
  }

  .mat-badge-warn {
    .mat-badge-content {
      color: mat-color($warn, default-contrast);
      background: mat-color($warn);
    }
  }

  .mat-badge {
    position: relative;
  }

  .mat-badge-hidden {
    .mat-badge-content {
      display: none;
    }
  }

  .mat-badge-disabled {
    .mat-badge-content {




      $app-background: mat-color($background, 'background');
      $badge-color: mat-color($foreground, disabled-button);
      $badge-opacity: opacity($badge-color);
      background: mix($app-background, rgba($badge-color, 1), (1 - $badge-opacity) * 100%);
      color: mat-color($foreground, disabled-text);
    }
  }

  .mat-badge-content {
    position: absolute;
    text-align: center;
    display: inline-block;
    border-radius: 50%;
    transition: transform 200ms ease-in-out;
    transform: scale(0.6);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    pointer-events: none;
  }



  .mat-badge-content.mat-badge-active {

    transform: none;
  }

  .mat-badge-small {
    @include _mat-badge-size($mat-badge-small-size);
  }
  .mat-badge-medium {
    @include _mat-badge-size($mat-badge-default-size);
  }
  .mat-badge-large {
    @include _mat-badge-size($mat-badge-large-size);
  }
}

@mixin mat-badge-typography($config) {
  .mat-badge-content {
    font-weight: $mat-badge-font-weight;
    font-size: $mat-badge-font-size;
    font-family: mat-font-family($config);
  }

  .mat-badge-small .mat-badge-content {
    font-size: $mat-badge-font-size / 2;
  }

  .mat-badge-large .mat-badge-content {
    font-size: $mat-badge-font-size * 2;
  }
}





@mixin mat-bottom-sheet-theme($theme) {
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .mat-bottom-sheet-container {
    @include _mat-theme-elevation(16, $theme);
    background: mat-color($background, dialog);
    color: mat-color($foreground, text);
  }
}

@mixin mat-bottom-sheet-typography($config) {
  .mat-bottom-sheet-container {
    @include mat-typography-level-to-styles($config, body-1);
  }
}





$_mat-button-ripple-opacity: 0.1;


@mixin _mat-button-focus-overlay-color($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);

  &.mat-primary .mat-button-focus-overlay {
    background-color: mat-color($primary);
  }

  &.mat-accent .mat-button-focus-overlay {
    background-color: mat-color($accent);
  }

  &.mat-warn .mat-button-focus-overlay {
    background-color: mat-color($warn);
  }

  &[disabled] .mat-button-focus-overlay {
    background-color: transparent;
  }
}

@mixin _mat-button-ripple-color($theme, $hue, $opacity: $_mat-button-ripple-opacity) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);

  &.mat-primary .mat-ripple-element {
    background-color: mat-color($primary, $hue, $opacity);
  }

  &.mat-accent .mat-ripple-element {
    background-color: mat-color($accent, $hue, $opacity);
  }

  &.mat-warn .mat-ripple-element {
    background-color: mat-color($warn, $hue, $opacity);
  }
}


@mixin _mat-button-theme-property($theme, $property, $hue) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  &.mat-primary {
    #{$property}: mat-color($primary, $hue);
  }
  &.mat-accent {
    #{$property}: mat-color($accent, $hue);
  }
  &.mat-warn {
    #{$property}: mat-color($warn, $hue);
  }

  &.mat-primary, &.mat-accent, &.mat-warn, &[disabled] {
    &[disabled] {
      $palette: if($property == 'color', $foreground, $background);
      #{$property}: mat-color($palette, disabled-button);
    }
  }
}

@mixin mat-button-theme($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .mat-button, .mat-icon-button, .mat-stroked-button {




    color: inherit;
    background: transparent;

    @include _mat-button-theme-property($theme, 'color', default);
    @include _mat-button-focus-overlay-color($theme);




    .mat-ripple-element {
      opacity: $_mat-button-ripple-opacity;
      background-color: currentColor;
    }
  }

  .mat-button-focus-overlay {
    background: map_get($foreground, base);
  }



  .mat-stroked-button:not([disabled]) {
    border-color: mat-color($foreground, divider);
  }

  .mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {

    color: mat-color($foreground, text);
    background-color: mat-color($background, raised-button);

    @include _mat-button-theme-property($theme, 'color', default-contrast);
    @include _mat-button-theme-property($theme, 'background-color', default);
    @include _mat-button-ripple-color($theme, default-contrast);
  }

  .mat-stroked-button, .mat-flat-button {
    @include _mat-theme-overridable-elevation(0, $theme);
  }

  .mat-raised-button {
    @include _mat-theme-overridable-elevation(2, $theme);

    &:not([disabled]):active {
      @include _mat-theme-overridable-elevation(8, $theme);
    }

    &[disabled] {
      @include _mat-theme-overridable-elevation(0, $theme);
    }
  }

  .mat-fab, .mat-mini-fab {
    @include _mat-theme-overridable-elevation(6, $theme);

    &:not([disabled]):active {
      @include _mat-theme-overridable-elevation(12, $theme);
    }

    &[disabled] {
      @include _mat-theme-overridable-elevation(0, $theme);
    }
  }
}

@mixin mat-button-typography($config) {
  .mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button,
  .mat-flat-button, .mat-fab, .mat-mini-fab {
    font: {
      family: mat-font-family($config, button);
      size: mat-font-size($config, button);
      weight: mat-font-weight($config, button);
    }
  }
}






@mixin mat-button-toggle-theme($theme) {
  $foreground: map-get($theme, foreground);
  $background: map-get($theme, background);
  $divider-color: mat-color($foreground, divider);

  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    @include _mat-theme-elevation(2, $theme);
  }

  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    box-shadow: none;
  }

  .mat-button-toggle {
    color: mat-color($foreground, hint-text);

    .mat-button-toggle-focus-overlay {
      background-color: mat-color($background, focused-button);
    }
  }

  .mat-button-toggle-appearance-standard {
    color: mat-color($foreground, text);
    background: mat-color($background, card);

    .mat-button-toggle-focus-overlay {
      background-color: mat-color($background, focused-button, 1);
    }
  }

  .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {
    border-left: solid 1px $divider-color;
  }

  [dir='rtl'] .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {
    border-left: none;
    border-right: solid 1px $divider-color;
  }

  .mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical {
    .mat-button-toggle + .mat-button-toggle {
      border-left: none;
      border-right: none;
      border-top: solid 1px $divider-color;
    }
  }

  .mat-button-toggle-checked {
    background-color: mat-color($background, selected-button);
    color: mat-color($foreground, accent-text);

    &.mat-button-toggle-appearance-standard {
      color: mat-color($foreground, text);
    }
  }

  .mat-button-toggle-disabled {
    color: mat-color($foreground, disabled-button);
    background-color: mat-color($background, disabled-button-toggle);

    &.mat-button-toggle-appearance-standard {
      background: mat-color($background, card);
    }

    &.mat-button-toggle-checked {
      background-color: mat-color($background, selected-disabled-button);
    }
  }

  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    border: solid 1px $divider-color;
  }
}

@mixin mat-button-toggle-typography($config) {
  .mat-button-toggle {
    font-family: mat-font-family($config);
  }
}







@mixin mat-card-theme($theme) {
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .mat-card {
    @include _mat-theme-overridable-elevation(1, $theme);
    background: mat-color($background, card);
    color: mat-color($foreground, text);


    &.mat-card-flat {
      @include _mat-theme-overridable-elevation(0, $theme);
    }
  }

  .mat-card-subtitle {
    color: mat-color($foreground, accent-text);
  }
}

@mixin mat-card-typography($config) {
  .mat-card {
    font-family: mat-font-family($config);
  }

  .mat-card-title {
    font: {
      size: mat-font-size($config, headline);
      weight: mat-font-weight($config, title);
    }
  }

  .mat-card-header .mat-card-title {
    font-size: mat-font-size($config, title);
  }

  .mat-card-subtitle,
  .mat-card-content {
    font-size: mat-font-size($config, body-1);
  }
}






@mixin mat-checkbox-theme($theme) {
  $is-dark-theme: map-get($theme, is-dark);
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $background: map-get($theme, background);



  $checkbox-mark-color: mat-color($background, background);




  $white-30pct-opacity-on-dark: #686868;
  $black-26pct-opacity-on-light: #b0b0b0;
  $disabled-color: if($is-dark-theme, $white-30pct-opacity-on-dark, $black-26pct-opacity-on-light);

  .mat-checkbox-frame {
    border-color: mat-color(map-get($theme, foreground), accent-text);
  }

  .mat-checkbox-checkmark {
    fill: $checkbox-mark-color;
  }

  .mat-checkbox-checkmark-path {


    stroke: $checkbox-mark-color !important;

    @include cdk-high-contrast(black-on-white) {


      stroke: #000 !important;
    }
  }

  .mat-checkbox-mixedmark {
    background-color: $checkbox-mark-color;
  }

  .mat-checkbox-indeterminate, .mat-checkbox-checked {
    &.mat-primary .mat-checkbox-background {
      background-color: mat-color($primary);
    }

    &.mat-accent .mat-checkbox-background {
      background-color: mat-color($accent);
    }

    &.mat-warn .mat-checkbox-background {
      background-color: mat-color($warn);
    }
  }

  .mat-checkbox-disabled {
    &.mat-checkbox-checked:not(.mat-checkbox-indeterminate) {
      .mat-checkbox-background {
        background-color: $disabled-color;
      }
    }

    &:not(.mat-checkbox-checked) {
      .mat-checkbox-frame {
        border-color: $disabled-color;
      }
    }

    .mat-checkbox-label {
      color: $disabled-color;
    }

    @include cdk-high-contrast {
      opacity: 0.5;
    }
  }



  @include cdk-high-contrast {
    .mat-checkbox-background {

      background: none;
    }
  }

  .mat-checkbox:not(.mat-checkbox-disabled) {
    &.mat-primary .mat-checkbox-ripple .mat-ripple-element {
      background-color: mat-color($primary);
    }

    &.mat-accent .mat-checkbox-ripple .mat-ripple-element {
      background-color: mat-color($accent);
    }

    &.mat-warn .mat-checkbox-ripple .mat-ripple-element {
      background-color: mat-color($warn);
    }
  }
}

@mixin mat-checkbox-typography($config) {
  .mat-checkbox {
    font-family: mat-font-family($config);
  }


  .mat-checkbox-layout .mat-checkbox-label {
    line-height: mat-line-height($config, body-2);
  }
}






$mat-chip-remove-font-size: 18px;

@mixin mat-chips-color($foreground, $background) {
  background-color: $background;
  color: $foreground;

  .mat-chip-remove {
    color: $foreground;
    opacity: 0.4;
  }

  .mat-chip-remove:hover {
    opacity: 0.54;
  }
}

@mixin mat-chips-theme-color($palette) {
  @include mat-chips-color(mat-color($palette, default-contrast), mat-color($palette));

  .mat-ripple-element {
    background: mat-color($palette, default-contrast, 0.1);
  }
}

@mixin mat-chips-theme($theme) {
  $is-dark-theme: map-get($theme, is-dark);
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  $unselected-background: mat-color($background, unselected-chip);
  $unselected-foreground: mat-color($foreground, text);


  .mat-chip.mat-standard-chip {
    @include mat-chips-color($unselected-foreground, $unselected-background);

    &:focus {
      @include _mat-theme-elevation(3, $theme);
    }
  }

  .mat-chip.mat-standard-chip.mat-chip-selected {

    &.mat-primary {
      @include mat-chips-theme-color($primary);
    }

    &.mat-warn {
      @include mat-chips-theme-color($warn);
    }

    &.mat-accent {
      @include mat-chips-theme-color($accent);
    }
  }
}

@mixin mat-chips-typography($config) {
  .mat-chip {
    font-size: mat-font-size($config, body-2);
    font-weight: mat-font-weight($config, body-2);

    .mat-chip-trailing-icon.mat-icon,
    .mat-chip-remove.mat-icon {
      font-size: $mat-chip-remove-font-size;
    }
  }
}





@mixin mat-table-theme($theme) {
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .mat-table {
    background: mat-color($background, 'card');
  }

  .mat-table thead, .mat-table tbody, .mat-table tfoot,
  mat-header-row, mat-row, mat-footer-row,
  [mat-header-row], [mat-row], [mat-footer-row],
  .mat-table-sticky {
    background: inherit;
  }

  mat-row, mat-header-row, mat-footer-row,
  th.mat-header-cell, td.mat-cell, td.mat-footer-cell {
    border-bottom-color: mat-color($foreground, divider);
  }

  .mat-header-cell {
    color: mat-color($foreground, accent-text);
  }

  .mat-cell, .mat-footer-cell {
    color: mat-color($foreground, text);
  }
}

@mixin mat-table-typography($config) {
  .mat-table {
    font-family: mat-font-family($config);
  }

  .mat-header-cell {
    font-size: mat-font-size($config, caption);
    font-weight: mat-font-weight($config, body-2);
  }

  .mat-cell, .mat-footer-cell {
    font-size: mat-font-size($config, body-1);
  }
}







$mat-datepicker-selected-today-box-shadow-width: 1px;
$mat-datepicker-selected-fade-amount: 0.6;
$mat-datepicker-today-fade-amount: 0.2;
$mat-calendar-body-font-size: 13px !default;
$mat-calendar-weekday-table-font-size: 11px !default;

@mixin _mat-datepicker-color($palette) {
  .mat-calendar-body-selected {
    background-color: mat-color($palette);
    color: mat-color($palette, default-contrast);
  }

  .mat-calendar-body-disabled > .mat-calendar-body-selected {
    background-color: fade-out(mat-color($palette), $mat-datepicker-selected-fade-amount);
  }

  .mat-calendar-body-today.mat-calendar-body-selected {
    box-shadow: inset 0 0 0 $mat-datepicker-selected-today-box-shadow-width
                mat-color($palette, default-contrast);
  }
}

@mixin mat-datepicker-theme($theme) {
  $foreground: map-get($theme, foreground);
  $background: map-get($theme, background);

  .mat-calendar-arrow {
    border-top-color: mat-color($foreground, icon);
  }



  .mat-datepicker-toggle,
  .mat-datepicker-content .mat-calendar-next-button,
  .mat-datepicker-content .mat-calendar-previous-button {
    color: mat-color($foreground, icon);
  }

  .mat-calendar-table-header {
    color: mat-color($foreground, hint-text);
  }

  .mat-calendar-table-header-divider::after {
    background: mat-color($foreground, divider);
  }

  .mat-calendar-body-label {
    color: mat-color($foreground, accent-text);
  }

  .mat-calendar-body-cell-content {
    color: mat-color($foreground, text);
    border-color: transparent;
  }

  .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {
    color: mat-color($foreground, disabled-text);
  }

  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover,
  .cdk-keyboard-focused .mat-calendar-body-active,
  .cdk-program-focused .mat-calendar-body-active {
    & > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {
      background-color: mat-color($background, hover);
    }
  }

  .mat-calendar-body-today:not(.mat-calendar-body-selected) {


    border-color: mat-color($foreground, hint-text);
  }

  .mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {
    border-color: fade-out(mat-color($foreground, hint-text), $mat-datepicker-today-fade-amount);
  }

  @include _mat-datepicker-color(map-get($theme, primary));

  .mat-datepicker-content {
    @include _mat-theme-elevation(4, $theme);
    background-color: mat-color($background, card);
    color: mat-color($foreground, text);

    &.mat-accent {
      @include _mat-datepicker-color(map-get($theme, accent));
    }

    &.mat-warn {
      @include _mat-datepicker-color(map-get($theme, warn));
    }
  }

  .mat-datepicker-content-touch {
    @include _mat-theme-elevation(0, $theme);
  }

  .mat-datepicker-toggle-active {
    color: mat-color(map-get($theme, primary));

    &.mat-accent {
      color: mat-color(map-get($theme, accent));
    }

    &.mat-warn {
      color: mat-color(map-get($theme, warn));
    }
  }
}

@mixin mat-datepicker-typography($config) {
  .mat-calendar {
    font-family: mat-font-family($config);
  }

  .mat-calendar-body {
    font-size: $mat-calendar-body-font-size;
  }

  .mat-calendar-body-label,
  .mat-calendar-period-button {
    font: {
      size: mat-font-size($config, button);
      weight: mat-font-weight($config, button);
    }
  }

  .mat-calendar-table-header th {
    font: {
      size: $mat-calendar-weekday-table-font-size;
      weight: mat-font-weight($config, body-1);
    }
  }
}







@mixin mat-dialog-theme($theme) {
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .mat-dialog-container {
    @include _mat-theme-elevation(24, $theme);
    background: mat-color($background, dialog);
    color: mat-color($foreground, text);
  }
}

@mixin mat-dialog-typography($config) {
  .mat-dialog-title {
    @include mat-typography-level-to-styles($config, title);
  }
}






@mixin mat-expansion-panel-theme($theme) {
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .mat-expansion-panel {
    @include _mat-theme-overridable-elevation(2, $theme);
    background: mat-color($background, card);
    color: mat-color($foreground, text);
  }

  .mat-action-row {
    border-top-color: mat-color($foreground, divider);
  }

  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header {
    &:not([aria-disabled='true']) {
      &.cdk-keyboard-focused,
      &.cdk-program-focused,
      &:hover {
        background: mat-color($background, hover);
      }
    }
  }



  @media (hover: none) {
    .mat-expansion-panel:not(.mat-expanded):not([aria-disabled='true'])
      .mat-expansion-panel-header:hover {
      background: mat-color($background, card);
    }
  }

  .mat-expansion-panel-header-title {
    color: mat-color($foreground, text);
  }

  .mat-expansion-panel-header-description,
  .mat-expansion-indicator::after {
    color: mat-color($foreground, accent-text);
  }

  .mat-expansion-panel-header[aria-disabled='true'] {
    color: mat-color($foreground, disabled-button);

    .mat-expansion-panel-header-title,
    .mat-expansion-panel-header-description {
      color: inherit;
    }
  }
}

@mixin mat-expansion-panel-typography($config) {
  .mat-expansion-panel-header {
    font: {
      family: mat-font-family($config, subheading-1);
      size: mat-font-size($config, subheading-1);
      weight: mat-font-weight($config, subheading-1);
    }
  }

  .mat-expansion-panel-content {
    @include mat-typography-level-to-styles($config, body-1);
  }
}






@mixin mat-truncate-line() {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}



@mixin mat-line-base($accent-font-size) {
  .mat-line {
    @include mat-truncate-line();
    display: block;
    box-sizing: border-box;


    &:nth-child(n+2) {
      font-size: $accent-font-size;
    }
  }
}


@mixin mat-normalize-text() {
  & > * {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: inherit;
  }
}


@mixin mat-line-wrapper-base() {
  @include mat-normalize-text();

  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;



  &:empty {
    display: none;
  }
}




@mixin mat-grid-list-theme($theme) { }

@mixin mat-grid-list-typography($config) {
  .mat-grid-tile-header,
  .mat-grid-tile-footer {
    @include mat-line-base(mat-font-size($config, caption));
    font-size: mat-font-size($config, body-1);
  }
}





@mixin mat-icon-theme($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .mat-icon {
    &.mat-primary {
      color: mat-color($primary);
    }

    &.mat-accent {
      color: mat-color($accent);
    }

    &.mat-warn {
      color: mat-color($warn);
    }
  }
}

@mixin mat-icon-typography($config) { }








@mixin mat-control-disabled-underline($color) {
  background-image: linear-gradient(to right, $color 0%, $color 33%, transparent 0%);
  background-size: 4px 100%;
  background-repeat: repeat-x;
}




@function _mat-control-placeholder-color($theme) {
  $foreground: map-get($theme, foreground);
  $is-dark-theme: map-get($theme, is-dark);
  @return mat-color($foreground, accent-text, if($is-dark-theme, 0.5, 0.42));
}


/* stylelint-disable material/no-prefixes */
@mixin user-select($value) {
  -webkit-user-select: $value;
  -moz-user-select: $value;
  -ms-user-select: $value;
  user-select: $value;
}

@mixin input-placeholder {
  &::placeholder {
    @content;
  }

  &::-moz-placeholder {
    @content;
  }

  &::-webkit-input-placeholder {
    @content;
  }

  &:-ms-input-placeholder {
    @content;
  }
}

@mixin cursor-grab {
  cursor: -webkit-grab;
  cursor: grab;
}

@mixin cursor-grabbing {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

@mixin backface-visibility($value) {
  -webkit-backface-visibility: $value;
  backface-visibility: $value;
}
/* stylelint-enable */



@mixin mat-input-theme($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $foreground: map-get($theme, foreground);

  .mat-form-field-type-mat-native-select .mat-form-field-infix::after {
    color: mat-color($foreground, accent-text);
  }

  .mat-input-element:disabled,
  .mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after {
    color: mat-color($foreground, disabled-text);
  }

  .mat-input-element {
    caret-color: mat-color($primary);

    @include input-placeholder {
      color: _mat-control-placeholder-color($theme);
    }






    @if (map-get($theme, is-dark)) {
      option {
        color: $dark-primary-text;
      }

      option:disabled {
        color: $dark-disabled-text;
      }
    }
  }

  .mat-accent .mat-input-element {
    caret-color: mat-color($accent);
  }

  .mat-warn .mat-input-element,
  .mat-form-field-invalid .mat-input-element {
    caret-color: mat-color($warn);
  }

  .mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after {
    color: mat-color($warn);
  }
}

@mixin mat-input-typography($config) {

  $line-height: mat-line-height($config, input);



  $line-spacing: ($line-height - 1) / 2;



  input.mat-input-element {
    margin-top: -$line-spacing * 1em;
  }
}







@mixin mat-list-theme($theme) {
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .mat-list, .mat-nav-list, .mat-selection-list {
    .mat-list-item {
      color: mat-color($foreground, text);
    }

    .mat-list-option {
      color: mat-color($foreground, text);
    }

    .mat-subheader {
      color: mat-color($foreground, accent-text);
    }
  }

  .mat-list-item-disabled {
    background-color: mat-color($background, disabled-list-option);
  }

  .mat-list-option,
  .mat-nav-list .mat-list-item {
    &:hover, &:focus {
      background: mat-color($background, 'hover');
    }
  }
}

@mixin mat-list-typography($config) {
  $font-family: mat-font-family($config);

  .mat-list-item {
    font-family: $font-family;
  }

  .mat-list-option {
    font-family: $font-family;
  }


  .mat-list, .mat-nav-list, .mat-selection-list {
    .mat-list-item {
      font-size: mat-font-size($config, subheading-2);
      @include mat-line-base(mat-font-size($config, body-1));
    }

    .mat-list-option {
      font-size: mat-font-size($config, subheading-2);
      @include mat-line-base(mat-font-size($config, body-1));
    }

    .mat-subheader {
      font-family: mat-font-family($config, body-2);
      font-size: mat-font-size($config, body-2);
      font-weight: mat-font-weight($config, body-2);
    }
  }


  .mat-list[dense], .mat-nav-list[dense], .mat-selection-list[dense] {
    .mat-list-item {
      font-size: mat-font-size($config, caption);
      @include mat-line-base(mat-font-size($config, caption));
    }

    .mat-list-option {
      font-size: mat-font-size($config, caption);
      @include mat-line-base(mat-font-size($config, caption));
    }

    .mat-subheader {
      font-family: $font-family;
      font-size: mat-font-size($config, caption);
      font-weight: mat-font-weight($config, body-2);
    }
  }
}







@mixin mat-menu-theme($theme) {
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .mat-menu-panel {
    @include _mat-theme-overridable-elevation(4, $theme);
    background: mat-color($background, 'card');
  }

  .mat-menu-item {
    background: transparent;
    color: mat-color($foreground, 'text');

    &[disabled] {
      &, &::after {
        color: mat-color($foreground, 'disabled');
      }
    }
  }

  .mat-menu-item .mat-icon:not([color]),
  .mat-menu-item-submenu-trigger::after {
    color: mat-color($foreground, 'icon');
  }

  .mat-menu-item:hover,
  .mat-menu-item.cdk-program-focused,
  .mat-menu-item.cdk-keyboard-focused,
  .mat-menu-item-highlighted {
    &:not([disabled]) {
      background: mat-color($background, 'hover');
    }
  }
}

@mixin mat-menu-typography($config) {
  .mat-menu-item {
    font: {
      family: mat-font-family($config, body-1);
      size: mat-font-size($config, body-1);
      weight: mat-font-weight($config, body-1);
    }
  }
}






@mixin mat-paginator-theme($theme) {
  $foreground: map-get($theme, foreground);
  $background: map-get($theme, background);

  .mat-paginator {
    background: mat-color($background, 'card');
  }

  .mat-paginator,
  .mat-paginator-page-size .mat-select-trigger {
    color: mat-color($foreground, accent-text);
  }

  .mat-paginator-decrement,
  .mat-paginator-increment {
    border-top: 2px solid mat-color($foreground, 'icon');
    border-right: 2px solid mat-color($foreground, 'icon');
  }

  .mat-paginator-first,
  .mat-paginator-last {
    border-top: 2px solid mat-color($foreground, 'icon');
  }

  .mat-icon-button[disabled] {
    .mat-paginator-decrement,
    .mat-paginator-increment,
    .mat-paginator-first,
    .mat-paginator-last {
      border-color: mat-color($foreground, 'disabled');
    }
  }
}

@mixin mat-paginator-typography($config) {
  .mat-paginator,
  .mat-paginator-page-size .mat-select-trigger {
    font: {
      family: mat-font-family($config, caption);
      size: mat-font-size($config, caption);
    }
  }
}





@mixin mat-progress-bar-theme($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);

  .mat-progress-bar-background {
    fill: mat-color($primary, lighter);
  }

  .mat-progress-bar-buffer {
    background-color: mat-color($primary, lighter);
  }

  .mat-progress-bar-fill::after {
    background-color: mat-color($primary);
  }

  .mat-progress-bar.mat-accent {
    .mat-progress-bar-background {
      fill: mat-color($accent, lighter);
    }

    .mat-progress-bar-buffer {
      background-color: mat-color($accent, lighter);
    }

    .mat-progress-bar-fill::after {
      background-color: mat-color($accent);
    }
  }

  .mat-progress-bar.mat-warn {
    .mat-progress-bar-background {
      fill: mat-color($warn, lighter);
    }

    .mat-progress-bar-buffer {
      background-color: mat-color($warn, lighter);
    }

    .mat-progress-bar-fill::after {
      background-color: mat-color($warn);
    }
  }
}

@mixin mat-progress-bar-typography($config) { }






@mixin mat-progress-spinner-theme($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);

  .mat-progress-spinner, .mat-spinner {
    circle {
      stroke: mat-color($primary);
    }

    &.mat-accent circle {
      stroke: mat-color($accent);
    }

    &.mat-warn circle {
      stroke: mat-color($warn);
    }
  }
}

@mixin mat-progress-spinner-typography($config) { }





@mixin _mat-radio-color($palette) {
  &.mat-radio-checked .mat-radio-outer-circle {
    border-color: mat-color($palette);
  }

  .mat-radio-inner-circle,
  .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),
  &.mat-radio-checked .mat-radio-persistent-ripple,
  &:active .mat-radio-persistent-ripple {
    background-color: mat-color($palette);
  }
}

@mixin mat-radio-theme($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .mat-radio-outer-circle {
    border-color: mat-color($foreground, accent-text);
  }

  .mat-radio-button {
    &.mat-primary {
      @include _mat-radio-color($primary);
    }

    &.mat-accent {
      @include _mat-radio-color($accent);
    }

    &.mat-warn {
      @include _mat-radio-color($warn);
    }




    &.mat-radio-disabled {
      &.mat-radio-checked .mat-radio-outer-circle,
      .mat-radio-outer-circle {
        border-color: mat-color($foreground, disabled);
      }

      .mat-radio-ripple .mat-ripple-element,
      .mat-radio-inner-circle {
        background-color: mat-color($foreground, disabled);
      }

      .mat-radio-label-content {
        color: mat-color($foreground, disabled);
      }
    }



    .mat-ripple-element {
      background-color: map_get($foreground, base);
    }
  }
}

@mixin mat-radio-typography($config) {
  .mat-radio-button {
    font-family: mat-font-family($config);
  }
}

@mixin mat-select-theme($theme) {
  $foreground: map-get($theme, foreground);
  $background: map-get($theme, background);
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);

  .mat-select-value {
    color: mat-color($foreground, text);
  }

  .mat-select-placeholder {
    color: _mat-control-placeholder-color($theme);
  }

  .mat-select-disabled .mat-select-value {
    color: mat-color($foreground, disabled-text);
  }

  .mat-select-arrow {
    color: mat-color($foreground, accent-text);
  }

  .mat-select-panel {
    background: mat-color($background, card);
    @include _mat-theme-overridable-elevation(4, $theme);

    .mat-option.mat-selected:not(.mat-option-multiple) {
      background: mat-color($background, hover, 0.12);
    }
  }

  .mat-form-field {
    &.mat-focused {
      &.mat-primary .mat-select-arrow {
        color: mat-color($primary);
      }

      &.mat-accent .mat-select-arrow {
        color: mat-color($accent);
      }

      &.mat-warn .mat-select-arrow {
        color: mat-color($warn);
      }
    }

    .mat-select.mat-select-invalid .mat-select-arrow {
      color: mat-color($warn);
    }

    .mat-select.mat-select-disabled .mat-select-arrow {
      color: mat-color($foreground, disabled-text);
    }
  }
}

@mixin mat-select-typography($config) {
  $line-height: mat-line-height($config, input);

  .mat-select {
    font-family: mat-font-family($config);
  }

  .mat-select-trigger {
    height: $line-height * 1em;
  }
}

@mixin mat-sidenav-theme($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  $drawer-backdrop-color: invert(mat-color($background, card, 0.6));
  $drawer-background-color: mat-color($background, dialog);
  $drawer-container-background-color:  mat-color($background, background);
  $drawer-push-background-color: mat-color($background, dialog);
  $drawer-side-border: solid 1px mat-color($foreground, divider);

  .mat-drawer-container {
    background-color: $drawer-container-background-color;
    color: mat-color($foreground, text);
  }

  .mat-drawer {
    background-color: $drawer-background-color;
    color: mat-color($foreground, text);
    &.mat-drawer-push {
      background-color: $drawer-push-background-color;
    }
    &:not(.mat-drawer-side) {
      @include _mat-theme-elevation(16, $theme);
    }
  }

  .mat-drawer-side {
    border-right: $drawer-side-border;
    &.mat-drawer-end {
      border-left: $drawer-side-border;
      border-right: none;
    }
  }

  [dir='rtl'] .mat-drawer-side {
    border-left: $drawer-side-border;
    border-right: none;
    &.mat-drawer-end {
      border-left: none;
      border-right: $drawer-side-border;
    }
  }
  .mat-drawer-backdrop.mat-drawer-shown {
    background-color: $drawer-backdrop-color;
  }
}

@mixin mat-sidenav-typography($config) { }
@mixin _mat-slide-toggle-checked($palette, $thumb-checked-hue) {
  &.mat-checked:not(.mat-disabled) {
    .mat-slide-toggle-thumb {
      background-color: mat-color($palette, $thumb-checked-hue);
    }
    .mat-slide-toggle-bar {
      background-color: mat-color($palette, $thumb-checked-hue, 0.54);
    }
    .mat-ripple-element {
      background-color: mat-color($palette, $thumb-checked-hue);
    }
  }
}

@mixin mat-slide-toggle-theme($theme) {
  $is-dark: map_get($theme, is-dark);
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);
  $thumb-unchecked-hue: if($is-dark, 400, 50);
  $thumb-checked-hue: if($is-dark, 200, default);
  $thumb-disabled-hue: if($is-dark, 800, 400);
  $bar-unchecked-color: mat-color($foreground, disabled);
  $bar-disabled-color: if($is-dark, rgba(white, 0.12), rgba(black, 0.1));
  $ripple-unchecked-color: mat-color($foreground, base);

  .mat-slide-toggle {
    @include _mat-slide-toggle-checked($accent, $thumb-checked-hue);

    &.mat-primary {
      @include _mat-slide-toggle-checked($primary, $thumb-checked-hue);
    }

    &.mat-warn {
      @include _mat-slide-toggle-checked($warn, $thumb-checked-hue);
    }

    &:not(.mat-checked) .mat-ripple-element {
      background-color: $ripple-unchecked-color;
    }
  }

  .mat-disabled {
    .mat-slide-toggle-thumb {
      background-color: mat-color($mat-grey, $thumb-disabled-hue);
    }
    .mat-slide-toggle-bar {
      background-color: $bar-disabled-color;
    }
  }

  .mat-slide-toggle-thumb {
    @include _mat-theme-elevation(1, $theme);
    background-color: mat-color($mat-grey, $thumb-unchecked-hue);
  }

  .mat-slide-toggle-bar {
    background-color: $bar-unchecked-color;
  }
}

@mixin mat-slide-toggle-typography($config) {
  .mat-slide-toggle-content {
    font-family: mat-font-family($config);
  }
}

@mixin _mat-slider-inner-content-theme($palette) {
  .mat-slider-track-fill,
  .mat-slider-thumb,
  .mat-slider-thumb-label {
    background-color: mat-color($palette);
  }

  .mat-slider-thumb-label-text {
    color: mat-color($palette, default-contrast);
  }
}

@mixin mat-slider-theme($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  $mat-slider-off-color: mat-color($foreground, slider-off);
  $mat-slider-off-focused-color: mat-color($foreground, slider-off-active);
  $mat-slider-disabled-color: mat-color($foreground, slider-off);
  $mat-slider-labeled-min-value-thumb-color: mat-color($foreground, slider-min);
  $mat-slider-labeled-min-value-thumb-label-color: mat-color($foreground, slider-off);
  $mat-slider-focus-ring-color: mat-color($accent, default, 0.2);
  $mat-slider-focus-ring-min-value-color: mat-color($foreground, base, 0.12);
  $mat-slider-tick-color: mat-color($foreground, base, 0.7);
  $mat-slider-tick-size: 2px;

  .mat-slider-track-background {
    background-color: $mat-slider-off-color;
  }

  .mat-primary {
    @include _mat-slider-inner-content-theme($primary);
  }

  .mat-accent {
    @include _mat-slider-inner-content-theme($accent);
  }

  .mat-warn {
    @include _mat-slider-inner-content-theme($warn);
  }

  .mat-slider-focus-ring {
    background-color: $mat-slider-focus-ring-color;
  }

  .mat-slider:hover,
  .cdk-focused {
    .mat-slider-track-background {
      background-color: $mat-slider-off-focused-color;
    }
  }

  .mat-slider-disabled {
    .mat-slider-track-background,
    .mat-slider-track-fill,
    .mat-slider-thumb {
      background-color: $mat-slider-disabled-color;
    }

    &:hover {
      .mat-slider-track-background {
        background-color: $mat-slider-disabled-color;
      }
    }
  }

  .mat-slider-min-value {
    .mat-slider-focus-ring {
      background-color: $mat-slider-focus-ring-min-value-color;
    }

    &.mat-slider-thumb-label-showing {
      .mat-slider-thumb,
      .mat-slider-thumb-label {
        background-color: $mat-slider-labeled-min-value-thumb-color;
      }

      &.cdk-focused {
        .mat-slider-thumb,
        .mat-slider-thumb-label {
          background-color: $mat-slider-labeled-min-value-thumb-label-color;
        }
      }
    }

    &:not(.mat-slider-thumb-label-showing) {
      .mat-slider-thumb {
        border-color: $mat-slider-off-color;
        background-color: transparent;
      }

      &:hover,
      &.cdk-focused {
        .mat-slider-thumb {
          border-color: $mat-slider-off-focused-color;
        }

        &.mat-slider-disabled .mat-slider-thumb {
          border-color: $mat-slider-disabled-color;
        }
      }
    }
  }

  .mat-slider-has-ticks .mat-slider-wrapper::after {
    border-color: $mat-slider-tick-color;
  }

  .mat-slider-horizontal .mat-slider-ticks {
    background-image: repeating-linear-gradient(to right, $mat-slider-tick-color,
        $mat-slider-tick-color $mat-slider-tick-size, transparent 0, transparent);


    background-image: -moz-repeating-linear-gradient(0.0001deg, $mat-slider-tick-color,
        $mat-slider-tick-color $mat-slider-tick-size, transparent 0, transparent);
  }

  .mat-slider-vertical .mat-slider-ticks {
    background-image: repeating-linear-gradient(to bottom, $mat-slider-tick-color,
        $mat-slider-tick-color $mat-slider-tick-size, transparent 0, transparent);
  }
}

@mixin mat-slider-typography($config) {
  .mat-slider-thumb-label-text {
    font: {
      family: mat-font-family($config);
      size: mat-font-size($config, caption);
      weight: mat-font-weight($config, body-2);
    }
  }
}

@mixin mat-stepper-theme($theme) {
  $foreground: map-get($theme, foreground);
  $background: map-get($theme, background);
  $primary: map-get($theme, primary);
  $warn: map-get($theme, warn);

  .mat-step-header {
    &.cdk-keyboard-focused,
    &.cdk-program-focused,
    &:hover {
      background-color: mat-color($background, hover);
    }

    .mat-step-label,
    .mat-step-optional {
      color: mat-color($foreground, accent-text);
    }

    .mat-step-icon {
      background-color: mat-color($foreground, accent-text);
      color: mat-color($primary, default-contrast);
    }

    .mat-step-icon-selected,
    .mat-step-icon-state-done,
    .mat-step-icon-state-edit {
      background-color: mat-color($primary);
      color: mat-color($primary, default-contrast);
    }

    .mat-step-icon-state-error {
      background-color: transparent;
      color: mat-color($warn);
    }

    .mat-step-label.mat-step-label-active {
      color: mat-color($foreground, text);
    }

    .mat-step-label.mat-step-label-error {
      color: mat-color($warn);
    }
  }

  .mat-stepper-horizontal, .mat-stepper-vertical {
    background-color: mat-color($background, card);
  }

  .mat-stepper-vertical-line::before {
    border-left-color: mat-color($foreground, divider);
  }

  .mat-horizontal-stepper-header::before,
  .mat-horizontal-stepper-header::after,
  .mat-stepper-horizontal-line {
    border-top-color: mat-color($foreground, divider);
  }
}

@mixin mat-stepper-typography($config) {
  .mat-stepper-vertical, .mat-stepper-horizontal {
    font-family: mat-font-family($config);
  }

  .mat-step-label {
    font: {
      size: mat-font-size($config, body-1);
      weight: mat-font-weight($config, body-1);
    };
  }

  .mat-step-sub-label-error {
    font-weight: normal;
  }

  .mat-step-label-error {
    font-size: mat-font-size($config, body-2);
  }

  .mat-step-label-selected {
    font: {
      size: mat-font-size($config, body-2);
      weight: mat-font-weight($config, body-2);
    };
  }
}

@mixin mat-sort-theme($theme) {
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .mat-sort-header-arrow {
    $table-background: mat-color($background, 'card');
    $text-color: mat-color($foreground, accent-text);
    $text-opacity: opacity($text-color);
    color: mix($table-background, rgba($text-color, 1), (1 - $text-opacity) * 100%);
  }
}

@mixin mat-sort-typography($config) { }
@mixin mat-tabs-theme($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);
  $header-border: 1px solid mat-color($foreground, divider);

  .mat-tab-nav-bar,
  .mat-tab-header {
    border-bottom: $header-border;
  }

  .mat-tab-group-inverted-header {
    .mat-tab-nav-bar,
    .mat-tab-header {
      border-top: $header-border;
      border-bottom: none;
    }
  }

  .mat-tab-label, .mat-tab-link {
    color: mat-color($foreground, text);

    &.mat-tab-disabled {
      color: mat-color($foreground, disabled-text);
    }
  }

  .mat-tab-header-pagination-chevron {
    border-color: mat-color($foreground, text);
  }

  .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
    border-color: mat-color($foreground, disabled-text);
  }


  .mat-tab-group[class*='mat-background-'] .mat-tab-header,
  .mat-tab-nav-bar[class*='mat-background-'] {
    border-bottom: none;
    border-top: none;
  }

  .mat-tab-group, .mat-tab-nav-bar {
    $theme-colors: (
      primary: $primary,
      accent: $accent,
      warn: $warn
    );

    @each $name, $color in $theme-colors {

      &.mat-#{$name} {
        @include _mat-tab-label-focus($color);
        @include _mat-ink-bar($color);


        &.mat-background-#{$name} {
          @include _mat-ink-bar($color, default-contrast);
        }
      }
    }

    @each $name, $color in $theme-colors {

      &.mat-background-#{$name} {
        @include _mat-tab-label-focus($color);
        @include _mat-tabs-background($color);
      }
    }
  }
}

@mixin _mat-ink-bar($color, $hue: default) {
  .mat-ink-bar {
    background-color: mat-color($color, $hue);
  }
}

@mixin _mat-tab-label-focus($tab-focus-color) {
  .mat-tab-label,
  .mat-tab-link {
    &.cdk-keyboard-focused,
    &.cdk-program-focused {
      &:not(.mat-tab-disabled) {
        background-color: mat-color($tab-focus-color, lighter, 0.3);
      }
    }
  }
}

@mixin _mat-tabs-background($background-color) {
  .mat-tab-header, .mat-tab-links {
    background-color: mat-color($background-color);
  }
  .mat-tab-label, .mat-tab-link {
    color: mat-color($background-color, default-contrast);
    &.mat-tab-disabled {
      color: mat-color($background-color, default-contrast, 0.4);
    }
  }
  .mat-tab-header-pagination-chevron {
    border-color: mat-color($background-color, default-contrast);
  }
  .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {
    border-color: mat-color($background-color, default-contrast, 0.4);
  }
  .mat-ripple-element {
    background-color: mat-color($background-color, default-contrast, 0.12);
  }
}

@mixin mat-tabs-typography($config) {
  .mat-tab-group {
    font-family: mat-font-family($config);
  }

  .mat-tab-label, .mat-tab-link {
    font: {
      family: mat-font-family($config, button);
      size: mat-font-size($config, button);
      weight: mat-font-weight($config, button);
    }
  }
}

@mixin _mat-toolbar-color($palette) {
  background: mat-color($palette);
  color: mat-color($palette, default-contrast);
}

@mixin _mat-toolbar-form-field-overrides {
  .mat-form-field-underline,
  .mat-form-field-ripple,
  .mat-focused .mat-form-field-ripple {
    background-color: currentColor;
  }

  .mat-form-field-label,
  .mat-focused .mat-form-field-label,
  .mat-select-value,
  .mat-select-arrow,
  .mat-form-field.mat-focused .mat-select-arrow {
    color: inherit;
  }

  .mat-input-element {
    caret-color: currentColor;
  }
}

@mixin mat-toolbar-theme($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .mat-toolbar {
    background: mat-color($background, app-bar);
    color: mat-color($foreground, text);
    &.mat-primary {
      @include _mat-toolbar-color($primary);
    }
    &.mat-accent {
      @include _mat-toolbar-color($accent);
    }
    &.mat-warn {
      @include _mat-toolbar-color($warn);
    }
    @include _mat-toolbar-form-field-overrides;
  }
}

@mixin mat-toolbar-typography($config) {
  .mat-toolbar,
  .mat-toolbar h1,
  .mat-toolbar h2,
  .mat-toolbar h3,
  .mat-toolbar h4,
  .mat-toolbar h5,
  .mat-toolbar h6 {
    @include mat-typography-level-to-styles($config, title);
    margin: 0;
  }
}

$mat-tooltip-target-height: 22px;
$mat-tooltip-font-size: 10px;
$mat-tooltip-vertical-padding: ($mat-tooltip-target-height - $mat-tooltip-font-size) / 2;

$mat-tooltip-handset-target-height: 30px;
$mat-tooltip-handset-font-size: 14px;
$mat-tooltip-handset-vertical-padding:
    ($mat-tooltip-handset-target-height - $mat-tooltip-handset-font-size) / 2;

@mixin mat-tooltip-theme($theme) {
  .mat-tooltip {
    background: mat-color($mat-grey, 700, 0.9);
  }
}

@mixin mat-tooltip-typography($config) {
  .mat-tooltip {
    font-family: mat-font-family($config);
    font-size: $mat-tooltip-font-size;
    padding-top: $mat-tooltip-vertical-padding;
    padding-bottom: $mat-tooltip-vertical-padding;
  }
  .mat-tooltip-handset {
    font-size: $mat-tooltip-handset-font-size;
    padding-top: $mat-tooltip-handset-vertical-padding;
    padding-bottom: $mat-tooltip-handset-vertical-padding;
  }
}

@mixin mat-snack-bar-theme($theme) {
  $is-dark-theme: map-get($theme, is-dark);
  $accent: map-get($theme, accent);

  .mat-snack-bar-container {
    color: if($is-dark-theme, $dark-primary-text, $light-accent-text);
    background: if($is-dark-theme, map-get($mat-grey, 50), #323232);

    @include _mat-theme-elevation(6, $theme);
  }

  .mat-simple-snackbar-action {
    color: if($is-dark-theme, inherit, mat-color($accent));
  }
}

@mixin mat-snack-bar-typography($config) {
  .mat-simple-snackbar {
    font: {
      family: mat-font-family($config, body-1);
      size: mat-font-size($config, body-1);
    }
  }

  .mat-simple-snackbar-action {
    line-height: 1;
    font: {
      family: inherit;
      size: inherit;
      weight: mat-font-weight($config, button);
    }
  }
}

@mixin mat-form-field-fill-theme($theme) {
  $foreground: map-get($theme, foreground);
  $is-dark-theme: map-get($theme, is-dark);
  $fill-background: mat-color($foreground, base, if($is-dark-theme, 0.1, 0.04));
  $fill-disabled-background: mat-color($foreground, base, if($is-dark-theme, 0.05, 0.02));
  $underline-color: mat-color($foreground, divider, if($is-dark-theme, 0.5, 0.42));
  $label-disabled-color: mat-color($foreground, disabled-text);

  .mat-form-field-appearance-fill {
    .mat-form-field-flex {
      background-color: $fill-background;
    }
    &.mat-form-field-disabled .mat-form-field-flex {
      background-color: $fill-disabled-background;
    }
    .mat-form-field-underline::before {
      background-color: $underline-color;
    }
    &.mat-form-field-disabled {
      .mat-form-field-label {
        color: $label-disabled-color;
      }
      .mat-form-field-underline::before {
        background-color: transparent;
      }
    }
  }
}

$mat-form-field-fill-dedupe: 0;
@mixin _mat-form-field-fill-label-floating($font-scale, $infix-padding, $infix-margin-top) {
  transform: translateY(-$infix-margin-top - $infix-padding + $mat-form-field-fill-dedupe)
             scale($font-scale);
  width: 100% / $font-scale + $mat-form-field-fill-dedupe;
  $mat-form-field-fill-dedupe: $mat-form-field-fill-dedupe + 0.00001 !global;
}

@mixin mat-form-field-fill-typography($config) {
  $line-height: mat-line-height($config, input);
  $subscript-font-scale: 0.75;
  $infix-padding-top: 0.25em;
  $infix-padding-bottom: 0.75em;
  $infix-margin-top: 1em * $line-height * $subscript-font-scale;
  $fill-appearance-label-offset: -0.5em;
  .mat-form-field-appearance-fill {
    .mat-form-field-infix {
      padding: $infix-padding-top 0 $infix-padding-bottom 0;
    }

    .mat-form-field-label {
      top: $infix-margin-top + $infix-padding-top;
      margin-top: $fill-appearance-label-offset;
    }
    &.mat-form-field-can-float {
      &.mat-form-field-should-float .mat-form-field-label,
      .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {
        @include _mat-form-field-fill-label-floating(
                $subscript-font-scale, $infix-padding-top + $fill-appearance-label-offset,
                $infix-margin-top);
      }
      .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper
      .mat-form-field-label {
        @include _mat-form-field-fill-label-floating(
                $subscript-font-scale, $infix-padding-top + $fill-appearance-label-offset,
                $infix-margin-top);
      }
    }
  }
}

@mixin mat-form-field-legacy-theme($theme) {
  $foreground: map-get($theme, foreground);
  $is-dark-theme: map-get($theme, is-dark);

  $label-color: mat-color($foreground, accent-text);
  $underline-color: mat-color($foreground, divider, if($is-dark-theme, 0.7, 0.42));

  .mat-form-field-appearance-legacy {
    .mat-form-field-label {
      color: $label-color;
    }
    .mat-hint {
      color: $label-color;
    }
    .mat-form-field-underline {
      background-color: $underline-color;
    }
    &.mat-form-field-disabled .mat-form-field-underline {
      @include mat-control-disabled-underline($underline-color);
    }
  }
}

$mat-form-field-legacy-dedupe: 0;
@mixin _mat-form-field-legacy-label-floating($font-scale, $infix-padding, $infix-margin-top) {
  transform: translateY(-$infix-margin-top - $infix-padding) scale($font-scale) perspective(100px)
  translateZ(0.001px + $mat-form-field-legacy-dedupe);
  -ms-transform: translateY(-$infix-margin-top - $infix-padding + $mat-form-field-legacy-dedupe)
                  scale($font-scale);
  width: 100% / $font-scale + $mat-form-field-legacy-dedupe;
  $mat-form-field-legacy-dedupe: $mat-form-field-legacy-dedupe + 0.00001 !global;
}

@mixin _mat-form-field-legacy-label-floating-print($font-scale, $infix-padding, $infix-margin-top) {
  transform: translateY(-$infix-margin-top - $infix-padding + $mat-form-field-legacy-dedupe)
                  scale($font-scale);
  $mat-form-field-legacy-dedupe: $mat-form-field-legacy-dedupe + 0.00001 !global;
}

@mixin mat-form-field-legacy-typography($config) {
  $line-height: mat-line-height($config, input);
  $subscript-font-scale: 0.75;
  $line-spacing: ($line-height - 1) / 2;
  $infix-padding: 0.5em - $line-spacing;
  $infix-margin-top: 1em * $line-height * $subscript-font-scale;
  $subscript-margin-top: 0.5em / $subscript-font-scale - ($line-spacing * 2);
  $wrapper-padding-bottom: ($subscript-margin-top + $line-height) * $subscript-font-scale;

  .mat-form-field-appearance-legacy {
    .mat-form-field-wrapper {
      padding-bottom: $wrapper-padding-bottom;
    }

    .mat-form-field-infix {
      padding: $infix-padding 0;
    }

    &.mat-form-field-can-float {
      &.mat-form-field-should-float .mat-form-field-label,
      .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {
        @include _mat-form-field-legacy-label-floating(
                $subscript-font-scale, $infix-padding, $infix-margin-top);
      }

      .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper
      .mat-form-field-label {
        @include _mat-form-field-legacy-label-floating(
                $subscript-font-scale, $infix-padding, $infix-margin-top);
      }

      .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper
      .mat-form-field-label {
        @include _mat-form-field-legacy-label-floating(
                $subscript-font-scale, $infix-padding, $infix-margin-top);
      }
    }

    .mat-form-field-label {
      top: $infix-margin-top + $infix-padding;
    }

    .mat-form-field-underline {
      bottom: $wrapper-padding-bottom;
    }

    .mat-form-field-subscript-wrapper {
      margin-top: $subscript-margin-top;
      top: calc(100% - #{$wrapper-padding-bottom / $subscript-font-scale});
    }
  }

  @media print {
    .mat-form-field-appearance-legacy {
      &.mat-form-field-can-float {
        &.mat-form-field-should-float .mat-form-field-label,
        .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {
          @include _mat-form-field-legacy-label-floating-print(
                  $subscript-font-scale, $infix-padding, $infix-margin-top);
        }

        .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper
        .mat-form-field-label {
          @include _mat-form-field-legacy-label-floating-print(
                  $subscript-font-scale, $infix-padding, $infix-margin-top);
        }

        .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper
        .mat-form-field-label {
          @include _mat-form-field-legacy-label-floating-print(
                  $subscript-font-scale, $infix-padding, $infix-margin-top);
        }
      }
    }
  }
}

@mixin mat-form-field-outline-theme($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $foreground: map-get($theme, foreground);
  $is-dark-theme: map-get($theme, is-dark);

  $label-disabled-color: mat-color($foreground, disabled-text);
  $outline-color: mat-color($foreground, divider, if($is-dark-theme, 0.3, 0.12));
  $outline-color-hover: mat-color($foreground, divider, if($is-dark-theme, 1, 0.87));
  $outline-color-primary: mat-color($primary);
  $outline-color-accent: mat-color($accent);
  $outline-color-warn: mat-color($warn);
  $outline-color-disabled: mat-color($foreground, divider, if($is-dark-theme, 0.15, 0.06));

  .mat-form-field-appearance-outline {
    .mat-form-field-outline {
      color: $outline-color;
    }

    .mat-form-field-outline-thick {
      color: $outline-color-hover;
    }

    &.mat-focused {
      .mat-form-field-outline-thick {
        color: $outline-color-primary;
      }
      &.mat-accent .mat-form-field-outline-thick {
        color: $outline-color-accent;
      }
      &.mat-warn .mat-form-field-outline-thick {
        color: $outline-color-warn;
      }
    }
    &.mat-form-field-invalid.mat-form-field-invalid {
      .mat-form-field-outline-thick {
        color: $outline-color-warn;
      }
    }
    &.mat-form-field-disabled {
      .mat-form-field-label {
        color: $label-disabled-color;
      }
      .mat-form-field-outline {
        color: $outline-color-disabled;
      }
    }
  }
}

$mat-form-field-outline-dedupe: 0;

@mixin _mat-form-field-outline-label-floating($font-scale, $infix-padding, $infix-margin-top) {
  transform: translateY(-$infix-margin-top - $infix-padding + $mat-form-field-outline-dedupe)
  scale($font-scale);
  width: 100% / $font-scale + $mat-form-field-outline-dedupe;
  $mat-form-field-outline-dedupe: $mat-form-field-outline-dedupe + 0.00001 !global;
}

@mixin mat-form-field-outline-typography($config) {
  $line-height: mat-line-height($config, input);
  $subscript-font-scale: 0.75;
  $infix-padding: 1em;
  $infix-margin-top: 1em * $line-height * $subscript-font-scale;
  $subscript-margin-top: 0.5em / $subscript-font-scale;
  $wrapper-padding-bottom: ($subscript-margin-top + $line-height) * $subscript-font-scale;
  $outline-appearance-label-offset: -0.25em;

  .mat-form-field-appearance-outline {
    .mat-form-field-infix {
      padding: $infix-padding 0 $infix-padding 0;
    }

    .mat-form-field-label {
      top: $infix-margin-top + $infix-padding;
      margin-top: $outline-appearance-label-offset;
    }

    &.mat-form-field-can-float {
      &.mat-form-field-should-float .mat-form-field-label,
      .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {
        @include _mat-form-field-outline-label-floating(
                $subscript-font-scale, $infix-padding + $outline-appearance-label-offset,
                $infix-margin-top);
      }



      .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper
      .mat-form-field-label {
        @include _mat-form-field-outline-label-floating(
                $subscript-font-scale, $infix-padding + $outline-appearance-label-offset,
                $infix-margin-top);
      }
    }
  }
}

@mixin mat-form-field-standard-theme($theme) {
  $foreground: map-get($theme, foreground);
  $is-dark-theme: map-get($theme, is-dark);

  $underline-color: mat-color($foreground, divider, if($is-dark-theme, 0.7, 0.42));

  .mat-form-field-appearance-standard {
    .mat-form-field-underline {
      background-color: $underline-color;
    }

    &.mat-form-field-disabled .mat-form-field-underline {
      @include mat-control-disabled-underline($underline-color);
    }
  }
}

@mixin mat-form-field-standard-typography($config) {}

@mixin mat-form-field-theme($theme) {
  $primary: map-get($theme, primary);
  $accent: map-get($theme, accent);
  $warn: map-get($theme, warn);
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);
  $is-dark-theme: map-get($theme, is-dark);
  $label-color: mat-color($foreground, accent-text, if($is-dark-theme, 0.7, 0.6));
  $focused-label-color: mat-color($primary);
  $required-label-color: mat-color($accent);
  $underline-color-base: mat-color($foreground, divider, if($is-dark-theme, 1, 0.87));
  $underline-color-accent: mat-color($accent);
  $underline-color-warn: mat-color($warn);
  $underline-focused-color: mat-color($primary);

  .mat-form-field-label {
    color: $label-color;
  }

  .mat-hint {
    color: $label-color;
  }
  .mat-form-field.mat-focused .mat-form-field-label {
    color: $focused-label-color;

    &.mat-accent {
      color: $underline-color-accent;
    }

    &.mat-warn {
      color: $underline-color-warn;
    }
  }

  .mat-focused .mat-form-field-required-marker {
    color: $required-label-color;
  }

  .mat-form-field-ripple {
    background-color: $underline-color-base;
  }

  .mat-form-field.mat-focused {
    .mat-form-field-ripple {
      background-color: $underline-focused-color;

      &.mat-accent {
        background-color: $underline-color-accent;
      }

      &.mat-warn {
        background-color: $underline-color-warn;
      }
    }
  }
  .mat-form-field.mat-form-field-invalid {
    .mat-form-field-label {
      color: $underline-color-warn;

      &.mat-accent,
      .mat-form-field-required-marker {
        color: $underline-color-warn;
      }
    }

    .mat-form-field-ripple,
    .mat-form-field-ripple.mat-accent {
      background-color: $underline-color-warn;
    }
  }

  .mat-error {
    color: $underline-color-warn;
  }

  @include mat-form-field-legacy-theme($theme);
  @include mat-form-field-standard-theme($theme);
  @include mat-form-field-fill-theme($theme);
  @include mat-form-field-outline-theme($theme);
}

$mat-form-field-dedupe: 0;
@mixin _mat-form-field-label-floating($font-scale, $infix-padding, $infix-margin-top) {
  transform: translateY(-$infix-margin-top - $infix-padding + $mat-form-field-dedupe)
             scale($font-scale);
  width: 100% / $font-scale + $mat-form-field-dedupe;

  $mat-form-field-dedupe: $mat-form-field-dedupe + 0.00001 !global;
}

@mixin mat-form-field-typography($config) {
  $line-height: mat-line-height($config, input);
  $subscript-font-scale: 0.75;
  $prefix-suffix-icon-font-scale: 1.5;
  $infix-padding: 0.5em;
  $infix-margin-top: 1em * $line-height * $subscript-font-scale;
  $subscript-font-size: $subscript-font-scale * 100%;
  $prefix-suffix-icon-font-size: $prefix-suffix-icon-font-scale * 100%;
  $subscript-margin-top: 0.5em / $subscript-font-scale;
  $wrapper-padding-bottom: ($subscript-margin-top + $line-height) * $subscript-font-scale;

  .mat-form-field {
    @include mat-typography-level-to-styles($config, input);
  }

  .mat-form-field-wrapper {
    padding-bottom: $wrapper-padding-bottom;
  }

  .mat-form-field-prefix,
  .mat-form-field-suffix {

    .mat-icon {
      font-size: $prefix-suffix-icon-font-size;
      line-height: $line-height;
    }


    .mat-icon-button {
      height: $prefix-suffix-icon-font-scale * 1em;
      width: $prefix-suffix-icon-font-scale * 1em;

      .mat-icon {
        height: $line-height * 1em;
        line-height: $line-height;
      }
    }
  }

  .mat-form-field-infix {
    padding: $infix-padding 0;

    border-top: $infix-margin-top solid transparent;
  }

  .mat-form-field-can-float {
    &.mat-form-field-should-float .mat-form-field-label,
    .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {
      @include _mat-form-field-label-floating(
              $subscript-font-scale, $infix-padding, $infix-margin-top);
    }

    .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper
        .mat-form-field-label {
      @include _mat-form-field-label-floating(
              $subscript-font-scale, $infix-padding, $infix-margin-top);
    }
  }

  .mat-form-field-label-wrapper {
    top: -$infix-margin-top;
    padding-top: $infix-margin-top;
  }

  .mat-form-field-label {
    top: $infix-margin-top + $infix-padding;
  }

  .mat-form-field-underline {


    bottom: $wrapper-padding-bottom;
  }

  .mat-form-field-subscript-wrapper {
    font-size: $subscript-font-size;
    margin-top: $subscript-margin-top;



    top: calc(100% - #{$wrapper-padding-bottom / $subscript-font-scale});
  }

  @include mat-form-field-legacy-typography($config);
  @include mat-form-field-standard-typography($config);
  @include mat-form-field-fill-typography($config);
  @include mat-form-field-outline-typography($config);
}

@mixin mat-tree-theme($theme) {
  $background: map-get($theme, background);
  $foreground: map-get($theme, foreground);

  .mat-tree {
    background: mat-color($background, 'card');
  }

  .mat-tree-node,
  .mat-nested-tree-node {
    color: mat-color($foreground, text);
  }
}

@mixin mat-tree-typography($config) {
  .mat-tree {
    font-family: mat-font-family($config);
  }

  .mat-tree-node,
  .mat-nested-tree-node {
    font-weight: mat-font-weight($config, body-1);
    font-size: mat-font-size($config, body-1);
  }
}

@mixin angular-material-typography($config: null) {
  @if $config == null {
    $config: mat-typography-config();
  }

  @include mat-badge-typography($config);
  @include mat-base-typography($config);
  @include mat-autocomplete-typography($config);
  @include mat-bottom-sheet-typography($config);
  @include mat-button-typography($config);
  @include mat-button-toggle-typography($config);
  @include mat-card-typography($config);
  @include mat-checkbox-typography($config);
  @include mat-chips-typography($config);
  @include mat-table-typography($config);
  @include mat-datepicker-typography($config);
  @include mat-dialog-typography($config);
  @include mat-expansion-panel-typography($config);
  @include mat-form-field-typography($config);
  @include mat-grid-list-typography($config);
  @include mat-icon-typography($config);
  @include mat-input-typography($config);
  @include mat-menu-typography($config);
  @include mat-paginator-typography($config);
  @include mat-progress-bar-typography($config);
  @include mat-progress-spinner-typography($config);
  @include mat-radio-typography($config);
  @include mat-select-typography($config);
  @include mat-sidenav-typography($config);
  @include mat-slide-toggle-typography($config);
  @include mat-slider-typography($config);
  @include mat-stepper-typography($config);
  @include mat-sort-typography($config);
  @include mat-tabs-typography($config);
  @include mat-toolbar-typography($config);
  @include mat-tooltip-typography($config);
  @include mat-list-typography($config);
  @include mat-option-typography($config);
  @include mat-optgroup-typography($config);
  @include mat-snack-bar-typography($config);
  @include mat-tree-typography($config);
}

@mixin mat-core($typography-config: null) {
  @include angular-material-typography($typography-config);
  @include mat-ripple();
  @include cdk-a11y();
  @include cdk-overlay();
  @include cdk-text-field();
}

@mixin mat-core-theme($theme) {
  @include mat-ripple-theme($theme);
  @include mat-option-theme($theme);
  @include mat-optgroup-theme($theme);
  @include mat-pseudo-checkbox-theme($theme);

  @for $zValue from 0 through 24 {
    .#{$_mat-elevation-prefix}#{$zValue} {
      @include _mat-theme-elevation($zValue, $theme);
    }
  }
  .mat-app-background#{if(&, ', &.mat-app-background', '')} {
    $background: map-get($theme, background);
    $foreground: map-get($theme, foreground);

    background-color: mat-color($background, background);
    color: mat-color($foreground, text);
  }


  @at-root {
    .mat-theme-loaded-marker {
      display: none;
    }
  }
}

@mixin mat-divider-theme($theme) {
  $foreground: map-get($theme, foreground);

  .mat-divider {
    border-top-color: mat-color($foreground, divider);
  }

  .mat-divider-vertical {
    border-right-color: mat-color($foreground, divider);
  }
}

@mixin angular-material-theme($theme) {
  @include mat-core-theme($theme);
  @include mat-autocomplete-theme($theme);
  @include mat-badge-theme($theme);
  @include mat-bottom-sheet-theme($theme);
  @include mat-button-theme($theme);
  @include mat-button-toggle-theme($theme);
  @include mat-card-theme($theme);
  @include mat-checkbox-theme($theme);
  @include mat-chips-theme($theme);
  @include mat-table-theme($theme);
  @include mat-datepicker-theme($theme);
  @include mat-dialog-theme($theme);
  @include mat-divider-theme($theme);
  @include mat-expansion-panel-theme($theme);
  @include mat-form-field-theme($theme);
  @include mat-grid-list-theme($theme);
  @include mat-icon-theme($theme);
  @include mat-input-theme($theme);
  @include mat-list-theme($theme);
  @include mat-menu-theme($theme);
  @include mat-paginator-theme($theme);
  @include mat-progress-bar-theme($theme);
  @include mat-progress-spinner-theme($theme);
  @include mat-radio-theme($theme);
  @include mat-select-theme($theme);
  @include mat-sidenav-theme($theme);
  @include mat-slide-toggle-theme($theme);
  @include mat-slider-theme($theme);
  @include mat-stepper-theme($theme);
  @include mat-sort-theme($theme);
  @include mat-tabs-theme($theme);
  @include mat-toolbar-theme($theme);
  @include mat-tooltip-theme($theme);
  @include mat-tree-theme($theme);
  @include mat-snack-bar-theme($theme);
}`;
