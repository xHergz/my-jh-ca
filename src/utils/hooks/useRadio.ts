import { useState } from 'react';

/**
 * Hook to track a single unique value from a set
 * @param initialValue The starting state
 * @returns The current state and a method to update
 */
export default function useRadio<T>(initialValue: T | null = null): [T | null, (newValue: T | null) => void] {
  const [value, setValue] = useState<T | null>(initialValue);

  const update = (newValue: T | null): void => {
    return setValue(newValue);
  };

  return [value, update];
}
