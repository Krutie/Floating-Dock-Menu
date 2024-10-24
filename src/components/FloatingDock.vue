<script setup>
import { ref } from 'vue';
import IconContainer from './IconContainer.vue';

const props = defineProps(['items']);

</script>

<template>
  <div class="mx-auto flex h-14 gap-2 items-end rounded-full px-4 pb-2.5 bg-gray-900/90 border border-gray-800">
    <div v-for="(value, index) in items">
      <IconContainer :key="index"
                     :value="value" />
    </div>
  </div>
</template>
