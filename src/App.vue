<script setup>
import V1FloatingDock from './components/V1FloatingDock.vue';
import V2FloatingDock from './components/V2FloatingDock.vue';
import V3FloatingDock from './components/V3FloatingDock.vue';
import V4FloatingDock from './components/V4FloatingDock.vue';
const items = [
  { title: 'Github', icon: 'akar-icons:gitlab-fill' },
  { title: 'Medium', icon: 'akar-icons:command' },
  { title: 'LinkedIn', icon: 'akar-icons:star' },
  { title: 'X', icon: 'akar-icons:sparkles' },
  { title: 'Facebook', icon: 'akar-icons:sun' },
  { title: 'CodePen', icon: 'akar-icons:check-in' },
  { title: 'Codesandbox', icon: 'hugeicons:codesandbox' },
];
</script>

<template>
  <div class="grid grid-cols-2 gap-10 tems-center justify-center m-24 text-white">
    <div class="text-xs opacity-70"> v4: Final with all </div>
    <V4FloatingDock :items="items" />

    <div class="text-xs opacity-70"> v3: With VueUse Motion, without Composition API, Icon transition </div>
    <V3FloatingDock :items="items" />

    <div class="text-xs opacity-70"> v2: Basic JavaScript version for concept clarification  </div>
    <V2FloatingDock :items="items" />

    <div class="text-xs opacity-70"> v1: Glitch with VueUse Motion </div>
    <V1FloatingDock :items="items" />
  </div>
</template>

<style>
body {
  @apply bg-gray-950;
}
</style>
