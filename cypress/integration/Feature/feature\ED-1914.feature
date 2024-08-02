#/home/jose/projetos/CySuperMonitor/cypress/integration/Feature/feature\ED-1914.feature
@payment
Feature: Gerenciamento de opções de pagamento em orçamentos

    Background:
        Given que estou na página de selfcheckout
        And estou logado como cliente

    @desktop @selfcheckout @selectPaymentMethod
    Scenario Outline: Possibilitar seleção da forma de pagamento novamente
        Given que o checkbox "Permitir pagamento" está marcado
        And eu já cliquei no botão "Efetuar pagamento" anteriormente
        And fechei a tela de pagamento
        When eu clicar no botão "Efetuar pagamento" novamente
        Then devo ser direcionado para a página de seleção de forma de pagamento
        And as opções de forma de pagamento <paymentMethod> devem ser apresentadas ao cliente.

        Examples:
            | formaDePagamento |
            | crédito          |
            | PIX              |

    @mobile @templateOrcamento @returningPage
    Scenario Outline: Direcionar para o mesmo link de pagamento ao clicar em "Efetuar pagamento" novamente
        Given que o checkbox "Permitir pagamento" está marcado
        And eu já cliquei no botão "Efetuar pagamento" anteriormente
        When eu clicar no botão "Efetuar pagamento" novamente
        And voltar a página anterior
        Then devo ser direcionado para o mesmo link de pagamento salvo anteriormente

        Examples:
            | formaDePagamento |
            | crédito          |
            | PIX              |

        @desktop  @selfcheckout  @samePaymentLink
        Esquema do Cenário: Direcionar para o mesmo link de pagamento ao clicar em "Efetuar pagamento" novamente
        Given que o checkbox "Permitir pagamento" está marcado
        And eu já cliquei no botão "Efetuar pagamento" anteriormente
        When eu clicar no botão "Efetuar pagamento" novamente
        Then devo ser direcionado para o mesmo link de pagamento salvo anteriormente

            Exemplos:
            | cliqueAnterior | true |

    @mobile @templateOrcamento @newPaymentLink
    Scenario Outline: Gerar novo link de pagamento quando o valor do orçamento é alterado
        Given que o checkbox "Permitir pagamento" está marcado
        And o valor do <campoAlterado> foi alterado no sistema
        When eu clicar no botão "Efetuar pagamento"
        Then um novo link de pagamento deve ser gerado

        Examples:
            | campoAlterado |
            | orçamento     |

    @desktop @selfcheckout @shipping
    Scenario Outline: Gerar novo link de pagamento quando o valor do frete é alterado
        Given que o checkbox "Permitir pagamento" está marcado
        And o valor do <campoAlterado> foi alterado no sistema
        When eu clicar no botão "Efetuar pagamento"
        Then um novo link de pagamento não deve ser gerado
        And o valor total deve atualizar conforme o valor do frete

        Examples:
            | campoAlterado |
            | frete         |

        @mobile @templateOrcamento @withoutChanges
        Esquema do Cenário: Manter o mesmo link de pagamento quando o valor do orçamento ou frete não é alterado
        Given que o checkbox "Permitir pagamento" está marcado
        And o valor do <campoAlterado> não foi alterado no sistema
        When realizo alterações no orçamento eu clicar no botão "Efetuar pagamento"
        Then devo ser direcionado para o mesmo link de pagamento salvo anteriormente

        Examples:
            | campoAlterado |
            | orçamento     |
            | frete         |

        @desktop @selfcheckout @paymentStatusPaid
        Esquema do Cenário: Desabilitar botão "Efetuar pagamento" quando o status do pagamento é "PAGO"
        Given que o status do pagamento no GPE é "PAGO"
        Then o botão "Efetuar pagamento" deve estar desabilitado

            Exemplos:
            | statusPagamento |
            | PAGO            |

        @mobile @templateOrcamento @budgetRejected
        Esquema do Cenário: Desabilitar botão "Efetuar pagamento" para orçamentos encerrados/rejeitados
        Given que o orçamento foi <status>
        Then o botão "Efetuar pagamento" deve estar desabilitado

            Exemplos:
            | status    |
            | encerrado |
            | rejeitado |

        @desktop @selfcheckout @allowPayment
        Esquema do Cenário: Não apresentar botão "Efetuar pagamento" quando o checkbox "Permitir pagamento" está desmarcado
        Given que o checkbox "Permitir pagamento" está desmarcado
        Then o botão "Efetuar pagamento" não deve ser apresentado

            Exemplos:
            | checkboxPermitirPagamento |
            | false                     |

        @mobile @templateOrcamento @allowPayment
        Esquema do Cenário: Apresentar botão "Efetuar pagamento" quando o checkbox "Permitir pagamento" está marcado
        Given que o checkbox "Permitir pagamento" está marcado
        Then o botão "Efetuar pagamento" deve ser apresentado

            Exemplos:
            | checkboxPermitirPagamento |
            | true                      |

    @desktop @selfcheckout @budgetConfirmed
    Scenario Outline: Apresentar botão "Efetuar pagamento" quando o status do orçamento é "CONFIRMADO"
        Given que o status do orçamento é <status>
        When eu visualizar a tela de pagamento
        Then o botão "Efetuar pagamento" deve ser apresentado
        And deve possibilitar o cliente pagar após a confirmação

            Exemplos:
            | status     |
            | CONFIRMADO |
