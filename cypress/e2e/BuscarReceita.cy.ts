import { dadosParametros } from '../DadosParametros';
import { ELEMENTS as el } from '../elements';
import { faker } from '@faker-js/faker';



describe('Busca de receitas', () => {
    const ambiente = Cypress.env('AMBIENTE');
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



        const abrirModalBuscaReceita = (element: string): void => {
            cy.wait(2000)
            cy.getVisible(el.abrirFiltroBuscaReceita, { timeout: 5000 })
                .click()
                .should('have.id', 'centerHeadFilter')
                .contains('Ocultar filtros de busca')
        }
        abrirModalBuscaReceita(el.abrirFiltroBuscaReceita);



        const inserirDataInicialBuscaReceita = async (element: string, dataAtual: Date = new Date()): Promise<void> => {
            cy.inserirData(dataAtual)
                .then(({ DATA_FORMATADA, HORA_FORMATADA }: { DATA_FORMATADA: string, HORA_FORMATADA: string }) => {
                    const dataHoraAtualCompleta = `${DATA_FORMATADA}T${HORA_FORMATADA}`;

                    cy.getVisible(element)
                        .type(dataHoraAtualCompleta.toString())
                        .then(() => {
                            cy.getVisible(element)
                                .should('have.value', dataHoraAtualCompleta);
                        });
                })
        }
        inserirDataInicialBuscaReceita(el.filtroDataInicialBuscaReceita);



        const inserirDataFinalBuscaReceita = async (element: string, dataAtual: Date = new Date()): Promise<void> => {
            cy.inserirData(dataAtual)
                .then(({ DATA_FORMATADA, HORA_FORMATADA }: { DATA_FORMATADA: string, HORA_FORMATADA: string }) => {
                    const dataHoraAtualCompleta = `${DATA_FORMATADA}T${HORA_FORMATADA}`;

                    cy.getVisible(element)
                        .type(dataHoraAtualCompleta.toString())
                        .then(() => {
                            cy.getVisible(element)
                                .should('have.value', dataHoraAtualCompleta);
                        });
                })
        }
        inserirDataFinalBuscaReceita(el.filtroDataInicialBuscaReceita);



        const selecionarFiltroPendencias = (element: string, opcao): void => {
            const id = el[`filtroPendencias${opcao}`];
            cy.getVisible(element, { timeout: 5000 })
                .select(opcao)
                .should('have.value', opcao)
                .find('option:selected')
                .should('be.selected');
        }

        selecionarFiltroPendencias(el.filtroPendenciasBuscaReceita, dadosParametros.DadosParametros.FiltroPendentes.Pendentes);



        const procurarReceita = (element: string): void => {
            cy.getVisible(element)
                .contains('Procurar')
                .click()
        }
        procurarReceita(el.procurarReceita);



        const capturarNumeroReceita = (element: string): Cypress.Chainable<string> => {
            return cy.getVisible(element)
                .eq(0)
                .invoke('text')
                .then((texto) => {
                    const numeroReceita = parseInt(texto.trim(), 10); // Converta a string para número
                    cy.wrap(numeroReceita)
                        .as('numeroReceita');
                    cy.setReceitaNumero(numeroReceita);
                });
        };
        capturarNumeroReceita(el.numeroReceita);

    })

})