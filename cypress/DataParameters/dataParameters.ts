import { faker } from '@faker-js/faker';
import * as fakerBr from 'faker-br';
import { format } from 'date-fns';

import {
    AromaSachet,
    CapsuleAroma,
    OrderClosingChannel,
    OrderHasRecipe,
    PatientSearchParameter,
    PaymentStatus,
    Pendency,
    PendingsFilter,
    Profile,
    RecipeType,
    RelationshipsPrescriberAttendantAndCluster,
    ShippingMethod,
    TechnicalDoubtCategory,
    TechnicalDoubtStatus
} from '../import'
import { RecipeReceiptChannel } from '../import'
import { RecipeImportCluster } from '../import'
import { SearchOrder } from '../import'
import { PaymentMethod } from './Enums/paymentMethod';

const environment = Cypress.env('ENVIRONMENT');
const dataEnvironment = Cypress.env(environment);

const currentDate = new Date();
const currentdateLessTwoMinutes = new Date(currentDate);
currentdateLessTwoMinutes.setMinutes(currentDate.getMinutes() - 2);
const receivingDateRecipe = currentdateLessTwoMinutes.toISOString().slice(0, 16);





export type ValidationResult = Cypress.Chainable<{ error?: string; success?: string; }>


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

interface DataParameters<S = string> {

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













export const dataParameters: DataParameters = {

    env: dataEnvironment,

    Url: {
        start: 'http://192.168.0.66:9202/lembretes',
        importRecipes: 'http://192.168.0.66:9202/recipe/importar',
        manageRecipes: 'http://192.168.0.66:9202/recipe/gerenciar',
        services: 'http://192.168.0.66:9202/atendimentos/page/1/',
        servicesInProgress: 'http://192.168.0.66:9202/atendimentos/page/1/',
    },

    User: {
        userAssigned: [faker.helpers.arrayElement(['Tamires', 'Andressa', 'Bruna', 'Mariana', 'Jessica', 'Amanda', 'Maria', 'Daian', 'Ana'])].toString(),
    },

    Prescriber: {
        crmPrescriber: faker.helpers.arrayElement(['123456-SC']),
    },

    Patient: {
        codePatient: faker.helpers.arrayElement(['618484']),
    },

    OrderAndBranch: {
        order: faker.helpers.arrayElement(['896662', '896663', '899551', '905771']),
        branch: faker.helpers.arrayElement(['4']),
    },

    filePath: '/',

    Recipe: {
        import: {
            numberRecipe: 0,
            file: '../fixtures/img/recipeJpeg.jpg',
            prescriber: faker.helpers.arrayElement(['999990-SC']),
            suggestionRelationshipPrescriber: true,
            parameterSearchPatient: PatientSearchParameter.Name,
            patient: faker.helpers.arrayElement(['618484']),
            channelReceiptRecipe: RecipeReceiptChannel.Whatsapp,
            attendantResponsibleRecipes: false ? faker.helpers.arrayElement(['Atendente Tamires Silva Luiz']) : '',
            cluster: false ? RecipeImportCluster.Cluster3 : '',
            receivingDate: currentdateLessTwoMinutes.toISOString().slice(0, 16),
            recipeType: RecipeType.Repetition,
            textNoteRecipe: faker.lorem.paragraph(),
            urgentRecipes: false,
            clientAlert: false,
            controlledMedication: false,
        },
        search: {
            numberRecipe: 0,
            clonePharmaceuticalObservation: true,
            cluster: RecipeImportCluster.Cluster3,
            passwordPharmaceuticalObservation: [faker.helpers.arrayElement(['789123'])].toString(),
            textPharmaceuticalObservation: [faker.helpers.arrayElement(['Teste'])].toString(),
            textTechnicalQuestion: [faker.helpers.arrayElement(['Teste'])].toString(),
            markUserUsage: [faker.helpers.arrayElement(['admin'])].toString(),
            responsibleCurrentAnswerTechnicalQuestion: '',
            textResponseDoubtTechnical: faker.lorem.paragraph(),
            valueJuntocom: [faker.helpers.arrayElement([1020, 1021, 1022])].toString(),
            initialDate: faker.date.between({ from: '2023-01-01T00:00:00.000Z', to: '2023-12-01T00:00:00.000Z' }).toISOString().slice(0, 16),
            finalDate: faker.date.between({ from: '2023-12-02T00:00:00.000Z', to: '2023-12-20T00:00:00.000Z' }).toISOString().slice(0, 16),
            textInternalObservation: faker.lorem.paragraph(),
            receivingDate: receivingDateRecipe,
            attendantResponsibleRecipes: faker.helpers.arrayElement(['tamires silva luiz']),

        },
    },

    Order: {
        timeTreatment: 30,
        timeRepetition: 0,
        textObservationCashierCounter: faker.lorem.paragraph(),
        textNoteShipping: faker.lorem.paragraph(),
        juntocomOrder: faker.helpers.arrayElements([107456, 107246]).toString(),
        textGeneralNote: faker.lorem.paragraph(),
        promisedTo: new Date(),
        budgetist: '',
        orderAttendant: '',
    },

    searchOrder: SearchOrder,
    paymentStatus: PaymentStatus,
    paymentMethod: PaymentMethod,
    orderClosingChannel: OrderClosingChannel,
    pendingsFilter: PendingsFilter,
    recipeReceiptChannel: RecipeReceiptChannel,
    patientSearchParameter: PatientSearchParameter,
    recipeType: RecipeType,
    recipeImportCluster: RecipeImportCluster,
    relationshipsPrescriberAttendantAndCluster: RelationshipsPrescriberAttendantAndCluster,
    pendency: Pendency,
    // parameterOptionPatientSearch: ParameterOptionPatientSearch,
    technicalDoubtCategory: TechnicalDoubtCategory,
    technicalDoubtStatus: TechnicalDoubtStatus,
    profile: Profile,
    shippingMethod: ShippingMethod,
    aromaSachet: AromaSachet,
    capsuleAroma: CapsuleAroma,
    orderHasRecipe: OrderHasRecipe,

};