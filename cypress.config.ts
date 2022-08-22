import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://the-internet.herokuapp.com',
    excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples/*"],
    specPattern: ["**/e2e/*.js", "**/e2e/*.ts"],
    projectId: "Cy+TS"
  },
});
