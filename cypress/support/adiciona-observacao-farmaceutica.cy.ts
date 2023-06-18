// /// <reference types="Cypress" />
// // @ts-check
// -- ///<reference path="../../../../support/cypress.d.ts" />
// ///<reference path="./cypress.d.ts" />
// import { ELEMENTS as el} from ''

// Cypress.Commands.add('adicionaObservacaoFarmaceutica', () => {
//     const SENHA = "789123"
//     const OBSERVACAO = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

//     cy.get(el.senha)
//     .should('be.visible')
//     .type(SENHA)
//     .should('have.text','789123')

//     cy.get(el.observacao)
//     .should('be.visible')
//     .type(OBSERVACAO)
//     .should('have.text', OBSERVACAO)
//   })