/** Return value for queries */
export type Value<T> = T | Promise<T>

/** Schema */
export type TypeDef = (() => TypeDef[]) | string
