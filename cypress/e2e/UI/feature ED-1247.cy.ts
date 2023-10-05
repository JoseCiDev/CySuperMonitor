import { elements as el } from '../../elements';
import '../../support/commands';
import { faker } from '@faker-js/faker';
import { dadosParametros, BuscarReceita } from '../../DadosParametros'



const ambiente = Cypress.env('AMBIENTE');
const dadosAmbiente = Cypress.env(ambiente);





describe('Tela importação de receitas.', () => {

    beforeEach(function () {
        cy.login(el.Login.entrar, dadosAmbiente.USERATENDENTE1, dadosAmbiente.PASSWORD, dadosParametros.Url.inicio);
    });



    it.only('Deve confirmar pedido logado com perfil administrador e visualizar informações selecionadas no quadro de informações da amarelinha confirmada.', () => {
        cy.login(el.Login.entrar, dadosAmbiente.USERADMIN, dadosAmbiente.PASSWORD, dadosParametros.Url.inicio);
        
        cy.acessarAtendimentosEmAndamento(el.Atendimentos.atendimentosEmAndamento);
        cy.visualizarPedido(el.Atendimentos.botaoVisualizar);
        cy.confirmarPedido(
            dadosParametros.formaPagamento.BoletoLiberarSemPgto,
            dadosParametros.Pedido.tempoRepeticao,
            dadosParametros.Pedido.textoObservacaoCaixaBalcao,
            dadosParametros.statusPagamento.NaoPago,
            dadosParametros.Pedido.textoObservacaoExpedicao,
            dadosParametros.formaEnvio.Sedex10,
            dadosParametros.dataFormatada,
            dadosParametros.aromaSache.laranja,
            dadosParametros.aromaCapsula.framboesa,
            dadosParametros.Pedido.textoObservacaoGeral
            );
        
    });



    it('Deve confirmar pedido logado com usuário atendente, logar com usuário distinto do primeiro, reabrir amarelinha, alterar atendente, orçamentista, backoffice, tempo de repetição, dias de tratamento, aroma sachê, aroma capsula, observações e confirmar novamente. Validar se é apresentado informações alterada no quadro de informações da amarelinha confirmada.', () => {
        cy.login(el.Login.entrar, dadosAmbiente.USERATENDENTE1, dadosAmbiente.PASSWORD, dadosParametros.Url.inicio);

        cy.acessarAtendimentosEmAndamento(el.Atendimentos.atendimentosEmAndamento);
        cy.visualizarPedido(el.Atendimentos.botaoVisualizar);
       

        cy.login(el.Login.entrar, dadosAmbiente.USERATENDENTE2, dadosAmbiente.PASSWORD, dadosParametros.Url.inicio);

        cy.acessarAtendimentosEmAndamento(el.Atendimentos.atendimentosEmAndamento);
        cy.getElementAndClick(el.Atendimentos.mostrarPedidosEncerrados);
        cy.visualizarPedido(el.Atendimentos.botaoVisualizar);
        cy.getElementAndClick(el.Atendimentos.reabrirPedido), { timeout: 20000 };
        cy.getElementAndClick(el.Atendimentos.confirmaReabrirPedido);
        cy.wait(2000);
        

        cy.getVisible('.infosInclusao');
    });


    it('Deve confirmar pedido juntocom e visualizar dados confirmados no quadro de informações da amarelinha confirmada.', () => {
        cy.login(el.Login.entrar, dadosAmbiente.USERATENDENTE1, dadosAmbiente.PASSWORD, dadosParametros.Url.inicio);

        cy.acessarAtendimentosEmAndamento(el.Atendimentos.atendimentosEmAndamento);
        cy.visualizarPedido(el.Atendimentos.botaoVisualizar);
       


        cy.getVisible('infosInclusao');
        //256816 /1000 23573 /1020

    })



    it('Deve confirmar pedido vinculado a receita e visualizar dados confirmados no quadro de informações da amarelinha confirmada.', () => {
        cy.login(el.Login.entrar, dadosAmbiente.USERATENDENTE1, dadosAmbiente.PASSWORD, dadosParametros.Url.inicio);

        cy.acessarAtendimentosEmAndamento(el.Atendimentos.atendimentosEmAndamento);
        cy.visualizarPedido(el.Atendimentos.botaoVisualizar);
        
    })

});