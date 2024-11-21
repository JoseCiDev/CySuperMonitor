Feature: Alerta de Brinde para Expedição - Campanha Black Friday 2024

    Background: Contexto da campanha
        Given a campanha "Black Friday 2024" está ativa de "26/11/2024" a "02/12/2024"
        And os brindes disponíveis são:
            | brinde        | estoque |
            | Quantum       | 250     |
            | Bolsa de Juta | 300     |
            | Garrafa       | 150     |
        And as filiais válidas são todas exceto 2000, 1010, 13, 1313 e 2013

    @brinde @quantum
    Scenario Outline: Cliente ganha Quantum por compras a partir de R$400,00
        Given o cliente realiza uma compra no valor de "<valor>" na filial "<filial>"
        And os produtos comprados incluem "<categoria>"
        When o pedido é processado
        Then deve ser gerado um alerta no pedido impresso com a mensagem:
            """
            Cliente tem direito ao brinde: Quantum
            """
        And o estoque de Quantum deve ser reduzido em "<quantidade_brinde>"

        Examples:
            | valor | filial | categoria           | quantidade_brinde |
            | 400   | 5000   | Essential Nutrition | 1                 |
            | 450   | 6000   | Noorskin            | 1                 |

    @brinde @quantum @bolsa
    Scenario Outline: Cliente ganha Quantum e Bolsa de Juta por compras a partir de R$1.000,00
        Given o cliente realiza uma compra no valor de "<valor>" na filial "<filial>"
        And os produtos comprados incluem "<categoria>"
        When o pedido é processado
        Then deve ser gerado um alerta no pedido impresso com a mensagem:
            """
            Cliente tem direito aos brindes: Quantum + Bolsa de Juta
            """
        And o estoque de Quantum deve ser reduzido em "<quantidade_quantum>"
        And o estoque de Bolsa de Juta deve ser reduzido em "<quantidade_bolsa>"

        Examples:
            | valor | filial | categoria           | quantidade_quantum | quantidade_bolsa |
            | 1000  | 5000   | Essential Nutrition | 1                  | 1                |
            | 1200  | 6000   | Noorskin            | 1                  | 1                |

    @brinde @quantum @bolsa @garrafa
    Scenario Outline: Cliente ganha todos os brindes por compras a partir de R$2.000,00
        Given o cliente realiza uma compra no valor de "<valor>" na filial "<filial>"
        And os produtos comprados incluem "<categoria>"
        When o pedido é processado
        Then deve ser gerado um alerta no pedido impresso com a mensagem:
            """
            Cliente tem direito aos brindes: Quantum + Bolsa de Juta + Garrafa
            """
        And o estoque de Quantum deve ser reduzido em "<quantidade_quantum>"
        And o estoque de Bolsa de Juta deve ser reduzido em "<quantidade_bolsa>"
        And o estoque de Garrafa deve ser reduzido em "<quantidade_garrafa>"

        Examples:
            | valor | filial | categoria           | quantidade_quantum | quantidade_bolsa | quantidade_garrafa |
            | 2000  | 5000   | Essential Nutrition | 1                  | 1                | 1                  |
            | 2500  | 6000   | Noorskin            | 1                  | 1                | 1                  |

    @estoque
    Scenario: Estoque insuficiente para Quantum
        Given o estoque do brinde Quantum é 0
        When o cliente realiza uma compra no valor de "500" na filial "5000" com produtos da categoria "Essential Nutrition"
        Then deve ser gerado um alerta no pedido impresso com a mensagem:
            """
            Estoque insuficiente para o brinde: Quantum
            """

    @estoque
    Scenario: Estoque insuficiente para Bolsa de Juta
        Given o estoque do brinde Bolsa de Juta é 0
        When o cliente realiza uma compra no valor de "1500" na filial "5000" com produtos da categoria "Noorskin"
        Then deve ser gerado um alerta no pedido impresso com a mensagem:
            """
            Estoque insuficiente para o brinde: Bolsa de Juta
            """

    @filial
    Scenario: Pedido em filial inválida
        Given o cliente realiza uma compra no valor de "500" na filial "2000" com produtos da categoria "Essential Nutrition"
        When o pedido é processado
        Then não deve ser gerado nenhum alerta de brinde

    @data
    Scenario: Pedido fora do período da campanha
        Given o cliente realiza uma compra no valor de "500" na filial "5000" com produtos da categoria "Essential Nutrition"
        And a data atual é "03/12/2024"
        When o pedido é processado
        Then não deve ser gerado nenhum alerta de brinde
