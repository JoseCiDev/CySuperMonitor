import { elements as el } from '../../Elements';
import '../../support/commands';
import { faker } from '@faker-js/faker';
import { dadosParametros, BuscarReceita } from '../../DadosParametros'

export const {
    ModalBuscaReceitas,
    filtroDataInicialBuscaReceitas,
    filtroDataFinalBuscaReceitas,
    filtroPendenciasBusca,
    botaoProcurarReceitas,
    labelProcurarReceitas,
    numeroReceitas,
    containerInserirUsuario,
    select,
    usuarioSelecionado,
    senhaReceita,
    aplicaDesmarcarUso,
    mensagemConfirmacaoModal,
    mensagemSucessoModal,
    abaPdfVisualizarReceitas,
    abaOriginalVisualizarReceitas,
    abaObservacoesInternasVisualizarReceitas,
    abaInformacoesFcertaVisualizarReceitas,
    exibirReguaVisualizarReceitas,
    fecharVisualizarReceitas,
    clonarReceitas,
    modalObservacoesClonar,
    clonarObservacoesFarmaceuticas,
    menuReceitas,
    excluirReceitas,
    abaAdicionarObservacoesFarmaceuticas,
    senhaObservacoesFarmaceuticas,
    textoObservacoesFarmaceuticas,
    fecharModalObservacoesFarmaceuticas,
    abaExcluirObservacoesFarmaceuticas,
    excluirObservacoesFarmaceuticas,
    containerCategoriaDuvidaTecnicas,
    textoDuvidasTecnicas,
    containerColaboradores,
    responsavelRespostas,
    enviarDuvidasTecnicas,
    fecharModalDuvidasTecnicas,
    acessarDuvidasTecnicas,
    containerResponsavelRespostaDuvidasTecnicas,
    ResponsavelRespostaDuvidasTecnicas,
    responsavelAtualRespostaDuvidasTecnicas,
    marcarDuvidasTecnicaResolvidas,
    excluirDuvidasTecnicas,
    statusRespostaDuvidasTecnicas,
    textoRespostaDuvidasTecnicas,
    enviarRespostaDuvidasTecnicas,

} = el.Receitas;

export const {
    campoBuscarPedido,
    buscarFilial,
    enviarBusca,
    botaoVisualizar,
    brasileiro,
    salvarNumeroChatguru,
    botaoTempoTratamento,
    modalMensagemChatguru,
    tempoTratamentoPadrao,
    cabecalhoModalTempoTratamento,
    salvarTempoTratamento,
    modalConfirmacaoPedido,
    modalMensagemPedido,
    orcamentista,
    containerFormaPagamento,
    inserirTempoRepeticao,
    orcamentoEscolhido,
    monitoramentoAtendimento,
    salvarDadosConfirmacaoPedido,
    canalConfirmacaoPedido,
    enviarEmailRastreamento,
    naoMostrarPedidoInclusao,
    naoMostrarPedidoCaixa,
    observacaoCaixaBalcao,
    notaDetalhada,
    campoStatusPagamento,
    enderecoEnvioSelecionado,
    enderecoEnvio,
    observacaoExpedicao,
    menuAtendimentos,
    atendimentosEmAndamento,
    mostrarTodos,
    juntocomconfirmacaoPedido,
    observacaoGeral,
    PossuiReceita,
    possuiFormulaEspecial,
    preVisualizarPedido,
    fecharPreVisualizarPedido,
    enviarconfirmarPedido,
    campoFormaEnvio,
    campoprometidoPara,
    campoAromaSache,
    campoAromaCapsula,
    dispararMensagemChatguru,
    campoVincularReceita,
    relacionarReceitaPedido,
    botaoDesvincularReceitaTelaAtendimentoAndamento,
    mostrarPedidosEncerrados,
    reabrirPedido,
    confirmaReabrirPedido,
    containerPedidos,


} = el.Atendimentos;

const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);





