@funnel @bronze @silver @gold @diamond @urgent @concluded @rejected
Feature: Gerenciamento do funil de vendas

    Background:
        Given que o usuário está logado no sistema de gestão de receitas e orçamentos

    @funnel @bronze @silver @gold @diamond
    Scenario Outline: Mover receita vinculada a orçamento para a etapa correta do funil
        Given que o orçamento de valor <valorOrcamento> foi vinculado à receita
        When o orçamento é vinculado à receita
        Then a receita deve ser movida para a etapa <etapaEsperada> do funil

        Examples:
            | valorOrcamento | etapaEsperada | orcamentoFilialVinculadoReceita |
            | 200            | Bronze        | 108604 / 5 <> 425416            |
            | 400            | Prata         | 110726 / 5  <> 425417           |
            | 1000           | Gold          | 92585 / 5 <> 425418             |
            | 2000           | Diamond       | 92653 / 5 <> 425419             |

    @urgent @funnel
    Scenario: Mover receita urgente para etapa urgente
        Given que uma receita foi registrada como urgente
        When a receita é marcada como urgente
        Then a receita deve ser movida para a etapa Urgente
        And a receita só deve sair da etapa Urgente quando o pedido for confirmado ou rejeitado

    @concluded @funnel
    Scenario: Mover receita para a etapa concluído quando o pedido for confirmado
        Given que a receita está vinculada a um pedido
        When o pedido é confirmado
        Then a receita deve ser movida para a etapa Concluído/Fechado no funil

    @rejected @funnel
    Scenario: Mover receita para a etapa rejeitado quando o pedido for rejeitado
        Given que a receita está vinculada a um pedido
        When o pedido é rejeitado
        Then a receita deve ser movida para a etapa Rejeitado no funil

    @urgent @funnel @editRecipe
    Scenario Outline: Editar receita e marcar como urgente
        Given que a <receita> está em uma <etapa> do funil conforme o valor do orçamento
        When o usuário edita a receita e marca como urgente
        Then a receita deve ser movida para a etapa Urgente
        And a receita só deve sair dessa etapa quando o pedido for confirmado ou rejeitado

        Examples:
            | receita | etapa    |
            | 425426  | Prata    |
            | 425427  | Ouro     |
            | 425428  | Diamante |

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
            | 425433  | Gold       | 65535 / 5000 | 400                | Prata             |
            | 425434  | Diamond    | 64899 / 5000 | 1000               | Gold              |

    @concluded @funnel
    Scenario Outline: Pedido confirmado move a receita para a etapa Concluído
        Given que a <receita> está na etapa <etapaAtual> do funil
        And a receita está vinculada ao orcamento <orcamentoFilial>
        When o <orcamentoFilial> é confirmado
        Then a receita deve ser movida para a etapa Concluído/Fechado no funil

        Examples:
            | receita | etapaAtual | orcamentoFilial |
            | 425435  | Bronze     | 127783 / 5      |
            | 425436  | Prata      | 128426 / 5      |
            | 425437  | Gold       | 126799 / 5      |
            | 425438  | Diamond    | 127930 / 5      |

    @rejected @funnel
    Scenario Outline: Pedido rejeitado move a receita para a etapa Rejeitado
        Given que a <receita> está na etapa <etapaAtual> do funil
        And vinculada ao orçamento <orcamentoFilial>
        When o pedido é rejeitado
        Then a receita deve ser movida para a etapa Rejeitado no funil

        Examples:
            | receita | etapaAtual | orcamentoFilial |
            | 425439  | Bronze     | 127474 / 5      |
            | 425440  | Prata      | 126273 / 5      |
            | 425441  | Gold       | 126025 / 5      |
            | 425442  | Diamond    | 333170 / 1000   |

    @linkRecipe @funnel
    Scenario Outline: Alterado o vinculo entre receita e orçamento
        Given que a <receita> está na etapa <etapaAtual> do funil
        And vinculada ao orçamento <orcamentoFilial>
        When a receita é desvinculada
        And vinculada ao orçamento <novoOrcamento>
        Then a receita deve ser movida para a etapa <novaEtapa> no funil

        Examples:
            | receita | etapaAtual | orcamentoFilial | novoOrcamento | novaEtapa |
            | 425439  | Bronze     | 127474 / 5      | 127476 / 5    | Ouro      |
            | 425440  | Prata      | 126273 / 5      | 126283 / 5    | Diamante  |
            | 425441  | Gold       | 126025 / 5      | 126055 / 5    | Bronze    |
            | 425442  | Diamond    | 333170 / 1000   | 333178 / 1000 | Prata     |



#orcamento junto
#juntocom