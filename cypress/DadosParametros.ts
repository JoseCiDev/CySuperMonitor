import { faker } from '@faker-js/faker';

export interface BuscarReceita {

    dataInicial?: string,
    dataFinal?: string,
    pendencia?: string,
    cluster?: string,
    canalRecebimento?: string,
    receita?: number,
    paciente?: string,
    prescritor?: string,
    pedido?: number,
    ultimoModificador?: string,
    orcamentista?: string,
    atendenteResponsavel?: string

};
interface DadosParametros {

    Url: {
        inicio: string;
        importarReceitas: string;
        gerenciarReceitas: string;
        atendimentos: string;
        atendimentosEmAndamento: string;
    };

    Usuario: {
        usuarioAtribuido: string;
    }

    Receita: {
        numeroReceita: number;
        usuárioMarcarUso: string;
        clonarObservacaoFarmaceutica: boolean;
        senhaObservacaoFarmaceutica: string;
        textoObservacaoFarmaceutica: string;
        textoDuvidaTecnica: string;
        responsavelAtualRespostaDuvidaTecnica: string;
        textoRespostaDuvidaTecnica: string;
        ValorJuntoCom: string;
        dataInicial: Date;
        dataFinal: Date;
    };

    Prescritor: {
        crmPrescritor: string;
    };

    Paciente: {
        codigoPaciente: string;
    }

    OrcamentoFilial: {
        pedido: any;
        filial: any;
    };

    caminhoArquivo: string;

    dataAtual: Date;
    dataFormatada: string;

    PossuiReceita: {
        sim: string;
        naoRepeticao: string;
        naoVarejos: string;
    };

    Pedido: {
        tempoTratamento: number;
        tempoRepeticao: number;
        textoObservacaoCaixaBalcao: string;
        textoObservacaoExpedicao: string;
        juntocomPedido: string;
        textoObservacaoGeral: string;
        prometidoPara: Date;
        orcamentista: string;
        atendentePedido: string;
    }

    buscaPedido: typeof BuscaPedido;
    statusPagamento: typeof StatusPagamento;
    formaPagamento: typeof FormaPagamento;
    canalFechamentoPedido: typeof CanalFechamentoPedido;
    filtroPendentes: typeof FiltroPendentes;
    canalRecebimento: typeof CanalRecebimento;
    parametroBuscaPaciente: typeof ParametroBuscaPaciente;
    tipoReceita: typeof TipoReceita;
    cluster: typeof Cluster;
    opcaoParametroBuscaCardOrcamento: typeof OpcaoParametroBuscaCardOrcamento;
    categoriaDuvidaTecnica: typeof CategoriaDuvidaTecnica;
    statusDuvidaTecnica: typeof StatusDuvidaTecnica;
    formaEnvio: typeof FormaEnvio;
    aromaSache: typeof AromaSache;
    aromaCapsula: typeof AromaCapsula;
    possuiReceitaPedido: typeof PossuiReceitaPedido;

}



enum BuscaPedido {
    Meus = 'Meus',
    Todos = 'Todos',
    Encerrados = 'Encerrados',
    Antigos = 'Antigos',
}

enum StatusPagamento {
    NaoPago = '#confirmar-modal-body > div > div:nth-child(3) > div > label:nth-child(1) > input',
    Pago = '#confirmar-modal-body > div > div:nth-child(3) > div > label:nth-child(2) > input',
}

