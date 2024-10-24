<script setup>
/* ======================================= */
/* This is basic JS version of the concept */
/* ======================================= */

import { useTemplateRef, reactive } from 'vue';
import { Icon } from '@iconify/vue';
import { useMouse } from '@vueuse/core'

const props = defineProps(['items']);
const dockIconsRefs = useTemplateRef('dockIcons');
const mouseDefault = reactive(useMouse())

const iconSize = (icon) => {
  const rect = icon.getBoundingClientRect();
  // const rect = icon.value.getBoundingClientRect();
  const iconCenterX = rect.left + rect.width / 2;
  // Distance from mouse pointer to the center of each icon
  const distance = Math.abs(iconCenterX - mouseDefault.x);
  // Adjust width and height based on proximity (closer icons get larger)
  return Math.max(50, 100 - distance / 3); // Adjust size based on distance
}

const onMouseMove = (e) => {
  dockIconsRefs.value.forEach((icon) => {
    icon.style.width = `${iconSize(icon)}px`;
    icon.style.height = `${iconSize(icon)}px`;
  });
}

const onMouseLeave = () => {
  dockIconsRefs.value.forEach((icon) => {
    icon.style.width = '50px'; // Reset to normal width
    icon.style.height = '50px'; // Reset to normal height
  });
}
</script>

<template>
  <div class="mx-auto flex h-16 gap-2 items-end rounded-full px-3 pb-2.5 pt-2 bg-gray-900/90 border-2 border-gray-800"
       @mouseover="onMouseMove"
       @mouseleave="onMouseLeave">
    <div v-for="item in items"
         ref="dockIcons"
         class="aspect-square w-10 h-10 rounded-full flex items-center justify-center text-xs text-white bg-gray-800/80">
      <Icon :icon="item.icon"
            ref="icon"
            class="pointer-events-none" />
    </div>
  </div>
</template>
