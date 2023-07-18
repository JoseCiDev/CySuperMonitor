/// <reference types="cypress" />
import { ELEMENTS } from './elements';
const el = ELEMENTS;

import { contains } from 'cypress/types/jquery';
import { faker } from '@faker-js/faker';
import 'cypress-real-events/support';
import { eq } from 'cypress/types/lodash';
import 'cypress-file-upload';

export class Receita {
    imagem: string;
    prescritor: string;
    paciente: string;
    dataRecebimento: Date;
    canalRecebimento: string;
    atendenteResponsavel: string;
    orcamentista: String;
    observacao: string;
    varejo: string;
    medicamentoControlado: string;
    urgente: string;
    clienteAlerta: string;
    possuiReceita: string;
    naoPossuiReceita: string;
    repeticao: string;

    constructor(
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
        this.imagem = imagem;
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

    menuReceitas() {
        cy.get(el.receitas)
            .should('be.visible')
            .contains('Receitas')
            .and('have.class', 'nav-label')
            .click();
    }
}

