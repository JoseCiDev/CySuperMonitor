import { ELEMENTS as el } from '../integration/elements';
import { faker } from '@faker-js/faker';



describe('Receitas', () => {
    const ambiente = Cypress.env('AMBIENTE');

    // Get the specific environment object based on the selected AMBIENTE
    const dadosAmbiente = Cypress.env(ambiente);


    enum CanalRecebimento {
        Selecione = '',
        Whatsapp = '1',
        Email = '2',
        InjetaveisWhatsapp = '4',
        EasyHealth = '5',
        MedX = '6',
        Visitacao = '7',
        BalcaoPessoalmente = '8',
        WhatsappClinicaPrescritor = '9',
        EmailClinicaPrescritor = '10',
        InjetaveisEmail = '11',
        InjetaveisEasyHealth = '12',
    };

    interface OpcoesValidas {
        acao: 'Cancel' | 'Ok';
    }

    enum ParametroBuscaPaciente {
        Nome,
        Cdcli,
        Cpf,
        TelCel,
    };

    enum Opcao {
        Cancel,
        Ok,
    };

    enum TipoReceita {
        PossuiReceita = '1',
        NaoPossuiReceita = '2',
        Repeticao = '3',
    };

    enum Cluster {
        Selecione = '',
        cluster1 = '1',
        cluster2 = '2',
        cluster3 = '3',
        cluster4 = '4',
        cluster5 = '5',
        cluster6 = 'Pediátrico',
        cluster7 = 'Prescritores',
        cluster8 = 'Atendimento injetáveis',
        cluster12 = 'Consultoria técnica Injetáveis',
        cluster14 = 'Recepção',
    };



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


        const parametroSelecaoPaciente = (elemento: ParametroBuscaPaciente) => {
            const ids: Record<ParametroBuscaPaciente, string> = {
                [ParametroBuscaPaciente.Nome]: 't1_154c',
                [ParametroBuscaPaciente.Cdcli]: 't2_154c',
                [ParametroBuscaPaciente.Cpf]: 't3_154c',
                [ParametroBuscaPaciente.TelCel]: 't4_154c',
            };
            const id = ids[elemento];
            cy.getVisible(el.parametroBuscaPaciente, { timeout: 5000 })
                .and('have.id', id)
                .check()
                .should('be.checked');
        }
        parametroSelecaoPaciente(ParametroBuscaPaciente.Cdcli);


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




        const selecionarCanalRecebimento = (opcao: CanalRecebimento) => {
            if (opcao === CanalRecebimento.Selecione) {
                console.log('Opção selecionada: Selecione');
            } else {
                cy.get<HTMLSelectElement>(el.canalRecebimento)
                    .should('be.visible')
                    .and('have.id', 'modalCanalContato')
                    .select(opcao)
                    .should('have.value', opcao)
                    .find('option:selected')
                    .should('be.selected');
            }
        }
        selecionarCanalRecebimento(CanalRecebimento.Whatsapp);



        const inserirDataFormatada = (element: string, dataAtual: Date) => {
            const { DATA_FORMATADA, HORA_FORMATADA } = cy.inserirData(dataAtual);

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
        };
        inserirDataFormatada(el.dataRecebimento, new Date());



        const inserirTipoReceita = (tipo: TipoReceita) => {
            cy.getVisible(el.tipoReceita, { timeout: 5000 })
                .check()
                .should('be.checked');
        }
        inserirTipoReceita(TipoReceita.PossuiReceita);


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

        const guardarReceitaEmVariavel = (element: string, numeroReceita: number) => {

        }
        guardarReceitaEmVariavel()
    });



    const selecionarCluster = (opcao: Cluster): void => {
        (opcao: Cluster) => {

            cy.get<HTMLSelectElement>(el.cluster)
                .should('be.visible')
                .and('have.id', 'modalCluster')
                .select(opcao)
                .should('have.value', opcao)
                .find('option:selected')
                .should('be.selected');
        };
        const opcoes: Record<Cluster, () => void> = {
            [Cluster.cluster1]: () => selecionarCluster(Cluster.cluster1),
            [Cluster.cluster2]: () => selecionarCluster(Cluster.cluster2),
            [Cluster.cluster3]: () => selecionarCluster(Cluster.cluster3),
            [Cluster.cluster4]: () => selecionarCluster(Cluster.cluster4),
            [Cluster.cluster5]: () => selecionarCluster(Cluster.cluster5),
            [Cluster.cluster6]: () => selecionarCluster(Cluster.cluster6),
            [Cluster.cluster7]: () => selecionarCluster(Cluster.cluster7),
            [Cluster.cluster8]: () => selecionarCluster(Cluster.cluster8),
            [Cluster.cluster12]: () => selecionarCluster(Cluster.cluster12),
            [Cluster.cluster14]: () => selecionarCluster(Cluster.cluster14),
            [Cluster.Selecione]: () => {
                console.log('Opção selecionada: Selecione');
            },
        };
        opcoes[opcao]();
    }



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
