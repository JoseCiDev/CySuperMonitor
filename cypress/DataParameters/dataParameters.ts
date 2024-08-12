

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
    TechnicalDoubtStatus,
    RecipeReceiptChannel,
    RecipeImportCluster,
    SearchOrder,
    PaymentMethod,
    faker,
    fakerBr,
    format,
    DataParameters,
    CheckAndThrowError,
} from '../import'

const environment = Cypress.env('ENVIRONMENT');
const dataEnvironment = Cypress.env(environment);

const currentDate = new Date();
const currentdateLessTwoMinutes = new Date(currentDate);
currentdateLessTwoMinutes.setMinutes(currentDate.getMinutes() - 2);
const receivingDateRecipe = currentdateLessTwoMinutes.toISOString().slice(0, 16);


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