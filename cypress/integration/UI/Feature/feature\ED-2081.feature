Feature: Pedido com Código do Produto na Confirmação
    @pedido @produto @faturamento @fcerta
    Como um usuário do sistema
    Quero adicionar o código do produto junto à descrição no pedido impresso
    Para facilitar o processo de faturamento do pedido sem acessar o Fcerta

    Background:
        Given que estou logado no sistema de pedidos
        And eu acesso a tela de criação de pedidos

    @criar_pedido @sucesso
    Scenario Outline: Criar pedido com produtos das filiais permitidas
        Given que eu crio um pedido com os seguintes produtos:
            | produto   | filial   |
            | <produto> | <filial> |
        When eu confirmo o pedido
        Then o pedido deve ser criado com sucesso
        And o código do produto <produto> deve estar presente no pedido impresso

        Examples:
            | produto   | filial |
            | Produto A | 1000   |
            | Produto B | 2000   |
            | Produto C | 5      |
            | Produto D | 1020   |
            | Produto E | 1010   |

    @alterar_pedido @troca_produto
    Scenario Outline: Alterar pedido trocando produtos
        Given que eu tenho um pedido criado com o produto <produto_atual>
        When eu troco o produto <produto_atual> pelo <produto_novo>
        Then o pedido deve ser alterado com sucesso
        And o código do produto <produto_novo> deve estar presente no pedido impresso

        Examples:
            | produto_atual | produto_novo |
            | Produto A     | Produto F    |
            | Produto B     | Produto G    |

    @remover_produto @atualizacao
    Scenario Outline: Remover produtos do pedido
        Given que eu tenho um pedido criado com os seguintes produtos:
            | produto   |
            | Produto A |
            | Produto B |
        When eu removo o produto <produto_removido>
        Then o pedido deve ser atualizado sem o produto <produto_removido>
        And o pedido deve ainda conter os produtos restantes

        Examples:
            | produto_removido |
            | Produto A        |
            | Produto B        |

    @confirmar_pedido @impressao
    Scenario: Confirmar e imprimir o pedido
        Given que eu tenho um pedido criado
        When eu confirmo o pedido
        Then o pedido deve ser confirmado com sucesso
        And o código dos produtos deve estar presente no pedido impresso
        And o setor caixa deve visualizar o código do produto no pedido impresso

    @editar_confirmado @reconfirmar
    Scenario Outline: Editar e reconfirmar o pedido já confirmado
        Given que eu tenho um pedido confirmado
        When eu edito o pedido e reconfirmo
        Then o pedido deve apresentar o código dos produtos

    @reabrir_pedido @reconfirmar
    Scenario Outline: Reabrir e reconfirmar pedido já confirmado com alterações
        Given que eu tenho um pedido confirmado com o produto <produto_atual>
        When eu reabro o pedido
        Then o pedido impresso deve apresentar o código do produto atualizado