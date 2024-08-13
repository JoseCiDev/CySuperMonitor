/// <reference types="cypress" />
/// <reference types="cypress-wait-until" />

import {
  ElementTypeAndValueOpcional,
  ValidationResult,
  dataParameters,
  mount
} from '../import'

interface DataHora {
  DATA_FORMATADA: string;
  HORA_FORMATADA: string;
}


declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      mount: typeof mount

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
       * @example cy.readFile('orderAndBranch.json')
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
      searchRecipe(params?: {
        initialDate?: string;
        finalDate?: string;
        pendency?: string;
        cluster?: string;
        channelReceipt?: string;
        recipe?: number;
        patient?: string;
        prescriber?: string;
        order?: number;
        lastModifier?: string;
        budgetist?: string;
        attendantResponsibleRecipes?: string;
      }): Cypress.Chainable<Element>;

      /**
      * comando customizado para selecionar o elemento e clicar.
      * @example cy.getElementAndClick(el.elemento)
      */
      getElementAndClick(elements: string[]): ValidationResult;

      /**
      * comando customizado de login.
      * @example cy.getElementAndClick(el.elemento)
      */
      getElementAndType(elements: { [key: string]: string }): ValidationResult

      /**
       * comando customizado para capturar elemento e marcar checkbox.
       * @example cy.getElementAndCheck(el.elemento)
       */
      getElementAndCheck(elements: ElementTypeAndValueOpcional): ValidationResult;

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
      cloneRecipe(openModalCloneRecipe: string): Chainable<Element>

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
       * @example cy.searchOrder(order,branch)
       */
      searchOrder(order: number, branch: number);

      /**
       * * comando customizado para visulizar orçamentos.
       * @example cy.viewOrder(buttonView)
       */
      viewOrder(buttonView): Chainable<Element>;

      /**
       * * comando customizado para reabrir orçamentos.
       * @example cy.reopenOrder(order,branch)
       */
      reopenOrder(order: number, branch: number);

      /**
       * * comando customizado para inserir tempo de tratamento.
       * @example cy.insertTimeTreatment(timeTreatment)
       */
      insertTimeTreatment(timeTreatment: string): Chainable<Element>;

      /**
       * * comando customizado para confirmar orçamentos.
       * @example cy.confirmOrder(dataParameters.formaPagamento.Boleto,
            dataParameters.Orçamento.timeRepetition,
            dataParameters.Orçamento.buttonViewtextObservationCashierCounter,
            dataParameters.paymentStatus.Pago,
            dataParameters.Orçamento.textNoteShipping,
            dataParameters.shippingMethod.SedexHoje,
            dataParameters.formattedDate,
            dataParameters.aromaSachet.AromaDaBasePadrao,
            dataParameters.capsuleAroma.laranjaComHortelaMenta,
            dataParameters.Orçamento.textGeneralNote)
       */
      confirmOrder(
        SelectedPaymentMethod: string,
        timeRepetition: number,
        observationFromCashierToCounter: string,
        paymentStatus: string,
        textNoteShipping: string,
        shippingMethod: string,
        promisedTo: string,
        aromaSachet: string,
        capsuleAroma: string,
        textGeneralNote: string,
      ): Chainable<Element>;

      /**
       * * comando customizado para vincular recipe ao order.
       * @example cy.vincularReceitaOrçamento(buttonLinkRecipeScreenServiceProgress,dataParameters.Recipe.numberRecipe)
       */
      linkOrderRecipe(buttonLink: string, numberRecipe: number): ValidationResult;

      /**
       * * comando customizado para desvincular recipe ao order.
       * @example cy.desvincularReceitaOrçamento(timeTreatment)
       */
      unlinkOrderRecipe(buttonUnlink: string): Chainable<Element>;

      /**
      * * comando customizado para importar orçamentos .
      * @example cy.orderImport(modalImportacao,numerOrcamento,branchNumber,orderImport)
      */
      orderImport(): Chainable<Element>

      /**
      * * comando customizado para alterar usuário do order .
      * @example cy.changeUsersOrder(budgetist,attendant)
      */
      changeUsersOrder(budgetist: string, attendant: string): Chainable<Element>

      /**
     * * comando customizado para configurar relação entre Atendente, cluster e Prescriber .
     * @example cy.changeUsersOrder(budgetist,attendant)
     */
      configureRelationshipAtendenteClusterPrescriber(fileName: string): ValidationResult

      /**
       * * comando customizado para selecionar elemento autocomplete apos digitar e capturar sugestão autocomplete clicando.
       * @example cy.getElementAutocompleteTypeAndClick(orcamentista,atendente)
       */
      getElementAutocompleteTypeAndClick(elements: { [key: string]: string }, autocomplete: string): ValidationResult;

      /**
     * * comando customizado para configurar relação entre Atendente, cluster e Prescriber .
     * @example cy.changeUsersOrder(budgetist,attendant)
     */
      waitModalAndClick(jqueryElement: string, element: string, checkType): ValidationResult

      /**
     * * comando customizado para configurar relação entre Atendente, cluster e Prescriber .
     * @example cy.changeUsersOrder(budgetist,attendant)
     */
      importRecipe(
        file?: Object,
        prescriber?: string | number,
        parameterSearchPatient?: string,
        patient?: string | number,
        channelReceipt?: string,
        attendantResponsibleRecipes?: string,
        receivingDate?: Date,
        recipeType?: string,
        textInternalObservation?: string,
        urgentRecipes?: string,
        clientAlert?: string,
        medicineControlled?: string): ValidationResult

      /**
     * * comando customizado para capturar o número da recipe .
     * @example cy.captureRecipeNumber(budgetist,attendant)
     */
      captureRecipeNumber(RecipeNumberElement: string)







    }
  }
}