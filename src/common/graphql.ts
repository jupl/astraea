import {DocumentNode} from 'graphql'

/** Return value for queries */
export type Value<T> = T | Promise<T>

/** Schema */
export type Schema = (() => Schema[]) | string | DocumentNode
