<template>
  <div ref="dockIcon"
       class="aspect-square w-10 h-10 rounded-full flex items-center justify-center text-xs text-white bg-slate-800/80">
    <Icon :icon="item.icon"
          class="pointer-events-none" />
  </div>
</template>
<script setup>
// External
import { useTemplateRef, watch, reactive } from 'vue';
import { useMotionProperties, useSpring } from '@vueuse/motion';
import { useMouse } from '@vueuse/core'
import { Icon } from '@iconify/vue';

// Project specific
import { scalefactor } from '../utils';

// Props
const mouseDefault = reactive(useMouse())
const props = defineProps(['item', 'hovered']);
const dockIcon = useTemplateRef('dockIcon');
const defaultIconSize = '40px';

// useMotionProperties on element to be transitioned
const { motionProperties } = useMotionProperties(dockIcon, {
  width: defaultIconSize,
  height: defaultIconSize,
});
// useSpring to retrieve `set` method to use later in watch()
const { set, stop } = useSpring(motionProperties, {
  mass: 0.01,
  stiffness: 70,
  damping: 12
});

watch(() => [props.hovered, mouseDefault.x, mouseDefault.y], (newValue, oldValue) => {
  if(newValue[0] == true) {
    let a = String(Math.round(40 * scalefactor(dockIcon.value, mouseDefault.x, mouseDefault.y))) + 'px'; 
    set({ width: a, height: a });
    setTimeout(() => {
      stop;
    }, '100');
  }
});

watch(() => props.hovered, (newValue, oldValue) => {
  if (newValue == false) {
    set({ width: defaultIconSize, height: defaultIconSize });
    setTimeout(() => {
      stop;
    }, '100');
  }
});

</script>