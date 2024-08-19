Feature: Campanha SEMANA DO NUTRICIONISTA 2024

    @campanha @nutricionista @promocao @selfcheckout
    Background:
        Given que o cliente acessa o selfcheckout
        And o cliente é identificado como nutricionista
        And o cliente possui um pedido com produtos aplicáveis à campanha
        And a data atual está entre 26/08/2024 e 02/09/2024


    @validacao @clienteElegivel @produtosValidos
    Scenario: Verificar se o cliente é elegível e possui produtos válidos
        Given que o cliente possui produtos de varejo ou beleza no pedido
        And o cliente não possui medicamentos manipulados ou injetáveis no pedido
        When o cliente revisa o pedido
        Then o cliente é considerado elegível para a campanha
        And o pedido é avaliado para a adição de brinde


    @brinde @validacaoBrinde @faixaValores
    Scenario Outline: Verificar o brinde conforme a faixa de valores do pedido
        Given que o valor total do pedido é "<valor_pedido>"
        When o cliente finaliza o pedido
        Then o cliente deve receber o brinde "<brinde>"
        And um alerta é criado no pedido para a Expedição

        Examples:
            | valor_pedido | brinde                     |
            | 350          | Bebida Essential Nutrition |
            | 450          | Bolsa colorida             |
            | 1500         | Bolsa Térmica              |
            | 2100         | Bolsa Térmica              |
            | 100          | Nenhum                     |


    @alteracaoPedido @aumentoValor @brindeMudanca
    Scenario: Aumentar valor do pedido e mudar o brinde
        Given que o cliente possui um pedido com valor de 350
        And o cliente tem direito ao brinde "Bebida Essential Nutrition"
        When o usuário do sistema adiciona produtos ao pedido
        And o valor total do pedido aumenta para 450
        Then o brinde muda para "Bolsa colorida"
        And o alerta no pedido é atualizado para a Expedição


    @alteracaoPedido @diminuicaoValor @brindeMudanca
    Scenario: Diminuir valor do pedido e mudar ou remover o brinde
        Given que o cliente possui um pedido com valor de 1500
        And o cliente tem direito ao brinde "Bolsa Térmica"
        When o usuário do sistema remove produtos do pedido
        And o valor total do pedido diminui para 350
        Then o brinde muda para "Bebida Essential Nutrition"
        And o alerta no pedido é atualizado para a Expedição


    @alteracaoPedido @descontoAcrescimo @brindeMudanca
    Scenario Outline: Aplicar desconto ou acréscimo e alterar o brinde
        Given que o cliente possui um pedido com valor de "<valor_inicial>"
        And o cliente tem direito ao brinde "<brinde_inicial>"
        When o usuário do sistema aplica um "<tipo_alteracao>" de "<valor_alteracao>"
        Then o valor total do pedido é "<valor_final>"
        And o brinde muda para "<brinde_final>"
        And o alerta no pedido é atualizado para a Expedição

        Examples:
            | valor_inicial | brinde_inicial             | tipo_alteracao | valor_alteracao | valor_final | brinde_final               |
            | 1500          | Bolsa Térmica              | desconto       | 200             | 1300        | Bolsa Térmica              |
            | 450           | Bolsa colorida             | desconto       | 100             | 350         | Bebida Essential Nutrition |
            | 350           | Bebida Essential Nutrition | acrescimo      | 200             | 550         | Bolsa colorida             |


    @alteracaoPedido @exclusaoProduto @brindeRemocao
    Scenario: Remover produto válido e excluir o cliente da campanha
        Given que o cliente possui um pedido com produtos de varejo
        And o cliente é elegível para a campanha
        And o cliente tem direito ao brinde "Bolsa colorida"
        When o usuário do sistema remove todos os produtos de varejo
        And o pedido contém apenas medicamentos manipulados ou injetáveis
        Then o cliente não é mais elegível para a campanha
        And o brinde é removido do pedido
        And o alerta no pedido é removido


    @validacao @clienteNaoElegivel
    Scenario: Cliente não é nutricionista e não participa da campanha
        Given que o cliente não é identificado como nutricionista
        When o cliente acessa o selfcheckout
        Then o cliente não é elegível para a campanha
        And nenhum brinde é adicionado ao pedido


    @validacao @periodoInvalido
    Scenario: Pedido realizado fora do período da campanha
        Given que o cliente acessa o selfcheckout fora do período da campanha
        When o cliente revisa o pedido
        Then o pedido não é elegível para a campanha
        And nenhum brinde é adicionado ao pedido


    @alerta @expedicao
    Scenario: Alerta de expedição deve acompanhar as alterações do pedido
        Given que o cliente possui um pedido com valor de 1500
        And o cliente tem direito ao brinde "Bolsa Térmica"
        When o pedido é finalizado
        Then um alerta é gerado para a Expedição sobre o envio do brinde
        When o pedido é alterado pelo usuário do sistema
        And o valor é reduzido para 350
        Then o alerta é atualizado para "Bebida Essential Nutrition"
        And a Expedição é notificada da mudança
