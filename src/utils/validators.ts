/**
 * @description function checking if variable has value and is defined
 */
export const isDefined = <T>(
    value: T | null | undefined
): value is NonNullable<T> => value !== undefined && value !== null;
