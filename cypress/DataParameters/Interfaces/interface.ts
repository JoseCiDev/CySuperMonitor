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
    RecipeStatus,
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

export interface Recipe<S = string> {
    file?: string;
    prescriber?: string;
    patient?: string;
    cluster?: boolean | RecipeCluster | string;
    receivingDate?: string;
    urgentRecipe?: boolean;
    clientAlert?: boolean;
    controlledMedication?: boolean;
}

export interface RecipeImport extends Recipe {
    suggestionRelationshipPrescriber?: boolean; // Made optional
    parameterSearchPatient?: string;
    channelReceiptRecipe?: string;
    attendantResponsibleRecipes?: string;
    recipeStatus?: string;
    textNoteRecipe?: string;
    noMainContact?: boolean;
    isTheMainContact?: boolean;
    mainContactRecipe?: string;
    customerPhone?: number;
}


export interface RecipeDetails extends Recipe {
    recipeNumber: number;
    attendantResponsible: string;
    potential: string;
    lastUpdate: string;
    budgeist: string;
}

export interface RecipeSearch<S = string> extends Partial<Recipe> {
    initialDate?: S;
    finalDate?: S;
    channelReceipt?: S | RecipeReceiptChannel;
    recipeNumber?: S | number;
    budget?: S | number;
    branch?: S;
    lastModifier?: S;
    budgetist?: S;
    attendantResponsibleRecipes?: S;
    pendency?: S | RecipePendingFilter;
}

export interface RecipeLink<S = string> {
    from: 'importRecipe' | 'manageRecipe' | 'attendance';
    linkRecipeButton?: string;
    budgetAndBranchInput?: string;
    budget?: string;
    branch?: string;
    recipe?: string;
    linkRecipeField?: string;
}

export interface RecipeClone<S = string> extends Recipe {
    cloneRecipeWithPharmaceuticalObservation?: boolean;
}
export interface RecipePharmaceuticalObservation<S = string> {
    passwordPharmaceuticalObservation: S;
    textPharmaceuticalObservation: S;
};

export interface RecipeTechnicalDoubt<S = string> {
    technicalDoubtCategory: TechnicalDoubtCategory;
    technicalQuestionText: S;
    recipientTechnicalDoubt: S;
    technicalDoubtResponseStatus: TechnicalDoubtCategory;
    textAnsweringTechnicalDoubt: S;
    deleteTechnicalDoubt: boolean;
    markAsResolvedTechnicalDoubt: boolean;
};



export interface BudgetConfirmation<S = string> {
    orcamentoNumberForSearch?: S | number;
    filialNumberForSearch?: S | number;
    typePaymentCourtesyInjectables?: BudgetConfirmationTypePaymentCourtesyInjectables;
    budgetist?: S;
    budgetAttendant?: S;
    recipeNumber?: S | number;
    customerContactPhoneNumber?: S | number;
    timeTreatment?: S | number;
    paymentMethod?: BudgetConfirmationPaymentMethod;
    chosenBudget?: S;
    timeRepetition?: number;
    budgetClosingChannel?: BudgetClosingChannel;
    sendTrackingEmail?: boolean;
    releaseBudgetForInclusion?: boolean;
    releaseBudgetCashier?: boolean;
    cashierObservation?: S;
    detailedSale?: boolean;
    paymentStatus?: BudgetConfirmationPaymentStatus;
    address?: S;
    expeditionObservation?: S;
    shippingMethod?: BudgetConfirmationShippingMethod;
    juntocomBudget?: S;
    promisedTo?: Date;
    aromaSachet?: BudgetConfirmationAromaSachet;
    capsuleAroma?: BudgetConfirmationCapsuleAroma;
    generalObservation?: S;
    budgetHasRecipeElement?: BudgetConfirmationBudgetHasRecipe;
    urgentBudget?: boolean;
    automaticMessageTriggering?: boolean;
}

export interface BudgetPayment<S = string> {
    paymentMethod?: PayBudgetPaymentMethod;
    telephone?: number;
    email?: S;
    fullName?: S;
    birthDate?: S;
    cpf?: number;
    rg?: number;
    useRegisteredAddress?: boolean;
    zipCode?: number;
    state?: PayBudgetState;
    city?: S;
    district?: S;
    street?: S;
    houseNumber?: number;
    addressComplement?: S;
    isMyDeliveryAddress?: boolean;
    cardholderName?: S;
    cpfCnpj?: number;
    cardNumber?: number;
    expirationMonth?: PayBudgetCreditCardExpirationMonth;
    expirationYear?: PayBudgetCreditCardExpirationYear;
    securityCode?: number;
    installments?: BudgetInstallments;
}

export interface BudgetDetails {
    paymentMethod: string;
    closingChannel: string;
    cashierObservation: string;
    detailedNote: string;
    paymentStatus: string;
    address: string;
    generalObservation: string;
    shippingMethod: string;
    deliveryPromiseDate: string;
    sacheAroma: string;
    capsuleAroma: string;
    prescriptionStatus: string;
    urgentOrder: string;
}

export interface BudgetFillOrcamentistaAndAtendente {
    budgetist?: string;
    budgetAttendant?: string;
}

export interface BudgetSelectCustomerContact {
    customerContactPhoneNumber?: string;
}





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
        BASE_URL: S;
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

    Recipe: {
        injectablesBranch: S[];
        import: RecipeImport;
        search: RecipeSearch;
        clone: RecipeClone
        pharmaceuticalObservation: RecipePharmaceuticalObservation,
        technicalDoubt: RecipeTechnicalDoubt,
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
    recipeStatus: typeof RecipeStatus;

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