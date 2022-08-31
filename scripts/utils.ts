import {docsRoot} from "./paths";
import {isFunction, isUndefined} from "lodash";
import chalk from "chalk";

export const postLink = (path: string): string => {
  return path.substring(0, path.indexOf('.md'))
    .replace(docsRoot, '')
    .replaceAll('\\', '/');
}

export function warningIfNeed<T>(
  value: T,
  need: boolean | Function = false,
  msg: string): T
{
  const realNeed: boolean = isFunction(need) ? need() : need
  if (realNeed) {
    console.log(chalk.bgYellow(msg))
  }
  return value
}