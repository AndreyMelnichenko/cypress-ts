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

## Replace native Cypress Dashboard to Sorry Cypress
1. All docs for Sorry Cypress [here](https://docs.sorry-cypress.dev)
1. Install dependencies 
```
$ npm i cy2
```
1. Add api env variables
```
$ export CYPRESS_API_URL="http://localhost:1234/"
```
1. Run Sorry Cypress Dashboard service
```
$ docker-compose -f ./docker-compose.minio.yml up
```
1. As result we have 
- director service on http://localhost:1234
- API service on http://localhost:4000
- Dashboard running on http://localhost:8080

## Run test

1. Run test locally
```
$ npm test
```

1. Ru tests by sorry cypress
```
$ npx cy2 run --record --key XXX --parallel --ci-build-id `date +%s` --browser chrome
```