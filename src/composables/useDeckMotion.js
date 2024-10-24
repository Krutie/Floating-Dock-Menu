// External
import { computed, watch } from 'vue';
import { useMotionProperties, useSpring, reactiveStyle } from '@vueuse/motion';

// Project specific
import { scalefactor } from '../utils';
import { useMouse } from '../composables/useMouse.js';

export function useDeckMotion(params) {
  const { x, y } = useMouse();

  const resize = (n) => {
    return (
      String(
        Math.round(n * scalefactor(params.element.value, x.value, y.value))
      ) + 'px'
    );
  };

  const elementSize = computed(() => {
    return params.element.value
      ? resize(params.elementSize)
      : params.elementSize + 'px';
  });

  // useMotionProperties on element to be transitioned
  const { motionProperties } = useMotionProperties(params.element);

  // useSpring to retrieve `set` method to use later in watch()
  const { set, stop } = useSpring(motionProperties, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const { _state, style } = reactiveStyle({
    width: elementSize.value,
    height: elementSize.value,
  });

  watch(elementSize, (newVal) => {
    set({
      width: elementSize.value,
      height: elementSize.value,
      opacity: 0.85,
    });
    setTimeout(() => {
      stop;
    }, '100');
  });

  return { style };
}
