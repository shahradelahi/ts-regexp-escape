declare global {
  interface RegExpConstructor {
    /**
     * Escapes a string so that it can be treated as a literal string within a regular expression.
     * @param str The string to escape.
     */
    escape?(str: string): string;
  }
}

export {};
