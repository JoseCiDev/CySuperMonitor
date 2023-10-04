import { mount } from 'cypress/react'
import { dadosParametros, BuscarReceita } from '../DadosParametros'

// describe custom Cypress commands in this file

// load the global Cypress types
/// <reference types="cypress" />
// load the 3rd party command definition for cy.waitUntil()
/// <reference types="cypress-wait-until" />
// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.




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
      login(acessar: string, user: string, password: string, url: string): Chainable<Element>

      /**
       * comando customizado para executar querys no banco de dados.
       * @example cy.queryDB()
       */
      queryDB(DB_NAME: string, query: string): Chainable<unknown>;

      /**
       * comando customizado para inserir arquivos.
       * @example cy.inserirArquivo('img/ReceitaJpeg(1).jpeg', el.importarImagem);
       */
      inserirArquivo(fixturePath, elementoBotao): Chainable<unknown>;

      /**
       * comando customizado para ler arquivos
       * @example cy.lerArquivo('orcamentoFilial.json')
       */
      lerArquivo(nomeArquivo: string): Chainable<any>;

      /**
        * comando customizado para acessar o menu Receitas.
        * @example cy.acessarMenuReceitas(receitas)
        */
      acessarMenuReceitas(receitas: string): Chainable<Element>

      /**
       * comando customizado para acessar o menu Importação de Receitas.
       * @example cy.acessarImportarReceitas(importarReceitas)
       */
      acessarImportarReceitas(importarReceitas: string): Chainable<Element>

      /**
       * comando customizado para acessar o menu Importação de Receitas.
       * @example cy.acessarGerenciarReceitas(gerenciarReceitas)
       */
      acessarGerenciarReceitas(gerenciarReceitas: string): Chainable<Element>


      /**
       * comando customizado para selecinar elemento e verificar se esta visivel.
       * @example cy.getVisible()
       */
      getVisible(element: string, options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable>): Chainable<Subject>;

      /**
       * comando customizado para inserir Data.
       * @example cy.inserirData()
       */
      inserirData(campoData: string, data: string): Chainable<DataHora>

      /**
       * comando customizado para inserir datas.
       * @example cy.inserirDataUmDiaMenosDiaAtual()
       */
      inserirDataUmDiaMenosDiaAtual(campoData: string): Chainable<Element>;

      /**
       * comando customizado para inserir Prescritor.
       * @example cy.inserirPrescritor(dadosPrescritor)
       */
      inserirPrescritor(dadosPrescritor: string): Chainable<Element>;

      /**
       * comando customizado para inserir Paciente.
       * @example cy.inserirPaciente(dadosPaciente)
       */
      inserirPaciente(opcaoSelecaoPaciente: string, paciente: string): Chainable<Element>;

      /**
       * comando customizado para inserir canal de recebimento.
       * @example cy.selecionarCanalRecebimento(canalRecebimento)
       */
      selecionarCanalRecebimento(canalRecebimentoReceitas: string, canalRecebimento: string): Chainable<Element>;

      /**
       * comando customizado para inserir selecionar cluster.
       * @example cy.selecionarCluster(cluster)
       */
      selecionarCluster(cluster: string): Chainable<Element>;

      /**
       * comando customizado para inserir selecionar tipo da receita.
       * @example cy.inserirTipoReceita(tipoReceita)
       */
      inserirTipoReceita(tipoReceita: string): Chainable<Element>;

      /**
      * comando customizado para pegar numero da receita.
      * @example cy.getReceitaNumero()
      */
      getReceitaNumero(numeroReceita: number): Chainable<Element>;

      /**
      * comando customizado para setar numero da receita.
      * @example cy.setReceitaNumero()
      */
      setReceitaNumero(numeroReceita: number): Chainable<Element>;

      /**
      * comando customizado para buscar receitas.
      * @example cy.buscarReceita()
      */
      buscarReceita(parametrosBuscarReceita: BuscarReceita): Chainable<void>;

      /**
       * comando customizado para capturar elemento e clicar.
       * @example cy.getElementAndClick(el.elemento)
       */
      getElementAndClick(element: string): Chainable<Element>

      /**
       * comando customizado para capturar elemento e marcar checkbox.
       * @example cy.getElementAndCheck(el.elemento)
       */
      getElementAndCheck(element: string): Chainable<Element>

      /**
       * comando customizado de login.
       * @example cy.getElementAndClick(el.elemento)
       */
      getElementAndType(element: string, text: string): Chainable<Element>

      /**
       * comando customizado de login.
       * @example cy.selecionarRadioOptionByValue(el.elemento)
       */
      getRadioOptionByValue(dataCy: string, value: any): Chainable<Element>

      /**
       * comando customizado de login.
       * @example cy.selecionarRadioOptionByValue(el.elemento)
       */
      getSelectOptionByValue(dataCy: string, value: any): Chainable<Element>

      /**
       * comando customizado para marcar uso em receitas e orçamentos.
       * @example cy.marcarUso(checkboxMarcarUso)
       */
      marcarUso(checkboxMarcarUso: string): Chainable<Element>

      /**
      * comando customizado para visualizar receitas.
      * @example cy.visualizarReceita(visualizarReceita)
      */
      visualizarReceita(visualizarReceita: string): Chainable<Element>

      /**
      * comando customizado para clonar receitas.
      * @example cy.clonarReceita(clonarReceita)
      */
      clonarReceita(abrirModalClonarReceita: string): Chainable<Element>

      /**
      * comando customizado para excluir receitas.
      * @example cy.excluirReceita(el.excluirReceita)
      */
      excluirReceita(excluir: string): Chainable<Element>

      /**
      * comando customizado para inserir observacoes farmaceuticas, em receitas.
      * @example cy.inserirObservacaoFarmaceutica(acessarObservacoesFarmaceuticas,dadosParametros.Receita.senhaObservacaoFarmaceutica,dadosParametros.Receita.textoObservacaoFarmaceutica)
      */
      inserirObservacaoFarmaceutica(acessarObservacoesFarmaceuticas: string, senhaReceita: string, textoObservacao: string): Chainable<Element>

      /**
      * comando customizado para excluir observacoes farmaceuticas, em receitas.
      * @example cy.excluirObservacaoFarmaceutica(acessarObservacoesFarmaceuticas,dadosParametros.Receita.senhaObservacaoFarmaceutica,dadosParametros.Receita.textoObservacaoFarmaceutica)
      */
      excluirObservacaoFarmaceutica(acessarObservacoesFarmaceuticas: string): Chainable<Element>

      /**
      * comando customizado para criar dúvidas técnicas em receitas.
      * @example cy.CriarDuvidaTecnica()
      */
      CriarDuvidaTecnica(acessarDuvidasTecnicas: string, categoria: string, textoDuvidaTecnica: string, colaborador: string): Chainable<Element>

      /**
      * comando customizado para atualizar modal de dúvidas técnicas, em receitas.
      * @example cy.atualizarModalDuvidaTecnica(atualizarModalDuvidaTecnica)
      */
      atualizarModalDuvidaTecnica(atualizar: string): void

      /**
      * comando customizado para alterar o responsável pela resposta da dúvida técnica, em receitas.
      * @example cy.alterarResponsavelRespostaDuvidaTecnica(atualizarModalDuvidaTecnica)
      */
      alterarResponsavelRespostaDuvidaTecnica(acessarDuvidasTecnicas: string, responsavelRespostaDuvidaTecnica: string): Chainable<Element>

      /**
     * comando customizado para marcar dúvida técnica como resolvido, em receitas.
     * @example cy.marcarComoResolvidoDuvidaTecnica(MarcarDuvidaTecnicaResolvido)
     */
      marcarDuvidaTecnicaResolvido(acessarDuvidasTecnicas: string): Chainable<Element>

      /**
     * comando customizado para excluir dúvida técnica, em receitas.
     * @example cy.excluirDuvidaTecnica(excluirDuvidaTecnica)
     */
      excluirDuvidaTecnica(acessarDuvidasTecnicas: string): Chainable<Element>

      /**
     * comando customizado para excluir dúvida técnica, em receitas.
     * @example cy.excluirDuvidaTecnica(excluirDuvidaTecnica)
     */
      responderDuvidaTecnica(acessarDuvidasTecnicas: string, status: string, texto: string): Chainable<Element>

      /**
           * comando customizado para excluir dúvida técnica, em receitas.
           * @example cy.excluirDuvidaTecnica(excluirDuvidaTecnica)
           */
      atribuirUsuario(campoAtribuicao: string, usuario: string): Chainable<Element>

      /**
     * comando customizado para excluir dúvida técnica, em receitas.
     * @example cy.excluirDuvidaTecnica(excluirDuvidaTecnica)
     */
      editarReceita(imagem: string, botaoImportarImagemReceitas: string, dadosPrescritor: string): Chainable<Element>

      /**
       * * comando customizado para acessar o menu Atendimentos.
       * @example cy.adicionaObservacaoFarmaceutica()
       */
      acessarMenuAtendimentos(element: string): Chainable<Element>

      /**
       * * comando customizado para acessar o menu Pedidos em andamento.
       * @example cy.acessarPedidosEmAndamento(atendimentoEmAndamento)
       */
      acessarAtendimentosEmAndamento(element: string): Chainable<Element>

      /**
       * * comando customizado para acessar selecionar opcao "meus" ou "todos" para buscar orçamentos.
       * @example cy.opcaoMeusETodosBuscaOrcamento(Meus)
       */
      opcaoMeusETodosBuscaOrcamento(opcoesBusca: string)

      /**
       * * comando customizado para visulizar pedidos.
       * @example cy.visualizarPedido(botaoVisualizar)
       */
      visualizarPedido(botaoVisualizar: string): Chainable<Element>;

      /**
       * * comando customizado para inserir tempo de tratamento.
       * @example cy.inserirTempoTratamento(tempoTratamento)
       */
      inserirTempoTratamento(tempoTratamento: number): Chainable<Element>;

      /**
       * * comando customizado para confirmar pedidos.
       * @example cy.confirmarPedido(dadosParametros.formaPagamento.Boleto,
            dadosParametros.Pedido.tempoRepeticao,
            dadosParametros.Pedido.textoObservacaoCaixaBalcao,
            dadosParametros.statusPagamento.Pago,
            dadosParametros.Pedido.textoObservacaoExpedicao,
            dadosParametros.formaEnvio.SedexHoje,
            dadosParametros.dataFormatada,
            dadosParametros.aromaSache.AromaDaBasePadrao,
            dadosParametros.aromaCapsula.laranjaComHortelaMenta,
            dadosParametros.Pedido.textoObservacaoGeral)
       */
      confirmarPedido(formaPagamentoSelecionada: string, tempoRepeticao: number, observacaoCaixaBalcao: string, statusPagamento: string, textoObservacaoExpedicao: string, formaEnvio: string, prometidoPara: string, aromaSache: string, aromaCapsula: string, textoObservacaoGeral: string): Chainable<Element>;

      /**
       * * comando customizado para vincular receita ao pedido.
       * @example cy.vincularReceitaPedido(botaoVincularReceitaTelaAtendimentoAndamento,dadosParametros.Receita.numeroReceita)
       */
      vincularReceitaPedido(botaoVincular: string, numeroReceita: number): Chainable<Element>;

      /**
       * * comando customizado para desvincular receita ao pedido.
       * @example cy.desvincularReceitaPedido(tempoTratamento)
       */
      desvincularReceitaPedido(botaoDesvincular: string): Chainable<Element>;




    }
  }
}