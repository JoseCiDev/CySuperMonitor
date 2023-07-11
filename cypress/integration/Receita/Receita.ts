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

    // Outros métodos da classe
}

