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
    var Parametro;
    (function (Parametro) {
        Parametro[Parametro["Nome"] = 0] = "Nome";
        Parametro[Parametro["Cdcli"] = 1] = "Cdcli";
        Parametro[Parametro["Cpf"] = 2] = "Cpf";
        Parametro[Parametro["TelCel"] = 3] = "TelCel";
    })(Parametro || (Parametro = {}));
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
        cy.get(elements_1.ELEMENTS.importar_receitas)
            .should('be.visible')
            .contains('Importar receitas')
            .click();
        cy.url().should('contain', dadosAmbiente.BASEURL + 'receita/importar');
        cy.get(elements_1.ELEMENTS.abrir_modal_registrar_receita)
            .should('be.visible')
            .and('have.id', 'receita_register')
            .click();
        cy.inserirArquivo('img/ReceitaJpeg(1).jpeg', elements_1.ELEMENTS.importar_imagem);
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
        cy.get(elements_1.ELEMENTS.prescritor)
            .should('have.id', 'modalMedicoRec')
            .type(dados_aleatorios_prescritor)
            .then(function () {
            cy.get(elements_1.ELEMENTS.sugestao_autocomplete)
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
        cy.get(elements_1.ELEMENTS.modal_sugestao_relacao_prescritor, { timeout: 10000 })
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
        var parametroSelecaoPaciente = function (elemento) {
            var _a;
            var ids = (_a = {},
                _a[Parametro.Nome] = 't1_154c',
                _a[Parametro.Cdcli] = 't2_154c',
                _a[Parametro.Cpf] = 't3_154c',
                _a[Parametro.TelCel] = 't4_154c',
                _a);
            var id = ids[elemento];
            cy.get(elements_1.ELEMENTS.parametro_busca_paciente, { timeout: 5000 })
                .should('be.visible')
                .and('have.id', id)
                .check()
                .should('be.checked');
        };
        parametroSelecaoPaciente(Parametro.Cdcli);
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
        cy.get(elements_1.ELEMENTS.paciente, { timeout: 10000 })
            .should('exist')
            .and('have.id', 'modalPacienteRec')
            .type(dados_aleatorios_paciente)
            .then(function () {
            cy.get(elements_1.ELEMENTS.sugestoes_autocomplete, { timeout: 10000 })
                .as('suggestions');
            cy.get('@suggestions', { timeout: 10000 })
                .find(elements_1.ELEMENTS.sugestao_autocomplete, { timeout: 10000 })
                .contains(dados_aleatorios_paciente)
                .then(function ($suggestion) {
                if ($suggestion.length > 0) {
                    cy.wrap($suggestion[0])
                        .scrollIntoView()
                        .click();
                }
            });
        });
        var selecionarCanalRecebimento = function (opcao) {
            if (opcao === CanalRecebimento.Selecione) {
                console.log('Opção selecionada: Selecione');
            }
            else {
                cy.get(elements_1.ELEMENTS.canal_recebimento)
                    .should('be.visible')
                    .and('have.id', 'modalCanalContato')
                    .select(opcao)
                    .should('have.value', opcao)
                    .find('option:selected')
                    .should('be.selected');
            }
        };
        selecionarCanalRecebimento(CanalRecebimento.Whatsapp);
        var inserirDataAtualFormatada = function (data_atual) {
            if (data_atual === void 0) { data_atual = new Date(); }
            // Obtém os componentes individuais da data e hora
            var ano = data_atual.getFullYear();
            var mes = String(data_atual.getMonth() + 1).padStart(2, '0'); // O mês começa em 0, por isso é necessário adicionar 1
            var dia = String(data_atual.getDate()).padStart(2, '0');
            var hora = String(data_atual.getHours()).padStart(2, '0');
            var minutos = String(data_atual.getMinutes()).padStart(2, '0');
            var segundos = String(data_atual.getSeconds()).padStart(2, '0');
            // Formata a data e hora no formato desejado
            var DATA_FORMATADA = ano + "-" + mes + "-" + dia;
            var HORA_FORMATADA = hora + ":" + minutos + ":" + segundos;
            cy.get(elements_1.ELEMENTS.data_recebimento)
                .should('be.visible')
                .and('have.id', 'modalDataRec')
                .type(DATA_FORMATADA + "T" + HORA_FORMATADA);
        };
        inserirDataAtualFormatada();
        cy.get(elements_1.ELEMENTS.observacao_interna)
            .should('be.visible')
            .click();
        cy.get(elements_1.ELEMENTS.ok_modal_mensagens, { timeout: 10000 })
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
        var inserirTipoReceita = function (tipo) {
            cy.get(elements_1.ELEMENTS.tipo_receita, { timeout: 5000 })
                .should('be.visible')
                .check()
                .should('be.checked');
        };
        inserirTipoReceita(TipoReceita.PossuiReceita);
        cy.get(elements_1.ELEMENTS.salvar_receita, { timeout: 5000 })
            .should('be.visible')
            .click({ force: true });
        // Wait for the success message to appear
        if (Cypress.$(elements_1.ELEMENTS.ok_sucesso_receita_importada).length > 0 && Cypress.$(elements_1.ELEMENTS.ok_sucesso_receita_importada).is(':visible')) {
            cy.get(elements_1.ELEMENTS.ok_sucesso_receita_importada, { timeout: 5000 })
                .should('be.visible')
                .click();
        }
        else {
            cy.wait(5000);
            cy.get(elements_1.ELEMENTS.ok_sucesso_receita_importada, { timeout: 5000 })
                .should('be.visible')
                .click();
        }
        cy.url().should('contain', dadosAmbiente.BASEURL + 'receita/importar');
    });
    (function (opcao) {
        var _a;
        var selecionarCluster = function (opcao) {
            cy.get(elements_1.ELEMENTS.cluster)
                .should('be.visible')
                .and('have.id', 'modalCluster')
                .select(opcao)
                .should('have.value', opcao)
                .find('option:selected')
                .should('be.selected');
        };
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
    });
    (function (orcamento_juntocom) {
        cy.get(elements_1.ELEMENTS.juntocom)
            .should('exist')
            .type(orcamento_juntocom)
            .should('have.value', orcamento_juntocom);
        cy.get(elements_1.ELEMENTS.autocomplete_juntocom)
            .contains(elements_1.ELEMENTS.autocomplete_juntocom, orcamento_juntocom)
            .click();
    });
    (function (conteudo) {
        var texto_aleatorio = faker_1.faker.lorem.paragraph(conteudo);
        cy.get(elements_1.ELEMENTS.observacao_interna)
            .should('exist')
            .type(texto_aleatorio)
            .should('have.text', texto_aleatorio);
    });
});
