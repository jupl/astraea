import {resolve as pathResolve} from 'path'

/**
 * Same as path.resolve in Node, but with assurance of where is the starting
 * directory relative to our project
 * @return {string} Absolute path
 */
export function resolve(...args: string[]): string {
  return pathResolve(__dirname, '..', ...args)
}
