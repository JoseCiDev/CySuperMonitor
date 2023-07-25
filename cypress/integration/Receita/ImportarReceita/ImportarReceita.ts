/// <reference types="cypress" />

import { Receita } from "../Receita";


export class ImportarReceita extends Receita {
    imgreceita: string;
    imgpdfreceita: string;

    constructor(
        imgreceita: string,
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
    
}

