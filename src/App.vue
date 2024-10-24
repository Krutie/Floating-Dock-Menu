<script setup>
import FloatingDock from './components/FloatingDock.vue';
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
  <div class="flex items-center justify-center h-[35rem] w-full">
    <FloatingDock :items="items" />
  </div>
</template>

<style>
body {
  @apply bg-gray-950;
}
</style>
