@functional @serviceInProgress
Feature: Gerenciamento de opções de pagamento e frete na tela de atendimento em andamento

    Background:
        Given que eu estou logado como um usuário atendente
        Then eu estou na tela de atendimento em andamento


    @functional @serviceInProgress @allowPayment
    Scenario Outline: Gerenciar opção de pagamento pelo Selfcheckout
        Given que a opção de permitir pagamento está <estadoPagamento>
        When eu <acaoPagamento> a opção de permitir pagamento
        Then o cliente <resultadoPagamento> conseguir realizar o pagamento pelo Selfcheckout

        Examples:
            | estadoPagamento | acaoPagamento | resultadoPagamento |
            | marcada         | desmarco      | não deve           |
            | desmarcada      | marco         | deve               |


    @functional @serviceInProgress @shipping
    Scenario Outline: Gerenciar frete no Selfcheckout
        Given que a opção de frete está <estadoFrete> e o valor do frete é <valorFrete>
        When eu <acaofrete> a opção de frete e preencho o valor do frete com <novoValorFrete>
        Then o frete no Selfcheckout deve ser <freteSelfcheckout>
        Then o total do orçamento deve incluir o valor do frete <freteTotal>

        Examples:
            | estadoFrete | valorFrete | acaofrete | novoValorFrete | freteSelfcheckout | freteTotal |
            | marcada     | 0          | desmarco  | 50             | 50                | 50         |
            | desmarcada  | 50         | marco     | 0              | Grátis            | 0          |
            | marcada     | 0          | desmarco  | 0              | 0                 | 0          |
            | desmarcada  | 50         | marco     | 50             | 50                | 50         |
            | marcada     | 0          | desmarco  | 100            | 100               | 100        |
            | desmarcada  | 100        | marco     | 0              | Grátis            | 0          |
            | marcada     | 0          | desmarco  |                | 0                 | 0          |
            | desmarcada  | 50         | marco     |                | 50                | 50         |
