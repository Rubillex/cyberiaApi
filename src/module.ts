import {defineNuxtModule, addPlugin, createResolver} from '@nuxt/kit'
import {fileURLToPath} from "node:url";
import defu from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
  accessTokenName: string;
  baseUrl: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'r-fetch',
    configKey: 'rFetch',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    accessTokenName: 'access_token',
    baseUrl: '/'
  },
  setup(options, nuxt) {
    if (!nuxt.options.runtimeConfig) {
      nuxt.options.runtimeConfig = {
        // @ts-ignore
        app: {},
        // @ts-ignore
        public: {},
      };
    }
    // @ts-ignore
    if (!nuxt.options.runtimeConfig.public) nuxt.options.runtimeConfig.public = {};

    nuxt.options.runtimeConfig.public.rFetch = options;

    const resolver = createResolver(import.meta.url);

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
