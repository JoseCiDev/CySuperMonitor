/// <reference types="cypress" />

import { Atendimento } from "../Atendimento";


export class PedidoEmAndamento extends Atendimento {
    forma_pagamento: string;
    orcamento_selecionado: string;
    tempo_repeticao: number;
    monitoramento: boolean;
    canal_confirmacao: string;
    enviar_email_rastreamento: boolean;
    liberar_inclusao: boolean;
    liberar_caixa: boolean;
    observacao_caixa_balcao: string;
    nota_detalhada: boolean;
    status_pagamento: string;
    endereco_envio: string;
    observacao_expedicao: string;
    forma_envio: string;
    juntocom: number;
    juntocom_clinica_higashi: boolean;
    prometido_para: string;
    aroma_sache_shake: string;
    aroma_solucao_oral_capsulas: string;
    observacao_geral: string;
    possui_receita: boolean;
    pedido_urgente: boolean;
    mensagem_automatica_chatguru: boolean;


    constructor(
        forma_pagamento: string,
        orcamento_selecionado: string,
        tempo_repeticao: number,
        monitoramento: boolean,
        canal_confirmacao: string,
        enviar_email_rastreamento: boolean,
        liberar_inclusao: boolean,
        liberar_caixa: boolean,
        observacao_caixa_balcao: string,
        nota_detalhada: boolean,
        status_pagamento: string,
        endereco_envio: string,
        observacao_expedicao: string,
        forma_envio: string,
        juntocom: number,
        juntocom_clinica_higashi: boolean,
        prometido_para: string,
        aroma_sache_shake: string,
        aroma_solucao_oral_capsulas: string,
        observacao_geral: string,
        possui_receita: boolean,
        pedido_urgente: boolean,
        mensagem_automatica_chatguru: boolean,
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
        this.forma_pagamento = forma_pagamento
        this.orcamento_selecionado = orcamento_selecionado
        this.tempo_repeticao = tempo_repeticao
        this.monitoramento = monitoramento
        this.canal_confirmacao = canal_confirmacao
        this.enviar_email_rastreamento = enviar_email_rastreamento
        this.liberar_inclusao = liberar_inclusao
        this.liberar_caixa = liberar_caixa
        this.observacao_caixa_balcao = observacao_caixa_balcao
        this.nota_detalhada = nota_detalhada
        this.status_pagamento = status_pagamento
        this.endereco_envio = endereco_envio
        this.observacao_expedicao = observacao_expedicao
        this.forma_envio = forma_envio
        this.juntocom = juntocom
        this.juntocom_clinica_higashi = juntocom_clinica_higashi
        this.prometido_para = prometido_para
        this.aroma_sache_shake = aroma_sache_shake
        this.aroma_solucao_oral_capsulas = aroma_solucao_oral_capsulas
        this.observacao_geral = observacao_geral
        this.possui_receita = possui_receita
        this.pedido_urgente = pedido_urgente
        this.mensagem_automatica_chatguru = mensagem_automatica_chatguru

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