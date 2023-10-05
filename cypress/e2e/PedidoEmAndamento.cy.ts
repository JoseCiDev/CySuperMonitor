/// <reference types="cypress" />
import { ELEMENTS as el } from '../elements';
import { faker } from '@faker-js/faker';
import { dadosParametros } from '../DadosParametros'

/*
acessar atendimentos;
acessar em andamento, fluxo de trabalho;
selecionar filtro orcamento;
marcar escopo todos;
dois cliques no primeiro card de orçamento;
aguardar carregamento;
clicar em visualizar pedido;
acessar aba onde pedido é aberto;
*/


const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);



describe('Receitas', () => {
    const ambiente = Cypress.env('AMBIENTE');
    // Get the specific environment object based on the selected AMBIENTE
    const dadosAmbiente = Cypress.env(ambiente);


    beforeEach(function () {
        cy.login('user', 'password')

    })


    it('Confirmação de pedidos em andamento', () => {
        // cy.acessarMenuAtendimentos(el.atendimentos);

        cy.task('queryDB', { dbName: 'TESTE', query: 'select * from acl_role ar;' }).then((result) => {
            console.log(result);
        });
    });


    const acessarPedidoEmAndamento = (element) => {
        cy.get(element)
            .contains('Em andamento')
            .click({ force: true })

        cy.url().should('contain', dadosAmbiente.BASEURL + 'atendimentos/page/1/');
    }
    acessarPedidoEmAndamento(el.pedidoEmAndamento);



    const permiteMeusETodos = (opcoesBusca): boolean => {
        return opcoesBusca.includes(dadosParametros.DadosParametros.BuscaPedido.Meus) && opcoesBusca.includes(dadosParametros.DadosParametros.BuscaPedido.Todos);
    };



    cy.lerArquivo('orcamentoFilial.json')
        .then((orcamentoFilial) => {

            const pedido: string = orcamentoFilial[0].numeroOrcamento;
            const filial: string = orcamentoFilial[0].numeroFilial;

            const buscarPedido = async (opcoesBusca): Promise<void> => {
                if (permiteMeusETodos(opcoesBusca)) {
                    throw new Error('As opções "Meus" e "Todos" não podem ser marcadas juntas.');
                }

                cy.get('.form-group.busca-atendimentos').then((grupo) => {
                    opcoesBusca.forEach((opcao) => {
                        const opcaoSelecionar = dadosParametros.DadosParametros.BuscaPedido[opcao];

                        if (opcaoSelecionar) {
                            cy.wrap(grupo).contains(opcaoSelecionar).click();
                        } else {
                            throw new Error('Opção de busca inválida.');
                        }
                    });
                });

                cy.getVisible(el.buscarPedido, { timeout: 5000 })
                    .and('have.id', 'top-search')
                    .clear()
                    .type(pedido)
                    .should('have.value', pedido);

                cy.getVisible(el.buscarFilial, { timeout: 5000 })
                    .clear()
                    .type(filial)
                    .should('have.value', filial);

                cy.getVisible(el.enviarBusca)
                    .click();

                cy.get(el.visualizar, { timeout: 5000 }).should('exist');
            };
            buscarPedido([dadosParametros.DadosParametros.BuscaPedido.Todos]);
        });
});




const visualizarpedido = (elemento: string) => {
    cy.get(el.visualizar)
        .eq(0)
        .should('exist')
        .then(($element) => {
            if ($element.length > 0) {
                cy.wrap($element)
                    .click();
                cy.url().should('contain', dadosAmbiente.BASEURL + 'atendimentos/edit');

            } else {

            }
        });
}
visualizarpedido(el.visualizar);



const integracaoChatguru = (nacionalidade: string, telefoneContato: string, idioma: string) => {
    cy.getVisible(el.brasileiro, { timeout: 20000 })
        .and('have.id', 'isBr')
        .click()
    cy.getVisible(el.salvarNumeroChatguru)
        .and('have.id', 'saveChatGuruNumber')
        .click()
    cy.get(el.OkModalMensages, { timeout: 20000 })
        .as('modal');
    cy.get('@modal', { timeout: 10000 })
        .then(($modal) => {
            if ($modal.length > 0) {
                {
                    cy.wrap($modal[0])
                        .scrollIntoView()
                        .click();
                }
            };
        });
}
integracaoChatguru('brasileiro', '47992144541', 'português');



const inserirTempoTratamento = (element: string, tempoTratamento: string) => {
    cy.getVisible(el.tempoTratamento)
        .and('have.id', 'customTime')
        .click()

    cy.wait(1000)

    cy.getVisible(el.tempoPadrao)
        .clear()
        .type(tempoTratamento)

    cy.get(el.cabecalhoModalTempoTratamento)
        .click()

    cy.getVisible(el.salvarTempoTratamento)
        .and('have.id', 'saveByCustomTimeFormula')
        .click()

    cy.getVisible(element, { timeout: 20000 })
        .click()

    cy.getVisible(el.abrirModalConfirmacaoPedido)
}
inserirTempoTratamento(el.modalMensagemPedido, '30');



