"use strict";
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
        var abrirFiltroBuscaReceita = function (element) {
            cy.getVisible(element)
                .click()
                .should('have.id', 'centerHeadFilter')
                .contains('Exibir filtros de busca');
        };
        abrirFiltroBuscaReceita(elements_1.ELEMENTS.abrirFiltroBuscaReceita);
        var inserirDataInicialBuscaReceita = function (DataInicialBuscaReceita, dataAtual) {
            if (dataAtual === void 0) { dataAtual = new Date(); }
            var _a = cy.inserirData(dataAtual), DATA_FORMATADA = _a.DATA_FORMATADA, HORA_FORMATADA = _a.HORA_FORMATADA;
            var dataHoraAtualCompleta = DATA_FORMATADA + "T" + HORA_FORMATADA;
            cy.getVisible(DataInicialBuscaReceita)
                .contains('Data inicial')
                .invoke('val', dataHoraAtualCompleta)
                .should('have.value', dataHoraAtualCompleta);
        };
        inserirDataInicialBuscaReceita(elements_1.ELEMENTS.filtroDataInicialBuscaReceita);
        var inserirDataFinalBuscaReceita = function (DataFinalBuscaReceita, dataAtual) {
            if (dataAtual === void 0) { dataAtual = new Date(); }
            var _a = cy.inserirData(dataAtual), DATA_FORMATADA = _a.DATA_FORMATADA, HORA_FORMATADA = _a.HORA_FORMATADA;
            var dataHoraAtualCompleta = DATA_FORMATADA + "T" + HORA_FORMATADA;
            cy.getVisible(DataFinalBuscaReceita)
                .contains('Data inicial')
                .invoke('val', dataHoraAtualCompleta)
                .should('have.value', dataHoraAtualCompleta);
        };
        inserirDataFinalBuscaReceita(elements_1.ELEMENTS.filtroDataFinalBuscaReceita);
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
                .click();
        };
        procurarReceita(elements_1.ELEMENTS.procurarReceita);
        var capturarNumeroReceita = function (element) {
            cy.getVisible(element)
                .invoke('text')
                .then(function (texto) {
                var numeroReceita = texto.trim();
            });
        };
        capturarNumeroReceita(elements_1.ELEMENTS.numeroReceita);
    });
    /*
    clicar em exibir filtros de busca;
    inserir data inicial;
    inserir data final;
    selecionar pendencias pendentes;
    clicar em procurar;
    guardar o numero da receita em variavel;
    */
});
