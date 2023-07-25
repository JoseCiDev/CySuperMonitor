/// <reference types="cypress" />


export class Atendimento {
    atendimento: number;
    filial: number;
    data_entrada: Date;
    data_encerramento: Date;
    paciente: string;
    cliente: string;
    prescritor: string;
    atendente: string;
    backoffice: string;

    constructor(
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

