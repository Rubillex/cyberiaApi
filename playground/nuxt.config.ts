export default defineNuxtConfig({
  modules: ['../src/module'],
  cyberiaApi: {
    accessTokenName: 'access-token',
    baseUrl: 'https://example.com/',
  },
  devtools: {enabled: true}
})
