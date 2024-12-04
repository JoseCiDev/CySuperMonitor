import {
  BudgetConfirmation,
  BudgetPayment,
  RecipeClone,
  RecipeDetails,
  RecipeImport,
  RecipeLink,
  RecipePharmaceuticalObservation,
  RecipeSearch,
  RecipeTechnicalDoubt
} from "../../import";

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

export type Recipe = RecipeImport | RecipeDetails | RecipeSearch | RecipeLink | RecipeClone | RecipePharmaceuticalObservation | RecipeTechnicalDoubt;

export type Budget = BudgetConfirmation | BudgetPayment;
