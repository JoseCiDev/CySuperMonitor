Feature: Testar pagamento de orçamentos com nova adquirente Adyen

    Background:
        Given que o cliente recebeu um link de pagamento de um orçamento
        And a forma de pagamento pode ser crédito

    @payment @creditCard
    Scenario Outline: Realizar pagamento com cartão de crédito
        Given que o cliente recebeu um link de pagamento de um orçamento
        And selecionou a forma de pagamento crédito
        And o cliente informa os dados pessoais: telefone "<Telefone>", email "<Email>"
        When o cliente clica para pagar
        Then o pagamento deve ser processado com sucesso
        And os dados pessoais devem ser apresentados no orçamento após o pagamento
        And o orçamento deve apresentar: status "<StatusPagamento>", data de criação do link, código externo, data de atualização do link, número do pagamento e valor "<ValorPagamento>"

        Examples:
            | Telefone    | Email                       | Documento   | Nome            |
            | 48991888641 | jose.djalma@essentia.com.br | 08239097510 | jose d f mendes |
            | 21992880477 | RIBEIRO.CALI@GMAIL.COM      | 31732065098 | LIVIA C R       |

    @payment @foreignClient
    Scenario Outline: Realizar pagamento com cartão de crédito como cliente estrangeiro
        Given que o cliente selecionou a forma de pagamento crédito
        And o cliente informou que é estrangeiro
        And o cliente selecionou o país "<Pais>" e informou o telefone "<Telefone>"
        And o cliente informa os dados pessoais: email "<Email>", nome "<Nome>"
        When o cliente clica para pagar
        Then o pagamento deve ser processado com sucesso
        And os dados pessoais devem ser apresentados no orçamento após o pagamento
        And o orçamento deve apresentar: status "<StatusPagamento>", data de criação do link, código externo, data de atualização do link, número do pagamento e valor "<ValorPagamento>"

        Examples:
            | Pais | Telefone      | Email                    | Nome                   |
            | EUA  | +13218000732  | ANA.COSSE@ME.COM         | ANA PAULA COSSE FREIRE |
            | EUA  | +971506593416 | BRANDONBAHCECI@gmail.com | BRANDON BAHCECI        |

    @pendingPayment @statusUpdate
    Scenario Outline: Orçamento com link de pagamento aguardando pagamento
        Given que o cliente recebeu o link de pagamento e ainda não realizou o pagamento
        When o orçamento está aguardando o pagamento
        Then o orçamento deve apresentar: status "<StatusPagamento>", data de criação do link, código externo, e valor "<ValorPagamento>"

        Examples:
            | StatusPagamento | ValorPagamento |
            | Aguardando      | 721,80         |

    @manualUpdate @systemUser
    Scenario Outline: Atualizar status de pagamento manualmente no orçamento
        Given que o sistema de orçamentos permite atualizar o status de pagamento
        And o pagamento já foi processado com sucesso anteriormente
        When o usuário do sistema atualiza o status do pagamento no orçamento
        Then o status do pagamento no orçamento deve ser atualizado para "<NovoStatus>"
        And a data de pagamento não deve ser alterada
        And o horário de "Atualizado em" não deve se alterar

        Examples:
            | NovoStatus |
            | Pago       |

    @paymentValidation @dataValidation
    Scenario Outline: Validar tipos de dados aceitos nos campos de pagamento
        Given que o cliente está na tela de pagamento selecionando "<FormaPagamento>"
        When o cliente tenta informar dados inválidos nos campos "<Campo>" com valor "<ValorInvalido>"
        Then o sistema deve exibir uma mensagem de erro para o campo "<Campo>"

        Examples:
            | FormaPagamento | Campo               | ValorInvalido |
            | Crédito        | Número do Cartão    | 12345         |
            | Crédito        | Data de Validade    | 00/00         |
            | Crédito        | Código de Segurança | 12            |
            | Crédito        | CPF/CNPJ            | 123456        |

    @systemUpdate @noDateChange
    Scenario: Garantir que a data de pagamento não altere ao atualizar status no sistema de pagamentos
        Given que o pagamento foi realizado com sucesso
        When o sistema de pagamentos atualiza o status do pagamento
        Then a data de pagamento não deve ser alterada
        And a data e hora de pagamento na modal de visualização dos detalhes do pagamento não deve ser alterada

    @payment @emailConfirmation
    Scenario: Enviar email de confirmação após pagamento bem-sucedido
        Given que o cliente selecionou a forma de pagamento "<FormaPagamento>"
        And o cliente preencheu todos os dados corretamente
        When o pagamento é processado com sucesso
        Then o cliente deve receber um email de confirmação do pagamento
        And o email deve conter o valor pago "<ValorPago>", a data do pagamento "<DataPagamento>", e o número do pedido "<NumeroPedido>"

        Examples:
            | FormaPagamento | ValorPago | DataPagamento | NumeroPedido               |
            | Crédito        | 237.18    | 16/10/2024    | 603179_26827_1020_16151733 |

    @dataValidation @specialCharacters
    Scenario Outline: Validar aceitação de caracteres especiais e acentos nos campos de pagamento
        Given que o cliente está na tela de pagamento selecionando "<FormaPagamento>"
        When o cliente preenche o campo "<Campo>" com o valor "<ValorComCaracteresEspeciais>"
        Then o valor deve ser salvo sem acentos ou emojis corretamente no orçamento

        Examples:
            | FormaPagamento | Campo          | ValorComCaracteresEspeciais    |
            | Crédito        | Nome           | José da Silva                  |
            | Crédito        | Email          | cliente_exemplo@domínio.com.br |
            | Crédito        | Telefone       | +55 (11) 99999-9999            |
            | Crédito        | Nome no Cartão | João André D'Ávila             |

    @invalidCard
    Scenario Outline: Rejeição de pagamento por dados incorretos no cartão de crédito
        When o cliente insere os dados do cartão
            | numeroCartao   | mesExpiracao/anoExpiracao     | codigoSeguranca   |
            | <numeroCartao> | <mesExpiracao>/<anoExpiracao> | <codigoSeguranca> |
        And insere o telefone "<telefone>" e email "<email>"
        And confirma o pagamento
        Then o pagamento deve ser rejeitado
        And uma mensagem de erro é exibida com o texto "Ocorreu um erro. Por favor, tente novamente ou entre em contato com a atendente."
        And o botão "Tentar novamente" é exibido

        Examples:
            | numeroCartao     | mesExpiracao | anoExpiracao | codigoSeguranca | telefone    | email               |
            | 4111111111111111 | 12           | 25           | 123             | 48999999999 | cliente@exemplo.com |
            | 4111111111111111 | 00           | 25           | 123             | 48999999999 | cliente@exemplo.com |

    @incorrectData
    Scenario Outline: Rejeição de pagamento por ausência de telefone ou email
        When o cliente insere os dados do cartão válidos
            | numeroCartao        | mesExpiracao | anoExpiracao | codigoSeguranca |
            | 5555 3412 4444 1115 | 03           | 30           | 737             |
        And insere o telefone "<telefone>" e email "<email>"
        And confirma o pagamento
        Then o pagamento deve ser rejeitado
        And uma mensagem de erro de preenchimento é exibida com o texto "Preencha este campo."

        Examples:
            | telefone    | email               |
            |             | cliente@exemplo.com |
            | 48999999999 |                     |
            |             |                     |