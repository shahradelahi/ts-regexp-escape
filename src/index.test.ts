import { describe, expect, it } from 'vitest';

import escape, { escapePolyfill } from './index';

describe('escapePolyfill', () => {
  it('should escape the first character if it is a digit or ASCII letter', () => {
    expect(escapePolyfill('ab')).toBe('\\x61b');
    expect(escapePolyfill('1a')).toBe('\\x31a');
  });

  it('should escape control characters', () => {
    expect(escapePolyfill('\n')).toBe('\\n');
    expect(escapePolyfill('\t')).toBe('\\t');
  });

  it('should escape syntax solidus characters', () => {
    expect(escapePolyfill('a*b')).toBe('\\x61\\*b');
    expect(escapePolyfill('a\\b')).toBe('\\x61\\\\b');
    expect(escapePolyfill('/')).toBe('\\/');
  });

  it('should escape other punctuators and whitespaces', () => {
    expect(escapePolyfill('a b')).toBe('\\x61\\x20b');
    expect(escapePolyfill('a-b')).toBe('\\x61\\x2db');
  });

  it('should handle unpaired surrogates', () => {
    expect(escapePolyfill('\uD800')).toBe('\\ud800');
  });

  it('should handle surrogate pairs smoothly', () => {
    expect(escapePolyfill('\uD83D\uDE00')).toBe('\uD83D\uDE00');
  });

  it('should throw if input is not a string', () => {
    // @ts-expect-error testing invalid input
    expect(() => escapePolyfill(123)).toThrow(TypeError);
  });
});

describe('escape (isomorphic)', () => {
  it('should be a function', () => {
    expect(typeof escape).toBe('function');
  });

  it('should output the exact same result as the polyfill', () => {
    const tests = ['ab', '1a', '\n\t', 'a*b', 'a\\b', '/', 'a b', 'a-b', '\uD800', '\uD83D\uDE00'];

    for (const test of tests) {
      expect(escape(test)).toBe(escapePolyfill(test));
    }
  });
});
