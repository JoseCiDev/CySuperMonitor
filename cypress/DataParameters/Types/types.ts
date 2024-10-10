export type ValidationResult = Cypress.Chainable<{ error?: string; success?: string; }>

export type ElementTypeAndValueOpcional = {
  element: string; 
  value?: string; 
}[];

export type ConditionalWrite = {
  [key: string]: [boolean, string];
};

export type ElementControl = {
  element: string;
  value?: boolean | string;
}[];

