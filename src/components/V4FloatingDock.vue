<script setup>
/* ======================================= */
/* This is Vue JS version with VueUse Motion in child components */
/* V4DockItem uses composable - useDeckMotionV4 - in this version. */
/* ======================================= */
import { ref } from 'vue';
import V4DockItem from './V4DockItem.vue';

const props = defineProps(['items']);

// Hovered state ..............................
const hovered = ref(false)
</script>

<template>
  <div class="mx-auto flex h-16 gap-2 items-end rounded-full px-4 pb-3.5 pt-2 bg-zinc-900/90 border-2 border-zinc-800"
       @mouseover="hovered = true"
       @mouseleave="hovered = false">
    <V4DockItem v-for="item in items"
              :key="item.title"
              :item="item"
              :hovered="hovered"
              />
  </div>
</template>
