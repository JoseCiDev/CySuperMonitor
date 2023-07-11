/// <reference types="cypress" />
import { ELEMENTS } from './elements';
const el = ELEMENTS;
import { Receita } from '../Receita';
import { contains } from 'cypress/types/jquery';
import { carregarImagemSimulada } from '/projetos/CySmHkm/cypress/utils/fileUtils';
import { faker } from '@faker-js/faker';
import 'cypress-real-events/support';


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

    registrarReceitaJpg() {
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
        opcao_canal_recebimento = 4;
        // data_de_recebimento = ''

        // definir lista de nome de prescritores
        const nome_personalizado_prescritor: string[] = ['56842'];
        // gerar um nome aleatorio da lista de prescritores
        const nome_aleatorio_prescritor: string = faker.helpers.arrayElement(nome_personalizado_prescritor);

        //definir lista de cdcli de pacientes/clientes
        const cdcli_paciente: string[] = ['3620', '545492', '196130', '583644', '583499', '642990']
        const cdcli_aleatorio_paciente: string = faker.helpers.arrayElement(cdcli_paciente);

        // clicar em registrar receita
        cy.get(el.registrar_receita)
            .should('be.visible')
            .contains('Registrar receita')
            .and('have.id', 'receita_register')
            .click();

        // clicar em importar imagem
        cy.get(el.imgjpg)
            .click()
            .then(($input: JQuery<HTMLInputElement>) => {
                // Simula o carregamento da imagem no elemento HTML simulado
                carregarImagemSimulada('ReceitaTeste.jpeg', 140, 'image/jpeg');
            });

        // inserir prescritor
        cy.get(el.prescritor)
            .should('be.visible')
            .and('have.id', 'modalMedicoRec')
            .type(nome_aleatorio_prescritor)
            .then(() => {
                cy.get('.autocomplete-suggestion')
                    .as('suggestion')
                cy.get('@suggestion')
                    .then(($elemento) => {
                        cy.wrap($elemento)
                            .should('be.visible')
                            .click()
                    })
            })
            .should('not.be.empty')
        // aceitar relacao entre prescritor, atendente e cluster encontrada
        cy.get(el.relacao_prescritor_atendente_cluster_ok)
            .should('be.visible')
            .and('have.class', 'btn btn-primary')
            .contains('OK')
            .click()
        // validar se regra da relacao entre prescritor, atendente e cluster foi aplicado
        cy.get(el.atendente_responsavel)
            .as('elemento')
            .should(($elemento) => {
                expect($elemento).to.have.css('border-color', 'rgb(0, 0, 255)')
            })

        // selecionar opcao cdcli para buscar paciente
        cy.get(el.cdcli_paciente)
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
                    .then(($elemento) => {
                        cy.wrap($elemento)
                            .should('be.visible')
                    })
                cy.get('.autocomplete-suggestion')
                    .as('suggestion')
                cy.get('@suggestion')
                    .then(($elemento) => {
                        // Realizar as ações desejadas com o elemento capturado
                        cy.wrap($elemento)
                            .should('be.visible')
                        //capturar o autocomplete do paciente para selecionar paciente    
                        cy.get(el.autocomplete_paciente)
                            .should('be.visible')
                            .and('have.class', 'autocomplete-suggestion')
                            .first()
                            .click()
                    })
            })
            .should('not.be.empty');

        // informar canal de recebimento
        cy.get<HTMLSelectElement>(el.canal_recebimento) // Captura o campo select
            .should('be.visible')
            .then($select => {
                cy.wrap($select)
                    .invoke('attr', 'id')
                    .should('have.value', '')
                    .then((id: string) => {
                        expect(id).to.not.be.empty; // Verifica se o ID não está vazio
                    });
                cy.pause();
                cy.wrap($select)
                    .invoke('val')
                    .should('have.value', '')
                    .then((selectedOption: string) => {
                        expect(selectedOption).to.not.be.null; // Verifica se o valor selecionado não é nulo
                        expect(selectedOption.trim()).not.to.equal(''); // Verifica se o campo select não está vazio
                    });
            });



        //  informar data de recebimento da receita
        cy.get(el.data_recebimento)
            .should('be.visible')
            .and('have.id', 'modalDataRec')




        // inserir canal de recebimento
        // inserir cluster
        // inserir atendente responsavel
        // inserir data de recebimento
        // selecionar uma das opcoes: possui receita/nao possui receita/repeticao
        // registrar(salvar receita/gerar receita)
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

