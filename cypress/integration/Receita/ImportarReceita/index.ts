/// <reference types="cypress" />
import { ELEMENTS } from './elements';
const el = ELEMENTS;
import { Receita } from '../index';
import { faker } from '@faker-js/faker';


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
}

export class ImportarReceita extends Receita {
    imgreceita: string;
    imgpdfreceita: string;

    constructor(
        imgreceita: string,
        imgpdfreceita: string,
        imagem: string,
        prescritor: string,
        paciente: string,
        dataRecebimento: Date,
        canalRecebimento: string,
        atendenteResponsavel: string,
        observacao: string,
        varejo: string,
        medicamentoControlado: string,
        urgente: string,
        clienteAlerta: string,
        possuiReceita: string,
        naoPossuiReceita: string,
        repeticao: string,
    ) {
        super(
            imagem,
            prescritor,
            paciente,
            dataRecebimento,
            canalRecebimento,
            atendenteResponsavel,
            observacao,
            varejo,
            medicamentoControlado,
            urgente,
            clienteAlerta,
            possuiReceita,
            naoPossuiReceita,
            repeticao,
        );
        this.imagem = imgreceita;
        this.imagem = imgpdfreceita;
        this.prescritor = prescritor;
        this.paciente = paciente;
        this.dataRecebimento = dataRecebimento;
        this.canalRecebimento = canalRecebimento;
        this.atendenteResponsavel = atendenteResponsavel;
        this.observacao = observacao;
        this.varejo = varejo;
        this.medicamentoControlado = medicamentoControlado;
        this.urgente = urgente;
        this.clienteAlerta = clienteAlerta;
        this.possuiReceita = possuiReceita;
        this.naoPossuiReceita = naoPossuiReceita;
        this.repeticao = repeticao;
    }


    ambiente_selecionado = Cypress.env('enviroment').HOMOLOG_ACESS


    subMenuImportacaoReceita() {
        cy.get(el.importar_receitas)
            .should('be.visible')
            .contains('Importar receitas')
            .click()
        cy.url().should('contain', this.ambiente_selecionado.BASEURL + 'receita/importar');
    }


    acessarTelaRegistroReceita() {
        cy.get(el.abrir_modal_registrar_receita)
            .should('be.visible')
            .and('have.id', 'receita_register')
            .click();
    }


    inserirImagemJpeg() {
        cy.fixture('img/ReceitaJpeg(1).jpeg', 'base64')
            .then((conteudo_arquivo) => {
                const nome = 'ReceitaJpeg(1).jpeg';
                const mimeType = 'image/jpeg';

                const blob = Cypress.Blob.base64StringToBlob(conteudo_arquivo, mimeType);
                const file = new File([blob], nome, { type: mimeType });

                cy.get(el.importar_imagem)
                    .then(($input) => {
                        const event = new Event('change', { bubbles: true });
                        Object.defineProperty($input[0], 'files', {
                            value: [file],
                            writable: false,
                        });
                        $input[0].dispatchEvent(event);
                    });
            });
    }


    inserirImagemPdf() { }

