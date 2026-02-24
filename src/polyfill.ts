import { escapePolyfill } from './index';

if (typeof RegExp !== 'undefined' && typeof RegExp.escape !== 'function') {
  RegExp.escape = escapePolyfill;
}
