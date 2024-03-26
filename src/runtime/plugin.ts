import {defineNuxtPlugin} from '#app'
import {ofetch} from 'ofetch'
import {useRuntimeConfig} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const ACCESS_TOKEN_NAME = config.public.cyberiaApi.accessTokenName;

  globalThis.$fetch = ofetch.create({
    baseURL: config.public.cyberiaApi.baseUrl,
    onRequest({options}) {
      const access_token = useCookie(ACCESS_TOKEN_NAME);
      if (access_token.value) {
        options.headers = {...options.headers, Authorization: `Bearer ${access_token.value}`};
      }
    },
  })
})
