    #/home/jose/projetos/CySuperMonitor/cypress/integration/Feature/feature\ED-1914.feature

    Background:
    Dado que estou na página de selfcheckout
    E estou logado como cliente

    @funcional @desktop @mobile @selfcheckout @templateOrcamento @formaPagamentoSelecionada
    Scenario Outline: Possibilitar seleção da forma de pagamento novamente
        Dado que o checkbox "Permitir pagamento" está marcado
        E eu já cliquei no botão "Efetuar pagamento" anteriormente
        E fechei a tela de pagamento
        Quando eu clicar no botão "Efetuar pagamento" novamente
        Então devo ser direcionado para a página de seleção de forma de pagamento
        E as opções de forma de pagamento <paymentMethod> devem ser apresentadas ao cliente.

        Examples:
            | paymentMethod |
            | crédito       |
            | PIX           |


    @funcional @desktop @mobile @selfcheckout @templateOrcamento @voltandoPagina
    Scenario Outline: Direcionar para o mesmo link de pagamento ao clicar em "Efetuar pagamento" novamente
        Dado que o checkbox "Permitir pagamento" está marcado
        E eu já cliquei no botão "Efetuar pagamento" anteriormente
        Quando eu clicar no botão "Efetuar pagamento" novamente
        E voltar a página anterior
        Então devo ser direcionado para o mesmo link de pagamento salvo anteriormente

        Examples:
            | paymentMethod |
            | crédito       |
            | PIX           |


            @funcional @desktop @mobile @selfcheckout @templateOrcamento @linkPagamento
            Esquema do Cenário: Direcionar para o mesmo link de pagamento ao clicar em "Efetuar pagamento" novamente
            Dado que o checkbox "Permitir pagamento" está marcado
            E eu já cliquei no botão "Efetuar pagamento" anteriormente
            Quando eu clicar no botão "Efetuar pagamento" novamente
            Então devo ser direcionado para o mesmo link de pagamento salvo anteriormente

            Exemplos:
            | clickPrevious | true |


    @funcional @desktop @mobile @selfcheckout @templateOrcamento @orcamento
    Scenario Outline: Gerar novo link de pagamento quando o valor do orçamento é alterado
        Dado que o checkbox "Permitir pagamento" está marcado
        E o valor do <campoAlterado> foi alterado no sistema
        Quando eu clicar no botão "Efetuar pagamento"
        Então um novo link de pagamento deve ser gerado

        Examples:
            | campoAlterado |
            | orçamento     |


    @funcional @desktop @mobile @selfcheckout @templateOrcamento  @frete
    Scenario Outline: Gerar novo link de pagamento quando o valor do frete é alterado
        Dado que o checkbox "Permitir pagamento" está marcado
        E o valor do <campoAlterado> foi alterado no sistema
        Quando eu clicar no botão "Efetuar pagamento"
        Então um novo link de pagamento não deve ser gerado
        And o valor total deve atualizar conforme o valor do frete

        Examples:
            | campoAlterado |
            | frete         |


        @funcional @desktop @mobile @selfcheckout @templateOrcamento @semAlteracoes
        Esquema do Cenário: Manter o mesmo link de pagamento quando o valor do orçamento ou frete não é alterado
        Dado que o checkbox "Permitir pagamento" está marcado
        E o valor do <campoAlterado> não foi alterado no sistema
        Quando realizo alterações no orçamento eu clicar no botão "Efetuar pagamento"
        Então devo ser direcionado para o mesmo link de pagamento salvo anteriormente

        Examples:
            | campoAlterado |
            | orçamento     |
            | frete         |


            @funcional @desktop @mobile @selfcheckout @templateOrcamento @pago
            Esquema do Cenário: Desabilitar botão "Efetuar pagamento" quando o status do pagamento é "PAGO"
            Dado que o status do pagamento no GPE é "PAGO"
            Então o botão "Efetuar pagamento" deve estar desabilitado

            Exemplos:
            | status_pagamento |
            | PAGO             |


            @funcional @desktop @mobile @selfcheckout @templateOrcamento @rejeitado
            Esquema do Cenário: Desabilitar botão "Efetuar pagamento" para orçamentos encerrados/rejeitados
            Dado que o orçamento foi <status>
            Então o botão "Efetuar pagamento" deve estar desabilitado

            Exemplos:
            | status    |
            | encerrado |
            | rejeitado |


            @funcional @desktop @mobile @selfcheckout @templateOrcamento @permitirPagamento
            Esquema do Cenário: Não apresentar botão "Efetuar pagamento" quando o checkbox "Permitir pagamento" está desmarcado
            Dado que o checkbox "Permitir pagamento" está desmarcado
            Então o botão "Efetuar pagamento" não deve ser apresentado

            Exemplos:
            | checkbox_permitir_pagamento |
            | false                       |


            @funcional @desktop @mobile @selfcheckout @templateOrcamento @permitirPagamento
            Esquema do Cenário: Apresentar botão "Efetuar pagamento" quando o checkbox "Permitir pagamento" está marcado
            Dado que o checkbox "Permitir pagamento" está marcado
            Então o botão "Efetuar pagamento" deve ser apresentado

            Exemplos:
            | checkbox_permitir_pagamento |
            | true                        |


    Scenario Outline: Apresentar botão "Efetuar pagamento" quando o status do orçamento é "CONFIRMADO"
            Dado que o status do orçamento é <status>
            Quando eu visualizar a tela de pagamento
            Então o botão "Efetuar pagamento" deve ser apresentado
            E deve possibilitar o cliente pagar após a confirmação

            Exemplos:
            | status     |
            | CONFIRMADO |
