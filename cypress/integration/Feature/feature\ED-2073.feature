@funnel @recipes @budgets @sales
Feature: Gerenciamento de receitas no funil de vendas

    Background:
        Given que o usuário está logado no sistema

    @bronze @silver @gold @diamond
    Scenario Outline: Receita vinculada a orçamento entra na etapa correta do funil
        Given que a receita <receita> foi criada e vinculada a um orçamento <orcamentoFilial> de valor <valorOrcamento>
        When o valor do orçamento está entre <minValue> e <maxValue>
        Then a receita deve ser movida para a etapa <etapaEsperada> no funil de vendas

        Examples:
            | receita | orcamentoFilial | valorOrcamento | minValue | maxValue | etapaEsperada |
            | 425438  | 128443 / 5      | 200            | 0        | 350      | Bronze        |
            | 425443  | 128281 / 5      | 500            | 350      | 700      | Silver        |
            | 425444  | 128842 / 5      | 1000           | 700      | 1500     | Gold          |
            | 425445  | 128052 / 5      | 2000           | 1500     | 999999   | Diamond       |

    @changeBudget
    Scenario Outline: Alterar valor do orçamento move a receita para a etapa correta
        Given que a <receita> está na etapa <etapaAtual> do funil de vendas
        When o orçamento <orcamentoFilial> vinculado à receita tem o valor alterado para <novoValorOrcamento>
        Then a receita deve ser movida para a etapa <novaEtapaEsperada> no funil de vendas

        Examples:
            | receita | etapaAtual | orcamentoFilial | novoValorOrcamento | novaEtapaEsperada |
            | 425446  | Bronze     | 66834/5000      | 500                | Silver            |
            | 425447  | Silver     | 66835/5000      | 1000               | Gold              |
            | 425448  | Gold       | 66836/5000      | 2000               | Diamond           |
            | 425449  | Diamond    | 66837/5000      | 300                | Bronze            |

    @unlinkBudget
    Scenario Outline: Desvincular receita de orçamento remove a receita do funil
        Given que a receita está na etapa <etapaAtual> do funil de vendas
        When a receita é desvinculada do orçamento
        Then a receita deve ser removida da etapa <etapaAtual> e do funil de vendas

        Examples:
            | etapaAtual |
            | Bronze     |
            | Silver     |
            | Gold       |
            | Diamond    |

    @injectableBranch @ignoreFunnel
    Scenario Outline: Receita vinculada a orçamento de filial injetáveis não entra no funil
        Given que a receita foi criada e vinculada a um orçamento da filial injetável <filialInjetaveis>
        When o orçamento <orcamentoFilialVinculadoReceita> é vinculado à receita
        Then a receita não deve entrar em nenhuma etapa do funil de vendas

        Examples:
            | filialInjetaveis | orcamentoFilialVinculadoReceita |
            | 13               | 42940 / 13                      |
            | 1313             | 33690 / 1313                    |
            | 2013             | 6572 / 2013                     |

    @urgent @funnel
    Scenario: Receita marcada como urgente deve ir para a etapa urgente
        Given que a receita foi criada e marcada como urgente
        When o usuário sinaliza a receita como urgente
        Then a receita deve ser movida para a etapa Urgent no funil de vendas
        And a receita só deve sair da etapa Urgent se o pedido for confirmado ou rejeitado

    @urgent @funnel @budget
    Scenario: Receita urgente vinculada a um orçamento deve ir para a etapa urgente
        Given que a receita foi criada e vinculada a um orçamento de valor <valorOrcamento>
        And a receita foi marcada como urgente
        When o usuário sinaliza a receita como urgente
        Then a receita deve ser movida para a etapa Urgent no funil de vendas
        And a receita só deve sair da etapa Urgent se o pedido for confirmado ou rejeitado

        Examples:
            | valorOrcamento |
            | 200            |
            | 500            |
            | 1000           |
            | 2000           |

    @concludeBudget @funnel
    Scenario Outline: Mover receita para etapa Concluído quando o pedido é fechado
        Given que a receita está vinculada a um orçamento de valor <valorOrcamento>
        When o pedido da receita é confirmado
        Then a receita deve ser movida para a etapa Concluído/Fechado no funil de vendas

        Examples:
            | valorOrcamento |
            | 200            |
            | 500            |
            | 1000           |
            | 2000           |

    @rejectBudget @funnel
    Scenario Outline: Mover receita para etapa Rejeitado quando o pedido é encerrado ou rejeitado
        Given que a receita está vinculada a um orçamento de valor <valorOrcamento>
        When o pedido da receita é rejeitado
        Then a receita deve ser movida para a etapa Rejeitado no funil de vendas

        Examples:
            | valorOrcamento |
            | 200            |
            | 500            |
            | 1000           |
            | 2000           |

    @funnel @bronze @silver @gold @diamond @updateBudget
    Scenario Outline: Atualizar orçamento para mover a receita para a etapa correta
        Given que a <receita> está na etapa <etapaAtual> do funil
        When o <orçamento> sofre um acréscimo de valor para <novoValorOrcamento>
        Then a receita deve ser movida para a etapa <novaEtapaEsperada> do funil

        Examples:
            | receita |  | etapaAtual | orçamento    | novoValorOrcamento | novaEtapaEsperada |
            | 425429  |  | Bronze     | 66591 / 5000 | 430,80             | Prata             |
            | 425430  |  | Prata      | 65532 / 5000 | 1.428,40           | Ouro              |
            | 425431  |  | Ouro       | 65516 / 5000 | 3.084,80           | Diamante          |

    @funnel @bronze @silver @gold @diamond @updateBudget
    Scenario Outline: Atualizar orçamento com decréscimo de valor para mover a receita para a etapa correta
        Given que a <receita> está na etapa <etapaAtual> do funil
        When o <orçamento> sofre um decréscimo de valor para <novoValorOrcamento>
        Then a receita deve ser movida para a etapa <novaEtapaEsperada> do funil

        Examples:
            | receita | etapaAtual | orçamento    | novoValorOrcamento | novaEtapaEsperada |
            | 425433  | Ouro       | 65535 / 5000 | 400                | Prata             |
            | 425434  | Diamante   | 64899 / 5000 | 1000               | Ouro              |