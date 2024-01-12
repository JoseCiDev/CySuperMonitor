import { faker } from '@faker-js/faker';
import * as fakerBr from 'faker-br';
import { format } from 'date-fns';


const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);


export type ValidationResult = Cypress.Chainable<{ error?: string; success?: string; }>


export interface BuscarReceita<S = string> {

    dataInicial?: S;
    dataFinal?: S;
    ClusterImportarReceitas?: S;
    pendencia?: S;
    canalRecebimento?: S;
    receita?: number,
    paciente?: S;
    prescritor?: S;
    pedido?: number,
    ultimoModificador?: S;
    orcamentista?: S;
    atendenteResponsavel?: S;

};

interface DadosParametros<S = string> {

    env: {
        ENV: 1;
        USER_ADMIN: S;
        USER_ATENDENTE1: S;
        USER_ATENDENTE2: S;
        USER_INCLUSAO: S;
        USER_CONFENTRADA: S;
        USER_CONFSAIDA: S;
        USER_EXPEDICAO: S;
        PASSWORD: S;
        BASE_URL_PRODUCTION: S;
        BASE_URL_HOMOLOG: S;
        DB_NAME: S;
        DB_USER: S;
        DB_HOST: S;
        DB_PORT: S;
        DB_PASSWORD: S;
        SENHA_RECEITA_USER: S;
        AUTH_TOKEN: S;
        USER_ID: S;
        USER_PASSWORD: S;
    }

    Url: {
        inicio: S;
        importarReceitas: S;
        gerenciarReceitas: S;
        atendimentos: S;
        atendimentosEmAndamento: S;
    };

    Usuario: {
        usuarioAtribuido: S;
    }

    Receita: {
        numeroReceita: number;
        usuárioMarcarUso: S;
        clonarObservacaoFarmaceutica: boolean;
        senhaObservacaoFarmaceutica: S;
        textoObservacaoFarmaceutica: S;
        textoDuvidaTecnica: S;
        responsavelAtualRespostaDuvidaTecnica: S;
        textoRespostaDuvidaTecnica: S;
        ValorJuntoCom: S;
        dataInicial: S;
        dataFinal: S;
        atendenteResponsavel: S;
        textoObservacaoInterna: S;
        dataRecebimento: S;
    };

    Prescritor: {
        crmPrescritor: S;
    };

    Paciente: {
        codigoPaciente: S;
    }

    OrcamentoFilial: {
        pedido: any;
        filial: any;
    };

    caminhoArquivo: S;

    dataAtual: Date;
    dataFormatada: S;

    Pedido: {
        tempoTratamento: number;
        tempoRepeticao: number;
        textoObservacaoCaixaBalcao: S;
        textoObservacaoExpedicao: S;
        juntocomPedido: S;
        textoObservacaoGeral: S;
        prometidoPara: Date;
        orcamentista: S;
        atendentePedido: S;
    }

    buscaPedido: typeof BuscaPedido;
    statusPagamento: typeof StatusPagamento;
    formaPagamento: typeof FormaPagamento;
    canalFechamentoPedido: typeof CanalFechamentoPedido;
    filtroPendentes: typeof FiltroPendentes;
    canalRecebimento: typeof CanalRecebimento;
    parametroBuscaPaciente: typeof ParametroBuscaPaciente;
    tipoReceita: typeof TipoReceita;
    ClusterImportarReceitas: typeof ClusterImportarReceitas;
    ClusterRelacoesPrescritorAtendenteCluster: typeof ClusterRelacoesPrescritorAtendenteCluster;
    pendencia: typeof Pendencia;
    OpcaoParametroBuscaPaciente: typeof OpcaoParametroBuscaPaciente;
    categoriaDuvidaTecnica: typeof CategoriaDuvidaTecnica;
    statusDuvidaTecnica: typeof StatusDuvidaTecnica;
    perfil: typeof Perfil;
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
    Nome = '#t1_154c',
    Cdcli = '#t2_154c',
    Cpf = '#t3_154c',
    TelCel = '#t4_154c',
};

enum TipoReceita {
    PossuiReceita = '1',
    NaoPossuiReceita = '2',
    Repeticao = '3',
};

enum ClusterImportarReceitas {
    Selecione = '',
    cluster1 = '1',
    cluster2 = '2',
    cluster3 = '3',
    cluster4 = '4',
    cluster5 = '5',
    clusterPediatrico = 'Pediátrico',
    clusterPrescritores = 'Prescritores',
    clusterInjetaveis = 'Atendimento injetáveis',
    clusterConsultoriaTecnicaInjetaveis = 'Consultoria técnica Injetáveis',
    clusterRecepcao = 'Recepção',
};

