Feature: Exibição do número de fórmulas por orçamento na tela de Pagamentos

    Como um usuário do sistema
    Eu quero visualizar o número total de fórmulas
    Para melhorar a análise e priorização dos pagamentos

    Background:
        Given o usuário está autenticado
        And o usuário acessa a tela "Pagamentos" na URL "http://baseUrl/busca/pagamentos/abertos/page/1"
        And existem orçamentos com diferentes quantidades de fórmulas no sistema

    @visualizacao-fórmulas
    Scenario Outline: Exibição do número total de fórmulas
        Given o orçamento "<orcamentoFilial>" contém "<quantidadeFormulas>" fórmulas
        When o sistema exibe a lista de pagamentos
        Then o orçamento "<orcamentoFilial>" deve exibir "<quantidadeFormulas>" na coluna "Total de fórmulas"

        Examples:
            | orcamentoFilial | quantidadeFormulas |
            | 68600/5000      | 5                  |
            | 12345/6789      | 10                 |
            | 98765/4321      | 2                  |

    @atualizacao
    Scenario Outline: Adição de fórmulas após edição de um orçamento
        Given o orçamento "<orcamentoFilial>" possui "<formulasIniciais>" fórmulas cadastradas
        When o usuário adiciona "<formulasAdicionadas>" fórmulas ao orçamento
        And a lista de pagamentos é recarregada
        Then o orçamento "<orcamentoFilial>" deve exibir "<formulasFinais>" ao lado do número do orçamento

        Examples:
            | orcamentoFilial | formulasIniciais | formulasAdicionadas | formulasFinais |
            | 68600/5000      | 5                | 1                   | 6              |
            | 12345/6789      | 10               | 3                   | 13             |
            | 98765/4321      | 2                | 2                   | 4              |

    @atualizacao
    Scenario Outline: Remoção de fórmulas após edição de um orçamento
        Given o orçamento "<orcamentoFilial>" possui "<formulasIniciais>" fórmulas cadastradas
        When o usuário remove "<formulasRemovidas>" fórmulas do orçamento
        And a lista de pagamentos é recarregada
        Then o orçamento "<orcamentoFilial>" deve exibir "<formulasFinais>" ao lado do número do orçamento

        Examples:
            | orcamentoFilial | formulasIniciais | formulasRemovidas | formulasFinais |
            | 68600/5000      | 7                | 2                 | 5              |
            | 12345/6789      | 10               | 4                 | 6              |
            | 98765/4321      | 5                | 1                 | 4              |

    @validacao
    Scenario Outline: Validação da consistência do número de fórmulas ao atualizar orçamentos
        Given o orçamento "<orcamentoFilial>" possui "<formulasIniciais>" fórmulas cadastradas
        When o usuário atualiza o orçamento para adicionar "<formulasAdicionadas>" fórmulas
        And o usuário remove "<formulasRemovidas>" fórmulas do orçamento
        And a lista de pagamentos é recarregada
        Then o orçamento "<orcamentoFilial>" deve exibir "<formulasFinais>"

        Examples:
            | orcamentoFilial | formulasIniciais | formulasAdicionadas | formulasRemovidas | formulasFinais |
            | 68600/5000      | 10               | 2                   | 3                 | 9              |
            | 12345/6789      | 15               | 5                   | 7                 | 13             |
            | 98765/4321      | 8                | 1                   | 2                 | 7              |

    @colunaTotalFormulas
    Scenario Outline: Validação da coluna de total de fórmulas
        Given o usuário está logado no sistema
        When o usuário acessa a página de busca de pagamentos
        Then  ele deve visualizar a coluna "Total de fórmulas", entre as colunas "Orçamento" e "Link"