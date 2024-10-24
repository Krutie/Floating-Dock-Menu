<script setup>
// External
import { useTemplateRef } from 'vue';
import { Icon } from '@iconify/vue';

// Project Configuration
import { useDeckMotion } from '../composables/useDeckMotionV1.js';

// Props
const props = defineProps(['item']);

// Template Refs
const box = useTemplateRef('box');
const icon = useTemplateRef('icon');

const { style: boxStyle } = useDeckMotion({
  element: box,
  elementSize: 34,
});

const { style: iconStyle } = useDeckMotion({
  element: icon,
  elementSize: 18,
});
</script>

<template>
  <button class="aspect-square rounded-full flex items-center justify-center text-xs text-white bg-gray-800/80"
          ref="box"
          :style="boxStyle">
    <Icon :icon="item.icon"
          ref="icon"
          :style="iconStyle"
          class="pointer-events-none" />
  </button>
</template>

