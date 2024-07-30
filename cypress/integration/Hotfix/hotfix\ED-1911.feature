#/home/jose/projetos/CySuperMonitor/cypress/integration/Hotfix/hotfix\ED-1911.feature

@funcional @atualizacao @statusPagamento @pedidoManipulado
Feature: Atualização do Status de Pagamento na Tela de Atendimento para Pedidos Manipulados

    Scenario: Atualização do status de pagamento dentro da tela de atendimento para pedidos manipulados
        Given que o usuário atendente está autenticado no sistema
        And acessa a tela de atendimento
        And seleciona um orçamento com status de pagamento pendente no qual o cliente enviou o comprovante de pagamento.
        When o usuário clica no botão de atualizar status de pagamento
        Then o sistema deve retornar o status de pagamento pago
        And deve exibir corretamente a forma de pagamento e os dados pessoais preenchidos pelo cliente no momento do pagamento
        And deve garantir que foi feito somente um pagamento para o pedido


@funcional @atualizacao @statusPagamento @pedidoInjetavel
Feature: Atualização do Status de Pagamento na Tela de Atendimento para Pedidos Injetáveis

    Scenario: Atualização do status de pagamento dentro da tela de atendimento para pedidos injetáveis
        Given que o usuário atendente está autenticado no sistema
        And acessa a tela de atendimento
        And seleciona um pedido com status de pagamento pendente no qual o cliente enviou o comprovante de pagamento.
        When o usuário clica no botão de atualizar status de pagamento
        Then o sistema deve retornar o status de pagamento pago
        And deve exibir corretamente a forma de pagamento e os dados pessoais preenchidos pelo cliente no momento do pagamento
        And deve garantir que foi feito somente um pagamento para o pedido


@funcional @atualizacao @listaAtendimentos @pedidoManipulado
Feature: Atualização do Status de Pagamento na Lista de Atendimentos para Pedidos Manipulados

    Scenario: Atualização do status de pagamento na lista de atendimentos para pedidos manipulados
        Given que o usuário atendente está autenticado no sistema
        And acessa a lista de atendimentos
        And há dois pedidos manipulados pagos no GPE com o mesmo cartão de crédito
        When o usuário clica no botão de atualizar status na lista de atendimentos
        Then o sistema deve exibir o status correto de pagamento para ambos os pedidos
        And deve garantir que o status de ambos os pedidos está atualizado para "pago"
        And deve garantir que foi feito somente um pagamento para cada pedido


@funcional @atualizacao @listaAtendimentos @pedidoInjetavel
Feature: Atualização do Status de Pagamento na Lista de Atendimentos para Pedidos Injetáveis

    Scenario: Atualização do status de pagamento na lista de atendimentos para pedidos injetáveis
        Given que o usuário atendente está autenticado no sistema
        And acessa a lista de atendimentos
        And há dois pedidos injetáveis pagos no GPE
        When o usuário clica no botão de atualizar status na lista de atendimentos
        Then o sistema deve exibir o status correto de pagamento para ambos os pedidos
        And deve garantir que o status de ambos os pedidos está atualizado para "pago"
        And deve garantir que foi feito somente um pagamento para cada pedido


@regressivo @atualizacao @statusPagamento @pedidoManipulado
Feature: Verificação de Atualização do Status de Pagamento para Pedidos Manipulados

    Scenario: Verificação de atualização correta do status de pagamento na tela de atendimento para pedidos manipulados
        Given que o erro na atualização do status de pagamento foi corrigido
        When o usuário atendente clica no botão de atualizar status de pagamento dentro da tela de atendimento para pedidos manipulados
        Then o sistema deve retornar o status de pagamento atualizado corretamente
        And deve exibir corretamente a forma de pagamento e os dados pessoais preenchidos pelo cliente no momento do pagamento
        And deve garantir que foi feito somente um pagamento para o pedido


@regressivo @atualizacao @statusPagamento @pedidoInjetavel
Feature: Verificação de Atualização do Status de Pagamento para Pedidos Injetáveis

    Scenario: Verificação de atualização correta do status de pagamento na tela de atendimento para pedidos injetáveis
        Given que o erro na atualização do status de pagamento foi corrigido
        When o usuário atendente clica no botão de atualizar status de pagamento dentro da tela de atendimento para pedidos injetáveis
        Then o sistema deve retornar o status de pagamento atualizado corretamente
        And deve exibir corretamente a forma de pagamento e os dados pessoais preenchidos pelo cliente no momento do pagamento
        And deve garantir que foi feito somente um pagamento para o pedido