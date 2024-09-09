export type ValidationResult = Cypress.Chainable<{ error?: string; success?: string; }>

export type ElementTypeAndValueOpcional = {
  element: string;   // O seletor do elemento
  value?: string;    // O valor opcional a ser selecionado no <select>
}[];