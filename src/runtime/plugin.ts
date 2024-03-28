import {defineNuxtPlugin} from '#app'
import {type $Fetch, ofetch} from 'ofetch'
import {useRuntimeConfig} from "nuxt/app";

declare global {
  var $cyberiaApi: $Fetch;
  namespace NodeJS {
    interface Global {
      $cyberiaApi: $Fetch;
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const ACCESS_TOKEN_NAME = config.public.cyberiaApi.accessTokenName;

  globalThis.$cyberiaApi = ofetch.create({
    baseURL: config.public.cyberiaApi.baseUrl,
    onRequest({options}) {

      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${ACCESS_TOKEN_NAME}=`);
      if (parts.length === 2) {
        // @ts-ignore
        const access_token = parts.pop().split(';').shift();
        options.headers = {...options.headers, Authorization: `Bearer ${access_token}`};
      }
    },
  })
})
