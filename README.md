# Cypress + TS

## Steps to Insatll

1. Insatll IDE (VS Code)
1. Install Node
1. Init Node preject
```
$ npm init -y
```

1. Install dependencies
```
npm i cypress typescript
```
1. Init TS config with cypress's types are accessible by typescript
```
npx tsc --init --types cypress --lib dom,es6
```

## Configuration

[Configure](https://docs.cypress.io/guides/references/configuration) `specPattern` with `"**/*.ts"`, using EG. `cypress.config.ts`.

```ts
import { defineConfig } from "cypress";
export default defineConfig({
  e2e: {
    specPattern: ["**/e2e/*.ts"],
    baseUrl: 'http://the-internet.herokuapp.com',
  }
});
```

## Write a test

Create a file in E2E folder, example -> [cypress/e2e/first.spec.ts](cypress/e2e/first.spec.ts)

```ts
/// <reference types="cypress" />

describe("Typescript + Cypress", () => {
    beforeEach(() => {
    cy.visit('/')
  })

it('Check H2 text', () => {
    cy.get('h2')
      .should('have.length', 1)
      .should('have.text','Available Examples')
  })
})
```

## Run test

```
$ npm test
```