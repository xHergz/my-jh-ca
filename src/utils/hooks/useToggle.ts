import { useState } from 'react';

/**
 * Hook to track and modify visibility of components.
 * @param initiallyVisible The starting state
 * @returns The current state and a method to toggle
 */
export default function useToggle(initiallyVisible: boolean): [boolean, () => void] {
  const [visible, setVisible] = useState<boolean>(initiallyVisible);

  const toggle = (): void => {
    return setVisible(!visible);
  };

  return [visible, toggle];
}
