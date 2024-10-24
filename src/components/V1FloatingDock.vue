<script setup>
/* ======================================= */
/* This is Vue JS version with VueUse Motion in child components */
/* This is the 6th version from the Stackblitz: https://stackblitz.com/edit/vitejs-vite-b2zp2x?file=README.md */
/* V1DockItem uses composable - useDeckMotion - in this version. */
/* However, there's a glitch. Icons move even when hovering outside of the parent container. */
/* Subsequent versions fixes this glitch. */
/* ======================================= */

import V1DockItem from './V1DockItem.vue';

const props = defineProps(['items']);

</script>

<template>
  <div class="mx-auto flex h-14 gap-2 items-end rounded-full px-3 pb-2.5 bg-gray-900/90 border border-gray-800">
    <V1DockItem v-for="(item, index) in items"
                   :key="index"
                   :item="item" />
  </div>
</template>
