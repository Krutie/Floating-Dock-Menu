<script setup>
/* ======================================= */
/* This is Vue JS version with VueUse Motion in child components. */
/* V3DockItem does not use composable in this version. */
/* ======================================= */
import { ref } from 'vue';
import V3DockItem from './V3DockItem.vue';

const props = defineProps(['items']);

// Hovered state ..............................
const hovered = ref(false)

</script>

<template>
  <div class="mx-auto flex h-16 gap-2 items-end rounded-full px-3 pb-2.5 pt-2 bg-slate-900/90 border-2 border-slate-800"
       @mouseover="hovered = true"
       @mouseleave="hovered = false">
    <V3DockItem v-for="item in items"
              :key="item.title"
              :item="item"
              :hovered="hovered"
               />
  </div>
</template>
