
import {
    DataParameters,
    BudgetConfirmationPatientSearchParameter,
    RecipeReceiptChannel,
    RecipeCluster,
    RecipeType,
    BudgetConfirmationAromaSachet,
    BudgetClosingChannel,
    BudgetConfirmationBudgetHasRecipe,
    BudgetConfirmationCapsuleAroma,
    faker,
    BudgetConfirmationPaymentMethod,
    BudgetConfirmationPaymentStatus,
    RecipePendingFilter,
    Profile,
    RelationshipsPrescriberAttendantAndCluster,
    SearchBudget,
    BudgetConfirmationShippingMethod,
    TechnicalDoubtCategory,
    TechnicalDoubtResponseStatus,
    fakerBr,
    ChosenBudget,
    BudgetConfirmationTypePaymentCourtesyInjectables,
    PayBudgetSelectAroma,

} from '../import';
import { BudgetInstallments } from './Enums/budgetInstallments';
import { PayBudgetPaymentMethod } from './Enums/payBudgetPaymentMethod';
import { PayBudgetCreditCardExpirationMonth } from './Enums/payBudgetCreditCardExpirationMonth';
import { PayBudgetCreditCardExpirationYear } from './Enums/payBudgetCreditCardExpirationYear';
import { PayBudgetState } from './Enums/payBudgetState';
import { clusterSearchElement } from '../support/commands/commands';


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
        userAssigned: String([faker.helpers.arrayElement(['Tamires', 'Andressa', 'Bruna', 'Mariana', 'Jessica', 'Amanda', 'Maria', 'Daian', 'Ana'])]),
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
            parameterSearchPatient: BudgetConfirmationPatientSearchParameter.Cdcli,
            patient: faker.helpers.arrayElement(['618484']),
            channelReceiptRecipe: RecipeReceiptChannel.Whatsapp,
            attendantResponsibleRecipes: false ? faker.helpers.arrayElement(['Atendente Tamires Silva Luiz']) : '',
            cluster: false ? RecipeCluster.Cluster3 : '',
            receivingDate: currentdateLessTwoMinutes.toISOString().slice(0, 16),
            recipeType: RecipeType.HasRecipe,
            textNoteRecipe: faker.lorem.paragraph(),
            urgentRecipeElement: false,
            clientAlert: false,
            controlledMedication: false,
            customerPhone: 48991888641,
        },
        search: {
            numberRecipe: undefined,//digitar o numero da receita ou undefined
            initialDate: '',//formato da data YYYY-MM-DDThh:mm:ss | Ex:2024-10-01T00:00 ou  ''
            finalDate: '',//formato da data YYYY-MM-DDThh:mm:ss | Ex:2024-10-17T23:59 ou ''
            cluster: undefined,//RecipeCluster.Cluster1 ou undefined
            channelReceipt: undefined,//RecipeReceiptChannel.Whatsapp ou undefined
            patient: String([faker.helpers.arrayElement([''])]),//digitar o paciente entre as aspas ou  ''
            prescriber: String([faker.helpers.arrayElement([''])]),//digitar o prescritor entre as aspas ou ''
            budget: undefined,//digitar o numero de orçamento ou undefined
            branch:'',//digitar o numero de filial entre as aspas ou ''
            lastModifier: String([faker.helpers.arrayElement([''])]),//digitar o nome do usuário entre as aspas ou ''
            budgetist: String([faker.helpers.arrayElement([''])]),//digitar o nome do usuário entre as aspas ou ''
            attendantResponsibleRecipes: faker.helpers.arrayElement(['']),//digitar o nome do usuário entre as aspas ou ''
            pendency: RecipePendingFilter.Pending,//RecipePendingFilter.Pending ou undefined
        },
        clone: {
            cloneRecipeWithPharmaceuticalObservation: false,//true clona com observacao, false clona sem observacao
        },
        pharmaceuticalObservation: {
            passwordPharmaceuticalObservation: String([faker.helpers.arrayElement(['789123'])]),
            textPharmaceuticalObservation: String([faker.helpers.arrayElement(['Teste'])]),
        },
        technicalDoubt: {
            technicalDoubtCategory: TechnicalDoubtCategory.DoubtConferences,
            technicalQuestionText: faker.lorem.paragraph(),
            recipientTechnicalDoubt: String([faker.helpers.arrayElement(['Teste'])]),
            technicalDoubtResponseStatus: TechnicalDoubtCategory.InternalDoubt,
            textAnsweringTechnicalDoubt: faker.lorem.paragraph(),
            deleteTechnicalDoubt: false,
            markAsResolvedTechnicalDoubt: false,
        }


        // textTechnicalQuestion: String([faker.helpers.arrayElement(['Teste'])]),
        // markUserUsage: String([faker.helpers.arrayElement(['admin'])]),
        // responsibleCurrentAnswerTechnicalQuestion: '',
        // textResponseDoubtTechnical: faker.lorem.paragraph(),
        // valueJuntocom: String([faker.helpers.arrayElement([1020, 1021, 1022])]),
        // internalObservation: faker.lorem.paragraph(),
        // receivingDate: receivingDateRecipe,


    },

    Budget: {
        confirmation: {
            orcamentoNumberForSearch: String([faker.helpers.arrayElement(['34959'])]),
            filialNumberForSearch: String([faker.helpers.arrayElement(['1313'])]),
            typePaymentCourtesyInjectables: BudgetConfirmationTypePaymentCourtesyInjectables.CourtesyComplaintHandling,
            budgetist: 'orcam',
            budgetAttendant: 'adm',
            recipeNumber: String([faker.helpers.arrayElement(['425558'])]),
            customerContactPhoneNumber: 5548991888641,
            paymentMethod: BudgetConfirmationPaymentMethod.CreditCards,
            chosenBudget: ChosenBudget.chosenBudget,
            timeTreatment: 30,
            timeRepetition: 0,
            budgetClosingChannel: BudgetClosingChannel.Whatsapp,
            sendTrackingEmail: false,
            releaseBudgetForInclusion: false,
            releaseBudgetCashier: false,
            cashierObservation: faker.lorem.paragraph(),
            detailedSale: true,
            paymentStatus: BudgetConfirmationPaymentStatus.NotPayed,
            address: '.enderecosCli',
            expeditionObservation: faker.lorem.paragraph(),
            shippingMethod: BudgetConfirmationShippingMethod.Delivery,
            juntocomBudget: String(faker.helpers.arrayElements([107456, 107246])),
            promisedTo: new Date(),
            aromaSachet: BudgetConfirmationAromaSachet.Strawberry,
            capsuleAroma: BudgetConfirmationCapsuleAroma.OrangeWithMintAndSpearmint,
            generalObservation: faker.lorem.lines(),
            budgetHasRecipeElement: BudgetConfirmationBudgetHasRecipe.Yes,
            urgentBudget: false,
            automaticMessageTriggering: true,
        },
        payment: {
            paymentMethod: PayBudgetPaymentMethod.Pix,
            telephone: faker.helpers.arrayElement([48991888641]),
            email: faker.helpers.arrayElement(['jose.djalma@essentia.com.br']),
            fullName: faker.helpers.arrayElement(['Jose Djalma Ferreira Mendes']),
            birthDate: faker.helpers.arrayElement(['01/02/1988']),
            cpf: faker.helpers.arrayElement([96518369035]),
            rg: faker.helpers.arrayElement([6207538]),
            useRegisteredAddress: true,
            zipCode: faker.helpers.arrayElement([89213320]),
            state: PayBudgetState.BA,
            city: String([faker.helpers.arrayElement(['Joinville'])]),
            district: String([faker.helpers.arrayElement(['Nova Brasilia'])]),
            street: String([faker.helpers.arrayElement(['Rua Paranagua'])]),
            houseNumber: faker.helpers.arrayElement([106]),
            addressComplement: String([faker.helpers.arrayElement(['casa de esquina'])]),
            isMyDeliveryAddress: true,
            cardholderName: String([faker.helpers.arrayElement(['JOSE D F MENDES'])]),
            cpfCnpj: faker.helpers.arrayElement([52596499070]),
            cardNumber: faker.helpers.arrayElement([5555555555554444]),
            expirationMonth: PayBudgetCreditCardExpirationMonth.Fevereiro,
            expirationYear: PayBudgetCreditCardExpirationYear.Ano2032,
            securityCode: faker.helpers.arrayElement([123]),
            installments: BudgetInstallments.Parcela1,
        },

    },

    searchBudget: SearchBudget,
    paymentStatus: BudgetConfirmationPaymentStatus,
    paymentMethod: BudgetConfirmationPaymentMethod,
    budgetClosingChannel: BudgetClosingChannel,
    pendingsFilter: RecipePendingFilter,
    recipeReceiptChannel: RecipeReceiptChannel,
    patientSearchParameter: BudgetConfirmationPatientSearchParameter,
    recipeType: RecipeType,
    recipeImportCluster: RecipeCluster,
    relationshipsPrescriberAttendantAndCluster: RelationshipsPrescriberAttendantAndCluster,
    recipePendingFilter: RecipePendingFilter,
    technicalDoubtCategory: TechnicalDoubtCategory,
    technicalDoubtStatus: TechnicalDoubtResponseStatus,
    profile: Profile,
    shippingMethod: BudgetConfirmationShippingMethod,
    aromaSachet: BudgetConfirmationAromaSachet,
    capsuleAroma: BudgetConfirmationCapsuleAroma,
    budgetHasRecipe: BudgetConfirmationBudgetHasRecipe,
};