enum FormaPagamentoHkm {
    AcertoVisita = '11',
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

enum FormaPagamento {
    AcertoVisita = '11',
    Boleto = '2',
    BoletoLiberarSemPgto = '9',
    BoletoCaixaPaciente = '3',
    BoletoCaixaPrescritor15Dias = '15',
    BoletoPorEmail = '2',
    BoletoPorEmailEspecial = '9',
    cartaoCredito = '1',
    CartaoGpeAguardandoPagamento = '12',
    CartaoGpeLiberadoSemPagamento = '13',
    CartaoDebito = '10',
    Cheque = '7',
    Cortesia = '5',
    Deposito = '4',
    Donheiro = '6',
    Outro = '8',
    Pix = '14',
    PIXPrescritorLiberarSemPgto = '16'
}

enum CanalFechamentoPedido {
    Whatsapp = 'whatsapp',
    Email = 'email',
    Telefone = 'telefone',
    BalcaoPalhoca = 'balcao_palhoca',
    BalcaoSmart = 'balcao_smart',
    TeleSmart = 'tele_smart',
}


enum FormaEnvio {
    SedexSC = '1',
    SedexOutrosEstados = '2',
    Sedex10 = '3',
    Sedex10Cortesia = '4',
    EnvioGrátisSedex = '5',
    Internacional = '6',
    BalcãoCentro = '7',
    TeleEntrega = '8',
    SedexFloripa = '9',
    BalcãoHKM = '10',
    Aéreo = '11',
    TransportadoraQuality = '12',
    TransportadoraQualityGratis = '13',
    ExpediçãoHKM = '14',
    ExpediçãoSMART = '15',
    SedexHoje = '16',
}


enum AromaSache {
    SelecioneAroma = 'Selecione o Aroma',
    Abacaxi = 'Abacaxi',
    AromaDaBasePadrao = 'Aroma da base padrão',
    Baunilha = 'Baunilha',
    Cacau = 'Cacau',
    Framboesa = 'Framboesa',
    Laranja = 'Laranja',
    LaranjaComHortelaMenta = 'Laranja com hortelã/menta',
    Limao = 'Limão',
    MentaHortela = 'Menta/hortelã',
    Morango = 'Morango',
    SemAroma = 'Sem aroma',
    Uva = 'Uva',
}

enum AromaCapsula {
    SelecioneAroma = 'Selecione o Aroma',
    Abacaxi = 'Abacaxi',
    AromaBasePadrao = 'Aroma da base padrão',
    Baunilha = 'Baunilha',
    Cacau = 'Cacau',
    Framboesa = 'Framboesa',
    Laranja = 'Laranja',
    LaranjaComHortelaMenta = 'Laranja com hortelã/menta',
    Limao = 'Limão',
    MentaHortela = 'Menta/hortelã',
    Morango = 'Morango',
    SemAroma = 'Sem aroma',
    Uva = 'Uva',
}

enum PossuiReceitaPedido {
    Não = '0',
    Sim = '1'
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
    // cluster2 = '2',
    // cluster3 = '3',
    // cluster4 = '4',
    // cluster5 = '5',
    // clusterPediatrico = 'Pediátrico',
    // clusterPrescritores = 'Prescritores',
    // clusterInjetaveis = 'Atendimento injetáveis',
    // clusterConsultoriaTecnicaInjetaveis = 'Consultoria técnica Injetáveis',
    // clusterRecepcao = 'Recepção',
};

enum OpcaoParametroBuscaCardOrcamento {
    Paciente = 'Paciente',
    Prescritor = 'Prescritor',
    Orcamento = 'Orçamento',
    VincularReceita = 'Vincular receita',
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
        inicio: 'http://192.168.0.66:9220/lembretes',
        importarReceitas: 'http://192.168.0.66:9220/receita/importar',
        gerenciarReceitas: 'http://192.168.0.66:9220/receita/gerenciar',
        atendimentos: 'http://192.168.0.66:9220/atendimentos/page/1/',
        atendimentosEmAndamento: 'http://192.168.0.66:9220/atendimentos/page/1/',
    },

    Usuario: {
        // usuarioAtribuido: [faker.helpers.arrayElement(['Tamires', 'Andressa', 'Bruna', 'Mariana', 'Jessica', 'Amanda', 'Maria', 'Daian', 'Ana'])].toString(),
        usuarioAtribuido: [faker.helpers.arrayElement(['Bruna'])].toString(),
    },

    Receita: {
        numeroReceita: 0,
        clonarObservacaoFarmaceutica: false,
        senhaObservacaoFarmaceutica: [faker.helpers.arrayElement(['789123'])].toString(),
        textoObservacaoFarmaceutica: [faker.helpers.arrayElement(['Teste'])].toString(),
        textoDuvidaTecnica: [faker.helpers.arrayElement(['Teste'])].toString(),
        usuárioMarcarUso: [faker.helpers.arrayElement(['jose'])].toString(),
        responsavelAtualRespostaDuvidaTecnica: '',
        textoRespostaDuvidaTecnica: faker.lorem.paragraph(),
        ValorJuntoCom: [faker.helpers.arrayElement([1020, 1021, 1022])].toString(),
        dataInicial: new Date('2023-01-01T10:00'),
        dataFinal: new Date('2023-10-30T10:00'),
    },

    Prescritor: {
        crmPrescritor: faker.helpers.arrayElement(['8205-SC']),
    },

    Paciente: {
        codigoPaciente: faker.helpers.arrayElement(['149877']),
    },

    OrcamentoFilial: {
        pedido: '',
        filial: '',
    },

    caminhoArquivo: '/',

    dataAtual: new Date(),
    dataFormatada: new Date().toISOString().slice(0, 16),


    PossuiReceita: {
        sim: '1',
        naoRepeticao: '2',
        naoVarejos: '3',
    },

    Pedido: {
        tempoTratamento: 30,
        tempoRepeticao: 0,
        textoObservacaoCaixaBalcao: faker.lorem.paragraph(),
        textoObservacaoExpedicao: faker.lorem.paragraph(),
        juntocomPedido: faker.helpers.arrayElements([107456, 107246]).toString(),
        textoObservacaoGeral: faker.lorem.paragraph(),
        prometidoPara: new Date(),
        orcamentista: '',
        atendentePedido: '',
    },

    buscaPedido: BuscaPedido,
    statusPagamento: StatusPagamento,
    formaPagamento: FormaPagamento,
    canalFechamentoPedido: CanalFechamentoPedido,
    filtroPendentes: FiltroPendentes,
    canalRecebimento: CanalRecebimento,
    parametroBuscaPaciente: ParametroBuscaPaciente,
    tipoReceita: TipoReceita,
    cluster: Cluster,
    opcaoParametroBuscaCardOrcamento: OpcaoParametroBuscaCardOrcamento,
    categoriaDuvidaTecnica: CategoriaDuvidaTecnica,
    statusDuvidaTecnica: StatusDuvidaTecnica,
    formaEnvio: FormaEnvio,
    aromaSache: AromaSache,
    aromaCapsula: AromaCapsula,
    possuiReceitaPedido: PossuiReceitaPedido,

};