///home/jose/projetos/Cygecom/cypress/support/e2e.ts
import './commands/commands';
import './commands/commandsLogin';
import './commands/commandsRecipe';
import './commands/commandsService';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});