const inserirOrcamentista = (element: string, orcamentista: string) => {
    cy.getVisible(element)
        .and('have.id', 'orcamentista')
        .clear()
        .type(orcamentista, { timeout: 20000 })
        .eq(0)
        .click()
        .should('have.value', orcamentista)

}
inserirOrcamentista(el.orcamentistaPedido, 'Atendente1');



const abrirModalConfirmacaoPedido = (element): void => {
    cy.get(element)
        .should('have.id', 'bt-confirma-modal')
        .click()
    cy.getVisible(el.formaPagamentoPedido)
}
abrirModalConfirmacaoPedido(el.abrirModalConfirmacaoPedido);



const selecionarFormaPagamento = (element: string, value): void => {
    cy.getVisible(element)
        .select(value)
    cy.getVisible(element)
        .should('have.value', value)
        .find('option:selected')
        .should('be.selected')

}
selecionarFormaPagamento(el.formaPagamentoPedido, dadosParametros.DadosParametros.FormaPagamento.Boleto);



const selecionarOrcamentoEscolhido = (element): void => {
    cy.getVisible(element)
        .check()
        .should('be.checked')

    cy.getVisible(el.tempoRepeticaoPaciente)
}
selecionarOrcamentoEscolhido(el.orcamentoEscolhido);



const informarTempoRepeticaoPaciente = (element: string, tempoRepeticao: number): void => {
    cy.getVisible(element)
        .clear()
        .type(tempoRepeticao.toString())
        .should('have.value', tempoRepeticao)
}
informarTempoRepeticaoPaciente(el.tempoRepeticaoPaciente, 0);



const naoRealizarMonitoramentoAtendimento = (element: string): void => {
    cy.getVisible(element)
        .check()
        .should('be.checked')
}
naoRealizarMonitoramentoAtendimento(el.naoRealizarMonitoramentoAtendimento);


const salvarConfirmacaoPedidoPrimeiraEtapa = (element: string): void => {
    cy.getVisible(element)
        .click()
}
salvarConfirmacaoPedidoPrimeiraEtapa(el.salvarConfirmacaoPedidoPrimeiraEtapa);



const inserirCanalFechamentoPedido = (element: string, canalFechamentoPedido): void => {
    cy.getVisible(element)
        .select(canalFechamentoPedido)
        .should('have.value', canalFechamentoPedido)
        .find('option:selected')
        .should('be.selected')

}
inserirCanalFechamentoPedido(el.canalConfirmacaoPedido, dadosParametros.DadosParametros.CanalFechamentoPedido.whatsapp);



const enviarEmailsRastreamento = (element: string): void => {
    cy.getVisible(element)
        .check()
        .should('be.checked')

}
enviarEmailsRastreamento(el.enviarEmailRastreamentoPedido);



const liberarPedidoInclusao = (element: string): void => {
    cy.getVisible(element)
        .check()
        .should('be.checked')

}
liberarPedidoInclusao(el.liberarPedidoInclusao);



const liberarPedidoCaixa = (element: string): void => {
    cy.getVisible(element)
        .check()
        .should('be.checked')
}
liberarPedidoCaixa(el.liberarPedidoCaixa)



const inserirObservacaoCaixaBalcao = (element: string, conteudo: string, useLoremIpsum?: boolean) => {
    if (useLoremIpsum) {
        conteudo = faker.lorem.paragraph();
    }
    cy.getVisible(element)
        .should('exist')
        .clear()
        .type(conteudo)
        .should('have.value', conteudo);
};
inserirObservacaoCaixaBalcao(el.observacaoCaixaBalcaoPedido, '', true);



const desejaNotaDetalhada = (element: string): void => {
    cy.getVisible(element)
        .check()
        .should('be.checked')
}
desejaNotaDetalhada(el.notaDetalhada);



const inserirSituacaoPagamento = (element: string, value): void => {
    cy.get(element)
        .check(value)
        .should('have.value', value)
        .find('option:selected')
        .should('be.checked')
}

inserirSituacaoPagamento(el.situacaoPagamento, dadosParametros.DadosParametros.SituacaoPagamento.pago);



cy.pause()

const inserirEnderecoEnvioPedido = (element: string): void => {
    cy.getVisible(element)
        .click()
    cy.getVisible(el.enderecoSelecionadoEnvioPedido)
        .and('have.id', 'endereco-cliente')
        .should('not.be.empty')
}
inserirEnderecoEnvioPedido(el.enderecoEnvioPedido);



const inserirObservacaoExpedicaoPedido = (element: string, conteudo: string, useLoremIpsum?: boolean) => {
    if (useLoremIpsum) {
        conteudo = faker.lorem.paragraph();
    }
    cy.getVisible(element)
        .should('exist')
        .clear()
        .type(conteudo)
        .should('have.value', conteudo);
};
inserirObservacaoExpedicaoPedido(el.observacaoExpedicao, '', true);



    // const selecionarOpcaoPossuiReceita = (opcao: PossuiReceita): void => {
    //     cy.getVisible(el.situacaoPossuiReceita)
    //         .check()
    //         .should('be.checked');
    // };
    // selecionarOpcaoPossuiReceita(PossuiReceita.Sim);
















