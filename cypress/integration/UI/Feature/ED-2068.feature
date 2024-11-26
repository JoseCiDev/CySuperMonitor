@vipClient @budget @gift @shipping
Feature: Sinalização de envio de brinde para pedidos acima de 3000 líquido

    Background:
        Given que o usuário está logado no sistema
        And o orçamento é de de manipulados ou varejo
        And o valor líquido do orçamento é calculado com desconto e acréscimo incluídos

    @budgetConfirmed @vipClient
    Scenario Outline: Enviar brinde para pedidos acima de 3000 na confirmação do orçamento
        Given que o orçamento tem o valor líquido de <valorLiquido> após desconto e acréscimo
        And o orçamento está vinculado à filial <filial>
        When o usuário confirma o orçamento
        Then deve ser adicionada uma observação na amarelinha impressa com a mensagem "Brinde Cliente VIP"
        And o setor de expedição deve visualizar a mensagem "Brinde Cliente VIP"

        Examples:
            | valorLiquido | filial | orcamento |
            | 3500         | 5      | 134995    |
            | 4000         | 1000   | 335542    |
            | 5000         | 1010   | 14601     |

    @noGift @injectableBranch @ignoreBudget
    Scenario Outline: Não considerar filiais injetáveis e 2000 para o envio de brinde
        Given que o orçamento tem o valor líquido de <valorLiquido> após desconto e acréscimo
        And o orçamento está vinculado à filial <filialOrcamento>
        When o usuário confirma o orçamento
        Then a observação "Brinde Cliente VIP" não deve ser adicionada
        And o setor de expedição não deve visualizar a mensagem "Brinde Cliente VIP"

        Examples:
            | valorLiquido | filialOrcamento | orcamento |
            | 3500         | 13              | 43811     |
            | 5000         | 1313            | 34719     |
            | 4500         | 2013            | 7024      |
            | 4000         | 2000            | 98730     |

    @editBudget @vipClient
    Scenario Outline: Editar orçamento e confirmar novamente para sinalizar brinde
        Given que o orçamento foi confirmado anteriormente
        And o valor líquido do orçamento foi alterado para <novoValorLiquido> após edição
        And o orçamento está vinculado à filial <filial>
        When o usuário confirma o orçamento novamente
        Then deve ser adicionada a observação "Brinde Cliente VIP"
        And o setor de expedição deve visualizar a mensagem "Brinde Cliente VIP"

        Examples:
            | novoValorLiquido | filial | orcamento |
            | 3200             | 5000   | 64708     |
            | 3800             | 5000   | 65317     |
            | 4500             | 5000   | 66861     |

    @editBudget @noGift
    Scenario Outline: Editar orçamento para remover o brinde após alteração para valor inferior a 3000
        Given que o orçamento foi confirmado com o valor líquido superior a 3000
        And o valor líquido do orçamento foi alterado para <novoValorLiquido> após edição
        And o orçamento está vinculado à filial <filial>
        When o usuário confirma o orçamento novamente
        Then a observação "Brinde Cliente VIP" deve ser removida
        And o setor de expedição não deve visualizar a mensagem "Brinde Cliente VIP"

        Examples:
            | novoValorLiquido | filial | orcamento |
            | 2800             | 5000   | 65556     |
            | 2500             | 5000   | 65991     |
            | 2900             | 5000   | 66181     |

    @addFormulas @vipClient
    Scenario Outline: Adicionar mais fórmulas ao orçamento e enviar brinde
        Given que o orçamento está em processo de confirmação
        And o valor líquido do orçamento inicialmente é <valorInicial>
        When o usuário adiciona mais fórmulas ao orçamento, aumentando o valor líquido para <novoValorLiquido>
        Then deve ser adicionada a observação "Brinde Cliente VIP"
        And o setor de expedição deve visualizar a mensagem "Brinde Cliente VIP"

        Examples:
            | valorInicial | novoValorLiquido | filial | orcamento |
            | 2000         | 4000             | 5000   | 65000     |
            | 1500         | 5000             | 5000   | 65541     |

    @removeFormulas @noGift
    Scenario Outline: Remover fórmulas do orçamento para não enviar brinde
        Given que o orçamento passou pelo processo de confirmação
        And o valor líquido do orçamento inicialmente é <valorInicial>
        When o usuário remove fórmulas do orçamento, reduzindo o valor líquido para <novoValorLiquido>
        Then a observação "Brinde Cliente VIP" não deve ser apresentada
        And o setor de expedição não deve visualizar a mensagem "Brinde Cliente VIP"

        Examples:
            | valorInicial | novoValorLiquido | filial | orcamento |
            | 3500         | 2500             | 5000   | 66229     |
            | 4500         | 2000             | 5000   | 66838     |
            | 3200         | 2800             | 5000   | 65328     |

    @editFormulas @vipClient
    Scenario Outline: Alterar fórmulas do orçamento e garantir que o brinde seja enviado
        Given que o orçamento está em processo de confirmação
        And o valor líquido do orçamento foi alterado para <novoValorLiquido> após a alteração de fórmulas
        And o orçamento está vinculado à filial <filial>
        When o usuário confirma o orçamento
        Then deve ser adicionada a observação "Brinde Cliente VIP"
        And o setor de expedição deve visualizar a mensagem "Brinde Cliente VIP"

        Examples:
            | novoValorLiquido | filial | orcamento |
            | 3200             | 5000   | 66849     |
            | 3800             | 5000   | 65914     |
            | 4500             | 5000   | 64853     |