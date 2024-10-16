/// <reference path="../../support/cypress.d.ts" />

import {
    BudgetConfirmationAromaSachet,
    BudgetConfirmationCapsuleAroma,
    dateFns,
    faker,
    BudgetClosingChannel,
    BudgetConfirmationBudgetHasRecipe,
    BudgetConfirmationPatientSearchParameter,
    BudgetConfirmationPaymentMethod,
    BudgetConfirmationPaymentStatus,
    RecipePendingFilter,
    Profile,
    RecipeCluster,
    RecipeReceiptChannel,
    RecipeType,
    RelationshipsPrescriberAttendantAndCluster,
    SearchBudget,
    BudgetConfirmationShippingMethod,
    TechnicalDoubtCategory,
    TechnicalDoubtResponseStatus,
    ElementTypeAndValueOpcional,
    ElementControl,
    BudgetConfirmationTypePaymentCourtesyInjectables,
    PayBudgetSelectAroma,
    BudgetInstallments,
    PayBudgetPaymentMethod,
    PayBudgetCreditCardExpirationMonth,
    PayBudgetCreditCardExpirationYear,
    PayBudgetState,
} from '../../import';


export interface ImportRecipe<S = string> {
    numberRecipe: S | number;
    file: S;
    prescriber: S;
    suggestionRelationshipPrescriber: boolean;
    parameterSearchPatient: BudgetConfirmationPatientSearchParameter;
    patient: S;
    channelReceiptRecipe: RecipeReceiptChannel;
    attendantResponsibleRecipes?: boolean | S;
    cluster?: boolean | RecipeCluster | S;
    receivingDate: S;
    recipeType: RecipeType;
    textNoteRecipe: S;
    urgentRecipeElement: boolean;
    clientAlert: boolean;
    controlledMedication: boolean;
    customerPhone: number;
};

export interface SearchRecipe<S = string> {
    initialDate: S;
    finalDate: S;
    cluster: any;
    channelReceipt: RecipeReceiptChannel;
    numberRecipe: number | undefined;
    patient: S;
    prescriber: S;
    budget: number | undefined;
    branch: S | number | undefined;
    lastModifier: S;
    budgetist: S;
    attendantResponsibleRecipes: S;
    pendency: RecipePendingFilter;
};

export interface CloneRecipe<S = string> {
    cloneRecipeWithPharmaceuticalObservation: boolean;
};
export interface PharmaceuticalObservationRecipe<S = string> {
    passwordPharmaceuticalObservation: S;
    textPharmaceuticalObservation: S;
};

export interface TechnicalDoubtRecipe<S = string> {
    technicalDoubtCategory: TechnicalDoubtCategory;
    technicalQuestionText: S;
    recipientTechnicalDoubt: S;
    technicalDoubtResponseStatus: TechnicalDoubtCategory;
    textAnsweringTechnicalDoubt: S;
    deleteTechnicalDoubt: boolean;
    markAsResolvedTechnicalDoubt: boolean;
};





// markUserUsage: S;
// responsibleCurrentAnswerTechnicalQuestion: S;
// textResponseDoubtTechnical: S;
// valueJuntocom: S;
// internalObservation: S;
// receivingDate: S;



export interface CheckAndThrowError {
    condition: boolean;
    errorMessage: string;
}

export interface DataParameters<S = string> {

    env: {
        ENV: 1;
        USER_ADMIN: S;
        USER_ATENDENTE1: S;
        USER_ATENDENTE2: S;
        PASSWORD: S;
        BASE_URL_SM: S;
        BASE_URL_SC: S;
        DB_NAME: S;
        DB_USER: S;
        DB_HOST: S;
        DB_PORT: S;
        DB_PASSWORD: S;
        RECIPE_PASSWORD_USER: S;
        USER_ID: S;
        USER_PASSWORD: S;
    }

    Url: {
        start: S;
        importRecipes: S;
        manageRecipes: S;
        services: S;
        servicesInProgress: S;
    };

    User: {
        userAssigned: S;
    }

    Recipe: {
        import: ImportRecipe;
        search: SearchRecipe;
        clone: CloneRecipe
        pharmaceuticalObservation: PharmaceuticalObservationRecipe,
        technicalDoubt: TechnicalDoubtRecipe,
    };

    Prescriber: {
        crmPrescriber: S;
    };

    Patient: {
        codePatient: S;
    }

    BudgetAndBranch: {
        budget: any;
        branch: any;
    };

    filePath: S;

    Budget: {
        confirmation: {
            orcamentoNumberForSearch: S | number;
            filialNumberForSearch: S | number;
            typePaymentCourtesyInjectables: BudgetConfirmationTypePaymentCourtesyInjectables;
            budgetist: S;
            budgetAttendant: S;
            recipeNumber: S | number;
            customerContactPhoneNumber: S | number;
            timeTreatment: S | number
            paymentMethod: BudgetConfirmationPaymentMethod,
            chosenBudget: S;
            timeRepetition: number;
            budgetClosingChannel: BudgetClosingChannel,
            sendTrackingEmail: boolean,
            releaseBudgetForInclusion: boolean,
            releaseBudgetCashier: boolean,
            cashierObservation: S;
            detailedSale: boolean,
            paymentStatus: BudgetConfirmationPaymentStatus,
            address: S;
            expeditionObservation: S;
            shippingMethod: BudgetConfirmationShippingMethod;
            juntocomBudget: S;
            promisedTo: Date;
            aromaSachet: BudgetConfirmationAromaSachet;
            capsuleAroma: BudgetConfirmationCapsuleAroma;
            generalObservation: S;
            budgetHasRecipeElement: BudgetConfirmationBudgetHasRecipe;
            urgentBudget: boolean;
            automaticMessageTriggering: boolean;
        },
        payment: {
            paymentMethod: PayBudgetPaymentMethod;
            telephone: number;
            email: S;
            fullName: S;
            birthDate: S;
            cpf: number;
            rg: number;
            useRegisteredAddress: boolean;
            zipCode: number;
            state: PayBudgetState;
            city: S;
            district: S;
            street: S;
            houseNumber: number;
            addressComplement: S;
            isMyDeliveryAddress: boolean;
            cardholderName: S;
            cpfCnpj: number;
            cardNumber: number;
            expirationMonth: PayBudgetCreditCardExpirationMonth;
            expirationYear: PayBudgetCreditCardExpirationYear;
            securityCode: number;
            installments: BudgetInstallments;
        },

    }

    searchBudget: typeof SearchBudget;
    paymentStatus: typeof BudgetConfirmationPaymentStatus;
    paymentMethod: typeof BudgetConfirmationPaymentMethod;
    budgetClosingChannel: typeof BudgetClosingChannel;
    pendingsFilter: typeof RecipePendingFilter;
    recipeReceiptChannel: typeof RecipeReceiptChannel;
    patientSearchParameter: typeof BudgetConfirmationPatientSearchParameter;
    recipeType: typeof RecipeType;

    recipeImportCluster: typeof RecipeCluster;
    relationshipsPrescriberAttendantAndCluster: typeof RelationshipsPrescriberAttendantAndCluster;
    recipePendingFilter: typeof RecipePendingFilter;
    technicalDoubtCategory: typeof TechnicalDoubtCategory;
    technicalDoubtStatus: typeof TechnicalDoubtResponseStatus;
    profile: typeof Profile;
    shippingMethod: typeof BudgetConfirmationShippingMethod;
    aromaSachet: typeof BudgetConfirmationAromaSachet;
    capsuleAroma: typeof BudgetConfirmationCapsuleAroma;
    budgetHasRecipe: typeof BudgetConfirmationBudgetHasRecipe;

}