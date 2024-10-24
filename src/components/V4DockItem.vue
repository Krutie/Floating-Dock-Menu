<template>
  <div ref="dockIcon"
       class="aspect-square w-10 h-10 rounded-full flex items-center justify-center text-xs text-white bg-zinc-800/80">
    <Icon :icon="item.icon"
          ref="icon"
          class="pointer-events-none" />
  </div>
</template>
<script setup>
// External
import { useTemplateRef, toRefs } from 'vue';
import { Icon } from '@iconify/vue';

// Project Configuration
import { useDeckMotionV4 } from '../composables/useDeckMotionV4';

// Props
const props = defineProps(['item', 'hovered']);

// Template Refs
const dockIcon = useTemplateRef('dockIcon');
const icon = useTemplateRef('icon');

// Reactive Props for composition API
const { hovered } = toRefs(props);

useDeckMotionV4({
  dockIcon: dockIcon, 
  hovered: hovered, 
  defaultIconSize: 34 // pixels
});

useDeckMotionV4({
  dockIcon: icon, 
  hovered: hovered, 
  defaultIconSize: 18, // pixels
});

</script>