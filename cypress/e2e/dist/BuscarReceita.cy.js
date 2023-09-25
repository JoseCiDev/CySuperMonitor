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
var elements_1 = require("../integration/elements");
var FiltroPendentes;
(function (FiltroPendentes) {
    FiltroPendentes["Todos"] = "0";
    FiltroPendentes["Pendentes"] = "1";
    FiltroPendentes["Vinculados"] = "2";
})(FiltroPendentes || (FiltroPendentes = {}));
;
describe('Busca de receitas', function () {
    var ambiente = Cypress.env('AMBIENTE');
    // Get the specific environment object based on the selected AMBIENTE
    var dadosAmbiente = Cypress.env(ambiente);
    beforeEach(function () {
        cy.login('user', 'password');
    });
    it('Buscando receitas pela tela de importação de receitas.', function () {
        cy.acessarMenuReceitas(elements_1.ELEMENTS.receitas);
        var acessarImportarReceitas = function (element) {
            cy.getVisible(element)
                .contains('Importar receitas')
                .click();
            cy.url().should('contain', dadosAmbiente.BASEURL + 'receita/importar');
        };
        acessarImportarReceitas(elements_1.ELEMENTS.importarReceitas);
        var abrirModalBuscaReceita = function (element) {
            cy.wait(2000);
            cy.getVisible(elements_1.ELEMENTS.abrirFiltroBuscaReceita, { timeout: 5000 })
                .click()
                .should('have.id', 'centerHeadFilter')
                .contains('Ocultar filtros de busca');
        };
        abrirModalBuscaReceita(elements_1.ELEMENTS.abrirFiltroBuscaReceita);
        var inserirDataInicialBuscaReceita = function (element, dataAtual) {
            if (dataAtual === void 0) { dataAtual = new Date(); }
            return __awaiter(void 0, void 0, Promise, function () {
                return __generator(this, function (_a) {
                    cy.inserirData(dataAtual)
                        .then(function (_a) {
                        var DATA_FORMATADA = _a.DATA_FORMATADA, HORA_FORMATADA = _a.HORA_FORMATADA;
                        var dataHoraAtualCompleta = DATA_FORMATADA + "T" + HORA_FORMATADA;
                        cy.getVisible(element)
                            .type(dataHoraAtualCompleta.toString())
                            .then(function () {
                            cy.getVisible(element)
                                .should('have.value', dataHoraAtualCompleta);
                        });
                    });
                    return [2 /*return*/];
                });
            });
        };
        inserirDataInicialBuscaReceita(elements_1.ELEMENTS.filtroDataInicialBuscaReceita);
        var inserirDataFinalBuscaReceita = function (element, dataAtual) {
            if (dataAtual === void 0) { dataAtual = new Date(); }
            return __awaiter(void 0, void 0, Promise, function () {
                return __generator(this, function (_a) {
                    cy.inserirData(dataAtual)
                        .then(function (_a) {
                        var DATA_FORMATADA = _a.DATA_FORMATADA, HORA_FORMATADA = _a.HORA_FORMATADA;
                        var dataHoraAtualCompleta = DATA_FORMATADA + "T" + HORA_FORMATADA;
                        cy.getVisible(element)
                            .type(dataHoraAtualCompleta.toString())
                            .then(function () {
                            cy.getVisible(element)
                                .should('have.value', dataHoraAtualCompleta);
                        });
                    });
                    return [2 /*return*/];
                });
            });
        };
        inserirDataFinalBuscaReceita(elements_1.ELEMENTS.filtroDataInicialBuscaReceita);
        var selecionarFiltroPendencias = function (element, opcao) {
            var _a;
            var opcoes = (_a = {},
                _a[FiltroPendentes.Todos] = elements_1.ELEMENTS.filtroPendenciasTodos,
                _a[FiltroPendentes.Pendentes] = elements_1.ELEMENTS.filtroPendenciasPendentes,
                _a[FiltroPendentes.Vinculados] = elements_1.ELEMENTS.filtroPendenciasVinculados,
                _a);
            var id = opcoes[opcao];
            cy.getVisible(element, { timeout: 5000 })
                .select(opcao)
                .should('have.value', opcao)
                .find('option:selected')
                .should('be.selected');
        };
        selecionarFiltroPendencias(elements_1.ELEMENTS.filtroPendenciasBuscaReceita, FiltroPendentes.Pendentes);
        var procurarReceita = function (element) {
            cy.getVisible(element)
                .contains('Procurar')
                .click();
        };
        procurarReceita(elements_1.ELEMENTS.procurarReceita);
        var capturarNumeroReceita = function (element) {
            return cy.getVisible(element)
                .eq(0)
                .invoke('text')
                .then(function (texto) {
                var numeroReceita = parseInt(texto.trim(), 10); // Converta a string para número
                cy.wrap(numeroReceita)
                    .as('numeroReceita');
                cy.setReceitaNumero(numeroReceita);
            });
        };
        capturarNumeroReceita(elements_1.ELEMENTS.numeroReceita);
    });
});
