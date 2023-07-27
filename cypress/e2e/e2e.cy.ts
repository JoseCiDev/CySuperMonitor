/// <reference types="Cypress" />
import { Connection, ConnectionOptions } from 'mysql2/promise';
import * as mysql2 from 'mysql2/promise';
import * as mysql from 'mysql';
// import { DatabaseConnection } from '../support/Connections/connection';
import * as dotenv from 'dotenv';
dotenv.config();






//BACKOFFICE
import Backoffice from '../integration/Backoffice/EmAndamento';

// RECEITA
// import { ImportarReceita } from '../integration/Receita/ImportarReceita/ImportarReceita.cy.';

//ATENDIMENTO
import { Atendimento } from '../integration/Atendimento/Atendimento';

// ORCAMENTO
import { Orcamento } from '../integration/Orcamento';

// PEDIDO EM ANDAMENTO
import { PedidoEmAndamento } from '../integration/Atendimento/PedidoEmAndamento/PedidoEmAndamento';

//INCLUSAO

//CONFERENCIA ENTRADA

//LABORATORIO

//MONITORAMENTO

//CAIXA

//EXPEDICAO

//ALMOXARIFADO

//CONTROLE DE RECEITAS

//SAC

//CORREIOS

//RELATORIOS

//BUSCAS

//CONFIGURACOES





