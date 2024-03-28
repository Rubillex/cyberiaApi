export default defineNuxtConfig({
  modules: ['../src/module'],
  cyberiaApi: {
    accessTokenName: 'access-token',
    baseUrl: 'http://localhost:8000/api',
  },
  devtools: {enabled: true}
})
