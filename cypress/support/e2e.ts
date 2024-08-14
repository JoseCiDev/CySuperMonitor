///home/jose/projetos/CySupermonitor/cypress/support/e2e.ts

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});