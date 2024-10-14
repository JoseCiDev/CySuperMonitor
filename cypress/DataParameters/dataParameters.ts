
import {
    DataParameters,
    PatientSearchParameter,
    RecipeReceiptChannel,
    RecipeImportCluster,
    RecipeType,
    AromaSachet,
    BudgetClosingChannel,
    BudgetHasRecipe,
    CapsuleAroma,
    faker,
    PaymentMethod,
    PaymentStatus,
    Pendency,
    PendingsFilter,
    Profile,
    RelationshipsPrescriberAttendantAndCluster,
    SearchBudget,
    ShippingMethod,
    TechnicalDoubtCategory,
    TechnicalDoubtStatus,
    fakerBr,
    ChosenBudget,
    TypePaymentCourtesyInjectables,

} from '../import';


const environment = Cypress.env('ENVIRONMENT');
const dataEnvironment = Cypress.env(environment);

const currentDate = new Date();
const currentdateLessTwoMinutes = new Date(currentDate);
currentdateLessTwoMinutes.setMinutes(currentDate.getMinutes() - 2);
const receivingDateRecipe = currentdateLessTwoMinutes.toISOString().slice(0, 16);

export const validationMessages = {
    IMPORT_IMAGE: 'Por favor, insira a imagem da receita.',
    RELATE_PRESCRIBER: 'Por favor, relacione um médico a esta receita.',
    RELATE_PATIENT: 'Por favor, relacione um paciente a esta receita.',
    RELATE_ATTENDANT: 'Por favor, relacione um atendente responsável.',
    CHOOSE_CHANNEL: 'Por favor, escolha o canal de recebimento.',
    DEFINE_DATE: 'Por favor, defina a data de recebimento.',
    DEFINE_TYPE: 'Por favor, defina o tipo de receita.',
    CHOOSE_CLUSTER: 'Por favor, escolha um cluster.',
};

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

    BudgetAndBranch: {
        budget: faker.helpers.arrayElement(['896662', '896663', '899551', '905771']),
        branch: faker.helpers.arrayElement(['4']),
    },

    filePath: '/',

    Recipe: {
        import: {
            numberRecipe: 0,
            file: 'img/recipeJpeg.jpg',
            prescriber: faker.helpers.arrayElement(['999990-SC']),
            suggestionRelationshipPrescriber: true,
            parameterSearchPatient: PatientSearchParameter.Cdcli,
            patient: faker.helpers.arrayElement(['618484']),
            channelReceiptRecipe: RecipeReceiptChannel.Whatsapp,
            attendantResponsibleRecipes: false ? faker.helpers.arrayElement(['Atendente Tamires Silva Luiz']) : '',
            cluster: false ? RecipeImportCluster.Cluster3 : '',
            receivingDate: currentdateLessTwoMinutes.toISOString().slice(0, 16),
            recipeType: RecipeType.HasRecipe,
            textNoteRecipe: faker.lorem.paragraph(),
            urgentRecipeElement: false,
            clientAlert: false,
            controlledMedication: false,
            customerPhone: 48991888641,
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
            internalObservation: faker.lorem.paragraph(),
            receivingDate: receivingDateRecipe,
            attendantResponsibleRecipes: faker.helpers.arrayElement(['tamires silva luiz']),
        },
    },

    Budget: {
        orcamentoNumberForSearch: [faker.helpers.arrayElement(['137771'])].toString(),
        filialNumberForSearch: [faker.helpers.arrayElement(['5'])].toString(),
        typePaymentCourtesyInjectables: TypePaymentCourtesyInjectables.CourtesyComplaintHandling,
        budgetist: 'orcam',
        budgetAttendant: 'adm',
        recipeNumber: '425558',
        customerContactPhoneNumber: 5548991888641,
        paymentMethod: PaymentMethod.CreditCards,
        chosenBudget: ChosenBudget.chosenBudget,
        timeTreatment: 30,
        timeRepetition: 0,
        budgetClosingChannel: BudgetClosingChannel.Whatsapp,
        sendTrackingEmail: false,
        releaseBudgetForInclusion: false,
        releaseBudgetCashier: false,
        cashierObservation: faker.lorem.paragraph(),
        detailedSale: true,
        paymentStatus: PaymentStatus.NotPayed,
        address: '.enderecosCli',
        expeditionObservation: faker.lorem.paragraph(),
        shippingMethod: ShippingMethod.Delivery,
        juntocomBudget: faker.helpers.arrayElements([107456, 107246]).toString(),
        promisedTo: new Date(),
        aromaSachet: AromaSachet.Strawberry,
        capsuleAroma: CapsuleAroma.OrangeWithMintAndSpearmint,
        generalObservation: faker.lorem.lines(),
        budgetHasRecipeElement: BudgetHasRecipe.Yes,
        urgentBudget: false,
        automaticMessageTriggering: true,
    },

    searchBudget: SearchBudget,
    paymentStatus: PaymentStatus,
    paymentMethod: PaymentMethod,
    budgetClosingChannel: BudgetClosingChannel,
    pendingsFilter: PendingsFilter,
    recipeReceiptChannel: RecipeReceiptChannel,
    patientSearchParameter: PatientSearchParameter,
    recipeType: RecipeType,
    recipeImportCluster: RecipeImportCluster,
    relationshipsPrescriberAttendantAndCluster: RelationshipsPrescriberAttendantAndCluster,
    pendency: Pendency,
    technicalDoubtCategory: TechnicalDoubtCategory,
    technicalDoubtStatus: TechnicalDoubtStatus,
    profile: Profile,
    shippingMethod: ShippingMethod,
    aromaSachet: AromaSachet,
    capsuleAroma: CapsuleAroma,
    budgetHasRecipe: BudgetHasRecipe,
};
