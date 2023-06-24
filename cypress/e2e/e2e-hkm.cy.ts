/// <reference types="Cypress" />
<<<<<<< HEAD
<<<<<<< HEAD
import { data } from '../fixtures/Sm/Hkm/nrorc-cdfil';

=======
import { Connection, ConnectionOptions } from 'mysql2/promise';
import * as mysql2 from 'mysql2/promise';
=======
import * as mysql from 'mysql';
import { DatabaseConnection } from '../support/Connections/connection';
>>>>>>> feature/ECD-3
import * as dotenv from 'dotenv';
dotenv.config();
>>>>>>> feature/ECD-2




//BACKOFFICE
<<<<<<< HEAD
<<<<<<< HEAD
import BackofficeHKM from '../integration/Sm/Hkm/BackofficeHKM';
=======
import BackofficeHKM from '../integration/Backoffice/EmAndamento';

>>>>>>> feature/ECD-2
=======
import BackofficeHKM from '../integration/Backoffice/EmAndamento';
>>>>>>> feature/ECD-3

//ATENDIMENTO


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
        cy.login('user', 'password')

    })


    // afterEach(() => {
    //     // In firefox, blur handlers will fire upon navigation if there is an activeElement.
    //     // Since todos are updated on blur after editing,
    //     // this is needed to blur activeElement after each test to prevent state leakage between tests.

    // })


    // Dentro do arquivo de teste Cypress

<<<<<<< HEAD

    it('Deve buscar registros no banco de dados', () => {
        cy.connectToDatabase('connectToDatabase').then(() => {
            cy.queryDatabase('SELECT * FROM acl_role ar WHERE ar.id_acl_role = "3"', (results) => {
                // Use os resultados da consulta no seu teste
                expect(results.length).to.be.greaterThan(0);
                expect(results).to.have.lengthOf(1); // Verifica se foi retornado apenas um registro
                expect(results[0].tipo).to.equal('Atendente'); // Verifica o nome do perfil
                // ...
            });
        });
        // Desconectar do banco de dados
        cy.disconnectFromDatabase;
    });
=======
>>>>>>> feature/ECD-2
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

            // receita: {
            //     importarReceita:
            //         it('Importações de Receitas', () => {

            //         }),

            //     gerenciarReceita:
            //         it('Gerenciamentos de Receitas', () => {

            //         }),

            //     gerenciarDt:
            //         it('Gerenciamentos de Dúvidas Técnicas', () => {

            //         }),

            //     ditribuicaoPrescritor:
            //         it('Distribuições de Prescritores', () => {

            //         }),
            // },

            backofficeHkm: {
                emAndamento:
<<<<<<< HEAD
                    it('Backoffices em Andamento', () => {
<<<<<<< HEAD
                        const dbName = 'homolog'
                        const query = 'SELECT * FROM acl_role ar'

                        cy.task('queryDatabase', { dbName, query })
=======
                        cy.task('queryDatabase', {
                            query: 'SELECT * from acl_role ar'
                        }).then((result) => {
                            // 'result' contém o resultado da consulta ao banco de dados

                            // Faça o que desejar com o resultado, como atribuí-lo a uma variável
                            const data = result

                            // Realize asserções ou ações adicionais com os dados recuperados
                            // cy.get(...).should(...) ou cy.wrap(...).click(), por exemplo
                        })
>>>>>>> feature/ECD-2
=======
                    it('Backoffices em Andamento', async () => {

                        cy.queryDB(
                            'homolog',
                            'SELECT * from acl_role ar')
                            .then((result) => {
                                const data = result;
                                // Faça o que desejar com os dados, como realizar asserções ou ações adicionais
                                // cy.get(...).should(...) ou cy.wrap(...).click(), por exemplo
                            });
>>>>>>> feature/ECD-3
                        // cy.nrorclist('cdfil' , 'nrorc')
                        // cy.nrorclist();
                        // BackofficeHKM.acessarBackofficeEmAndamento()
                        // BackofficeHKM.buscarOrcamentoBackoffice()
                        // BackofficeHKM.fazerConferenciaBackoffice()
                        // BackofficeHKM.visualizaratendimentoBackoffice()
                        // BackofficeHKM.visualizaratendimentoencerradoBackoffice()
                    }),



                // finalizado: it('Backofices finalizados', () => {
                //     // BackofficeHKM.finalizados()
                // })


                // },
                // atendimentoHkm: {
                //     emAndamento:
                //         it('Atendimentos em Andamento', () => {
                //             // AtendimentoHKM.acessarorcamentoAtendimento();
                //             // AtendimentoHKM.sugestaoformulacertaAtendimento();
                //             // AtendimentoHKM.loghistoricoAtendimento();
                //             // AtendimentoHKM.dadosclienteAtendimento();
                //             // AtendimentoHKM.observacaopacientemedicoAtendimento();
                //             // AtendimentoHKM.apontarerroAtendimento();
                //             // AtendimentoHKM.inserirobservacaoAtendimento();
                //             // AtendimentoHKM.inseriroutrainformaçãoAtendimento();
                //             // AtendimentoHKM.sincronizarAtendimento();
                //             // AtendimentoHKM.acompanharpedidotrackingAtendimento();
                //             // AtendimentoHKM.prepararemailAtendimento();
                //             // AtendimentoHKM.prepararwhatsappAtendimento();
                //             // AtendimentoHKM.prepararlinkavaliacaoAtendimento();
                //             // AtendimentoHKM.creditooudebitoAtendimento();
                //             // AtendimentoHKM.trocarresponsavelAtendimento();
                //             // AtendimentoHKM.gerarpagamentoAtendimento();
                //             // AtendimentoHKM.confirmarAtendimento();
                //             // AtendimentoHKM.encerrarAtendimento(nrorc);
                //         }),

                //     pendente:
                //         it('Atendimentos Pendentes', () => {

                //         }),

                //     finalizado:
                //         it('Atendimentos Finalizados', () => {

                //         }),

                //     retiradaBalcao:
                //         it('Atendimentos Finalizados', () => {

                //         }),
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

            },

            defaultHkm: 'Ops, Não foi carregado nenhum módulo'
        }

        return moduloSm[tipo] || moduloSm.defaultHkm
    }

    const modulo = execSm(BackofficeHKM)




<<<<<<< HEAD
});
=======
});







>>>>>>> feature/ECD-2
