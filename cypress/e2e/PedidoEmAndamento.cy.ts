/// <reference types="cypress" />
import { ELEMENTS as el } from '../integration/elements';
import { faker } from '@faker-js/faker';



describe('Receitas', () => {
    const ambiente = Cypress.env('AMBIENTE');

    // Get the specific environment object based on the selected AMBIENTE
    const dadosAmbiente = Cypress.env(ambiente);

    

    beforeEach(function () {

        cy.login('user', 'password')

    })



    it('Pedidos em andamento', () => {})
})





// subMenuPedidoEmAndamento() {
//     cy.get(el.em_andamento)
//       .should("have.attr", "href")
//       .and("contain", this.ambiente_selecionado + 'atendimentos/page/1/')
//       .click()
//     cy.url().should('contain', this.ambiente_selecionado.BASEURL + 'atendimentos/page/1/');

//   }

//   buscarPedido(opcoes: BuscaOrcamento[]): void {
//     const permiteMeusETodos = opcoes.includes(BuscaOrcamento.Meus) && opcoes.includes(BuscaOrcamento.Todos);
//     const orcamento: string = '821543'
//     const filial: string = '4'
//     if (permiteMeusETodos) {
//       throw new Error('As opções "Meus" e "Todos" não podem ser marcadas juntas.');
//     }
//     cy.get('.form-group.busca-atendimentos').then((grupo) => {
//       opcoes.forEach((opcao) => {
//         const opcao_selecionar = BuscaOrcamento[opcao];

//         if (opcao_selecionar) {
//           cy.wrap(grupo).contains(opcao_selecionar).click();
//         } else {
//           throw new Error('Opção de busca inválida.');
//         }
//       });
//     });

//     cy.get(el.orcamento, { timeout: 5000 })
//       .should('be.visible')
//       .and('have.id', 'top-search')
//       .type(orcamento)
//       .should('have.value', orcamento);

//     cy.get(el.filial, { timeout: 5000 })
//       .should('be.visible')
//       .type(filial)
//       .should('have.value', filial);

//     cy.get(el.buscar)
//       .should('be.visible')
//       .click()

//     cy.get(el.visualizar, { timeout: 5000 }).should('exist');
//   }

//   visualizarpedido() {
//     cy.get(el.visualizar)
//       .eq(0)
//       .should('exist')
//       .then(($element) => {
//         if ($element.length > 0) {
//           cy.wrap($element)
//             .click();
//           cy.url().should('contain', this.ambiente_selecionado.BASEURL + 'atendimentos/edit');

//         } else {
//           cy.pause();
//         }
//       });
//   }

//   integracaoChatguru() {
//     cy.get(el.brasileiro)
//       .should('be.visible')
//       .and('have.id', 'isBr')
//       .click()
//     cy.get(el.salvar)
//       .should('be.visible')
//       .and('have.id', 'saveChatGuruNumber')
//       .click()
//     cy.get(el.modal_mensagem)
//       .should('be.visible')
//       .and('contains', 'OK')
//       .click()
//   }

//   inserirTempoTratamento(tempo_tratamento: string) {
//     // O método para inserir o tempo em todos os campos <input> dentro dos <tr> do <tbody>
//     cy.get('tbody tr') // Seleciona todos os elementos <tr> dentro do <tbody>
//       .each(($tr) => { // Itera sobre cada elemento <tr>
//         cy.wrap($tr) // Encapsula o elemento <tr> atual usando o Cypress
//           .find(el.tempo_padrao) // Procura o campo de input dentro do <tr>
//           .type(tempo_tratamento); // Insere o valor do tempo no campo de input
//       });
//   }



//   confirmarPedido() {
//     this.ambiente_selecionado = Cypress.env('enviroment').HOMOLOG_ACESS
//     cy.visit({
//       method: 'GET',
//       url: this.ambiente_selecionado.BASEURL + 'atendimentos/page/1/',
//     })
//     const atendimento = new Atendimento(
//       this.atendimento,
//       this.filial,
//       this.data_entrada,
//       this.data_encerramento,
//       this.paciente,
//       this.cliente,
//       this.prescritor,
//       this.atendente,
//       this.backoffice,
//     )
//     this.buscarPedido([BuscaOrcamento.Todos])
//     cy.pause();
//     this.visualizarpedido()
//     this.integracaoChatguru()
//     this.inserirTempoTratamento('30')

//   }


// }