"use strict";
exports.__esModule = true;
var elements_1 = require("../integration/elements");
var faker_1 = require("@faker-js/faker");
describe('Receitas', function () {
    var ambiente = Cypress.env('AMBIENTE');
    // Get the specific environment object based on the selected AMBIENTE
    var dadosAmbiente = Cypress.env(ambiente);
    var CanalRecebimento;
    (function (CanalRecebimento) {
        CanalRecebimento["Selecione"] = "";
        CanalRecebimento["Whatsapp"] = "1";
        CanalRecebimento["Email"] = "2";
        CanalRecebimento["InjetaveisWhatsapp"] = "4";
        CanalRecebimento["EasyHealth"] = "5";
        CanalRecebimento["MedX"] = "6";
        CanalRecebimento["Visitacao"] = "7";
        CanalRecebimento["BalcaoPessoalmente"] = "8";
        CanalRecebimento["WhatsappClinicaPrescritor"] = "9";
        CanalRecebimento["EmailClinicaPrescritor"] = "10";
        CanalRecebimento["InjetaveisEmail"] = "11";
        CanalRecebimento["InjetaveisEasyHealth"] = "12";
    })(CanalRecebimento || (CanalRecebimento = {}));
    ;
    var ParametroBuscaPaciente;
    (function (ParametroBuscaPaciente) {
        ParametroBuscaPaciente[ParametroBuscaPaciente["Nome"] = 0] = "Nome";
        ParametroBuscaPaciente[ParametroBuscaPaciente["Cdcli"] = 1] = "Cdcli";
        ParametroBuscaPaciente[ParametroBuscaPaciente["Cpf"] = 2] = "Cpf";
        ParametroBuscaPaciente[ParametroBuscaPaciente["TelCel"] = 3] = "TelCel";
    })(ParametroBuscaPaciente || (ParametroBuscaPaciente = {}));
    ;
    var Opcao;
    (function (Opcao) {
        Opcao[Opcao["Cancel"] = 0] = "Cancel";
        Opcao[Opcao["Ok"] = 1] = "Ok";
    })(Opcao || (Opcao = {}));
    ;
    var TipoReceita;
    (function (TipoReceita) {
        TipoReceita["PossuiReceita"] = "1";
        TipoReceita["NaoPossuiReceita"] = "2";
        TipoReceita["Repeticao"] = "3";
    })(TipoReceita || (TipoReceita = {}));
    ;
    var Cluster;
    (function (Cluster) {
        Cluster["Selecione"] = "";
        Cluster["cluster1"] = "1";
        Cluster["cluster2"] = "2";
        Cluster["cluster3"] = "3";
        Cluster["cluster4"] = "4";
        Cluster["cluster5"] = "5";
        Cluster["cluster6"] = "Pedi\u00E1trico";
        Cluster["cluster7"] = "Prescritores";
        Cluster["cluster8"] = "Atendimento injet\u00E1veis";
        Cluster["cluster12"] = "Consultoria t\u00E9cnica Injet\u00E1veis";
        Cluster["cluster14"] = "Recep\u00E7\u00E3o";
    })(Cluster || (Cluster = {}));
    ;
    beforeEach(function () {
        cy.login('user', 'password');
    });
    it('Importando Receita', function () {
        cy.acessarMenuReceitas(elements_1.ELEMENTS.receitas);
        var acessarImportarReceitas = function (element) {
            cy.getVisible(element)
                .contains('Importar receitas')
                .click();
            cy.url().should('contain', dadosAmbiente.BASEURL + 'receita/importar');
        };
        acessarImportarReceitas(elements_1.ELEMENTS.importarReceitas);
        var abrirModalRegistrarReceita = function (element) {
            cy.getVisible(element)
                .and('have.id', 'receita_register')
                .click();
            cy.inserirArquivo('img/ReceitaJpeg(1).jpeg', elements_1.ELEMENTS.importarImagem);
        };
        abrirModalRegistrarReceita(elements_1.ELEMENTS.abrirModalRegistrarReceita);
        var inserirPrescritor = function (element) {
            (function (sugestao_autocomplete) {
                return cy.get(sugestao_autocomplete, { timeout: 5000 })
                    .then(function ($modal) {
                    return $modal.is(':visible');
                });
            });
            var dados_prescritor = function (dados_prescritor) {
                if (dados_prescritor === void 0) { dados_prescritor = ['40452-SP']; }
                return faker_1.faker.helpers.arrayElement(dados_prescritor);
            };
            var dados_aleatorios_prescritor = dados_prescritor();
            cy.get(element)
                .should('have.id', 'modalMedicoRec')
                .clear()
                .type(dados_aleatorios_prescritor)
                .then(function () {
                cy.get(elements_1.ELEMENTS.sugestaoAutocomplete)
                    .as('suggestion');
                cy.get('@suggestion')
                    .then(function ($elemento) {
                    cy.wrap($elemento)
                        .invoke('attr', 'style', 'display: block')
                        .should('be.visible')
                        .eq(0)
                        .click({ force: true });
                });
            })
                .contains(dados_aleatorios_prescritor);
            cy.get(elements_1.ELEMENTS.modalSugestaoRelacaoPrescritor, { timeout: 10000 })
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
        inserirPrescritor(elements_1.ELEMENTS.prescritor);
        var parametroSelecaoPaciente = function (elemento) {
            var _a;
            var ids = (_a = {},
                _a[ParametroBuscaPaciente.Nome] = 't1_154c',
                _a[ParametroBuscaPaciente.Cdcli] = 't2_154c',
                _a[ParametroBuscaPaciente.Cpf] = 't3_154c',
                _a[ParametroBuscaPaciente.TelCel] = 't4_154c',
                _a);
            var id = ids[elemento];
            cy.getVisible(elements_1.ELEMENTS.parametroBuscaPaciente, { timeout: 5000 })
                .and('have.id', id)
                .check()
                .should('be.checked');
        };
        parametroSelecaoPaciente(ParametroBuscaPaciente.Cdcli);
        var inserirPaciente = function (element) {
            (function (sugestao_autocomplete) {
                return cy.get(sugestao_autocomplete, { timeout: 5000 }).then(function ($modal) {
                    return $modal.is(':visible');
                });
            });
            var dados_paciente = function (dados_paciente) {
                if (dados_paciente === void 0) { dados_paciente = ['618484']; }
                return faker_1.faker.helpers.arrayElement(dados_paciente);
            };
            var dados_aleatorios_paciente = dados_paciente();
            cy.get(element, { timeout: 20000 })
                .should('exist')
                .and('have.id', 'modalPacienteRec')
                .clear()
                .type(dados_aleatorios_paciente)
                .then(function () {
                cy.get(elements_1.ELEMENTS.sugestoesAutocomplete, { timeout: 5000 })
                    .as('suggestions');
            });
            cy.wait(3000);
            cy.get('@suggestions', { timeout: 5000 })
                .find(elements_1.ELEMENTS.sugestaoAutocomplete, { timeout: 5000 })
                .contains(dados_aleatorios_paciente)
                .then(function ($suggestion) {
                if ($suggestion.length > 0) {
                    cy.wrap($suggestion[0])
                        .scrollIntoView()
                        .click();
                }
            });
        };
        inserirPaciente(elements_1.ELEMENTS.paciente);
        var selecionarCanalRecebimento = function (opcao) {
            if (opcao === CanalRecebimento.Selecione) {
                console.log('Opção selecionada: Selecione');
            }
            else {
                cy.get(elements_1.ELEMENTS.canalRecebimento)
                    .should('be.visible')
                    .and('have.id', 'modalCanalContato')
                    .select(opcao)
                    .should('have.value', opcao)
                    .find('option:selected')
                    .should('be.selected');
            }
        };
        selecionarCanalRecebimento(CanalRecebimento.Whatsapp);
        var inserirDataFormatada = function (element, dataAtual) {
            var _a = cy.inserirData(dataAtual), DATA_FORMATADA = _a.DATA_FORMATADA, HORA_FORMATADA = _a.HORA_FORMATADA;
            cy.getVisible(element)
                .and('have.id', 'modalDataRec')
                .clear()
                .type(DATA_FORMATADA + "T" + HORA_FORMATADA);
            cy.getVisible(elements_1.ELEMENTS.observacaoInternaReceita).click();
            cy.get(elements_1.ELEMENTS.OkModalMensages, { timeout: 10000 }).as('modal');
            cy.get('@modal', { timeout: 10000 }).then(function ($modal) {
                if ($modal.length > 0) {
                    cy.wrap($modal[0]).scrollIntoView().click();
                }
            });
        };
        inserirDataFormatada(elements_1.ELEMENTS.dataRecebimento, new Date());
        var inserirTipoReceita = function (tipo) {
            cy.getVisible(elements_1.ELEMENTS.tipoReceita, { timeout: 5000 })
                .check()
                .should('be.checked');
        };
        inserirTipoReceita(TipoReceita.PossuiReceita);
        var salvarReceita = function (element) {
            cy.getVisible(element, { timeout: 5000 })
                .click({ force: true });
            // Wait for the success message to appear
            if (Cypress.$(elements_1.ELEMENTS.okSucessoReceitaImportadaModal).length > 0 && Cypress.$(elements_1.ELEMENTS.okSucessoReceitaImportadaModal).is(':visible')) {
                cy.getVisible(elements_1.ELEMENTS.okSucessoReceitaImportadaModal, { timeout: 5000 })
                    .click();
            }
            else {
                cy.wait(5000);
                cy.getVisible(elements_1.ELEMENTS.okSucessoReceitaImportadaModal, { timeout: 5000 })
                    .click();
            }
            cy.url().should('contain', dadosAmbiente.BASEURL + 'receita/importar');
        };
        salvarReceita(elements_1.ELEMENTS.salvarReceita);
        var guardarReceitaEmVariavel = function (element, numeroReceita) {
        };
        guardarReceitaEmVariavel();
    });
    var selecionarCluster = function (opcao) {
        var _a;
        (function (opcao) {
            cy.get(elements_1.ELEMENTS.cluster)
                .should('be.visible')
                .and('have.id', 'modalCluster')
                .select(opcao)
                .should('have.value', opcao)
                .find('option:selected')
                .should('be.selected');
        });
        var opcoes = (_a = {},
            _a[Cluster.cluster1] = function () { return selecionarCluster(Cluster.cluster1); },
            _a[Cluster.cluster2] = function () { return selecionarCluster(Cluster.cluster2); },
            _a[Cluster.cluster3] = function () { return selecionarCluster(Cluster.cluster3); },
            _a[Cluster.cluster4] = function () { return selecionarCluster(Cluster.cluster4); },
            _a[Cluster.cluster5] = function () { return selecionarCluster(Cluster.cluster5); },
            _a[Cluster.cluster6] = function () { return selecionarCluster(Cluster.cluster6); },
            _a[Cluster.cluster7] = function () { return selecionarCluster(Cluster.cluster7); },
            _a[Cluster.cluster8] = function () { return selecionarCluster(Cluster.cluster8); },
            _a[Cluster.cluster12] = function () { return selecionarCluster(Cluster.cluster12); },
            _a[Cluster.cluster14] = function () { return selecionarCluster(Cluster.cluster14); },
            _a[Cluster.Selecione] = function () {
                console.log('Opção selecionada: Selecione');
            },
            _a);
        opcoes[opcao]();
    };
    var inserirJuntocomReceita = function (element) {
        (function (orcamento_juntocom) {
            cy.get(element)
                .should('exist')
                .clear()
                .type(orcamento_juntocom)
                .should('have.value', orcamento_juntocom);
            cy.get(elements_1.ELEMENTS.autocompleteJuntocom)
                .contains(elements_1.ELEMENTS.autocompleteJuntocom, orcamento_juntocom)
                .click();
        });
    };
    inserirJuntocomReceita(elements_1.ELEMENTS.juntocomReceita);
    var inserirObservacaoInternaReceita = function (element, conteudo, useLoremIpsum) {
        if (useLoremIpsum) {
            conteudo = faker_1.faker.lorem.paragraph();
        }
        cy.getVisible(element)
            .should('exist')
            .clear()
            .type(conteudo)
            .should('have.value', conteudo);
    };
    inserirObservacaoInternaReceita(elements_1.ELEMENTS.observacaoInternaReceita, '', true);
});
