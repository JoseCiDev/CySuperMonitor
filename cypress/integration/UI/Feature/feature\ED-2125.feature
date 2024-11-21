    Background: Contexto da campanha
        Given a campanha "Black Friday 2024" está ativa de "26/11/2024" a "02/12/2024"
        And os brindes disponíveis são:
            | brinde        | estoque |
            | Quantum       | 250     |
            | Bolsa de Juta | 300     |
            | Garrafa       | 150     |
        And as filiais válidas são todas as filiais exceto 2000, 1010, 13, 1313 e 2013

    # @filial
    # Scenario: Pedido em filial inválida
    #     Given o cliente realiza uma compra no valor de "R$424,00" na filial "2000" com produtos da categoria "Essential Nutrition"
    #     When o pedido é confirmado
    #     Then o pedido não deve apresentar nenhuma mensagem de brinde
    # #100480/2000

    # @filial
    # Scenario: Pedido em filial válida
    #     Given o cliente realiza uma compra no valor de "R$424,00" na filial "5" com produtos da categoria "Noorskin"
    #     When o pedido é processado
    #     Then o pedido deve apresentar a mensagem:
    #         """
    #         BLACKFRIDAY 2024 ENVIAR BRINDE - Quantum
    #         """
    #     And o estoque de Quantum deve ser reduzido em "1"
    # #167001/5

    @manipulacao @acrescimo
    Scenario: Aplicar acréscimo ao pedido aumentando o valor para outro brinde
        Given o cliente realiza uma compra no valor de "R$990,00" na filial "5" com produtos da categoria "Essential Nutrition"
        And o pedido inicialmente apresenta a mensagem:
            """
            BLACKFRIDAY 2024 ENVIAR BRINDE - Quantum
            """
        When o usuário aplica um acréscimo de "100"
        And o pedido é atualizado
        Then o pedido deve apresentar a mensagem:
            """
            Cliente tem direito aos brindes: Quantum + Bolsa de Juta
            """
        And o estoque deve ser atualizado:
            | brinde        | ajuste |
            | Quantum       | -1     |
            | Bolsa de Juta | -1     |

    #167027/5
    #167077/5
    #167126/5
    # @manipulacao @desconto
    # Scenario: Aplicar desconto ao pedido reduzindo o valor e alterando o brinde
    #     Given o cliente realiza uma compra no valor de "R$1030,00" na filial "5" com produtos da categoria "Essential Nutrition"
    #     And o pedido inicialmente apresenta a mensagem:
    #         """
    #         Cliente tem direito aos brindes: Quantum + Bolsa de Juta
    #         """
    #     When o usuário aplica um desconto de "200"
    #     And o pedido é atualizado
    #     Then o pedido deve apresentar a mensagem:
    #         """
    #         BLACKFRIDAY 2024 ENVIAR BRINDE - Quantum
    #         """
    #     And o estoque deve ser atualizado:
    #         | brinde        | ajuste |
    #         | Bolsa de Juta | +1    |

    # #167046/5

    @manipulacao @remocao
    Scenario: Remover itens do pedido reduzindo o valor e alterando o brinde
        Given o cliente realiza uma compra no valor de "2100" na filial "1000" com produtos da categoria "Noorskin"
        And o pedido inicialmente apresenta a mensagem:
            """
            Cliente tem direito aos brindes: Quantum + Bolsa de Juta + Garrafa
            """
        When o usuário remove itens do pedido reduzindo o valor para "1800"
        And o pedido é atualizado
        Then o pedido deve apresentar a mensagem:
            """
            Cliente tem direito aos brindes: Quantum + Bolsa de Juta
            """
        And o estoque deve ser atualizado:
            | brinde  | ajuste |
            | Garrafa | +1     |

    @manipulacao @adicao
    Scenario: Adicionar itens ao pedido aumentando o valor para outro brinde
        Given o cliente realiza uma compra no valor de "1500" na filial "5" com produtos da categoria "Noorskin"
        And o pedido inicialmente apresenta a mensagem:
            """
            Cliente tem direito aos brindes: Quantum + Bolsa de Juta
            """
        When o usuário adiciona itens ao pedido aumentando o valor para "2500"
        And o pedido é atualizado
        Then o pedido deve apresentar a mensagem:
            """
            Cliente tem direito aos brindes: Quantum + Bolsa de Juta + Garrafa
            """
        And o estoque deve ser atualizado:
            | brinde        | ajuste |
            | Quantum       | -1     |
            | Bolsa de Juta | -1     |
            | Garrafa       | -1     |


#68596/5000