describe('Tela importação de receitas.', () => {

    beforeEach(function () {
        // cy.login(el.Login.entrar, dadosAmbiente.USERADMIN, dadosAmbiente.PASSWORD);
    });



    it.only('Deve confirmar pedido logado com perfil administrador e visualizar informações selecionadas no quadro de informações da amarelinha confirmada.', () => {
        cy.login(el.Login.entrar, dadosAmbiente.USERADMIN, dadosAmbiente.PASSWORD);

        cy.getElementAndClick(menuAtendimentos, atendimentosEmAndamento);
        cy.visualizarPedido(el.Atendimentos.botaoVisualizar);
        cy.inserirTempoTratamento('30');
        cy.confirmarPedido(
            dadosParametros.formaPagamento.BoletoLiberarSemPgto,
            dadosParametros.Pedido.tempoRepeticao,
            dadosParametros.Pedido.textoObservacaoCaixaBalcao,
            dadosParametros.statusPagamento.NaoPago,
            dadosParametros.Pedido.textoObservacaoExpedicao,
            dadosParametros.formaEnvio.Sedex10,
            dadosParametros.dataFormatada,
            dadosParametros.aromaSache.Laranja,
            dadosParametros.aromaCapsula.Framboesa,
            dadosParametros.Pedido.textoObservacaoGeral
        );
        cy.getVisible(el.Atendimentos.quadroInformacoesAmarelinhaConfirmada);
        cy.getVisible(el.Atendimentos.quadroInformacoesAmarelinhaConfirmada);
        cy.getVisible(el.Atendimentos.orcamentoQuadroInformacoesAmarelinhaConfirmada);

    });



    it('Deve confirmar pedido logado com usuário atendente, logar com usuário distinto do primeiro, reabrir amarelinha, alterar atendente, orçamentista, backoffice, tempo de repetição, dias de tratamento, aroma sachê, aroma capsula, observações e confirmar novamente. Validar se é apresentado informações alterada no quadro de informações da amarelinha confirmada.', () => {
        cy.login(el.Login.entrar, dadosAmbiente.USERADMIN, dadosAmbiente.PASSWORD);

        cy.getElementAndClick(menuAtendimentos, atendimentosEmAndamento); (el.Atendimentos.atendimentosEmAndamento);
        cy.visualizarPedido(el.Atendimentos.botaoVisualizar);
        cy.inserirTempoTratamento('30');
        cy.confirmarPedido(
            dadosParametros.formaPagamento.BoletoLiberarSemPgto,
            dadosParametros.Pedido.tempoRepeticao,
            dadosParametros.Pedido.textoObservacaoCaixaBalcao,
            dadosParametros.statusPagamento.NaoPago,
            dadosParametros.Pedido.textoObservacaoExpedicao,
            dadosParametros.formaEnvio.Sedex10,
            dadosParametros.dataFormatada,
            dadosParametros.aromaSache.Laranja,
            dadosParametros.aromaCapsula.Framboesa,
            dadosParametros.Pedido.textoObservacaoGeral
        );
        cy.getVisible(el.Atendimentos.quadroInformacoesAmarelinhaConfirmada);
        cy.getVisible(el.Atendimentos.quadroInformacoesAmarelinhaConfirmada);
        cy.getVisible(el.Atendimentos.orcamentoQuadroInformacoesAmarelinhaConfirmada);
        const capturarDado = (campoCaptura: string, dadoCapturado: string, localArmazenamento: string): Cypress.Chainable<string> => {
            return cy.getVisible(campoCaptura)
                .eq(0)
                .invoke('text')
                .then((texto) => {
                    const usuarioMatch = texto.match(/\d+/);

                    if (!usuarioMatch) {
                        throw new Error(`Usuário inválido: ${texto}`);
                    }
                    const userPedido = (usuarioMatch);
                    cy.wrap(userPedido)
                        .as('usuario');
                    cy.setDadoCapturado(dadoCapturado);
                    localArmazenamento = dadoCapturado;
                    cy.log(`Usuário não capturado`);
                });
        }

        capturarDado(el.Atendimentos.orcamentistaPedido, dadosParametros.Pedido.orcamentista, dadosParametros.Pedido.orcamentista);
        capturarDado(el.Atendimentos.atendentePedido, dadosParametros.Pedido.atendentePedido, dadosParametros.Pedido.atendentePedido);
        cy.log(dadosParametros.Pedido.orcamentista);
        cy.log(dadosParametros.Pedido.atendentePedido);


        cy.login(el.Login.entrar, dadosAmbiente.USERINCLUSAO, dadosAmbiente.PASSWORD);

        cy.getElementAndClick(menuAtendimentos, atendimentosEmAndamento); (el.Atendimentos.atendimentosEmAndamento);
        cy.getElementAndClick(el.Atendimentos.mostrarPedidosEncerrados);
        cy.visualizarPedido(el.Atendimentos.botaoVisualizar);
        cy.getElementAndClick(el.Atendimentos.reabrirPedido), { timeout: 20000 };
        cy.getElementAndClick(el.Atendimentos.confirmaReabrirPedido);
        cy.wait(2000);
        cy.confirmarPedido(
            dadosParametros.formaPagamento.CartaoDebito,
            dadosParametros.Pedido.tempoRepeticao,
            dadosParametros.Pedido.textoObservacaoCaixaBalcao,
            dadosParametros.statusPagamento.Pago,
            dadosParametros.Pedido.textoObservacaoExpedicao,
            dadosParametros.formaEnvio.SedexFloripa,
            dadosParametros.dataFormatada,
            dadosParametros.aromaSache.Cacau,
            dadosParametros.aromaCapsula.Cacau,
            dadosParametros.Pedido.textoObservacaoGeral
        );
        cy.getVisible(el.Atendimentos.quadroInformacoesAmarelinhaConfirmada);
        cy.getVisible(el.Atendimentos.quadroInformacoesAmarelinhaConfirmada);
        cy.getVisible(el.Atendimentos.orcamentoQuadroInformacoesAmarelinhaConfirmada);
        capturarDado(el.Atendimentos.orcamentistaPedido, dadosParametros.Pedido.orcamentista, dadosParametros.Pedido.orcamentista);
        capturarDado(el.Atendimentos.atendentePedido, dadosParametros.Pedido.atendentePedido, dadosParametros.Pedido.atendentePedido);
        cy.log(dadosParametros.Pedido.orcamentista);
        cy.log(dadosParametros.Pedido.atendentePedido);

    });


    it('Deve confirmar pedido juntocom e visualizar dados confirmados no quadro de informações da amarelinha confirmada.', () => {
        cy.login(el.Login.entrar, dadosAmbiente.USERATENDENTE, dadosAmbiente.PASSWORD);

        cy.getElementAndClick(menuAtendimentos, atendimentosEmAndamento); (el.Atendimentos.atendimentosEmAndamento);
        cy.visualizarPedido(el.Atendimentos.botaoVisualizar);

    })

    it('Deve confirmar pedido vinculado a receita e visualizar dados confirmados no quadro de informações da amarelinha confirmada.', () => {
        cy.login(el.Login.entrar, dadosAmbiente.USERATENDENTE1, dadosAmbiente.PASSWORD);

        cy.getElementAndClick(menuAtendimentos, atendimentosEmAndamento); (el.Atendimentos.atendimentosEmAndamento);
        cy.visualizarPedido(el.Atendimentos.botaoVisualizar);

    })


    it('Deve confirmar pedido e visualizar dados confirmados no quadro de informações da amarelinha confirmada, logado com perfil farmacêutico.', () => {
        cy.login(el.Login.entrar, dadosAmbiente.USERATENDENTE1, dadosAmbiente.PASSWORD);

        cy.getElementAndClick(menuAtendimentos, atendimentosEmAndamento); (el.Atendimentos.atendimentosEmAndamento);
        cy.visualizarPedido(el.Atendimentos.botaoVisualizar);

    })

    it('Deve confirmar pedido e visualizar dados confirmados no quadro de informações da amarelinha confirmada, logado com perfil recepção.', () => {
        cy.login(el.Login.entrar, dadosAmbiente.USERATENDENTE1, dadosAmbiente.PASSWORD);

        cy.getElementAndClick(menuAtendimentos, atendimentosEmAndamento); (el.Atendimentos.atendimentosEmAndamento);
        cy.visualizarPedido(el.Atendimentos.botaoVisualizar);

    })

    it('Deve confirmar pedido, logado com perfil atendente.', () => {
        cy.login(el.Login.entrar, dadosAmbiente.USERATENDENTE1, dadosAmbiente.PASSWORD);

        cy.getElementAndClick(menuAtendimentos, atendimentosEmAndamento); (el.Atendimentos.atendimentosEmAndamento);
        cy.visualizarPedido(el.Atendimentos.botaoVisualizar);

    })

    it('Deve confirmar pedido e visualizar dados confirmados no quadro de informações da amarelinha confirmada, logado com perfil inclusão.', () => {
        cy.login(el.Login.entrar, dadosAmbiente.USERINCLUSAO, dadosAmbiente.PASSWORD);

        cy.getElementAndClick(menuAtendimentos, atendimentosEmAndamento); (el.Atendimentos.atendimentosEmAndamento);
        cy.visualizarPedido(el.Atendimentos.botaoVisualizar);

    })




})