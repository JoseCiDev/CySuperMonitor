Feature: Campanha SEMANA DO NUTRICIONISTA 2024

    @campanha @nutricionista @promocao
    Background:
        Given que o cliente é identificado como nutricionista
        And o cliente possui um orçamento com produtos aplicáveis à campanha
        And a data atual está entre 26/08/2024 e 02/09/2024


    @validacao @clienteElegivel @produtosValidos
    Scenario: Verificar se o cliente é elegível e possui produtos válidos
        Given que o cliente possui produtos de varejo ou beleza no orçamento
        And o cliente não possui medicamentos manipulados ou injetáveis no orçamento
        When o orçamento é processado
        Then o cliente é considerado elegível para a campanha
        And o orçamento é avaliado para a adição de brinde
    #|LUIS FERNANDO COSTA JORGE    |9    |SC   |4.023 |
    #|PETRA LUYSE FREITAS DA SILVA |9    |RS   |16.686|
    #691/5000  - R$576,00
    #692/5000 - R$1168,00
    #693/5000 - R$2472,00

    @brinde @validacaoBrinde @faixaValores
    Scenario Outline: Verificar o brinde conforme a faixa de valores do orçamento
        Given que o valor total do orçamento é "<valororçamento>"
        When o orçamento é processado
        Then o cliente deve receber o brinde "<brinde>"
        And um alerta é criado na amarelinha impressa para a Expedição
        #|LUIS FERNANDO COSTA JORGE    |9    |SC   |4.023 |
        #|PETRA LUYSE FREITAS DA SILVA |9    |RS   |16.686|
        #|JULIANA MARQUES SANTANA      |9    |DF   |19.521|
        #691/5000  - R$576,00
        #692/5000 - R$1168,00
        #693/5000 - R$2472,00
        #694/5000 - R$63,00

        Examples:
            | valororçamento | brinde                     |
            | 350            | Bebida Essential Nutrition |
            | 450            | Bolsa colorida             |
            | 1500           | Bolsa Térmica              |
            | 2100           | Bolsa Térmica              |
            | 100            | Nenhum                     | # Abaixo do limite da Faixa 1 |


    @alteracaoorçamento @aumentoValor @brindeMudanca
    Scenario: Aumentar valor do orçamento e mudar o brinde
        Given que o cliente possui um orçamento com valor de R$350,00
        And o cliente tem direito ao brinde "Bebida Essential Nutrition"
        When o usuário do sistema adiciona produtos ao orçamento
        And o valor total do orçamento aumenta para R$450,00
        Then o brinde muda para "Bolsa colorida"
        And o alerta no orçamento é atualizado para a Expedição
    #|JULIANA MARQUES SANTANA      |9    |DF   |19.521|
    #694/5000 - R$450,00

    @alteracaoorçamento @diminuicaoValor @brindeMudanca
    Scenario: Diminuir valor do orçamento e mudar ou remover o brinde
        Given que o cliente possui um orçamento com valor de R$1500,00
        And o cliente tem direito ao brinde "Bolsa Térmica"
        When o usuário do sistema remove produtos do orçamento
        And o valor total do orçamento diminui para R$415,00
        Then o brinde muda para "Bebida Essential Nutrition"
        And o alerta no orçamento é atualizado para a Expedição
    #|BIANCA BARROS DE FIGUEIREDO  |9    |MG   |14.383|
    #695/5000

    @alteracaoorçamento @descontoAcrescimo @brindeMudanca
    Scenario Outline: Aplicar desconto ou acréscimo e alterar o brinde
        Given que o cliente possui um orçamento com valor de "<valorInicial>"
        And o cliente tem direito ao brinde "<brindeInicial>"
        When o usuário do sistema aplica um "<tipoAlteracao>" de "<valorAlteracao>"
        Then o valor total do orçamento é "<valorFinal>"
        And o brinde muda para "<brindeFinal>"
        And o alerta no orçamento é atualizado para a Expedição
        #|DANIELLA COUTO PINTO DA SILVA|9    |TO   |3.824 |
        #696/5000 - R$1515,00
        Examples:
            | valorInicial | brindeInicial              | tipoAlteracao | valorAlteracao | valorFinal | brindeFinal                |
            | 2205         | Bolsa Termica              | desconto      | 805            | 1400       | Bolsa Colorida             |
            | 1400         | Bolsa Colorida             | desconto      | 600            | 800        | Bebida Essential Nutrition |
            | 800          | Bebida Essential Nutrition | desconto      | 500            | 300        | Sem brinde                 |
            | 300          | Sem brinde                 | acrescimo     | 500            | 800        | Bebida Essential Nutrition |
            | 800          | Bebida Essential Nutrition | acrescimo     | 500            | 1300       | Bolsa Colorida             |
            | 1300         | Bolsa Colorida             | acrescimo     | 800            | 2100       | Bolsa Termica              |

    @alteracaoorçamento @exclusaoProduto @brindeRemocao
    Scenario: Remover produto válido e excluir o cliente da campanha
        Given que o cliente possui um orçamento com produtos de varejo
        And o cliente é elegível para a campanha
        And o cliente tem direito ao brinde "Bolsa colorida"
        When o usuário do sistema remove todos os produtos de varejo
        And o orçamento contém apenas medicamentos manipulados ou injetáveis
        Then o cliente não é mais elegível para a campanha
        And o brinde é removido do orçamento
        And o alerta no orçamento é removido
    #696/5000 - R$1515,00

    @validacao @clienteNaoElegivel
    Scenario: Cliente não é nutricionista e não participa da campanha
        Given que o cliente não é identificado como nutricionista
        When o orçamento é processado
        Then o cliente não é elegível para a campanha
        And nenhum brinde é adicionado ao orçamento


    @validacao @periodoInvalido
    Scenario: orçamento realizado fora do período da campanha
        Given que o orçamento é criado fora do período da campanha
        When o orçamento é processado
        Then o orçamento não é elegível para a campanha
        And nenhum brinde é adicionado ao orçamento