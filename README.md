<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new Nuxt module
-->

# Rubillex/rFetch

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things.

## Quick Setup

1. Add `rubi-fetch` dependency to your project

```bash
# Using pnpm
pnpm add rubi-fetch

# Using yarn
yarn add rubi-fetch

# Using npm
npm install rubi-fetch
```

2. Add `rubi-fetch` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'rubi-fetch'
  ]
})
```

That's it! You can now use $cyberiaApi in your Nuxt app ✨

## Preparation

Add module the config to nuxt.config.ts

```js
export default defineNuxtConfig({
  ...
    rubiFetch: {
        accessTokenName: 'access-token',
        baseUrl: 'https://example.com/'
    },
})
```

**accessTokenName** is the name of the cookie storing your authorization token.

**baseUrl** needs no introduction

## Usage

```ts
interface Response {
  message: string;
  data: string[];
}

const {data: testData} = await useAsyncData(
  () => $rubiFetch<Response>(`/test`)
);

console.log(testData.value.message);
```

In this case, the testData variable will contain the response from https://example.com/test.

If there is a cookie named access-token, the following line will be added to the request headers:

```js
    Authorization: `Bearer <access-token>`
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/rubi-fetch/latest.svg?style=flat&colorA=020420&colorB=00DC82

[npm-version-href]: https://npmjs.com/package/rubi-fetch

[npm-downloads-src]: https://img.shields.io/npm/dm/rubi-fetch.svg?style=flat&colorA=020420&colorB=00DC82

[npm-downloads-href]: https://npmjs.com/package/rubi-fetch

[license-src]: https://img.shields.io/npm/l/rubi-fetch.svg?style=flat&colorA=020420&colorB=00DC82

[license-href]: https://npmjs.com/package/rubi-fetch

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js

[nuxt-href]: https://nuxt.com
