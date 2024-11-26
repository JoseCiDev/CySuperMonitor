Feature: Confirmação de Orçamento
    Como atendente
    Eu quero confirmar um orçamento
    Para garantir que todos os dados do cliente e do orçamentista estejam corretos

    Background:
        Given que o usuário está logado

    Scenario: Confirmar o orçamento de um cliente
        When eu acessar a tela de atendimentos em andamento
        And visualizar um orçamento disponível
        And selecionar o contato
        And informar os dados do orçamentista e do atendente
        And configurar o tempo de tratamento desejado
        And vincular receita ao pedido
        Then confirmarei o pedido
        And os dados fornecidos na confirmação devem ser exibidos corretamente
