/// <reference types="cypress" />
/// <reference types="cypress-wait-until" />

import {
  mount,
  ElementTypeAndValueOpcional,
  ValidationResult,
  PayBudgetSelectAroma,
} from '../import'

interface DataHora {
  DATA_FORMATADA: string;
  HORA_FORMATADA: string;
}

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {

      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<Element>

      /**
       * comando customizado de login.
       * @example cy.login('user', 'password')
       */
      login(user: string, password: string, elementError: string, baseUrl: string): ValidationResult;

      /**
       * comando customizado para inserir arquivos.
       * @example cy.insertFile('img/ReceitaJpeg(1).jpeg', el.importarImagem);
       */
      insertFile(filePath, element, mimeType?): Chainable<unknown>;

      /**
       * comando customizado para ler arquivos
       * @example cy.readFile('budgetAndBranch.json')
       */
      readFile(fileName: string)

      /**
            * comando customizado para ler arquivos
      * @example cy.lerArquivo('orcamentoFilial.json')
        */
      readFileFromFixture(fileName: string): ValidationResult;

      /**
      * comando customizado para buscar receitas.
      * @example cy.searchRecipe()
      */
      searchRecipe(options?: {
        initialDate?: string;
        finalDate?: string;
        cluster?: string;
        channelReceipt?: string;
        numberRecipe?: number;
        patient?: string;
        prescriber?: string;
        budget?: number;
        branch?: S ;
        lastModifier?: string;
        budgetist?: string;
        attendantResponsibleRecipes?: string;
        pendency?: string;
      }): ValidationResult;

      /**
      * comando customizado para selecionar o elemento e clicar.
      * @example cy.getElementAndClick(el.elemento)
      */
      getElementAndClick(...elements: string[]): ValidationResult;

      /**
      * comando customizado de login.
      * @example cy.getElementAndClick(el.elemento)
      */
      getElementAndType(elements: { [key: string]: string | number }): ValidationResult

      /**
       * comando customizado para capturar elemento e marcar checkbox.
       * @example cy.getElementAndCheck(el.elemento)
       */
      getElementAndCheck(elements: ElementControl[]): ValidationResult;

      /**
       * comando customizado para selecionar a opcao radio.
       * @example cy.getRadioOptionByValue(element,valor)
       */
      getRadioOptionByValue(elements: ElementTypeAndValueOpcional): ValidationResult

      /**
      * comando customizado para selecionar opção do select.
      * @example cy.getSelectOptionByValue(el.elemento)
      */
      getSelectOptionByValue(elements: ElementTypeAndValueOpcional): ValidationResult;

      /**
       * comando customizado para marcar uso em receitas e orçamentos.
       * @example cy.marcarUso(checkboxMarkUse)
       */
      markUsage(elementMarkUsage: string, userMarkUsage: string): Chainable<Element>

      /**
      * comando customizado para visualizar receitas.
      * @example cy.viewRecipe(viewRecipe)
      */
      viewRecipe(viewRecipeElement: string): Chainable<Element>

      /**
      * comando customizado para clonar receitas.
      * @example cy.cloneRecipe(cloneRecipe)
      */
      cloneRecipe(cloneRecipeElement: string, options?: {
        cloneRecipeWithPharmaceuticalObservation?: boolean,
      }): ValidationResult;

      /**
      * comando customizado para excluir receitas.
      * @example cy.deleteRecipe(el.deleteRecipe)
      */
      deleteRecipe(exclude: string): Chainable<Element>

      /**
      * comando customizado para inserir observacoes farmaceuticas, em receitas.
      * @example cy.insertPharmaceuticalObservation(accessPharmaceuticalObservations,dataParameters.Recipe.senhaObservacaoFarmaceutica,dataParameters.Recipe.textoObservacaoFarmaceutica)
      */
      insertPharmaceuticalObservation(accessPharmaceuticalObservations: string, passwordRecipe: string, textNote: string): Chainable<Element>

      /**
      * comando customizado para excluir observacoes farmaceuticas, em receitas.
      * @example cy.deletePharmaceuticalObservation(accessPharmaceuticalObservations,dataParameters.Recipe.senhaObservacaoFarmaceutica,dataParameters.Recipe.textoObservacaoFarmaceutica)
      */
      deletePharmaceuticalObservation(accessPharmaceuticalObservations: string): Chainable<Element>

      /**
      * comando customizado para criar dúvidas técnicas em receitas.
      * @example cy.CreateTechnicalDoubt()
      */
      CreateTechnicalDoubt(accessingDoubtsTechnical: string, category: string, textoDuvidaTecnica: string, collaborator: string): Chainable<Element>

      /**
      * comando customizado para update modal de dúvidas técnicas, em receitas.
      * @example cy.updateModalTechnicalQuestion(updateModalTechnicalQuestion)
      */
      updateModalTechnicalQuestion(update: string): void

      /**
      * comando customizado para alterar o responsável pela resposta da dúvida técnica, em receitas.
      * @example cy.changeResponsibleDoubtTechinical(updateModalTechnicalQuestion)
      */
      changeResponsibleDoubtTechinical(accessingDoubtsTechnical: string, responsibleResponseDoubtTechnical: string): Chainable<Element>

      /**
     * comando customizado para marcar dúvida técnica como resolved, em receitas.
     * @example cy.marcarComoResolvidoDuvidaTecnica(MarcarDuvidaTecnicaResolvido)
     */
      markDoubtTechnicalSolved(accessingDoubtsTechnical: string): Chainable<Element>

      /**
     * comando customizado para excluir dúvida técnica, em receitas.
     * @example cy.deleteTechnicalQuestion(deleteTechnicalQuestion)
     */
      deleteTechnicalQuestion(accessingDoubtsTechnical: string): Chainable<Element>

      /**
     * comando customizado para excluir dúvida técnica, em receitas.
     * @example cy.deleteTechnicalQuestion(deleteTechnicalQuestion)
     */
      answerDoubtTechnical(accessingDoubtsTechnical: string, status: string, text: string): Chainable<Element>

      /**
           * comando customizado para excluir dúvida técnica, em receitas.
           * @example cy.deleteTechnicalQuestion(deleteTechnicalQuestion)
           */
      assignUser(fieldAssignment: string, user: string): Chainable<Element>

      /**
     * comando customizado para excluir dúvida técnica, em receitas.
     * @example cy.deleteTechnicalQuestion(deleteTechnicalQuestion)
     */
      editRecipe(image: string, buttonImportImageRecipes: string, prescriberData: string): Chainable<Element>

      /**
       * * comando customizado para acessar o menu Atendimentos.
       * @example cy.adicionaObservacaoFarmaceutica()
       */
      accessMenuServices(element: string): Chainable<Element>

      /**
       * * comando customizado para acessar o menu Orçamentos em andamento.
       * @example cy.acessarOrçamentosEmAndamento(atendimentoEmAndamento)
       */
      accessServicesInProgress(element: string): Chainable<Element>

      /**
       * * comando customizado para acessar selecionar opcao "meus" ou "todos" para buscar orçamentos.
       * @example cy.opcaoMeusETodosBuscaOrcamento(Meus)
       */
      optionMyAndAllSearchBudget(optionsSearch: string): Chainable<Element>;

      /**
       * * comando customizado para buscar orçamentos inserindo orcamento e branch.
       * @example cy.searchBudget(budget,branch)
       */
      searchBudget(budget: number, branch: number);

      /**
       * * comando customizado para visulizar orçamentos.
       * @example cy.viewBudget(buttonView)
       */
      viewBudget(): Chainable<Element>;

      /**
       * * comando customizado para reabrir orçamentos.
       * @example cy.reopenBudget(budget,branch)
       */
      reopenBudget(budget: number, branch: number);

      /**
       * * comando customizado para inserir tempo de tratamento.
       * @example cy.insertTimeTreatment(timeTreatment)
       */
      insertTimeTreatment(options?: {
        timeTreatment?: string | number,
      }): ValidationResult;


      /**
       * * comando customizado para vincular recipe ao budget.
       * @example cy.vincularReceitaOrçamento(buttonLinkRecipeScreenServiceProgress,dataParameters.Recipe.numberRecipe)
       */
      linkBudgetRecipe(buttonLink: string, numberRecipe?: number): ValidationResult;

      /**
       * * comando customizado para desvincular recipe ao budget.
       * @example cy.desvincularReceitaOrçamento(timeTreatment)
       */
      unlinkBudgetRecipe(buttonUnlink: string): Chainable<Element>;

      /**
      * * comando customizado para importar orçamentos .
      * @example cy.budgetImport(modalImportacao,numerOrcamento,branchNumber,budgetImport)
      */
      budgetImport(): Chainable<Element>

      /**
      * * comando customizado para alterar usuário do budget .
      * @example cy.changeUsersBudget(budgetist,attendant)
      */
      changeUsersBudget(budgetist: string, attendant: string): Chainable<Element>

      /**
     * * comando customizado para configurar relação entre Atendente, cluster e Prescriber .
     * @example cy.changeUsersBudget(budgetist,attendant)
     */
      configureRelationshipAtendenteClusterPrescriber(fileName: string): ValidationResult

      /**
       * * comando customizado para selecionar elemento autocomplete apos digitar e capturar sugestão autocomplete clicando.
       * @example cy.getElementAutocompleteTypeAndClick(orcamentista,atendente)
       */
      getElementAutocompleteTypeAndClick(elements: { [key: string]: string }, autocomplete: string): ValidationResult;

      /**
     * * comando customizado para configurar relação entre Atendente, cluster e Prescriber .
     * @example cy.changeUsersBudget(budgetist,attendant)
     */
      waitModalAndClick(jqueryElement: string, element: string, checkType): ValidationResult

      /**
     * * comando customizado para importar receitas.
     * @example cy.importRecipe( file: 'path/to/file.jpg')
     */
      importRecipe(options?: {
        file?: string;
        prescriber?: string | number;
        parameterSearchPatient?: string;
        patient?: string | number;
        channelReceipt?: string;
        attendantResponsibleRecipes?: string;
        receivingDate?: string;
        recipeType?: string;
        textInternalObservation?: string;
        urgentRecipe?: boolean;
        clientAlert?: boolean;
        medicineControlled?: boolean;
        customerPhone?: string | number
      }): Chainable<ValidationResult>;

      /**
     * * comando customizado para capturar o número da recipe .
     * @example cy.captureRecipeNumber(budgetist,attendant)
     */
      captureRecipeNumber(RecipeNumberElement: string)

      /**
       * * comando customizado para confirmar orçamentos.
       * @example cy.fillOrcamentistaAndAtendente()
       */
      fillOrcamentistaAndAtendente(options?: {
        budgetist?: string,
        budgetAttendant?: string,
      }): ValidationResult;

      /**
      * * comando customizado para confirmar orçamentos.
      * @example cy.selectCustomerContact()
      */
      selectCustomerContact(options?: {
        customerContactPhoneNumber?: string,
      }): ValidationResult;

      /**
       * * comando customizado para confirmar orçamentos.
       * @example cy.confirmBudget()
       */
      confirmBudget(options?: {
        orcamentoNumberForSearch?: S | number;
        filialNumberForSearch?: S | number;
        typePaymentCourtesyInjectables?: typePaymentCourtesyInjectables;
        budgetist?: string,
        budgetAttendant?: string,
        paymentMethod?: BudgetConfirmationPaymentMethod,
        chosenBudget?: string,
        timeRepetition?: number,
        budgetClosingChannel?: BudgetClosingChannel,
        sendTrackingEmail?: boolean,
        releaseBudgetForInclusion?: boolean,
        releaseBudgetCashier?: boolean,
        cashierObservation?: string,
        detailedSale?: boolean,
        paymentStatus?: PaymentStatus,
        address?: string,
        expeditionObservation?: string,
        shippingMethod?: BudgetConfirmationShippingMethod,
        juntocomBudget?: string,
        promisedTo?: Date,
        aromaSachet?: BudgetConfirmationAromaSachet,
        capsuleAroma?: BudgetConfirmationCapsuleAroma,
        generalObservation?: string,
        urgentBudget?: boolean,
        automaticMessageTriggering?: boolean,
      }): ValidationResult;



      /**
       * * comando customizado para confirmar orçamentos.
       * @example cy.confirmBudget()
       */
      payBudget(options?: {
        paymentMethod?: PayBudgetPaymentMethod,
        telephone?: number;
        email?: S;
        fullName?: S;
        birthDate?: S;
        cpf?: number;
        rg?: number;
        useRegisteredAddress?: boolean;
        zipCode?: number;
        state?: PayBudgetState,
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
      }): ValidationResult;

    }
  }
}