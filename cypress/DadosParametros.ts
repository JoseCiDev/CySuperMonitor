import { faker } from '@faker-js/faker';

interface DadosParametros {

    Url: {
        inicio: string;
        importarReceitas: string;
        atendimentos: string;
    };

    Receita: {
        numeroReceita: number;
        usuárioMarcarUso: string;
        clonarObservacaoFarmaceutica: boolean;
        senhaObservacaoFarmaceutica: string;
        textoObservacaoFarmaceutica: string;
        textoDuvidaTecnica: string;
        responsavelRespostaDuvidaTecnica: string;
        responsavelAtualRespostaDuvidaTecnica: string;
        textoRespostaDuvidaTecnica: string;
    };

    Prescritor: {
        crmPrescritor: string[];
    };

    Paciente: {
        codigoPaciente: string[];
    }

    OrcamentoFilial: {
        pedido: string;
        filial: string;
    };

    caminhoArquivo: string;

    dataAtual: Date;
    dataFormatada: string;

    PossuiReceita: {
        sim: string;
        naoRepeticao: string;
        naoVarejos: string;
    };

    buscaPedido: typeof BuscaPedido;
    situacaoPagamento: typeof SituacaoPagamento;
    formaPagamento: typeof FormaPagamento;
    canalFechamentoPedido: typeof CanalFechamentoPedido;
    filtroPendentes: typeof FiltroPendentes;
    canalRecebimento: typeof CanalRecebimento;
    parametroBuscaPaciente: typeof ParametroBuscaPaciente;
    tipoReceita: typeof TipoReceita;
    cluster: typeof Cluster;
    opcaoParametroBuscaCardOrcamento: typeof OpcaoParametroBuscaCardOrcamento;
    marcarUso: typeof MarcarUso;
    categoriaDuvidaTecnica: typeof CategoriaDuvidaTecnica;
    statusDuvidaTecnica: typeof StatusDuvidaTecnica;

}



enum BuscaPedido {
    Meus = 'Meus',
    Todos = 'Todos',
    Encerrados = 'Encerrados',
    Antigos = 'Antigos',
}

enum SituacaoPagamento {
    NaoPago = '0',
    Pago = '1',
}

enum FormaPagamento {
    AcertoVisita = '10',
    AcertoVisitaPlanilha = '14',
    Boleto = '2',
    BoletoLiberarSemPgto = '9',
    BoletoCaixaPaciente = '3',
    BoletoCaixaPrescritor = '13',
    BoletoParcelado = '15',
    cartaoCredito = '1',
    CartaoGpeAguardandoPagamento = '11',
    CartaoGpeLiberadoSemPagamento = '12',
    Cheque = '7',
    Cortesia = '5',
    Deposito = '4',
    Donheiro = '6',
    Outro = '8',
    Pix = '16',
}

enum CanalFechamentoPedido {
    Whatsapp = 'whatsapp',
    Email = 'email',
    Telefone = 'telefone',
    BalcaoPalhoca = 'balcao_palhoca',
    BalcaoSmart = 'balcao_smart',
    TeleSmart = 'tele_smart',
}

enum FiltroPendentes {
    Todos = '0',
    Pendentes = '1',
    Vinculados = '2',

};

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
};

enum ParametroBuscaPaciente {
    Nome = 't1_154c',
    Cdcli = 't2_154c',
    Cpf = 't3_154c',
    TelCel = 't4_154c',
};

enum TipoReceita {
    PossuiReceita = '1',
    NaoPossuiReceita = '2',
    Repeticao = '3',
};

enum Cluster {
    Selecione = '',
    cluster1 = '1',
    cluster2 = '2',
    cluster3 = '3',
    cluster4 = '4',
    cluster5 = '5',
    cluster6 = 'Pediátrico',
    cluster7 = 'Prescritores',
    cluster8 = 'Atendimento injetáveis',
    cluster12 = 'Consultoria técnica Injetáveis',
    cluster14 = 'Recepção',
};

