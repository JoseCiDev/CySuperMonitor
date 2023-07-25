/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import 'cypress-real-events/support';
import { eq } from 'cypress/types/lodash';
import { Atendimento } from '../Atendimento/Atendimento';


export class Orcamento extends Atendimento {
    orcamento: number;
    orcamentista: String;
    tempo_tratamento: number;
    formulas: number;


    constructor(
        orcamento: number,
        orcamentista: String,
        tempo_tratamento: number,
        formulas: number,
        atendimento: number,
        filial: number,
        data_entrada: Date,
        data_encerramento: Date,
        paciente: string,
        cliente: string,
        prescritor: string,
        atendente: string,
        backoffice: string,

    ) {
        super(
            atendimento,
            filial,
            data_entrada,
            data_encerramento,
            paciente,
            cliente,
            prescritor,
            atendente,
            backoffice,
        );
        this.orcamento = orcamento;
        this.orcamentista = orcamentista;
        this.tempo_tratamento = tempo_tratamento;
        this.formulas = formulas;
        this.atendimento = atendimento;
        this.filial = filial;
        this.data_entrada = data_entrada;
        this.data_encerramento = data_encerramento;
        this.paciente = paciente;
        this.cliente = cliente;
        this.prescritor = prescritor;
        this.atendente = atendente;
        this.backoffice = backoffice;
    }

}