Feature: Pedido com Código do Produto na Confirmação
    @budget @product @billing @fcerta
    Como um usuário do sistema
    Quero adicionar o código do produto junto à descrição no pedido impresso
    Para facilitar o processo de faturamento do pedido sem acessar o Fcerta

    Background:
        Given que estou logado no sistema de pedidos
        And eu acesso a tela de criação de pedidos

    @createBudget @success
    Scenario Outline: Criar pedido com produtos das filiais permitidas
        Given que eu crio um pedido com os seguintes produtos:
            | produto   | filial            |
            | <produto> | <orcamentoFilial> |
        When eu confirmo o pedido
        Then o pedido deve ser criado com sucesso
        And o código do produto <produto> deve estar presente no pedido impresso

        Examples:
            | produto | orcamentoFilial |
            | 34801   | 67844/5000      |
            | 53214   | 148873/5        |
            | 42173   | 99331/2000      |
            | 34822   | 337903/1000     |

    @changeBudget @changeProduct
    Scenario Outline: Alterar pedido trocando produtos
        Given que eu tenho um pedido criado com o produto <produtoAtual>
        When eu troco o produto <produtoAtual> pelo <produtoNovo>
        Then o pedido deve ser alterado com sucesso
        And o código do produto <produtoNovo> deve estar presente no pedido impresso

        Examples:
            | produtoAtual | produtoNovo |
            | 34801         | 53070        |

    @rejectProduct @updateBudget
    Scenario Outline: Rejeitar produtos do pedido
        Given que eu tenho um pedido criado com os seguintes produtos:
            | produto |
            | 53070   |
            | 46374   |
        When eu rejeito a fórmula do produto <produtoRemovido>
        Then o pedido deve ser atualizado e apresentar os produtos <produtoRemovido> riscados
        And o pedido deve ainda conter todos os produtos produtos
        And todos os produtos restantes devem apresentar o código no pedido impresso

        Examples:
            | produtoRemovido |
            | 53070            |
            | 46374            |

    @confirmBudget @printing
    Scenario: Confirmar e imprimir o pedido
        Given que eu tenho um pedido criado
        When eu confirmo o pedido
        Then o pedido deve ser confirmado com sucesso
        And o código dos produtos deve estar presente no pedido impresso
        And o setor caixa deve visualizar o código do produto no pedido impresso

    @editConfirmed @reconfirm
    Scenario Outline: Editar e reconfirmar o pedido já confirmado
        Given que eu tenho um pedido confirmado
        When eu edito o pedido e reconfirmo
        Then o pedido deve apresentar o código dos produtos

    @reopenBudget @reconfirm
    Scenario Outline: Reabrir e reconfirmar pedido já confirmado com alterações
        Given que eu tenho um pedido confirmado com o produto <produtoAtual>
        When eu reabro o pedido
        Then o pedido impresso deve apresentar o código do produto atualizado