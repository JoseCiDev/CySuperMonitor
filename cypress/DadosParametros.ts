import { faker } from '@faker-js/faker';

interface DadosParametros {

    Url: {
        inicio: string;
        importarReceitas: string;
        atendimentos: string
    };

    Receita: {
        numeroReceita: number;
    };

    Prescritor: {
        crmPrescritor: string[];
    };

    Paciente: {
        codigoPaciente: string[]
    }

    OrcamentoFilial: {
        pedido: string;
        filial: string;
    };

    CaminhoArquivo: string;

    DataAtual: Date;
    DataFormatada: string

    PossuiReceita: {
        Sim: string;
        NaoRepeticao: string;
        NaoVarejos: string;
    };

    BuscaPedido: typeof BuscaPedido;
    SituacaoPagamento: typeof SituacaoPagamento;
    FormaPagamento: typeof FormaPagamento;
    CanalFechamentoPedido: typeof CanalFechamentoPedido;
    FiltroPendentes: typeof FiltroPendentes;
    CanalRecebimento: typeof CanalRecebimento;
    ParametroBuscaPaciente: typeof ParametroBuscaPaciente;
    TipoReceita: typeof TipoReceita;
    Cluster: typeof Cluster;
    OpcaoParametroBuscaCardOrcamento: typeof OpcaoParametroBuscaCardOrcamento;

}



enum BuscaPedido {
    Meus = 'Meus',
    Todos = 'Todos',
    Encerrados = 'Encerrados',
    Antigos = 'Antigos',
}

enum SituacaoPagamento {
    naoPago = "0",
    pago = "1"
}

enum FormaPagamento {
    AcertoVisita = "10",
    AcertoVisitaPlanilha = "14",
    Boleto = "2",
    BoletoLiberarSemPgto = "9",
    BoletoCaixaPaciente = "3",
    BoletoCaixaPrescritor = "13",
    BoletoParcelado = "15",
    cartaoCredito = "1",
    CartaoGpeAguardandoPagamento = "11",
    CartaoGpeLiberadoSemPagamento = "12",
    Cheque = "7",
    Cortesia = "5",
    Deposito = "4",
    Donheiro = "6",
    Outro = "8",
    Pix = "16"
}

enum CanalFechamentoPedido {
    whatsapp = "whatsapp",
    email = "email",
    telefone = "telefone",
    balcao_palhoca = "balcao_palhoca",
    balcao_smart = "balcao_smart",
    tele_smart = "tele_smart"
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




export const dadosParametros: { DadosParametros: DadosParametros } = {
    DadosParametros: {

        Url: {
            inicio: 'http://192.168.0.66:9200/lembretes',
            importarReceitas: 'http://192.168.0.66:9200/receita/importar',
            atendimentos: 'http://192.168.0.66:9200/atendimentos/page/1/',
        },

        Receita: {
            numeroReceita: 0,
        },

        Prescritor: {
            crmPrescritor: [faker.helpers.arrayElement(['40452-SP'])],
        },

        Paciente:{
            codigoPaciente: [faker.helpers.arrayElement(['618484'])],
        },

        OrcamentoFilial: {
            pedido: '12345',
            filial: 'FILIAL-01',
        },

        CaminhoArquivo: 'fixtures/',

        DataAtual: new Date(),
        DataFormatada: new Date().toISOString().slice(0, 16),


        PossuiReceita: {
            Sim: "1",
            NaoRepeticao: "2",
            NaoVarejos: "3",
        },

        BuscaPedido: BuscaPedido,
        SituacaoPagamento: SituacaoPagamento,
        FormaPagamento: FormaPagamento,
        CanalFechamentoPedido: CanalFechamentoPedido,
        FiltroPendentes: FiltroPendentes,
        CanalRecebimento: CanalRecebimento,
        ParametroBuscaPaciente: ParametroBuscaPaciente,
        TipoReceita: TipoReceita,
        Cluster: Cluster,
        OpcaoParametroBuscaCardOrcamento: OpcaoParametroBuscaCardOrcamento,

    },
};