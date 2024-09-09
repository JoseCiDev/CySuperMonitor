///home/jose/projetos/CySupermonitor/cypress/support/e2e.ts
import './commands/commands';


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});