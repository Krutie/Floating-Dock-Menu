// External
import { reactive, ref, watch } from 'vue';
import { useMotionProperties, useSpring } from '@vueuse/motion';
import { useMouse } from '@vueuse/core'

// Project specific
import { scalefactor } from '../utils';

export function useDeckMotionV4(params) {
  const mouseDefault = reactive(useMouse())
  const defaultIconSize = ref(params.defaultIconSize);

  // useMotionProperties on element to be transitioned
  const { motionProperties } = useMotionProperties(params.dockIcon, {
    width: defaultIconSize.value + 'px',
    height: defaultIconSize.value + 'px',
  });
  // useSpring to retrieve `set` method to use later in watch()
  const { set, stop } = useSpring(motionProperties, {
    mass: 0.01,
    stiffness: 70,
    damping: 12
  });

  watch(() => [params.hovered.value, mouseDefault.x, mouseDefault.y], (newValue, oldValue) => {
    if (newValue[0] == true) {
      let a = String(Math.round(defaultIconSize.value * scalefactor(params.dockIcon.value, mouseDefault.x, mouseDefault.y))) + 'px';
      set({ width: a, height: a });
    }
  });
  watch(() => params.hovered.value, (newValue, oldValue) => {
    if (newValue == false) {
      set({
        width: defaultIconSize.value + 'px',
        height: defaultIconSize.value + 'px'
      });
      stop;
    }
  });
}
