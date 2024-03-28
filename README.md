<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new Nuxt module
-->

# Cyberia API

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things.

## Quick Setup

1. Add `cyberia-api` dependency to your project

```bash
# Using pnpm
pnpm add cyberia-api

# Using yarn
yarn add cyberia-api

# Using npm
npm install cyberia-api
```

2. Add `cyberia-api` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'cyberia-api'
  ]
})
```

That's it! You can now use $cyberiaApi in your Nuxt app ✨

## Preparation

Add module the config to nuxt.config.ts

```js
export default defineNuxtConfig({
  ...
    cyberiaApi: {
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

const { data: testData } = await useAsyncData(
  () => $cyberiaApi<Response>(`/test`)
);

console.log(testData.value.message);
```

In this case, the testData variable will contain the response from https://example.com/test.

If there is a cookie named access-token, the following line will be added to the request headers:

```js
    Authorization: `Bearer <access-token>`
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/cyberia-api/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/cyberia-api

[npm-downloads-src]: https://img.shields.io/npm/dm/cyberia-api.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/cyberia-api

[license-src]: https://img.shields.io/npm/l/cyberia-api.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/cyberia-api

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
