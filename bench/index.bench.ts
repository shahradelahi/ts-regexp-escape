// @ts-expect-error TS7016: Could not find a declaration file for module regexp.escape.
import regexpEscape from 'regexp.escape';
import { bench, describe } from 'vitest';

import escape, { escapePolyfill } from '../src/index';

const testStrings = [
  'ab',
  '1a',
  'a*b',
  'a\\b',
  '/',
  'a b',
  'a-b',
  '\uD83D\uDE00',
  '\uD800',
  'Hello World! This is a test string to be escaped 123 *()_+{}|":?><~`',
];

describe('RegExp.escape benchmark', () => {
  bench('@se-oss/regexp-escape (Polyfill)', () => {
    for (const str of testStrings) {
      escapePolyfill(str);
    }
  });

  bench('@se-oss/regexp-escape (Isomorphic)', () => {
    for (const str of testStrings) {
      escape(str);
    }
  });

  bench('regexp.escape', () => {
    for (const str of testStrings) {
      regexpEscape(str);
    }
  });

  if (typeof RegExp.escape === 'function' && !RegExp.escape.toString().includes('core-js')) {
    bench('native', () => {
      for (const str of testStrings) {
        RegExp.escape!(str);
      }
    });
  }
});
