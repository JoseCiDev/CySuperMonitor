/// <reference path="../../support/cypress.d.ts" />

import {
    AromaSachet,
    CapsuleAroma,
    dateFns,
    faker,
    OrderClosingChannel,
    OrderHasRecipe,
    PatientSearchParameter,
    PaymentMethod,
    PaymentStatus,
    Pendency,
    PendingsFilter,
    Profile,
    RecipeImportCluster,
    RecipeReceiptChannel,
    RecipeType,
    RelationshipsPrescriberAttendantAndCluster,
    SearchOrder,
    ShippingMethod,
    TechnicalDoubtCategory,
    TechnicalDoubtStatus,
} from '../../import';


export interface RecipeImport<S = string> {
    numberRecipe: S | number;
    file: S;
    prescriber: S;
    suggestionRelationshipPrescriber: boolean;
    parameterSearchPatient: PatientSearchParameter;
    patient: S;
    channelReceiptRecipe: RecipeReceiptChannel;
    attendantResponsibleRecipes?: boolean | S;
    cluster?: boolean | RecipeImportCluster | S;
    receivingDate: S;
    recipeType: RecipeType;
    textNoteRecipe: S;
    urgentRecipes: boolean;
    clientAlert: boolean;
    controlledMedication: boolean;
}

export interface SearchRecipe<S = string> {
    numberRecipe: S | number;
    cluster: any;
    clonePharmaceuticalObservation: boolean;
    passwordPharmaceuticalObservation: S;
    textPharmaceuticalObservation: S;
    textTechnicalQuestion: S;
    markUserUsage: S;
    responsibleCurrentAnswerTechnicalQuestion: S;
    textResponseDoubtTechnical: S;
    valueJuntocom: S;
    initialDate: S;
    finalDate: S;
    textInternalObservation: S;
    receivingDate: S;
    attendantResponsibleRecipes: S;
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
        USER_INCLUSAO: S;
        USER_CONFENTRADA: S;
        USER_CONFSAIDA: S;
        USER_EXPEDICAO: S;
        PASSWORD: S;
        BASE_URL_PRODUCTION: S;
        BASE_URL_HOMOLOG: S;
        DB_NAME: S;
        DB_USER: S;
        DB_HOST: S;
        DB_PORT: S;
        DB_PASSWORD: S;
        RECIPE_PASSWORD_USER: S;
        AUTH_TOKEN: S;
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
        import: RecipeImport;
        search: SearchRecipe;
    };

    Prescriber: {
        crmPrescriber: S;
    };

    Patient: {
        codePatient: S;
    }

    OrderAndBranch: {
        order: any;
        branch: any;
    };

    filePath: S;

    Order: {
        timeTreatment: number;
        timeRepetition: number;
        textObservationCashierCounter: S;
        textNoteShipping: S;
        juntocomOrder: S;
        textGeneralNote: S;
        promisedTo: Date;
        budgetist: S;
        orderAttendant: S;
    }

    searchOrder: typeof SearchOrder;
    paymentStatus: typeof PaymentStatus;
    paymentMethod: typeof PaymentMethod;
    orderClosingChannel: typeof OrderClosingChannel;
    pendingsFilter: typeof PendingsFilter;
    recipeReceiptChannel: typeof RecipeReceiptChannel;
    patientSearchParameter: typeof PatientSearchParameter;
    recipeType: typeof RecipeType;

    recipeImportCluster: typeof RecipeImportCluster;
    relationshipsPrescriberAttendantAndCluster: typeof RelationshipsPrescriberAttendantAndCluster;
    pendency: typeof Pendency;
    // OpcaoParametroBuscaPaciente: typeof OpcaoParametroBuscaPaciente;
    technicalDoubtCategory: typeof TechnicalDoubtCategory;
    technicalDoubtStatus: typeof TechnicalDoubtStatus;
    profile: typeof Profile;
    shippingMethod: typeof ShippingMethod;
    aromaSachet: typeof AromaSachet;
    capsuleAroma: typeof CapsuleAroma;
    orderHasRecipe: typeof OrderHasRecipe;

}