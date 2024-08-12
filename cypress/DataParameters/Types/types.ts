export type ValidationResult = Cypress.Chainable<{ error?: string; success?: string; }>

export type ElementTypeAndValueOpcional = ({
    [element: string]: string,
    value?: string,
})[];