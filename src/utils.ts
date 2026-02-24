export function escapeChar(chr: string): string {
  const hex = chr.charCodeAt(0).toString(16);
  return hex.length < 3 ? '\\x' + hex.padStart(2, '0') : '\\u' + hex.padStart(4, '0');
}
