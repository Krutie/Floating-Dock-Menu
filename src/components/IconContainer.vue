<template>
  <button class="rounded-full flex items-center justify-center text-xs text-white bg-gray-800/80"
          ref="box"
          :style="boxStyle">
    <Icon :icon="value.icon"
          ref="icon"
          :style="iconStyle"
          class="pointer-events-none" />
  </button>
</template>

<script setup>
// External
import { ref, toRefs, watch, useTemplateRef, computed, onMounted } from 'vue';
import { useSpring, useMotionProperties, reactiveStyle } from '@vueuse/motion';
import { Icon } from '@iconify/vue';

// Project Configuration
import { useDeckMotion } from '../composables/useDeckMotion.js';

// Props
const props = defineProps(['value']);

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