    inserirPrescritor(listaCRM: string[]) {
        const crmAleatorio: string = faker.helpers.arrayElement(listaCRM);

        cy.get(el.prescritor)
            .should('have.id', 'modalMedicoRec')
            .type(crmAleatorio)
            .then(() => {
                cy.get(el.sugestao_autocomplete)
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
            .contains(crmAleatorio);
    }


    SugestaoRelacaoPrescritorAtendenteCluster() {
        enum Option {
            Cancel,
            Ok,
        }

        function aplicarRelacaoPrescritor(option: Option): void {
            const actions: { [key in Option]: () => void } = {
                [Option.Cancel]: () => {
                    cy.get(el.relacao_prescritor_atendente_cluster_cancel)
                        .should('be.visible')
                        .and('have.class', 'btn btn-secondary pull-left')
                        .contains('Cancelar')
                        .click()
                },
                [Option.Ok]: () => {
                    cy.get(el.relacao_prescritor_atendente_cluster_ok)
                        .should('be.visible')
                        .and('have.class', 'btn btn-primary')
                        .contains('OK')
                        .click()
                },
            };

            if (option in actions) {
                actions[option]();
            } else {
                // Code for invalid or unknown options
                console.log('Invalid option');
                // Other actions related to invalid options
            }
        }

        // aplicarRelacaoPrescritor(Option.Cancel); // Calls the function with the Cancel option
        aplicarRelacaoPrescritor(Option.Ok); // Calls the function with the Ok option

    }


    selecionarParametroBuscaPaciente() {
        enum RadioElement {
            Nome,
            Cdcli,
            Cpf,
            TelCel,
        }

        function opcaoBuscaPaciente(element: RadioElement): void {
            const ids: Record<RadioElement, string> = {
                [RadioElement.Nome]: 't1_154c',
                [RadioElement.Cdcli]: 't2_154c',
                [RadioElement.Cpf]: 't3_154c',
                [RadioElement.TelCel]: 't4_154c',
            };

            const id = ids[element];

            cy.get(el.busca_paciente_cdcli)
                .should('be.visible')
                .and('have.id', id)
                .check()
                .should('be.checked');
        }

        // Chamando a função com valores enum
        // opcaoBuscaPaciente(RadioElement.Nome); // Chama a função com o elemento "nome"
        opcaoBuscaPaciente(RadioElement.Cdcli); // Chama a função com o elemento "cdcli"
        // opcaoBuscaPaciente(RadioElement.Cpf); // Chama a função com o elemento "cpf"
        // opcaoBuscaPaciente(RadioElement.TelCel); // Chama a função com o elemento "TEL / CEL"


    }


    inserirPaciente(cdcli: string) {

        cy.get(el.paciente)
            .should('be.visible')
            .and('have.id', 'modalPacienteRec')
            .type(cdcli)
            .then(() => {
                cy.get('.autocomplete-suggestions')
                    .as('suggestions')
                cy.get('@suggestions')
                    .find('.autocomplete-suggestion')
                    .should('be.visible')
                    .contains(cdcli)
                    .then(($suggestions) => {
                        cy.wrap($suggestions[0])
                            .scrollIntoView()
                            .click();
                    });
            });
    }


    inserirCanalRecebimento(opcao: CanalRecebimento) {

        const selecionarOpcao = (opcao: CanalRecebimento) => {

            cy.get<HTMLSelectElement>(el.canal_recebimento)
                .should('be.visible')
                .and('have.id', 'modalCanalContato')
                .select(opcao)
                .should('have.value', opcao)
                .find('option:selected')
                .should('be.selected');
        };
        
        const opcoes: Record<CanalRecebimento, () => void> = {
            [CanalRecebimento.Whatsapp]: () => selecionarOpcao(CanalRecebimento.Whatsapp),
            [CanalRecebimento.Email]: () => selecionarOpcao(CanalRecebimento.Email),
            [CanalRecebimento.InjetaveisWhatsapp]: () => selecionarOpcao(CanalRecebimento.InjetaveisWhatsapp),
            [CanalRecebimento.EasyHealth]: () => selecionarOpcao(CanalRecebimento.EasyHealth),
            [CanalRecebimento.MedX]: () => selecionarOpcao(CanalRecebimento.MedX),
            [CanalRecebimento.Visitacao]: () => selecionarOpcao(CanalRecebimento.Visitacao),
            [CanalRecebimento.BalcaoPessoalmente]: () => selecionarOpcao(CanalRecebimento.BalcaoPessoalmente),
            [CanalRecebimento.WhatsappClinicaPrescritor]: () => selecionarOpcao(CanalRecebimento.WhatsappClinicaPrescritor),
            [CanalRecebimento.EmailClinicaPrescritor]: () => selecionarOpcao(CanalRecebimento.EmailClinicaPrescritor),
            [CanalRecebimento.InjetaveisEmail]: () => selecionarOpcao(CanalRecebimento.InjetaveisEmail),
            [CanalRecebimento.InjetaveisEasyHealth]: () => selecionarOpcao(CanalRecebimento.InjetaveisEasyHealth),
            [CanalRecebimento.Selecione]: () => {
                console.log('Opção selecionada: Selecione');
            },
        };
        opcoes[opcao]();
    }

    inserirDataRecebimento() {
        const dataAtual: Date = new Date();
        // Obtém os componentes individuais da data e hora
        const ano: number = dataAtual.getFullYear();
        const mes: string = String(dataAtual.getMonth() + 1).padStart(2, '0'); // O mês começa em 0, por isso é necessário adicionar 1
        const dia: string = String(dataAtual.getDate()).padStart(2, '0');
        const hora: string = String(dataAtual.getHours()).padStart(2, '0');
        const minutos: string = String(dataAtual.getMinutes()).padStart(2, '0');
        const segundos: string = String(dataAtual.getSeconds()).padStart(2, '0');
        // Formata a data e hora no formato desejado
        const DATA_FORMATADA: string = `${ano}-${mes}-${dia}`;
        const HORA_FORMATADA: string = `${hora}:${minutos}:${segundos}`;

        cy.get(el.data_recebimento)
            .should('be.visible')
            .and('have.id', 'modalDataRec')
            .type(`${DATA_FORMATADA}T${HORA_FORMATADA}`);
    }

    inserirCluster() { }

    inserirJuntoCom() { }

    selecionarTipoReceita() {
        enum ReceitaTipo {
            PossuiReceita = '1',
            NaoPossuiReceita = '2',
            Repeticao = '3',
        }

        function opcaoReceita(tipo: ReceitaTipo): void {
            cy.get(`input[name="receita_tipo"][value="${tipo}"]`)
                .should('be.visible')
                .check()
                .should('be.checked');
        }

        opcaoReceita(ReceitaTipo.PossuiReceita);
    }

    ObservacaoInterna() { }

    registrarReceita() {
        cy.get(el.salvar_receita)
            .should('be.visible')
            .click()
    }

    mensagemSucessoImportacaoReceita() {
        cy.get(el.mensagem_sucesso_importacao_receita)
            .should('be.visible')
            .and('have.class', 'btn btn-primary')
            .click()
        cy.url().should('contain', this.ambiente_selecionado.BASEURL + 'receita/importar');
    }

    MensagemExisteReceitaImportadaParaMesmoPrescritorPaciente() { }




    registrarReceitajpegPrescritorPotencialDComRelação() {
        this.ambiente_selecionado = Cypress.env('enviroment').HOMOLOG_ACESS
        cy.visit(this.ambiente_selecionado.BASEURL + 'receita/importar', {
            method: 'GET'
        });

        const receita = new Receita(
            this.imagem,
            this.prescritor,
            this.paciente,
            this.dataRecebimento,
            this.canalRecebimento,
            this.atendenteResponsavel,
            this.observacao,
            this.varejo,
            this.medicamentoControlado,
            this.urgente,
            this.clienteAlerta,
            this.possuiReceita,
            this.naoPossuiReceita,
            this.repeticao
        );

        // receita.menuReceitas()

        // this.subMenuImportacaoReceita()

        this.acessarTelaRegistroReceita()

        this.inserirImagemJpeg()

        const listaCRM = ['3243-BA'];
        this.inserirPrescritor(listaCRM);

        this.SugestaoRelacaoPrescritorAtendenteCluster()

        this.selecionarParametroBuscaPaciente()

        const cdcli_aleatorio_paciente: string = faker.helpers.arrayElement(['618484']);
        this.inserirPaciente(cdcli_aleatorio_paciente)

        this.inserirCanalRecebimento(CanalRecebimento.Whatsapp);

        this.inserirDataRecebimento()

        this.selecionarTipoReceita()

        this.ObservacaoInterna()

        this.registrarReceita()
    }


}
