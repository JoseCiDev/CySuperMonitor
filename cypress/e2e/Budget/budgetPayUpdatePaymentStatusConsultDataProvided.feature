Feature: Validação de pagamento de pedido e consistência dos dados fornecidos

    Background:
        Given que o usuário está na tela de pedidos

    Scenario: Validar pagamento de pedido, atualização do status e consistência dos dados fornecidos
        When visualizar o orçamento
        And selecionar o contato do cliente
        And preencher os dados da orçamentista e atendente
        And inserir o tempo de tratamento
        Then é realizado o pagamento do orçamento
        And o sistema valida os dados do pagamento