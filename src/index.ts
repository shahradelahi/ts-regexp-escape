import './typings';

import {
  ControlEscape,
  FIRST_DIGIT_OR_ASCII,
  OTHER_PUNCTUATORS_AND_WHITESPACES,
  SYNTAX_SOLIDUS,
} from './constants';
import { escapeChar } from './utils';

/**
 * A polyfill for `RegExp.escape` based on the TC39 Stage 4 proposal.
 *
 * @param S - The string to be escaped.
 * @returns The escaped string.
 * @throws {TypeError} If the input is not a string.
 */
export function escapePolyfill(S: string): string {
  if (typeof S !== 'string') {
    throw new TypeError('Expected a string');
  }

  const length = S.length;
  const result: string[] = new Array(length);

  for (let i = 0; i < length; i++) {
    const chr = S.charAt(i);
    if (i === 0 && FIRST_DIGIT_OR_ASCII.test(chr)) {
      result[i] = escapeChar(chr);
    } else if (Object.prototype.hasOwnProperty.call(ControlEscape, chr)) {
      result[i] = '\\' + ControlEscape[chr];
    } else if (SYNTAX_SOLIDUS.test(chr)) {
      result[i] = '\\' + chr;
    } else if (OTHER_PUNCTUATORS_AND_WHITESPACES.test(chr)) {
      result[i] = escapeChar(chr);
    } else {
      const charCode = chr.charCodeAt(0);
      // single UTF-16 code unit
      if ((charCode & 0xf800) !== 0xd800) {
        result[i] = chr;
      }
      // unpaired surrogate
      else if (charCode >= 0xdc00 || i + 1 >= length || (S.charCodeAt(i + 1) & 0xfc00) !== 0xdc00) {
        result[i] = escapeChar(chr);
      }
      // surrogate pair
      else {
        result[i] = chr;
        result[++i] = S.charAt(i);
      }
    }
  }

  return result.join('');
}

/**
 * Escapes a string so that it can be treated as a literal string within a regular expression.
 * Uses `RegExp.escape` natively if available and specification compliant, otherwise uses the polyfill.
 *
 * @param str The string to escape.
 * @returns The escaped string.
 */
export const escape: (str: string) => string = (() => {
  if (
    typeof RegExp !== 'undefined' &&
    typeof RegExp.escape === 'function' &&
    RegExp.escape('ab') === '\\x61b'
  ) {
    return RegExp.escape!.bind(RegExp);
  }
  return escapePolyfill;
})();

export default escape;
