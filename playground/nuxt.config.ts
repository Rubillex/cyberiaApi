export default defineNuxtConfig({
  modules: ['../src/module'],
  rubiFetch: {
    accessTokenName: 'access-token',
    baseUrl: 'http://localhost:8000/api',
  },
  devtools: {enabled: true}
});
