import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  projectId: 'fe_mern_todo_list',
  // baseUrl: 'http://localhost:3000',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
    specPattern: 'cypress/e2e/**/*.{cy.js,cy.ts}',
  },
});
