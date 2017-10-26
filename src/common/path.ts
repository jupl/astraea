import {resolve as pathResolve} from 'path'

/**
 * Same as path.resolve in Node, but with assurance of where is the starting
 * directory relative to our project
 * @param args Same as path.resolve
 * @return Absolute path
 */
export function resolve(...args: string[]): string {
  return pathResolve(__dirname, '..', ...args)
}
