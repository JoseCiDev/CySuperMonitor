Feature: Exibição do número de fórmulas por orçamento na tela de Pagamentos

    Como um usuário do sistema
    Eu quero visualizar o número total de fórmulas ao lado de cada orçamento
    Para melhorar a análise e priorização dos pagamentos

    Background:
        Given o usuário está autenticado
        And o usuário acessa a tela "Pagamentos" na URL "http://baseUrl/busca/pagamentos/abertos/page/1"
        And existem orçamentos com diferentes quantidades de fórmulas no sistema

    @visualizacao-fórmulas
    Scenario Outline: Exibição do número total de fórmulas ao lado do orçamento
        Given o orçamento "<numero_orcamento>" contém "<quantidade_formulas>" fórmulas
        When o sistema exibe a lista de pagamentos
        Then o orçamento "<numero_orcamento>" deve exibir "<quantidade_formulas>" ao lado do número do orçamento

        Examples:
            | numero_orcamento | quantidade_formulas |
            | 68600/5000       | 5                   |


    @atualizacao
    Scenario: Adição de fórmulas após edição de um orçamento
        Given o orçamento  possui "5" fórmulas cadastradas
        When o usuário adiciona mais "1" fórmulas ao orçamento
        And a lista de pagamentos é recarregada
        Then o orçamento deve exibir "6" ao lado do número do orçamento

    @atualizacao
    Scenario: Remoção de fórmulas após edição de um orçamento
        Given o orçamento  possui "7" fórmulas cadastradas
        When o usuário remove "2" fórmulas ao orçamento
        And a lista de pagamentos é recarregada
        Then o orçamento deve exibir "5" ao lado do número do orçamento