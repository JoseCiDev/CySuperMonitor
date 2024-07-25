    @funcional
    Funcionalidade: Gerenciamento de opções de pagamento e frete na tela de atendimento em andamento

    # Background comum para todos os cenários
    Background:
            Dado que eu estou logado como um usuário atendente
            E eu estou na tela de atendimento em andamento

            # Esquema de Cenário para permitir pagamento pelo Selfcheckout
            @funcional
            @selfcheckout
            Esquema do Cenário: Gerenciar opção de pagamento pelo Selfcheckout
            Dado que a opção de permitir pagamento está <estado_pagamento>
            Quando eu <acao_pagamento> a opção de permitir pagamento
            Então o cliente <resultado_pagamento> conseguir realizar o pagamento pelo Selfcheckout

            Exemplos:
            | estado_pagamento | acao_pagamento | resultado_pagamento |
            | marcada          | desmarco       | não deve            |
            | desmarcada       | marco          | deve                |


            # Esquema de Cenário para gerenciar frete
            @funcional
            @frete
            Esquema do Cenário: Gerenciar frete no Selfcheckout
            Dado que a opção de frete está <estado_frete> e o valor do frete é <valor_frete>
            Quando eu <acao_frete> a opção de frete e preencho o valor do frete com <novo_valor_frete>
            Então o frete no Selfcheckout deve ser <frete_selfcheckout>
            E o total do orçamento deve incluir o valor do frete <frete_total>

            Exemplos:
            | estado_frete | valor_frete | acao_frete | novo_valor_frete | frete_selfcheckout | frete_total |
            | marcada      | 0           | desmarco   | 50               | 50                 | 50          |
            | desmarcada   | 50          | marco      | 0                | Grátis             | 0           |
            | marcada      | 0           | desmarco   | 0                | 0                  | 0           |
            | desmarcada   | 50          | marco      | 50               | 50                 | 50          |
            | marcada      | 0           | desmarco   | 100              | 100                | 100         |
            | desmarcada   | 100         | marco      | 0                | Grátis             | 0           |
            | marcada      | 0           | desmarco   |                  | 0                  | 0           |
            | desmarcada   | 50          | marco      |                  | 50                 | 50          |
