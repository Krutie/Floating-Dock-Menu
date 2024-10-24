// External
import { reactive, ref, watch } from 'vue';
import { useMotionProperties, useSpring, reactiveStyle } from '@vueuse/motion';
import { useMouse } from '@vueuse/core'

// Project specific
import { scalefactor } from '../utils';

export function useDeckMotion(params) {
  const mouseDefault = reactive(useMouse())
  const elementSize = ref(params.elementSize);

  const resize = (n) => {
    elementSize.value = String(
      Math.round(n * scalefactor(params.element.value, mouseDefault.x, mouseDefault.y))
    ) + 'px';
  };

  // useMotionProperties on element to be transitioned
  const { motionProperties } = useMotionProperties(params.element);

  // useSpring to retrieve `set` method to use later in watch()
  const { set, stop } = useSpring(motionProperties, {
    mass: 0.1,
    stiffness: 70,
    damping: 12,
  });
  const { _state, style } = reactiveStyle({
    width: elementSize.value,
    height: elementSize.value,
  });

  // watch for mouse movements
  watch(mouseDefault, (newVal) => {
    resize(params.elementSize);
    set({
      width: elementSize.value,
      height: elementSize.value,
    });
    setTimeout(() => {
      stop;
    }, '100');
  });

  return { style };
}
