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
exports.OpcaoParametroBuscaCardOrcamento = void 0;
/// <reference types="cypress" />
var elements_1 = require("../integration/elements");
var numeroReceita;
var OpcaoParametroBuscaCardOrcamento;
(function (OpcaoParametroBuscaCardOrcamento) {
    OpcaoParametroBuscaCardOrcamento["Paciente"] = "Paciente";
    OpcaoParametroBuscaCardOrcamento["Prescritor"] = "Prescritor";
    OpcaoParametroBuscaCardOrcamento["Orcamento"] = "Or\u00E7amento";
    OpcaoParametroBuscaCardOrcamento["VincularReceita"] = "Vincular receita";
})(OpcaoParametroBuscaCardOrcamento = exports.OpcaoParametroBuscaCardOrcamento || (exports.OpcaoParametroBuscaCardOrcamento = {}));
describe('Vincular Receitas e Orçamentos', function () {
    var ambiente = Cypress.env('AMBIENTE');
    // Get the specific environment object based on the selected AMBIENTE
    var dadosAmbiente = Cypress.env(ambiente);
    beforeEach(function () {
        cy.login('user', 'password');
    });
    it('Vinculando receitas e orçamentos pela tela de fluxo de pedidos.', function () {
        cy.acessarMenuAtendimentos(elements_1.ELEMENTS.atendimentos);
        // const acessarAtendimentoEmAndamento = (element: string): void => {
        //     cy.get(element)
        //         .contains('a', 'Em andamento', { timeout: 10000 })
        //         .click({ force: true });
        // }
        // acessarAtendimentoEmAndamento(el.pedidoEmAndamento);
        var acessarFluxoDeTrabalhoAtendimento = function (element) {
            cy.get(element)
                .first()
                .contains('Fluxo de trabalho')
                .click({ force: true });
            cy.url().should('contain', dadosAmbiente.BASEURL + 'atendimentos/workflow');
        };
        acessarFluxoDeTrabalhoAtendimento(elements_1.ELEMENTS.acessarFluxoDeTrabalhoAtendimento);
        var selecionarParametroBuscaCardOrcamento = function (parametroBuscaCardOrcamento, opcaopParametroBuscaCardOrcamento, opcao) {
            cy.getVisible(parametroBuscaCardOrcamento)
                .click();
            cy.contains(opcaopParametroBuscaCardOrcamento, opcao)
                .click();
        };
        selecionarParametroBuscaCardOrcamento(elements_1.ELEMENTS.parametroBuscaCardOrcamento, elements_1.ELEMENTS.opcaopParametroBuscaCardOrcamento, OpcaoParametroBuscaCardOrcamento.VincularReceita);
        var selecionarCardOrcamento = function (element) {
            cy.getVisible(element)
                .click();
        };
        selecionarCardOrcamento(elements_1.ELEMENTS.cardOrcamento);
        var vincularReceitaOrcamento = function (element, numeroReceitaCapturado) { return __awaiter(void 0, void 0, Promise, function () {
            return __generator(this, function (_a) {
                cy.getVisible(element)
                    .type(numeroReceitaCapturado.toString())
                    .then(function () {
                    cy.getVisible(element)
                        .should('have.value', numeroReceitaCapturado);
                });
                vincularReceitaOrcamento(elements_1.ELEMENTS.vincularReceitaCardOrcamento, numeroReceitaCapturado);
                return [2 /*return*/];
            });
        }); };
    });
});
/*

acessar atendimentos;
acessar em andamento, fluxo de trabalho;
clicar em vincular receita;
aguardar ate barra de load carregar;
clicar em card de pedido;
inserir numero receita;
selecionar autocomplete;
clicar em relacionar;
clicar em ok no aviso;
aguardar load;
clicar em ok mensagem vinculado com sucesso;
guardar valor de orçamento importado em variavel;


*/
