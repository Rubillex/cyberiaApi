import {defineNuxtPlugin} from '#app'
import {type $Fetch, ofetch} from 'ofetch'
import { useRuntimeConfig } from "nuxt/app";

declare global {
  var $rubiFetch: $Fetch;
  namespace NodeJS {
    interface Global {
      $rubiFetch: $Fetch;
    }
  }
}

export default defineNuxtPlugin(async(nuxtApp) => {
  const config = useRuntimeConfig();
  const ACCESS_TOKEN_NAME = config.public.rubiFetch.accessTokenName;

  globalThis.$rubiFetch = ofetch.create({
    baseURL: config.public.rubiFetch.baseUrl,
    onRequest({options}) {

      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${ACCESS_TOKEN_NAME}=`);
      if (parts.length === 2) {
        // @ts-ignore
        const access_token = parts.pop().split(';').shift();
        options.headers = {...options.headers, Authorization: `Bearer ${decodeURIComponent(access_token ?? '')}`};
      }
    },
  })
})
