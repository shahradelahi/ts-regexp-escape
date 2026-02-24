export const WHITESPACES =
  '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

export const FIRST_DIGIT_OR_ASCII = /^[0-9a-z]/i;

export const SYNTAX_SOLIDUS = /^[$()*+./?[\\\]^{|}]/;

export const OTHER_PUNCTUATORS_AND_WHITESPACES = new RegExp(
  `^[!"#%&',-:;<=> @` + '`' + `~${WHITESPACES}]`
);

export const ControlEscape: Record<string, string> = {
  '\u0009': 't',
  '\u000A': 'n',
  '\u000B': 'v',
  '\u000C': 'f',
  '\u000D': 'r',
};
