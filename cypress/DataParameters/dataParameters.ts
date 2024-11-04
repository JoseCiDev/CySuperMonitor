
import {
    DataParameters,
    BudgetConfirmationPatientSearchParameter,
    RecipeReceiptChannel,
    RecipeCluster,
    RecipeStatus,
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

    filePath: '/',

    Recipe: {
        injectablesBranch:['13','1313','2013'],
        import: {
            recipeNumber: 0,
            file: 'img/recipeExample.jpg',//'img/recipeExample.pdf' 'img/recipeExample.jpg' undefined
            prescriber: faker.helpers.arrayElement(['fabio juca','leonardo higashi','nina sobral','victor sorrentino','elisa urban von damm']),
            suggestionRelationshipPrescriber: true,
            parameterSearchPatient: BudgetConfirmationPatientSearchParameter.Cdcli,
            patient: faker.helpers.arrayElement(['jose djalma ferreira mendes','neymar da silva santos jr','bruna marquezine','juliana paes de lima','isabela sens de souza']),
            channelReceiptRecipe: RecipeReceiptChannel.Whatsapp,
            attendantResponsibleRecipes: false ? faker.helpers.arrayElement(['Graziele Fabiane Martins Wahl']) : '',
            cluster: RecipeCluster.Cluster3,
            receivingDate: currentdateLessTwoMinutes.toISOString().slice(0, 16),
            recipeStatus: RecipeStatus.HasRecipe,
            textNoteRecipe: faker.lorem.paragraph(),
            urgentRecipe: false,
            clientAlert: false,
            controlledMedication: false,
            noMainContact:true, // true false,
            isTheMainContact:true, // true false,
            mainContactRecipe: faker.helpers.arrayElement(['618484']), //true false
            customerPhone: 48991888641,
        },
        search: {
            recipeNumber: undefined,//digitar o numero da receita ou undefined
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
            orcamentoNumberForSearch: String([faker.helpers.arrayElement(['338365'])]),
            filialNumberForSearch: String([faker.helpers.arrayElement(['1000'])]),
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
            shippingMethod: BudgetConfirmationShippingMethod.SedexSC,
            juntocomBudget: String(faker.helpers.arrayElements([107456, 107246])),
            promisedTo: new Date(),
            aromaSachet: BudgetConfirmationAromaSachet.Strawberry,
            capsuleAroma: BudgetConfirmationCapsuleAroma.OrangeWithMintAndSpearmint,
            generalObservation: faker.lorem.lines(),
            budgetHasRecipeElement: BudgetConfirmationBudgetHasRecipe.Yes,
            urgentBudget: true,
            automaticMessageTriggering: true,
        },
        payment: {
            paymentMethod: PayBudgetPaymentMethod.CreditCard,
            telephone: faker.helpers.arrayElement([48991888641]),
            email: faker.helpers.arrayElement(['djalmapsico@gmail.com']),
            fullName: faker.helpers.arrayElement(['Tamires Silva Luis']),
            birthDate: faker.helpers.arrayElement(['10/01/1990']),
            cpf: faker.helpers.arrayElement([70557958008]),
            rg: faker.helpers.arrayElement([6207538]),//faker.helpers.arrayElement([6207538])
            useRegisteredAddress: true,
            zipCode: faker.helpers.arrayElement([89213320]),
            state: PayBudgetState.PA,
            city: String([faker.helpers.arrayElement(['Patos de Minas'])]),
            district: String([faker.helpers.arrayElement(['Alvorada'])]),
            street: String([faker.helpers.arrayElement(['Rua Pedro Firmino da Rocha'])]),
            houseNumber: faker.helpers.arrayElement([128]),
            addressComplement: String([faker.helpers.arrayElement(['esquina'])]),//String([faker.helpers.arrayElement(['esquina'])])
            isMyDeliveryAddress: true,
            cardholderName: String([faker.helpers.arrayElement(['TAMIRES S L'])]),
            cpfCnpj: faker.helpers.arrayElement([28729993024]),
            cardNumber: faker.helpers.arrayElement([5555555555554444]),
            expirationMonth: PayBudgetCreditCardExpirationMonth.Marco,
            expirationYear: PayBudgetCreditCardExpirationYear.Ano2030,
            securityCode: faker.helpers.arrayElement([737]),
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
    recipeStatus: RecipeStatus,
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
