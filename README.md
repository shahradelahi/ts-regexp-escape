<h1 align="center">
  <sup>@se-oss/regexp-escape</sup>
  <br>
  <a href="https://github.com/shahradelahi/ts-regexp-escape/actions/workflows/ci.yml"><img src="https://github.com/shahradelahi/ts-regexp-escape/actions/workflows/ci.yml/badge.svg?branch=main&event=push" alt="CI"></a>
  <a href="https://www.npmjs.com/package/@se-oss/regexp-escape"><img src="https://img.shields.io/npm/v/@se-oss/regexp-escape.svg" alt="NPM Version"></a>
  <a href="/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat" alt="MIT License"></a>
  <a href="https://bundlephobia.com/package/@se-oss/regexp-escape"><img src="https://img.shields.io/bundlephobia/minzip/@se-oss/regexp-escape" alt="npm bundle size"></a>
  <a href="https://packagephobia.com/result?p=@se-oss/regexp-escape"><img src="https://packagephobia.com/badge?p=@se-oss/regexp-escape" alt="Install Size"></a>
</h1>

_@se-oss/regexp-escape_ is an isomorphic Stage 4 `RegExp.escape` polyfill that brings the latest TC39 specification to your environment today.

---

- [Installation](#-installation)
- [Usage](#-usage)
- [Documentation](#-documentation)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#license)

## 📦 Installation

```bash
npm install @se-oss/regexp-escape
```

<details>
<summary>Install using your favorite package manager</summary>

**pnpm**

```bash
pnpm install @se-oss/regexp-escape
```

**yarn**

```bash
yarn add @se-oss/regexp-escape
```

</details>

## 📖 Usage

### Ponyfill

Import and use directly without modifying globals:

```typescript
import escape from '@se-oss/regexp-escape';

const escaped = escape('a.b*c');
console.log(escaped); // "\\x61\\x2eb\\*c"
```

### Polyfill

Automatically patch the native `RegExp` object:

```typescript
import '@se-oss/regexp-escape/polyfill';

// Now available globally
const escaped = RegExp.escape('a.b*c');
```

## 📚 Documentation

For more information, please see the [TC39 RegExp.escape proposal](https://github.com/tc39/proposal-regexp-escape) or the [API docs](https://www.jsdocs.io/package/@se-oss/regexp-escape).

## 🚀 Performance

| Library                                | Operations/sec |
| -------------------------------------- | -------------- |
| Native                                 | ~813,507       |
| **@se-oss/regexp-escape** (isomorphic) | ~790,797       |
| **@se-oss/regexp-escape** (pollyfill)  | ~177,705       |
| regexp.escape                          | ~41,153        |

_Benchmark script: [`bench/index.bench.ts`](bench/index.bench.ts)_

## 🤝 Contributing

Want to contribute? Awesome! To show your support is to star the project, or to raise issues on [GitHub](https://github.com/shahradelahi/ts-regexp-escape).

Thanks again for your support, it is much appreciated! 🙏

## License

[MIT](/LICENSE) © [Shahrad Elahi](https://github.com/shahradelahi) and [contributors](https://github.com/shahradelahi/ts-regexp-escape/graphs/contributors).
