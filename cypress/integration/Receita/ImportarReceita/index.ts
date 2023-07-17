/// <reference types="cypress" />
import { ELEMENTS } from './elements';
const el = ELEMENTS;
import { Receita } from '../Receita';
import { contains } from 'cypress/types/jquery';
import * as criarImagemFake from '../../../Utils/criar-imagem-fake';
import { faker } from '@faker-js/faker';
import 'cypress-real-events/support';
import { eq } from 'cypress/types/lodash';
import 'cypress-file-upload';




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

    // acessar a tela importação de receitas.
    acessarImportacaoReceita() {
        const ambiente_selecionado = Cypress.env('enviroment').HOMOLOG_ACESS

        cy.get(el.receitas)
            .should('be.visible')
            .contains('Receitas')
            .and('have.class', 'nav-label')
            .click();

        cy.get(el.importar_receitas)
            .should('be.visible')
            .contains('Importar receitas')
            .click()
        cy.url().should('contain', ambiente_selecionado.BASEURL + 'receita/importar');
    }

    registrarReceitajpegPrescritorPotencialDComRelação() {
        cy.visit(Cypress.env('enviroment').HOMOLOG_ACESS.BASEURL + 'receita/importar', {
            method: 'GET'
        });
        // tipagem das variáveis
        let prescritor_fake: string;
        let paciente_fake: string;
        let atendente_responsavel: string;
        let opcao_canal_recebimento: number;

        // atribuir valores às variáveis
        prescritor_fake = faker.person.firstName();
        paciente_fake = faker.person.firstName();
        atendente_responsavel = '';
        opcao_canal_recebimento = 1; //injetaveis whatsapp

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

        // definir lista de nome de prescritores
        const lista_crm_prescritor: string[] = ['999990-SC'];
        // gerar um nome aleatorio da lista de prescritores
        const crm_aleatorio_prescritor: string = faker.helpers.arrayElement(lista_crm_prescritor);

        //definir lista de cdcli de pacientes/clientes
        const cdcli_paciente: string[] = ['618484', '87056', '361135', '644028', '606820', '117535', '71078', '13134', '475143']
        const cdcli_aleatorio_paciente: string = faker.helpers.arrayElement(cdcli_paciente);


        // clicar em registrar receita
        cy.get(el.abrir_modal_registrar_receita)
            .should('be.visible')
            .contains('Registrar receita')
            .and('have.id', 'receita_register')
            .click();

        // clicar em importar imagem
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

        // inserir prescritor
        cy.get(el.prescritor)
            .should('have.id', 'modalMedicoRec')
            .type(crm_aleatorio_prescritor)
            .then(() => {
                cy.get(el.sugestao_autocomplete)
                    .as('suggestion')
                cy.get('@suggestion')
                    .then(($elemento) => {
                        cy.wrap($elemento)
                            .invoke('attr', 'style', 'display: block')
                            .should('be.visible')
                            .eq(0)
                            .click({ force: true })
                    })
            })
            .contains(crm_aleatorio_prescritor)
        // aceitar relacao entre prescritor, atendente e cluster encontrada
        cy.get(el.relacao_prescritor_atendente_cluster_ok)
            .should('be.visible')
            .and('have.class', 'btn btn-primary')
            .contains('OK')
            .click()
            
        // marcar opção cdcli para paciente
        cy.get(el.busca_paciente_cdcli)
            .should('be.visible')
            .and('have.id', 't2_154c')
            .check()
            .should('be.checked')

        // inserir paciente
        cy.get(el.paciente)
            .should('be.visible')
            .and('have.id', 'modalPacienteRec')
            .type(cdcli_aleatorio_paciente)
            .then(() => {
                cy.get('.autocomplete-suggestions')
                    .as('suggestions')
                cy.get('@suggestions')
                    .find('.autocomplete-suggestion')
                    .should('be.visible')
                    .contains(cdcli_aleatorio_paciente)
                    .then(($suggestions) => {
                        cy.wrap($suggestions[0])
                            .scrollIntoView()
                            .click();
                    });
            });

        // informar canal de recebimento
        cy.get<HTMLSelectElement>(el.canal_recebimento)
            .should('be.visible')
            .and('have.id', 'modalCanalContato')
            .select(opcao_canal_recebimento)
            .should('have.value', opcao_canal_recebimento)
            .find('option:selected')
            .should('be.selected');

        // informar data de recebimento da receita
        cy.get(el.data_recebimento)
            .should('be.visible')
            .and('have.id', 'modalDataRec')
            .type(`${DATA_FORMATADA}T${HORA_FORMATADA}`);

        // selecionar uma das opcoes: possui receita/nao possui receita/repeticao
        cy.get(el.possui_receita)
            .should('be.visible')
            .check()
            .should('be.checked')

        // registrar(salvar receita/gerar receita)
        cy.get(el.salvar_receita)
            .should('be.visible')
            .click()
    }
    // canal de recebimento injetaveis whatsapp e cluster injetaveis
    // export function registrarReceitaJpgInjetaveis(): void { }

    // export function registrarReceitaJpgMedicamentoControlado(): void { }

    // export function registrarReceitaJpgUrgente(): void { }

    // export function registrarReceitaJpgclienteAlerta(): void { }



    // export function registrarReceitaPdf(): void { }

    // // canal de recebimento injetaveis whatsapp e cluster injetaveis
    // export function registrarReceitaPdfInjetaveis(): void { }



    // export function registrarReceitaVarejo(): void { }



    // export function registrarReceitaJpgPrescritorRelacaoAtendenteCluster(): void { }



    // export function registrarReceitaJpgPrescritorRelacaoAtendenteClusterCanal(): void { }


}

