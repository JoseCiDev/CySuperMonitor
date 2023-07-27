import { ELEMENTS as el } from '../integration/elements';
import { faker } from '@faker-js/faker';



enum FiltroPendentes {
    Todos = '0',
    Pendentes = '1',
    Vinculados = '2',

};



describe('Busca de receitas', () => {
    const ambiente = Cypress.env('AMBIENTE');

    // Get the specific environment object based on the selected AMBIENTE
    const dadosAmbiente = Cypress.env(ambiente);



    beforeEach(function () {

        cy.login('user', 'password')

    })



    it('Buscando receitas pela tela de importação de receitas.', () => {



        cy.acessarMenuReceitas(el.receitas);


        const acessarImportarReceitas = (element: string): void => {
            cy.getVisible(element)
                .contains('Importar receitas')
                .click();

            cy.url().should('contain', dadosAmbiente.BASEURL + 'receita/importar');
        }
        acessarImportarReceitas(el.importarReceitas);



        const abrirFiltroBuscaReceita = (element: string): void => {
            cy.getVisible(element)
                .click()
                .should('have.id', 'centerHeadFilter')
                .contains('Exibir filtros de busca')
        }
        abrirFiltroBuscaReceita(el.abrirFiltroBuscaReceita)



        const inserirDataInicialBuscaReceita = (DataInicialBuscaReceita: string, dataAtual: Date = new Date()): void => {
            const { DATA_FORMATADA, HORA_FORMATADA } = cy.inserirData(dataAtual);
            const dataHoraAtualCompleta = `${DATA_FORMATADA}T${HORA_FORMATADA}`;
            cy.getVisible(DataInicialBuscaReceita)
                .contains('Data inicial')
                .invoke('val', dataHoraAtualCompleta)
                .should('have.value', dataHoraAtualCompleta)
        }
        inserirDataInicialBuscaReceita(el.filtroDataInicialBuscaReceita)



        const inserirDataFinalBuscaReceita = (DataFinalBuscaReceita: string, dataAtual: Date = new Date()): void => {
            const { DATA_FORMATADA, HORA_FORMATADA } = cy.inserirData(dataAtual);
            const dataHoraAtualCompleta = `${DATA_FORMATADA}T${HORA_FORMATADA}`;
            cy.getVisible(DataFinalBuscaReceita)
                .contains('Data inicial')
                .invoke('val', dataHoraAtualCompleta)
                .should('have.value', dataHoraAtualCompleta)
        }
        inserirDataFinalBuscaReceita(el.filtroDataFinalBuscaReceita)



        const selecionarFiltroPendencias = (element: string, opcao: FiltroPendentes): void => {
            const opcoes: Record<FiltroPendentes, string> = {
                [FiltroPendentes.Todos]: el.filtroPendenciasTodos,
                [FiltroPendentes.Pendentes]: el.filtroPendenciasPendentes,
                [FiltroPendentes.Vinculados]: el.filtroPendenciasVinculados
            };
            const id = opcoes[opcao];
            cy.getVisible(element, { timeout: 5000 })
                .select(opcao)
                .should('have.value', opcao)
                .find('option:selected')
                .should('be.selected');
        }
        selecionarFiltroPendencias(el.filtroPendenciasBuscaReceita, FiltroPendentes.Pendentes);


        const procurarReceita = (element: string): void => {
            cy.getVisible(element)
                .click()
        }
        procurarReceita(el.procurarReceita)



        const capturarNumeroReceita = (element: string): void => {
            cy.getVisible(element)
                .invoke('text')
                .then((texto) => {
                    const numeroReceita = texto.trim()
                });
        }
        capturarNumeroReceita(el.numeroReceita);


    });



    /*
    clicar em exibir filtros de busca;
    inserir data inicial;
    inserir data final;
    selecionar pendencias pendentes;
    clicar em procurar;
    guardar o numero da receita em variavel;
    */
})
