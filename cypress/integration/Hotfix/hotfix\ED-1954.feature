# language: pt
@acompanharPedido @processoProducaoEntrega
Feature: Acompanhar processo de produção e entrega de pedidos

    Background:
        Given que o cliente acessa o link de acompanhamento de um pedido
        And o usuário acessa a tela de tela de processo de produção e entrega.
        And que o sistema possui as informações do pedido para exibição
        And que o pedido possui as etapas de produção e entrega definidas

    @pedidoNaoConfirmado
    Scenario: Exibição de tela de processo de produção e entrega para pedido não confirmado
        Given que o pedido não está confirmado
        When o cliente acessa o link de acompanhamento
        Then o sistema deve exibir a tela de processo de produção e entrega
        And o usuário deve visualizar tela de processo de produção e entrega.
    #42906/13
    #325484/1000

    @pedidoConfirmado
    Scenario: Exibição de tela "Meus Pedidos" para pedido confirmado
        Given que o pedido está confirmado
        When o cliente acessa o link de acompanhamento
        Then o sistema deve redirecionar para a tela "Meus Pedidos"
        And o usuário deve visualizar tela de  "Meus Pedidos"
    #42906/13
    #325484/1000

    @pedidoRejeitado
    Scenario: Acompanhamento de pedido rejeitado
        Given que o pedido foi rejeitado
        When o cliente acessa o link de acompanhamento
        Then o sistema deve exibir a mensagem "Atendimento rejeitado"
    #42906/13
    #325484/1000
    #93347 / 5

    @pedidoExcluido
    Scenario: Acompanhamento de pedido excluido
        Given que o pedido foi excluido
        When o cliente acessa o link de acompanhamento
        Then o sistema deve exibir a mensagem "Atendimento excluído"
    #93347 / 5