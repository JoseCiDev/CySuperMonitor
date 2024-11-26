Feature: Validação do campo de e-mail no Self-Checkout

    Background:
        Given o cliente está na tela de pagamento do self-checkout

    @email-validation @positive
    Scenario Outline: Validação de e-mails válidos
        When o cliente insere "<email>" no campo de e-mail
        And o cliente finaliza o pagamento
        Then o sistema deve aceitar o e-mail "<email>"
        And o e-mail "<email>" deve ser exibido corretamente na tela de atendimento

        Examples:
            | email                        |
            | roberta@aldeiacom.com.br     |
            | mila@gmail.com               |
            | JAQUEZARPELON@GMAIL.COM      |
            | augusto.garra@bol.com.br     |
            | contato@uyarapinheiro.com.br |

    @email-validation @negative
    Scenario Outline: Validação de e-mails inválidos
        When o cliente insere "<email>" no campo de e-mail
        And o cliente tenta finalizar o pagamento
        Then o sistema deve exibir uma mensagem de erro "Ops... Houve algum problema no pagamento. Dados incorretos, por favor tentar novamente!"
        And o pagamento não deve ser processado

        Examples:
            | email               |
            | cliente@com         |
            | @example.com        |
            | cliente@.com        |
            | cliente@domain..com |
            | cliente@domain,com  |
            | cliente@            |
            | cliente@domain      |
            | cliente@domain.c    |

    @email-validation @edge-cases
    Scenario Outline: Validação de casos extremos de e-mails
        When o cliente insere "<email>" no campo de e-mail
        And o cliente tenta finalizar o pagamento
        Then o sistema deve aceitar o e-mail "<email>"
        And o e-mail "<email>" deve ser exibido corretamente na tela de atendimento

        Examples:
            | email                            |
            | a@b.co                           |
            | a@b.com                          |
            | 1234567890@domain.com            |
            | email@domain-with-hyphen.com     |
            | firstname-lastname@domain.com.br |

    @email-validation @special-characters
    Scenario Outline: Validação de caracteres especiais no campo de e-mail
        When o cliente insere "<email>" no campo de e-mail
        And o campo nao deve aceitar caracteres especiais
        And o cliente tenta finalizar o pagamento
        Then o sistema deve exibir uma mensagem de obrigatoriedade de preenchimento do e-mail
        And o pagamento não deve ser processado

        Examples:
            | email            |
            | Ð × @example.com |
            | Ø Þ @example.com |
            | ß å @example.com |
            | æ ðexample.com   |
            | ó@example.com    |

    @email-validation @empty-field
    Scenario: Campo de e-mail vazio
        When o cliente deixa o campo de e-mail em branco
        And o cliente tenta finalizar o pagamento
        Then o sistema deve exibir uma mensagem de obrigatoriedade de preenchimento do e-mail
        And o pagamento não deve ser processado

    @email-validation @whitespace
    Scenario Outline: Validação de espaços em branco no campo de e-mail
        When o cliente insere "<email>" no campo de e-mail
        And o cliente tenta finalizar o pagamento
        Then o sistema deve exibir uma mensagem de obrigatoriedade de preenchimento do e-mail
        And o pagamento não deve ser processado

        Examples:
            | email                |
            | DNLAREIS @ GMAIL.COM |
            | DNLAREIS@GMAIL . COM |

    @payment-retry
    Scenario: Repetição de pagamento após recusa
        Given o cliente insere "cliente@example.com" no campo de e-mail
        And o cliente finaliza o pagamento
        And o pagamento é recusado pelo sistema
        When o cliente clica em "tentar novamente"
        Then o campo de e-mail deve estar preenchido com "cliente@example.com"
        And o cliente finaliza o pagamento novamente
        And o sistema deve exibir o e-mail "cliente@example.com" na tela de atendimento somente se o pagamento for aprovado

    @email-validation @refused-payment
    Scenario: Exibição de e-mail em caso de pagamento recusado
        Given o cliente insere "cliente@example.com" no campo de e-mail
        And o cliente finaliza o pagamento
        When o pagamento é recusado pelo sistema
        Then o e-mail "cliente@example.com" não deve ser exibido na tela de atendimento

    @email-validation @budget-confirmation
    Scenario: Exibição de e-mail no atendimento encerrado
        Given o cliente insere "<email>" no campo de e-mail
        And o cliente finaliza o pagamento
        And a atendente confirma o pedido no sistema
        Then o e-mail "<email>" deve ser exibido corretamente na tela de atendimento encerrado

        Examples:
            | email                        |
            | roberta@aldeiacom.com.br     |
            | mila@gmail.com               |
            | JAQUEZARPELON@GMAIL.COM      |
            | augusto.garra@bol.com.br     |
            | contato@uyarapinheiro.com.br |