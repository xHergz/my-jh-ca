import { useCallback, useState } from 'react';

/**
 * Hook to track and modify visibility of components.
 * @param initiallyVisible The starting state
 * @param prepare Optional function to call making component visible (i.e. closing all other modals, etc)
 * @returns The current state, a method to open/make visible, and a method to hide/make invisible
 */
export default function useToggle(initiallyVisible: boolean): [boolean, () => void] {
  const [visible, setVisible] = useState<boolean>(initiallyVisible);

  const toggle = useCallback((): void => {
    return setVisible(!visible);
  }, [setVisible]);

  return [visible, toggle];
}