enum OpcaoParametroBuscaCardOrcamento {
    Paciente = 'Paciente',
    Prescritor = 'Prescritor',
    Orcamento = 'Orçamento',
    VincularReceita = 'Vincular receita',
}

enum MarcarUso {
    Elemento_0 = 0,
    Elemento_1 = 1,
    Elemento_2 = 2,
    Elemento_3 = 3,
    Elemento_5 = 5,
    Elemento_6 = 6,
    Elemento_7 = 7,
    Elemento_8 = 8,
    Elemento_9 = 9,
    Elemento_10 = 10,
    Elemento_11 = 11,
}

enum CategoriaDuvidaTecnica {
    SelecioneUmaCategoria = 'Selecione uma categoria *',
    AssinaturaFarmaceutica = 'Assinatura Farmacêutica',
    ConferenciaManuscrita = 'Conferência Manuscrita',
    ContatoPrescritor = 'Contato Prescritor (DT)',
    DuvidaInterna = 'Dúvida Interna',
    DuvidaConferencias = 'Dúvida Conferencias',
    ObservacaoFarmaceutica = 'Observação Farmacêutica',
    DuvidaExterna = 'Dúvida Externa',
}

enum StatusDuvidaTecnica {
    Selecione = '',
    AguardandoPrescritor = '1',
    AguardandoPeD = '2',
    PendenciaInterna = '3',
    Respondido = '4',
}




export const dadosParametros: DadosParametros = {

    Url: {
        inicio: 'http://192.168.0.66:9200/lembretes',
        importarReceitas: 'http://192.168.0.66:9200/receita/importar',
        atendimentos: 'http://192.168.0.66:9200/atendimentos/page/1/',
    },

    Receita: {
        numeroReceita: 0,
        clonarObservacaoFarmaceutica: false,
        senhaObservacaoFarmaceutica: [faker.helpers.arrayElement(['789123'])].toString(),
        textoObservacaoFarmaceutica: [faker.helpers.arrayElement(['Teste'])].toString(),
        textoDuvidaTecnica: [faker.helpers.arrayElement(['Teste'])].toString(),
        responsavelRespostaDuvidaTecnica: [faker.helpers.arrayElement(['Tamires', 'Andressa', 'Bruna', 'Mariana', 'Jessica', 'Amanda', 'Maria', 'Daian', 'Ana'])].toString(),
        usuárioMarcarUso: [faker.helpers.arrayElement(['adm'])].toString(),
        responsavelAtualRespostaDuvidaTecnica: '',
        textoRespostaDuvidaTecnica:faker.lorem.paragraph(),
    },

    Prescritor: {
        crmPrescritor: [faker.helpers.arrayElement(['40452-SP'])],
    },

    Paciente: {
        codigoPaciente: [faker.helpers.arrayElement(['618484'])],
    },

    OrcamentoFilial: {
        pedido: '12345',
        filial: 'FILIAL-01',
    },

    caminhoArquivo: 'fixtures/',

    dataAtual: new Date(),
    dataFormatada: new Date().toISOString().slice(0, 16),


    PossuiReceita: {
        sim: '1',
        naoRepeticao: '2',
        naoVarejos: '3',
    },

    buscaPedido: BuscaPedido,
    situacaoPagamento: SituacaoPagamento,
    formaPagamento: FormaPagamento,
    canalFechamentoPedido: CanalFechamentoPedido,
    filtroPendentes: FiltroPendentes,
    canalRecebimento: CanalRecebimento,
    parametroBuscaPaciente: ParametroBuscaPaciente,
    tipoReceita: TipoReceita,
    cluster: Cluster,
    opcaoParametroBuscaCardOrcamento: OpcaoParametroBuscaCardOrcamento,
    marcarUso: MarcarUso,
    categoriaDuvidaTecnica: CategoriaDuvidaTecnica,
    statusDuvidaTecnica: StatusDuvidaTecnica,


};