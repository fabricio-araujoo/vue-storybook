<script setup lang="ts">
import { computed } from "vue";
import type { PrismaButtonProps } from "./types";

const props = withDefaults(defineProps<Partial<PrismaButtonProps>>(), {
  variant: "financas",
  size: "normal",
  disabled: false,
});

const classes = computed(() => {
  return {
    "prisma-button": true,

    // variant (default is financas)
    "prisma-button--contabil": props.variant === "contabil",
    "prisma-button--antecipa": props.variant === "antecipa",
    "prisma-button--outline": props.variant === "outline",
    "prisma-button--link": props.variant === "link",

    // size (default is medium)
    "prisma-button--small": props.size === "small",
    "prisma-button--large": props.size === "large",
  };
});
</script>

<template>
  <button :class="classes" :disabled="props.disabled">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
$button-height-sm: 1.5rem;
$button-height-md: 2rem;
$button-height-lg: 2.5rem;

@mixin button-variant($bg-color, $bg-color-hover) {
  background-color: $bg-color;

  &:hover {
    background-color: $bg-color-hover;
  }
}

@mixin button-disabled($bg-color) {
  cursor: not-allowed;
  background-color: $bg-color;
}

@mixin button-size($height, $padding-inline) {
  height: $height;
  padding-inline: $padding-inline;
}

.prisma-button {
  cursor: pointer;

  box-sizing: border-box;
  width: auto;

  @include button-size($button-height-md, map.get($spacing, sm));

  display: flex;
  align-items: center;
  gap: map.get($spacing, sm);

  // Todo: Sugestão de alteração para o tamanho do texto do botão
  @include font-body-2;
  color: #fff;
  line-height: $font-height-md;

  @include transition;

  @include button-variant(map.get($color-blue, 600), map.get($color-blue, 700));
  border: 1px solid transparent;
  border-radius: map.get($radius, small);

  &:disabled {
    @include button-disabled(map.get($color-gray, 400));
  }

  &--contabil {
    @include button-variant(
      map.get($color-green, 600),
      map.get($color-green, 700)
    );

    &:disabled {
      @include button-disabled(map.get($color-gray, 400));
    }
  }

  &--antecipa {
    @include button-variant(
      map.get($color-yellow, 600),
      map.get($color-yellow, 700)
    );

    &:disabled {
      @include button-disabled(map.get($color-gray, 400));
    }
  }

  &--outline {
    @include button-variant(transparent, map.get($color-blue, 600));

    color: map.get($color-blue, 600);
    border: 1px solid map.get($color-blue, 600);

    &:hover {
      color: #fff;
    }

    &:disabled {
      @include button-disabled(transparent);

      color: map.get($color-gray, 400);
      border: 1px solid map.get($color-gray, 400);
    }
  }

  &--link {
    @include button-variant(transparent, map.get($color-blue, 50));

    color: map.get($color-blue, 600);

    &:disabled {
      @include button-disabled(transparent);

      color: map.get($color-gray, 400);
    }
  }

  &--small {
    @include button-size($button-height-sm, map.get($spacing, sm));

    @include font-body-legend;
  }

  &--large {
    @include button-size($button-height-lg, map.get($spacing, md));

    @include font-body-1;
  }
}
</style>
