"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/// <reference types="cypress" />
var elements_1 = require("../integration/elements");
var faker_1 = require("@faker-js/faker");
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
var canalFechamentoPedido;
(function (canalFechamentoPedido) {
    canalFechamentoPedido["whatsapp"] = "whatsapp";
    canalFechamentoPedido["email"] = "email";
    canalFechamentoPedido["telefone"] = "telefone";
    canalFechamentoPedido["balcao_palhoca"] = "balcao_palhoca";
    canalFechamentoPedido["balcao_smart"] = "balcao_smart";
    canalFechamentoPedido["tele_smart"] = "tele_smart";
    canalFechamentoPedido["injetaveis"] = "injetaveis";
})(canalFechamentoPedido || (canalFechamentoPedido = {}));
var FormaPagamento;
(function (FormaPagamento) {
    FormaPagamento["AcertoVisita"] = "10";
    FormaPagamento["AcertoVisitaPlanilha"] = "14";
    FormaPagamento["Boleto"] = "2";
    FormaPagamento["BoletoLiberarSemPgto"] = "9";
    FormaPagamento["BoletoCaixaPaciente"] = "3";
    FormaPagamento["BoletoCaixaPrescritor"] = "13";
    FormaPagamento["BoletoParcelado"] = "15";
    FormaPagamento["cartaoCredito"] = "1";
    FormaPagamento["CartaoGpeAguardandoPagamento"] = "11";
    FormaPagamento["CartaoGpeLiberadoSemPagamento"] = "12";
    FormaPagamento["Cheque"] = "7";
    FormaPagamento["Cortesia"] = "5";
    FormaPagamento["Deposito"] = "4";
    FormaPagamento["Donheiro"] = "6";
    FormaPagamento["Outro"] = "8";
    FormaPagamento["Pix"] = "16";
})(FormaPagamento || (FormaPagamento = {}));
var SituacaoPagamento;
(function (SituacaoPagamento) {
    SituacaoPagamento["naoPago"] = "0";
    SituacaoPagamento["pago"] = "1";
})(SituacaoPagamento || (SituacaoPagamento = {}));
var PossuiReceita;
(function (PossuiReceita) {
    PossuiReceita["Sim"] = "1";
    PossuiReceita["NaoRepeticao"] = "2";
    PossuiReceita["NaoVarejos"] = "3";
})(PossuiReceita || (PossuiReceita = {}));
var BuscaPedido;
(function (BuscaPedido) {
    BuscaPedido["Meus"] = "Meus";
    BuscaPedido["Todos"] = "Todos";
    BuscaPedido["Encerrados"] = "Encerrados";
    BuscaPedido["Antigos"] = "Antigos";
})(BuscaPedido || (BuscaPedido = {}));
describe('Receitas', function () {
    var ambiente = Cypress.env('AMBIENTE');
    // Get the specific environment object based on the selected AMBIENTE
    var dadosAmbiente = Cypress.env(ambiente);
    beforeEach(function () {
        cy.login('user', 'password');
    });
    it('Confirmação de pedidos em andamento', function () {
        // cy.acessarMenuAtendimentos(el.atendimentos);
        cy.task('queryDB', { dbName: 'TESTE', query: 'select * from acl_role ar;' }).then(function (result) {
            console.log(result);
        });
    });
    var acessarPedidoEmAndamento = function (element) {
        cy.get(element)
            .contains('Em andamento')
            .click({ force: true });
        cy.url().should('contain', dadosAmbiente.BASEURL + 'atendimentos/page/1/');
    };
    acessarPedidoEmAndamento(elements_1.ELEMENTS.pedidoEmAndamento);
    var permiteMeusETodos = function (opcoes) {
        return opcoes.includes(BuscaPedido.Meus) && opcoes.includes(BuscaPedido.Todos);
    };
    cy.lerArquivo('orcamentoFilial.json')
        .then(function (valores) {
        var numeroOrcamento = valores.numeroOrcamento, numeroFilial = valores.numeroFilial;
        var pedido = valores[0].numeroOrcamento;
        var filial = valores[0].numeroFilial;
        var buscarPedido = function (opcoes) { return __awaiter(void 0, void 0, Promise, function () {
            return __generator(this, function (_a) {
                if (permiteMeusETodos(opcoes)) {
                    throw new Error('As opções "Meus" e "Todos" não podem ser marcadas juntas.');
                }
                cy.get('.form-group.busca-atendimentos').then(function (grupo) {
                    opcoes.forEach(function (opcao) {
                        var opcaoSelecionar = BuscaPedido[opcao];
                        if (opcaoSelecionar) {
                            cy.wrap(grupo).contains(opcaoSelecionar).click();
                        }
                        else {
                            throw new Error('Opção de busca inválida.');
                        }
                    });
                });
                cy.getVisible(elements_1.ELEMENTS.buscarPedido, { timeout: 5000 })
                    .and('have.id', 'top-search')
                    .clear()
                    .type(pedido)
                    .should('have.value', pedido);
                cy.getVisible(elements_1.ELEMENTS.buscarFilial, { timeout: 5000 })
                    .clear()
                    .type(filial)
                    .should('have.value', filial);
                cy.getVisible(elements_1.ELEMENTS.enviarBusca)
                    .click();
                cy.get(elements_1.ELEMENTS.visualizar, { timeout: 5000 }).should('exist');
                return [2 /*return*/];
            });
        }); };
        buscarPedido([BuscaPedido.Todos]);
    });
    var visualizarpedido = function (elemento) {
        cy.get(elements_1.ELEMENTS.visualizar)
            .eq(0)
            .should('exist')
            .then(function ($element) {
            if ($element.length > 0) {
                cy.wrap($element)
                    .click();
                cy.url().should('contain', dadosAmbiente.BASEURL + 'atendimentos/edit');
            }
            else {
            }
        });
    };
    visualizarpedido(elements_1.ELEMENTS.visualizar);
    var integracaoChatguru = function (nacionalidade, telefoneContato, idioma) {
        cy.getVisible(elements_1.ELEMENTS.brasileiro, { timeout: 20000 })
            .and('have.id', 'isBr')
            .click();
        cy.getVisible(elements_1.ELEMENTS.salvarNumeroChatguru)
            .and('have.id', 'saveChatGuruNumber')
            .click();
        cy.get(elements_1.ELEMENTS.OkModalMensages, { timeout: 20000 })
            .as('modal');
        cy.get('@modal', { timeout: 10000 })
            .then(function ($modal) {
            if ($modal.length > 0) {
                {
                    cy.wrap($modal[0])
                        .scrollIntoView()
                        .click();
                }
            }
            ;
        });
    };
    integracaoChatguru('brasileiro', '47992144541', 'português');
    var inserirTempoTratamento = function (element, tempoTratamento) {
        cy.getVisible(elements_1.ELEMENTS.tempoTratamento)
            .and('have.id', 'customTime')
            .click();
        cy.wait(1000);
        cy.getVisible(elements_1.ELEMENTS.tempoPadrao)
            .clear()
            .type(tempoTratamento);
        cy.get(elements_1.ELEMENTS.cabecalhoModalTempoTratamento)
            .click();
        cy.getVisible(elements_1.ELEMENTS.salvarTempoTratamento)
            .and('have.id', 'saveByCustomTimeFormula')
            .click();
        cy.getVisible(element, { timeout: 20000 })
            .click();
        cy.getVisible(elements_1.ELEMENTS.abrirModalConfirmacaoPedido);
    };
    inserirTempoTratamento(elements_1.ELEMENTS.modalMensagemPedido, '30');
    var inserirOrcamentista = function (element, orcamentista) {
        cy.getVisible(element)
            .and('have.id', 'orcamentista')
            .clear()
            .type(orcamentista, { timeout: 20000 })
            .eq(0)
            .click()
            .should('have.value', orcamentista);
    };
    inserirOrcamentista(elements_1.ELEMENTS.orcamentistaPedido, 'Atendente1');
    var abrirModalConfirmacaoPedido = function (element) {
        cy.get(element)
            .should('be.visible')
            .and('have.id', 'bt-confirma-modal')
            .click();
        cy.getVisible(elements_1.ELEMENTS.formaPagamentoPedido);
    };
    abrirModalConfirmacaoPedido(elements_1.ELEMENTS.abrirModalConfirmacaoPedido);
    var selecionarFormaPagamento = function (element, value) {
        cy.getVisible(element)
            .select(value);
        cy.getVisible(element)
            .should('have.value', value)
            .find('option:selected')
            .should('be.selected');
    };
    selecionarFormaPagamento(elements_1.ELEMENTS.formaPagamentoPedido, FormaPagamento.Boleto);
    var selecionarOrcamentoEscolhido = function (element) {
        cy.getVisible(element)
            .check()
            .should('be.checked');
        cy.getVisible(elements_1.ELEMENTS.tempoRepeticaoPaciente);
    };
    selecionarOrcamentoEscolhido(elements_1.ELEMENTS.orcamentoEscolhido);
    var informarTempoRepeticaoPaciente = function (element, tempoRepeticao) {
        cy.getVisible(element)
            .clear()
            .type(tempoRepeticao.toString())
            .should('have.value', tempoRepeticao);
    };
    informarTempoRepeticaoPaciente(elements_1.ELEMENTS.tempoRepeticaoPaciente, 0);
    var naoRealizarMonitoramentoAtendimento = function (element) {
        cy.getVisible(element)
            .check()
            .should('be.checked');
    };
    naoRealizarMonitoramentoAtendimento(elements_1.ELEMENTS.naoRealizarMonitoramentoAtendimento);
    var salvarConfirmacaoPedidoPrimeiraEtapa = function (element) {
        cy.getVisible(element)
            .click();
    };
    salvarConfirmacaoPedidoPrimeiraEtapa(elements_1.ELEMENTS.salvarConfirmacaoPedidoPrimeiraEtapa);
    var inserirCanalFechamentoPedido = function (element, value) {
        cy.getVisible(element)
            .select(value)
            .should('have.value', value)
            .find('option:selected')
            .should('be.selected');
    };
    inserirCanalFechamentoPedido(elements_1.ELEMENTS.canalConfirmacaoPedido, canalFechamentoPedido.whatsapp);
    var enviarEmailsRastreamento = function (element) {
        cy.getVisible(element)
            .check()
            .should('be.checked');
    };
    enviarEmailsRastreamento(elements_1.ELEMENTS.enviarEmailRastreamentoPedido);
    var liberarPedidoInclusao = function (element) {
        cy.getVisible(element)
            .check()
            .should('be.checked');
    };
    liberarPedidoInclusao(elements_1.ELEMENTS.liberarPedidoInclusao);
    var liberarPedidoCaixa = function (element) {
        cy.getVisible(element)
            .check()
            .should('be.checked');
    };
    liberarPedidoCaixa(elements_1.ELEMENTS.liberarPedidoCaixa);
    var inserirObservacaoCaixaBalcao = function (element, conteudo, useLoremIpsum) {
        if (useLoremIpsum) {
            conteudo = faker_1.faker.lorem.paragraph();
        }
        cy.getVisible(element)
            .should('exist')
            .clear()
            .type(conteudo)
            .should('have.value', conteudo);
    };
    inserirObservacaoCaixaBalcao(elements_1.ELEMENTS.observacaoCaixaBalcaoPedido, '', true);
    var desejaNotaDetalhada = function (element) {
        cy.getVisible(element)
            .check()
            .should('be.checked');
    };
    desejaNotaDetalhada(elements_1.ELEMENTS.notaDetalhada);
    var inserirSituacaoPagamento = function (element, value) {
        cy.get(element)
            .check(value)
            .should('have.value', value)
            .find('option:selected')
            .should('be.checked');
    };
    inserirSituacaoPagamento(elements_1.ELEMENTS.situacaoPagamento, SituacaoPagamento.pago);
    cy.pause();
    var inserirEnderecoEnvioPedido = function (element) {
        cy.getVisible(element)
            .click();
        cy.getVisible(elements_1.ELEMENTS.enderecoSelecionadoEnvioPedido)
            .and('have.id', 'endereco-cliente')
            .should('not.be.empty');
    };
    inserirEnderecoEnvioPedido(elements_1.ELEMENTS.enderecoEnvioPedido);
    var inserirObservacaoExpedicaoPedido = function (element, conteudo, useLoremIpsum) {
        if (useLoremIpsum) {
            conteudo = faker_1.faker.lorem.paragraph();
        }
        cy.getVisible(element)
            .should('exist')
            .clear()
            .type(conteudo)
            .should('have.value', conteudo);
    };
    inserirObservacaoExpedicaoPedido(elements_1.ELEMENTS.observacaoExpedicao, '', true);
    // const selecionarOpcaoPossuiReceita = (opcao: PossuiReceita): void => {
    //     cy.getVisible(el.situacaoPossuiReceita)
    //         .check()
    //         .should('be.checked');
    // };
    // selecionarOpcaoPossuiReceita(PossuiReceita.Sim);
});