enum ClusterRelacoesPrescritorAtendenteCluster {
    EscolhaUmCluster = '',
    Cluster1 = '1',
    Cluster2 = '2',
    Cluster3 = '3',
    Cluster4 = '4',
    Cluster5 = '5',
    ClusterPediatrico = '6',
    ClusterPrescritores = '7',
    ClusterAtendimentoInjetaveis = '8',
    ClusterConsultoriaTecnicaInjetaveis = '12',
    ClusterRecepcao = '14',
}

enum Pendencia {
    Todos = '0',
    Pendentes = '1',
    Vinculados = '2',
}

enum OpcaoParametroBuscaPaciente {
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



enum Perfil {
    Todos = 'Todos',
    Visualizador = '0',
    ControleReceitas = '2',
    Atendente = '3',
    Expedicao = '4',
    Caixa = '5',
    Administrador = '6',
    Farmaceutico = '7',
    Orcamentista = '8',
    Telefonista = '9',
    Visitacao = '10',
    Marketing = '11',
    Recepcao = '12',
    Treinamento = '13',
    Inclusao = '14',
    ControleFinanceiro = '15',
    COnferencia = '16',
    Almoxarifado = '17',
    FarmaConfSaida = '18',
    backoffice = '19',
    Laboratorio = '20',
    Monitora = '21',
}


export const dadosParametros: DadosParametros = {

    env: dadosAmbiente,

    Url: {
        inicio: 'http://192.168.0.66:9202/lembretes',
        importarReceitas: 'http://192.168.0.66:9202/receita/importar',
        gerenciarReceitas: 'http://192.168.0.66:9202/receita/gerenciar',
        atendimentos: 'http://192.168.0.66:9202/atendimentos/page/1/',
        atendimentosEmAndamento: 'http://192.168.0.66:9202/atendimentos/page/1/',
    },

    Usuario: {
        usuarioAtribuido: [faker.helpers.arrayElement(['Tamires', 'Andressa', 'Bruna', 'Mariana', 'Jessica', 'Amanda', 'Maria', 'Daian', 'Ana'])].toString(),
    },

    Receita: {
        numeroReceita: 0,
        clonarObservacaoFarmaceutica: true,
        senhaObservacaoFarmaceutica: [faker.helpers.arrayElement(['789123'])].toString(),
        textoObservacaoFarmaceutica: [faker.helpers.arrayElement(['Teste'])].toString(),
        textoDuvidaTecnica: [faker.helpers.arrayElement(['Teste'])].toString(),
        usuárioMarcarUso: [faker.helpers.arrayElement(['admin'])].toString(),
        responsavelAtualRespostaDuvidaTecnica: '',
        textoRespostaDuvidaTecnica: faker.lorem.paragraph(),
        ValorJuntoCom: [faker.helpers.arrayElement([1020, 1021, 1022])].toString(),
        dataInicial: faker.date.between({ from: '2023-01-01T00:00:00.000Z', to: '2023-12-01T00:00:00.000Z' }).toISOString().slice(0, 16),
        dataFinal: faker.date.between({ from: '2023-12-02T00:00:00.000Z', to: '2023-12-20T00:00:00.000Z' }).toISOString().slice(0, 16),
        atendenteResponsavel: faker.helpers.arrayElement(['tamires silva luiz']),
        textoObservacaoInterna: faker.lorem.paragraph(),
        dataRecebimento: new Date().toISOString().slice(0, 16),
    },

    Prescritor: {
        crmPrescritor: faker.helpers.arrayElement(['123456-SC']),
    },

    Paciente: {
        codigoPaciente: faker.helpers.arrayElement(['618484']),
    },

    OrcamentoFilial: {
        pedido: faker.helpers.arrayElement(['896662', '896663', '899551', '905771']),
        filial: faker.helpers.arrayElement(['4']),
    },

    caminhoArquivo: '/',

    dataAtual: new Date(),
    dataFormatada: new Date().toISOString().slice(0, 16),

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
    ClusterImportarReceitas: ClusterImportarReceitas,
    ClusterRelacoesPrescritorAtendenteCluster: ClusterRelacoesPrescritorAtendenteCluster,
    pendencia: Pendencia,
    OpcaoParametroBuscaPaciente: OpcaoParametroBuscaPaciente,
    categoriaDuvidaTecnica: CategoriaDuvidaTecnica,
    statusDuvidaTecnica: StatusDuvidaTecnica,
    perfil: Perfil,
    formaEnvio: FormaEnvio,
    aromaSache: AromaSache,
    aromaCapsula: AromaCapsula,
    possuiReceitaPedido: PossuiReceitaPedido,

};