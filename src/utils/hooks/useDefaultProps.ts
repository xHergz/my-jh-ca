/**
 * Hook to apply defaults to a set of props
 * @param incomingProps The incoming prop values (including or missing some optionals)
 * @param defaults The defaults to apply to missing optionals
 * @returns A full set of props with defaults applied to missing optionals
 */
export default function useDefaultProps<T>(incomingProps: T, defaults: Partial<T>) {
    return {
        ...defaults,
        ...incomingProps
    }
}