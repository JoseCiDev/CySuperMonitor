import { ELEMENTS as el } from '../../../elements';
import { faker } from '@faker-js/faker';
import { dadosParametros } from '../../../DadosParametros';


const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);


describe('Receitas', () => {


    beforeEach(function () {

        cy.login('user', 'password')

    })


    it('Importando Receita', () => {



        cy.acessarMenuReceitas(el.receitas);


        const acessarImportarReceitas = (element: string) => {
            cy.getVisible(element)
                .contains('Importar receitas')
                .click();

            cy.url().should('contain', dadosAmbiente.BASEURL + 'receita/importar');
        }
        acessarImportarReceitas(el.importarReceitas);



        const abrirModalRegistrarReceita = (element: string): void => {
            cy.getVisible(element)
                .and('have.id', 'receita_register')
                .click();

            cy.inserirArquivo('img/ReceitaJpeg(1).jpeg', el.importarImagem);
        }
        abrirModalRegistrarReceita(el.abrirModalRegistrarReceita);



        const inserirPrescritor = (element): void => {
            (sugestao_autocomplete: string): Cypress.Chainable<boolean> => {
                return cy.get(sugestao_autocomplete, { timeout: 5000 })
                    .then(($modal) => {
                        return $modal.is(':visible');
                    });
            }
            const dados_prescritor = (dados_prescritor: string[] = ['40452-SP']): string => {
                return faker.helpers.arrayElement(dados_prescritor);
            };
            const dados_aleatorios_prescritor = dados_prescritor();
            cy.get(element)
                .should('have.id', 'modalMedicoRec')
                .clear()
                .type(dados_aleatorios_prescritor)
                .then(() => {
                    cy.get(el.sugestaoAutocomplete)
                        .as('suggestion');
                    cy.get('@suggestion')
                        .then(($elemento) => {
                            cy.wrap($elemento)
                                .invoke('attr', 'style', 'display: block')
                                .should('be.visible')
                                .eq(0)
                                .click({ force: true });
                        });
                })
                .contains(dados_aleatorios_prescritor);

            cy.get(el.modalSugestaoRelacaoPrescritor, { timeout: 10000 })
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
        inserirPrescritor(el.prescritor)


        const parametroSelecaoPaciente = (element, opcaoSelecaoPaciente) => {

            cy.getVisible(element, { timeout: 5000 })
                .and('have.id', opcaoSelecaoPaciente)
                .check()
                .should('be.checked');
        };
        parametroSelecaoPaciente(el.parametroBuscaPaciente, dadosParametros.DadosParametros.ParametroBuscaPaciente.Cdcli)


        const inserirPaciente = (element: string): void => {
            (sugestao_autocomplete: string): Cypress.Chainable<boolean> => {
                return cy.get(sugestao_autocomplete, { timeout: 5000 }).then(($modal) => {
                    return $modal.is(':visible');
                });
            }
            const dados_paciente = (dados_paciente: string[] = ['618484']): string => {
                return faker.helpers.arrayElement(dados_paciente);
            };
            const dados_aleatorios_paciente = dados_paciente();
            cy.get(element, { timeout: 20000 })
                .should('exist')
                .and('have.id', 'modalPacienteRec')
                .clear()
                .type(dados_aleatorios_paciente)
                .then(() => {
                    cy.get(el.sugestoesAutocomplete, { timeout: 5000 })
                        .as('suggestions');
                });
            cy.wait(3000)
            cy.get('@suggestions', { timeout: 5000 })
                .find(el.sugestaoAutocomplete, { timeout: 5000 })
                .contains(dados_aleatorios_paciente)
                .then(($suggestion) => {
                    if ($suggestion.length > 0) {
                        cy.wrap($suggestion[0])
                            .scrollIntoView()
                            .click();
                    }
                });
        }
        inserirPaciente(el.paciente)




        const selecionarCanalRecebimento = (element, opcaoRecebimento) => {

            cy.get<HTMLSelectElement>(element)
                .should('be.visible')
                .and('have.id', 'modalCanalContato')
                .select(opcaoRecebimento)
                .should('have.value', opcaoRecebimento)
                .find('option:selected')
                .should('be.selected');
        }
        selecionarCanalRecebimento(el.canalRecebimento, dadosParametros.DadosParametros.CanalRecebimento.Whatsapp);



        const inserirDataFormatada = (element: string, dataAtual: Date) => {
            cy.inserirData(dataAtual).then(({ DATA_FORMATADA, HORA_FORMATADA }) => {
                cy.getVisible(element)
                    .and('have.id', 'modalDataRec')
                    .clear()
                    .type(`${DATA_FORMATADA}T${HORA_FORMATADA}`);

                cy.getVisible(el.observacaoInternaReceita).click();

                cy.get(el.OkModalMensages, { timeout: 10000 }).as('modal');
                cy.get('@modal', { timeout: 10000 }).then(($modal) => {
                    if ($modal.length > 0) {
                        cy.wrap($modal[0]).scrollIntoView().click();
                    }
                });
            });
        };

        inserirDataFormatada(el.dataRecebimento, new Date());



        const inserirTipoReceita = (element, tipo) => {
            cy.getVisible(element, { timeout: 5000 })
                .check()
                .should('be.checked');
        }
        inserirTipoReceita(el.tipoReceita, dadosParametros.DadosParametros.PossuiReceita);


        const salvarReceita = (element): void => {
            cy.getVisible(element, { timeout: 5000 })
                .click({ force: true });



            // Wait for the success message to appear
            if (Cypress.$(el.okSucessoReceitaImportadaModal).length > 0 && Cypress.$(el.okSucessoReceitaImportadaModal).is(':visible')) {
                cy.getVisible(el.okSucessoReceitaImportadaModal, { timeout: 5000 })
                    .click();
            } else {
                cy.wait(5000)
                cy.getVisible(el.okSucessoReceitaImportadaModal, { timeout: 5000 })
                    .click();
            }



            cy.url().should('contain', dadosAmbiente.BASEURL + 'receita/importar')
        }
        salvarReceita(el.salvarReceita)

    });



    const selecionarCluster = (element, clusterSelecionado): void => {

        cy.get<HTMLSelectElement>(element)
            .should('be.visible')
            .and('have.id', 'modalCluster')
            .select(clusterSelecionado)
            .should('have.value', clusterSelecionado)
            .find('option:selected')
            .should('be.selected');
    }
    selecionarCluster(el.cluster,dadosParametros.DadosParametros.Cluster)



    const inserirJuntocomReceita = (element: string): void => {
        (orcamento_juntocom: string) => {
            cy.get(element)
                .should('exist')
                .clear()
                .type(orcamento_juntocom)
                .should('have.value', orcamento_juntocom);
            cy.get(el.autocompleteJuntocom)
                .contains(el.autocompleteJuntocom, orcamento_juntocom)
                .click();
        }

    }
    inserirJuntocomReceita(el.juntocomReceita);


    const inserirObservacaoInternaReceita = (element: string, conteudo: string, useLoremIpsum?: boolean) => {

        if (useLoremIpsum) {
            conteudo = faker.lorem.paragraph();
        }
        cy.getVisible(element)
            .should('exist')
            .clear()
            .type(conteudo)
            .should('have.value', conteudo);
    };
    inserirObservacaoInternaReceita(el.observacaoInternaReceita, '', true);


})
