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

    enum Parametro {
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



        cy.get(el.importarReceitas)
            .should('be.visible')
            .contains('Importar receitas')
            .click();

        cy.url().should('contain', dadosAmbiente.BASEURL + 'receita/importar');



        cy.get(el.abrirModalRegistrarReceita)
            .should('be.visible')
            .and('have.id', 'receita_register')
            .click();


        cy.inserirArquivo('img/ReceitaJpeg(1).jpeg', el.importarImagem);



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
        cy.get(el.prescritor)
            .should('have.id', 'modalMedicoRec')
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



        const parametroSelecaoPaciente = (elemento: Parametro) => {
            const ids: Record<Parametro, string> = {
                [Parametro.Nome]: 't1_154c',
                [Parametro.Cdcli]: 't2_154c',
                [Parametro.Cpf]: 't3_154c',
                [Parametro.TelCel]: 't4_154c',
            };
            const id = ids[elemento];
            cy.get(el.parametroBuscaPaciente, { timeout: 5000 })
                .should('be.visible')
                .and('have.id', id)
                .check()
                .should('be.checked');
        }
        parametroSelecaoPaciente(Parametro.Cdcli);



        (sugestao_autocomplete: string): Cypress.Chainable<boolean> => {
            return cy.get(sugestao_autocomplete, { timeout: 5000 }).then(($modal) => {
                return $modal.is(':visible');
            });
        }
        const dados_paciente = (dados_paciente: string[] = ['618484']): string => {
            return faker.helpers.arrayElement(dados_paciente);
        };
        const dados_aleatorios_paciente = dados_paciente();
        cy.get(el.paciente, { timeout: 20000 })
            .should('exist')
            .and('have.id', 'modalPacienteRec')
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



        const inserirDataAtualFormatada = (data_atual: Date = new Date()) => {
            // Obtém os componentes individuais da data e hora
            const ano: number = data_atual.getFullYear();
            const mes: string = String(data_atual.getMonth() + 1).padStart(2, '0'); // O mês começa em 0, por isso é necessário adicionar 1
            const dia: string = String(data_atual.getDate()).padStart(2, '0');
            const hora: string = String(data_atual.getHours()).padStart(2, '0');
            const minutos: string = String(data_atual.getMinutes()).padStart(2, '0');
            const segundos: string = String(data_atual.getSeconds()).padStart(2, '0');
            // Formata a data e hora no formato desejado
            const DATA_FORMATADA: string = `${ano}-${mes}-${dia}`;
            const HORA_FORMATADA: string = `${hora}:${minutos}:${segundos}`;
            cy.get(el.dataRecebimento)
                .should('be.visible')
                .and('have.id', 'modalDataRec')
                .type(`${DATA_FORMATADA}T${HORA_FORMATADA}`);
        }
        inserirDataAtualFormatada();



        cy.get(el.observacaoInterna)
            .should('be.visible')
            .click()

        cy.get(el.OkModalMensages, { timeout: 10000 })
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



        const inserirTipoReceita = (tipo: TipoReceita) => {
            cy.get(el.tipoReceita, { timeout: 5000 })
                .should('be.visible')
                .check()
                .should('be.checked');
        }
        inserirTipoReceita(TipoReceita.PossuiReceita);



        cy.get(el.salvarReceita, { timeout: 5000 })
            .should('be.visible')
            .click({ force: true });



        // Wait for the success message to appear
        if (Cypress.$(el.okSucessoReceitaImportadaModal).length > 0 && Cypress.$(el.okSucessoReceitaImportadaModal).is(':visible')) {
            cy.get(el.okSucessoReceitaImportadaModal, { timeout: 5000 })
                .should('be.visible')
                .click();
        } else {
            cy.wait(5000)
            cy.get(el.okSucessoReceitaImportadaModal, { timeout: 5000 })
                .should('be.visible')
                .click();
        }



        cy.url().should('contain', dadosAmbiente.BASEURL + 'receita/importar')

    });





    (opcao: Cluster) => {
        const selecionarCluster = (opcao: Cluster) => {
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

    (orcamento_juntocom: string) => {
        cy.get(el.juntocom)
            .should('exist')
            .type(orcamento_juntocom)
            .should('have.value', orcamento_juntocom);
        cy.get(el.autocompleteJuntocom)
            .contains(el.autocompleteJuntocom, orcamento_juntocom)
            .click();
    }

    (conteudo: number) => {
        const texto_aleatorio: string = faker.lorem.paragraph(conteudo);
        cy.get(el.observacaoInterna)
            .should('exist')
            .type(texto_aleatorio)
            .should('have.text', texto_aleatorio);
    }

})
