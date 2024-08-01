    #/home/jose/projetos/CySuperMonitor/cypress/integration/Feature/feature\ED-1914.feature

    Background:
            Dado que estou na página de selfcheckout
            E estou logado como cliente

            @funcional @pagamento
            Esquema do Cenário: Salvar link e valor do orçamento ao clicar em "Efetuar pagamento"
            Dado que o checkbox "Permitir pagamento" está marcado
            Quando eu clicar no botão "Efetuar pagamento"
            Então o link de pagamento deve ser salvo
            E o valor do orçamento deve ser salvo

            Exemplos:
            | campo     | valor |
            | link      | true  |
            | orçamento | true  |


            @funcional @pagamento
            Esquema do Cenário: Direcionar para o mesmo link de pagamento ao clicar em "Efetuar pagamento" novamente
            Dado que o checkbox "Permitir pagamento" está marcado
            E eu já cliquei no botão "Efetuar pagamento" anteriormente
            Quando eu clicar no botão "Efetuar pagamento" novamente
            Então devo ser direcionado para o mesmo link de pagamento salvo anteriormente

            Exemplos:
            | clique_anterior | true |


            @funcional @pagamento
            Esquema do Cenário: Gerar novo link de pagamento quando o valor do orçamento é alterado
            Dado que o checkbox "Permitir pagamento" está marcado
            E o valor do orçamento foi alterado no Fcerta
            Quando eu clicar no botão "Efetuar pagamento"
            Então um novo link de pagamento deve ser gerado

            Exemplos:
            | orçamento_alterado | true |


            @funcional @pagamento
            Esquema do Cenário: Manter o mesmo link de pagamento quando o valor do orçamento não é alterado
            Dado que o checkbox "Permitir pagamento" está marcado
            E o valor do orçamento não foi alterado no Fcerta
            Quando realizo alterações no orçamento eu clicar no botão "Efetuar pagamento"
            Então devo ser direcionado para o mesmo link de pagamento salvo anteriormente

            Exemplos:
            | orçamento_alterado | false |


            @funcional @pagamento
            Esquema do Cenário: Desabilitar botão "Efetuar pagamento" quando o status do pagamento é "PAGO"
            Dado que o status do pagamento no GPE é "PAGO"
            Então o botão "Efetuar pagamento" deve estar desabilitado

            Exemplos:
            | status_pagamento |
            | PAGO             |


            @funcional @pagamento
            Esquema do Cenário: Desabilitar botão "Efetuar pagamento" para orçamentos encerrados/rejeitados
            Dado que o orçamento foi <status>
            Então o botão "Efetuar pagamento" deve estar desabilitado

            Exemplos:
            | status    |
            | encerrado |
            | rejeitado |


            @funcional @pagamento
            Esquema do Cenário: Não apresentar botão "Efetuar pagamento" quando o checkbox "Permitir pagamento" está desmarcado
            Dado que o checkbox "Permitir pagamento" está desmarcado
            Então o botão "Efetuar pagamento" não deve ser apresentado

            Exemplos:
            | checkbox_permitir_pagamento |
            | false                       |


            @regressivo @pagamento
            Esquema do Cenário: Apresentar botão "Efetuar pagamento" quando o checkbox "Permitir pagamento" está marcado
            Dado que o checkbox "Permitir pagamento" está marcado
            Então o botão "Efetuar pagamento" deve ser apresentado

            Exemplos:
            | checkbox_permitir_pagamento |
            | true                        |