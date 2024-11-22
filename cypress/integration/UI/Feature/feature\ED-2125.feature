Feature: Black Friday 2024
    Como administrador do sistema
    Eu quero garantir que as condições da campanha sejam aplicadas corretamente
    Para assegurar a distribuição dos brindes e o controle de estoque

    Background: Contexto da campanha
        Given a campanha "Black Friday 2024" está ativa de "26/11/2024" a "02/12/2024"
        And os brindes disponíveis são:
            | brinde        | estoque |
            | Quantum       | 250     |
            | Bolsa de Juta | 300     |
            | Garrafa       | 150     |
        And as filiais válidas são todas as filiais exceto 2000, 1010, 13, 1313 e 2013

    @filial
    Scenario Outline: Pedido em filial inválida
        Given o cliente realiza uma compra no valor de "<valor_compra>" na filial "<filial>" com produtos da categoria "<categoria>"
        When o pedido é confirmado
        Then o pedido não deve apresentar nenhuma mensagem de brinde

        Examples:
            | valor_compra | filial | categoria           |
            | R$424,00     | 2000   | Essential Nutrition |
            | R$990,00     | 13     | Essential Nutrition |
            | R$990,00     | 1313   | Essential Nutrition |
            | R$990,00     | 2013   | Essential Nutrition |
            | R$990,00     | 1010   | Essential Nutrition |

    #100480/2000
    #47923/13
    #14859/1010

    @filial
    Scenario: Pedido em filial válida
        Given o cliente realiza uma compra no valor de "R$424,00" na filial "5" com produtos da categoria "Noorskin"
        When o pedido é processado
        Then o pedido deve apresentar a mensagem:
            """
            BLACKFRIDAY 2024 ENVIAR BRINDE - Quantum
            """
        And o estoque de Quantum deve ser reduzido em "1"
    #167001/5

    @manipulacao @acrescimo
    Scenario: Aplicar acréscimo ao pedido aumentando o valor para outro brinde
        Given o cliente realiza uma compra no valor de "R$990,00" na filial "5" com produtos da categoria "Essential Nutrition"
        And o pedido inicialmente apresenta a mensagem:
            """
            BLACKFRIDAY 2024 ENVIAR BRINDE - Quantum
            """
        When o usuário aplica um acréscimo de "200"
        And o pedido é atualizado
        Then o pedido deve apresentar a mensagem:
            """
            BLACKFRIDAY 2024 ENVIAR BRINDE - Quantum - Bolsa de Juta
            """
        And o estoque deve ser atualizado:
            | brinde        | ajuste |
            | Quantum       | -1     |
            | Bolsa de Juta | -1     |

    #167027/5
    #167077/5
    #167126/5

    @manipulacao @desconto
    Scenario: Aplicar desconto ao pedido reduzindo o valor e alterando o brinde
        Given o cliente realiza uma compra no valor de "R$1030,00" na filial "5" com produtos da categoria "Essential Nutrition"
        And o pedido inicialmente apresenta a mensagem:
            """
            BLACKFRIDAY 2024 ENVIAR BRINDE - Quantum - Bolsa de Juta
            """
        When o usuário aplica um desconto de "200"
        And o pedido é atualizado
        Then o pedido deve apresentar a mensagem:
            """
            BLACKFRIDAY 2024 ENVIAR BRINDE - Quantum
            """
        And o estoque deve ser atualizado:
            | brinde        | ajuste |
            | Bolsa de Juta | +1     |

    #167046/5

    @manipulacao @remocao
    Scenario: Remover itens do pedido reduzindo o valor e alterando o brinde
        Given o cliente realiza uma compra no valor de "2110" na filial "1000" com produtos da categoria "Noorskin"
        And o pedido inicialmente apresenta a mensagem:
            """
            BLACKFRIDAY 2024 ENVIAR BRINDE - Quantum - Bolsa de Juta - Garrafa
            """
        When o usuário remove itens do pedido reduzindo o valor para "1800"
        And o pedido é atualizado
        Then o pedido deve apresentar a mensagem:
            """
            BLACKFRIDAY 2024 ENVIAR BRINDE - Quantum - Bolsa de Juta
            """
        And o estoque deve ser atualizado:
            | brinde  | ajuste |
            | Garrafa | +1     |

    #342180/1000

    @manipulacao @adicao
    Scenario: Adicionar itens ao pedido aumentando o valor para outro brinde
        Given o cliente realiza uma compra no valor de "1550" na filial "5" com produtos da categoria "Noorskin"
        And o pedido inicialmente apresenta a mensagem:
            """
            BLACKFRIDAY 2024 ENVIAR BRINDE - Quantum - Bolsa de Juta
            """
        When o usuário adiciona itens ao pedido aumentando o valor para "2500"
        And o pedido é atualizado
        Then o pedido deve apresentar a mensagem:
            """
            BLACKFRIDAY 2024 ENVIAR BRINDE - Quantum - Bolsa de Juta - Garrafa
            """
        And o estoque deve ser atualizado:
            | brinde        | ajuste |
            | Quantum       | -1     |
            | Bolsa de Juta | -1     |
            | Garrafa       | -1     |

#167756 / 5