describe('Teste Automatizado Essentia Group SuperMonitor', () => {
   
    

    before(function () {
        

        // cy.getCookie(sessionCookieName)
        //     .should('exist')
        //     .its('value')
        //     .should('be.a', 'string')
        //     .as('sessionCookie')
    })


    beforeEach(function () {
        // By default Cypress will automatically
        // clear the Local Storage prior to each
        // test which ensures no todos carry over
        // between tests.
        //
        // Go out and visit our local web server
        // before each test, which serves us the
        // TodoMVC App we want to test against
        //
        // We've set our baseUrl to be http://localhost:8888
        // which is automatically prepended to cy.visit
        //
        // https://on.cypress.io/api/visit
        // cy.setCookie(sessionCookieName, this.sessionCookie)
       
        
    })


    // afterEach(() => {
    //     // In firefox, blur handlers will fire upon navigation if there is an activeElement.
    //     // Since todos are updated on blur after editing,
    //     // this is needed to blur activeElement after each test to prevent state leakage between tests.

    // })


    // Dentro do arquivo de teste Cypress


    const execSm = (tipo) => {
        const moduloSm = {
            // inicio: {
            //     listaToDo:
            //         it('Listas ToDo', () => {

            //         }),

            //     calendario:
            //         it('Calendários', () => {

            //         })
            // },

            receita: {
                importarReceita:
                    it('Importações de Receitas', () => {
                       
                        // for (let i = 0; i < 10; i++) {
                            // registrarReceitajpegPrescritorPotencialDComRelação();
                            // importarReceita.registrarReceitajpegPrescritorPotencialDComRelaçãoLimiteAtingido();
                            // importarReceita.registrarReceitajpegPrescritorPotencialDSemRelacao();
                        // }
                    }),

                // gerenciarReceita:
                //     it('Gerenciamentos de Receitas', () => {

                //     }),

                // gerenciarDt:
                //     it('Gerenciamentos de Dúvidas Técnicas', () => {

                //     }),

                // ditribuicaoPrescritor:
                //     it('Distribuições de Prescritores', () => {

                //     }),
            },

            // backofficeHkm: {
            //     emAndamento:


            // it('Backoffices em Andamento', async () => {

            // cy.nrorclist('cdfil' , 'nrorc')
            // cy.nrorclist();
            // BackofficeHKM.acessarBackofficeEmAndamento()
            // BackofficeHKM.buscarOrcamentoBackoffice()
            // BackofficeHKM.fazerConferenciaBackoffice()
            // BackofficeHKM.visualizaratendimentoBackoffice()
            // BackofficeHKM.visualizaratendimentoencerradoBackoffice()
            // }),

            // },

            // finalizado: it('Backofices finalizados', () => {
            //     // BackofficeHKM.finalizados()
            // })


            // },
            // atendimento: {
                // emAndamento:
                //     it('Pedidos em Andamento', () => {
                //         const pedido_andamento = new PedidoEmAndamento(
                //             'forma_pagamento',
                //             'orcamento_selecionado',
                //             30, // tempo_repeticao should be a number
                //             true, // monitoramento should be a boolean
                //             'canal_confirmacao',
                //             true, // enviar_email_rastreamento should be a boolean
                //             true, // liberar_inclusao should be a boolean
                //             true, // liberar_caixa should be a boolean
                //             'observacao_caixa_balcao',
                //             true, // nota_detalhada should be a boolean
                //             'status_pagamento',
                //             'endereco_envio',
                //             'observacao_expedicao',
                //             'forma_envio',
                //             1, // juntocom should be a number
                //             true, // juntocom_clinica_higashi should be a boolean
                //             'prometido_para',
                //             'aroma_sache_shake',
                //             'aroma_solucao_oral_capsulas',
                //             'observacao_geral',
                //             true,
                //             true, // pedido_urgente should be a boolean
                //             true, // mensagem_automatica_chatguru should be a boolean
                //             123, // atendimento should be a number
                //             456, // filial should be a number
                //             new Date(),
                //             new Date(),
                //             'paciente',
                //             'cliente',
                //             'prescritor',
                //             'atendente',
                //             'backoffice',
                //         );

                //         pedido_andamento.confirmarPedido();
                //     }),

                // pendente:
                //     it('Atendimentos Pendentes', () => {

                //     }),

                // finalizado:
                //     it('Atendimentos Finalizados', () => {

                //     }),

                // retiradaBalcao:
                //     it('Atendimentos Finalizados', () => {

                //     }),
            // },

            // inclusaoHkm: {
            //     emAndamento:
            //         it('Inclusões em Andamento', () => {
            //             //Inclusões em Andamento
            //             // InclusaoHKM.acessarorcamentoInclusao();
            //             // InclusaoHKM.fazerconferenciaInclusao();
            //         }),
            //     finalizado:
            //         it('Inclusões FInalizados', () => {
            //             // InclusaoHKM.acessarorcamentoInclusao();
            //             // InclusaoHKM.fazerconferenciaInclusao();

            //         })
            // },

            // ConferenciaEntradaHKM: {
            //     emAndamento:
            //         it('Conferências de Entrada em Andamento', () => {
            //             // ConferenciaEntradaHKM.acessarorcamentoConferenciaEntrada(nrorc);
            //             // ConferenciaEntradaHKM.fazerconferenciaConferenciaEntrada();

            //         }),
            //     pendente:
            //         it('Conferências de Entrada Pendentes de entrada', () => {
            //             // BackofficeHKM.acessarorcamentoBackoffice(nrorc);
            //             // BackofficeHKM.fazerConferenciaBackoffice();
            //         }),
            // },

            // conferenciaSaidaHkm: {
            //     emAndamento:
            //         it('Conferências de Saída em Andamento', () => {

            //         }),
            //     pendente:
            //         it('Conferências de Saída Pendentes de saída', () => {
            //         }),
            //     finalizado:
            //         it('Conferências de Saída finalizados', () => {
            //             // ConferenciaEntradaHKM.acessarorcamentoConferenciaEntrada(nrorc);
            //             // ConferenciaEntradaHKM.fazerconferenciaConferenciaEntrada();

            //         })
            // },

            // laboratorioHkm: {
            //     emAndamento:
            //         it('Laboratório em Andamento', () => {

            //         }),
            // },

            // monitoramentoHkm: {
            //     emAndamento:
            //         it('Monitoramentos em Andamento', () => {

            //         }),

            //     finalizado:
            //         it('Monitoramentos Finalizados', () => {

            //         }),

            //     especial:
            //         it('Monitoramentos Especiais', () => {

            //         }),
            // },

            // caixaHkm: {
            //     boleto:
            //         it('Caixa para Boletos', () => {

            //         }),

            //     boletoGerado:
            //         it('Caixa para Boletos Gerados', () => {

            //         }),

            //     boletoRecebimento:
            //         it('Caixa para Boletos Recebidos', () => {

            //         }),

            //     cartaoCredito:
            //         it('Caixa para Cartões de Crédito', () => {

            //         }),

            //     cortesiaOutroAcertovisitacao:
            //         it('Caixa para Cortesias - Outros - Acerto Visitação', () => {

            //         }),

            //     deposito:
            //         it('Caixa para Depósitos', () => {

            //         }),

            //     pix:
            //         it('Caixa para Pix', () => {

            //         }),

            //     liberacaoNf:
            //         it('Caixa para Liberações de Nf', () => {

            //         }),

            //     outroRecebimento:
            //         it('Caixa para Outros Recebimentos', () => {

            //         }),

            //     pago:
            //         it('Caixa para Pagos', () => {

            //         }),

            //     naoPago:
            //         it('Caixa para Não Pagos', () => {

            //         }),

            //     liberado:
            //         it('Caixa para Liberados', () => {

            //         }),


            // },

            // expedicaoHkm: {
            //     emAndamento:
            //         it('Expedições em Andamento', () => {

            //         }),

            //     expedido:
            //         it('Expedições Expedidas', () => {

            //         }),

            //     teleEntrega:
            //         it('Expedições de Tele Entrega', () => {

            //         }),
            // },

            // almoxarifadoHkm: {
            //     varejo:
            //         it('Expedições em Andamento', () => {

            //         }),

            //     injetavel:
            //         it('Expedições Expedidas', () => {

            //         }),

            // },

            // sacHkm: {
            //     reclamacao:
            //         it('Sac Reclamações', () => {
            //             //ComplaintHKM.acessarRelato();
            //             //ComplaintHKM.preencherRelatoGeral();
            //             //ComplaintHKM.preencherRelatoOrcamentoVinculado();
            //             //ComplaintHKM.preencherRelatoNaoConformidade();
            //             //ComplaintHKM.preencherRelatoAnexo();
            //             //ComplaintHKM.enviarRelato();
            //         }),

            //     duvida:
            //         it('Sac Dúvidas', () => {
            //             // DoubtHKM.acessarRelato();
            //             // DoubtHKM.preencherRelatoGeral();
            //             // DoubtHKM.preencherRelatoOrcamentoVinculado();
            //             // DoubtHKM.preencherRelatoNaoConformidade();
            //             // DoubtHKM.preencherRelatoAnexo();
            //             // DoubtHKM.enviarRelato();
            //         }),

            //     elogio:
            //         it('Sac Elogios', () => {
            //             // ComplimentHKM.acessarRelato();
            //             // ComplimentHKM.preencherRelatoGeral();
            //             // ComplimentHKM.preencherRelatoOrcamentoVinculado();
            //             // ComplimentHKM.preencherRelatoNaoConformidade();
            //             // ComplimentHKM.preencherRelatoAnexo();
            //             // ComplimentHKM.enviarRelato();
            //         }),

            //     configuracao:
            //         it('Sac Configurações', () => {

            //         }),

            //     relatorio:
            //         it('Sac Relatórios', () => {

            //         }),
            // },

            // correiosHkm: {
            //     consultaCodigoRastreio:
            //         it('Consultar códigos de Rastreio', () => {

            //         }),

            //     acompanhaStatus:
            //         it('Acompanhar Status', () => {

            //         }),

            // },

            // relatoriosHkm: {
            //     receita:
            //         it('Relatório de Receitas', () => {

            //         }),

            //     asapCarefull:
            //         it('Relatório Asap e Carefull', () => {

            //         }),

            //     demonstrativoDiario:
            //         it('Relatório de Demonstrativos Diários', () => {

            //         }),

            //     envioTransportadora:
            //         it('Relatório de Envios para Transportadoras', () => {

            //         }),

            //     observacaoRegistradaNaConferencia:
            //         it('Relatório de Observações Apontadas nas Conferências', () => {

            //         }),

            //     monitoramento:
            //         it('Relatório de Monitoramentos', () => {

            //         }),

            //     venda:
            //         it('Relatório de Vendas', () => {

            //         }),

            //     nps:
            //         it('Relatório NPS', () => {

            //         }),
            // },

            // buscasHkm: {
            //     cliente:
            //         it('Buscas de Clientes', () => {

            //         }),

            //     medicoPrescritor:
            //         it('Buscas de Médicos Prescritores', () => {

            //         }),

            //     pagamento:
            //         it('Buscas de Pagamentos', () => {

            //         }),
            // },

            // seniorHkm: {
            //     integracaoPedido:
            //         it('Pedidos não Integrados Senior', () => {

            //         }),

            //     integracaoNotaFiscal:
            //         it('Notas Fiscais não Integradas Senior', () => {

            //         }),
            // },

            // configuracoesHkm: {
            //     atendente:
            //         it('Configurações de Atendentes', () => {

            //         }),

            //     medico:
            //         it('Configurações de Médicos Prescritores', () => {

            //         }),

            //     registro:
            //         it('Configurações de Registros', () => {

            //         }),

            //         clienteVipDigitro:
            //         it('Configurações de Clientes VIP Dígitro', () => {

            //         }),

            //         template:
            //         it('Configurações de Templates', () => {

            //         }),

            //     clusterGrupo:
            //         it('Configurações de Clusters(Grupos)', () => {

            //         }),

            //     erroPossivel:
            //         it('Configurações de Erros Possíveis', () => {

            //         }),

            //     gerenciamentoEquivoco:
            //         it('Configurações de Gerenciamento de Observações', () => {

            //         }),



            default: 'Ops, Não foi carregado nenhum módulo'
        }

        return moduloSm[tipo] || moduloSm.default
    }

    const modulo = execSm(PedidoEmAndamento)





});









