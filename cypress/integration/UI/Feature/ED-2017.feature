Feature: Pagamento com Cartão de Crédito e Consulta de Status

    Background:
        Given que o cliente deseja pagar o pedido com cartão de crédito

    @payment @creditCard
    Scenario Outline: Realizar pagamento com cartão de crédito com sucesso
        Given que o cliente recebeu um link de pagamento de um orçamento
        And selecionou a forma de pagamento crédito
        And o cliente informa os dados pessoais: telefone "<Telefone>", email "<Email>"
        When o cliente clica para pagar
        Then o pagamento deve ser processado com sucesso
        And os dados pessoais devem ser apresentados no orçamento após o pagamento
        And o orçamento deve apresentar: status "<StatusPagamento>", data de criação do link, código externo, data de pagamento do link(Atualizado em), número do pagamento e valor "<ValorPagamento>"

        Examples:
            | Orcamento/Filial | Telefone    | Email                             | Nome                                      | Cpf         | StatusPagamento | Numero do Cartao    | Validade | Codigo de Seguranca | Observação                                                                                          | Bandeira Cartao   | Issuing Country/region |
            | 13168/110        | 48991888641 | jose.djalma@essentia.com.br       | jose d f mendes                           | 08239097510 | Pago            | 3714 4963 5398 431  | 03/30    | 7373                |                                                                                                     | American Express  | --                     |
            | 13169/110        | 21992880477 | RIBEIRO.CALI@GMAIL.COM            | LIVIA C R                                 | 31732065098 | Pago            | 2222 4000 6000 0007 | 03/30    | 737                 |                                                                                                     | Mastercard        | CA                     |
            | 13170/110        | 45991087606 | adersonmoura@hotmail.com          | GIULIA SGARBI MONTES                      | 36965852895 | Pago            | 4035 5010 0000 0008 | 03/30    | 737                 |                                                                                                     | Visa              | FR                     |
            | 13171/110        | 47984981642 | ursulajoselaine@outlook.com       | MARA CRISTINA RUMBELSPERGER DO NASCIMENTO | 93323328787 | Pago            | 6771 7980 2100 0008 | 03/30    | 737                 |                                                                                                     | Maestro           |                        |
            | 13172/110        | 1991505069  | van1612@hotmail.com               | CELISVANIA DE OLIVEIRA SOUZA              | 07198666698 | Pago            | 5555 4444 3333 1111 | 03/30    | 737                 |                                                                                                     | Mastercard        | US                     |
            | 13175/110        | 11983269371 | marcosp5@uol.com.br               | LETICIA MOLINA FIGUEIREDO                 | 44191228897 | Pago            | 2222 4000 3000 0004 | 03/30    | 737                 |                                                                                                     | Fleet Credit      | CA                     |
            | 13177/110        | 15991197992 | takeashi.consultor@gmail.com      | ELISANGELA REGINA LEMES DA SILVA          | 61456306391 | Pago            | 4166 6766 6766 6746 | 03/30    | 737                 |                                                                                                     | Visa              | NL                     |
            | 13179/110        | 47988267005 | fernandespiana@gmail.com          | AUGUSTO HORTA BARBOSA MENDES              | 03979548244 | Pago            | 4001 0200 0000 0009 | 03/30    | 737                 |                                                                                                     | --                | BR                     |
            | 13186/110        | 11985858757 | priscillanvig@gmail.com           | DEBORAH GIERKENS FERREIRA                 | 13540543775 | Pago            | 4988 4388 4388 4305 | 03/30    | 737                 |                                                                                                     | Visa              | ES                     |
            | 13187/110        | 21981118586 | lojaspropriasmundoverde@gmail.com | ROBERTO TEPASSE                           | 31057365904 | Pago            | 2222 4000 1000 0008 | 03/30    | 737                 |                                                                                                     | Mastercard Credit | --                     |
            | 13183/110        | 21979124888 | milena.matias@hotmail.com         | MARCOS REINALDO DA SILVA                  | 56123434934 |                 | 3607 0500 0010 20   | 03/30    | 737                 | Corrigido botão tente novamente duplicado. Retorna erro de pagamento somente em ambiente de testes. | --                | NL                     |
            | 13189/110        | 11982870063 | bulsoniamanda@gmail.com           | LUCILA DE JESUS ALMEIDA                   | 10491158645 | Pago            | 4871 0499 9999 9910 | 03/30    | 737                 |                                                                                                     | Bancontact / Visa | --                     |


    @payment @foreignClient
    Scenario Outline: Realizar pagamento com cartão de crédito como cliente estrangeiro com sucesso
        Given que o cliente selecionou a forma de pagamento crédito
        And o cliente informou que é estrangeiro
        And o cliente selecionou o país "<Pais>" e informou o telefone "<Telefone>"
        And o cliente informa os dados pessoais: email "<Email>", nome "<Nome>"
        When o cliente clica para pagar
        Then o pagamento deve ser processado com sucesso
        And os dados pessoais devem ser apresentados no orçamento após o pagamento
        And o orçamento deve apresentar: status "<StatusPagamento>", data de criação do link, código externo, data de atualização do link, número do pagamento e valor "<ValorPagamento>"

        Examples:
            | orcamento/filial | Pais     | Telefone          | Email                        | Nome                                   | Social Security Number | StatusPagamento | numeroCartao        | validade | codigoSeguranca | observação                                                         | Bandeira Cartao   | Issuing Country/region |
            | 13202/110        | EUA      | +1 (321) 8000732  | ANA.COSSE@ME.COM             | ANA PAULA COSSE FREIRE                 | 360570                 |                 | 5100 0600 0000 0002 | 03/30    | 737             | Response:  "resultCode": "Refused", - Pedro enviou caso para Adyen | Premium Credit    | US                     |
            | 13307/110        | EUA      | +1 (302) 3626853  | vascsb@protonmail.com        | SANDRA BRAGA DE VASCONCELOS            | 37068644600            | Pago            | 3700 0000 0000 002  | 03/30    | 7373            |                                                                    | --                | NL                     |
            | 13309/110        | EUA      | +1 (613) 0624087  | clauditaj39@gmail.com        | CLAUDIA FRAGA JACO                     | 359410                 | Pago            | 3700 0000 0100 018  | 03/30    | 7373            |                                                                    |                   | NL                     |
            | 13214/110        | ALEMANHA | +49 (152) 5411791 | veridianabergner@gmail.com   | VERIDIANA DE NEGREIROS JANEIRO BERGNER | 320449336              | Pago            | 4871 0499 9999 9910 | 03/30    | 737             |                                                                    | BCMC / Visa Debit | BE                     |
            | 13221/110        | EUA      | +1 (017) 606128   | jovanems@gmail.com           | WANDER STABENOW WEBERLING              | 958623                 | Pago            | 6703 4444 4444 4449 | 03/30    | n/a             |                                                                    | BCMC / Maestro    | BE                     |
            | 13226/110        | EUA      | +1 (732) 3578903  | eu.leticia2411@gmail.com     | LETICIA DIAS DA SILVA                  | 157040408              | Pago            | 6703 4444 4444 4449 | 03/30    | n/a             |                                                                    | BCMC / Maestro    | BE                     |
            | 13392/110        | EUA      | +1 (669) 3226095  | mirellesb@icloud.com         | MIRELLE DE SIQUEIRA BORGES             | 09463220747            |                 | 3607 0500 0010 20   | 03/30    | 737             | Retorna erro de pagamento somente em ambiente de testes.           | Diners            | NL                     |
            | 13248/110        | EUA      | +1 (130) 7606128  | jovanems@gmail.com           | WANDER STABENOW WEBERLING              | 958623                 | Pago            | 6771 7980 2100 0008 | 03/30    | 737             |                                                                    | Maestro           | US                     |
            | 13256/110        | LONDON   | +44 (770) 4977712 | SAYLANDIAGONCALVES@GMAIL.COM | SAYLANDIA MARTINS GONCALVES            | 1337169                | Pago            | 5000 5500 0000 0029 | 03/30    | n/a             |                                                                    | Maestro           | --                     |
            | 13262/110        | EUA      | +1 (54) 5123430   | elisacanedo@hotmail.com      | ELISA CANEDO MOTTA BAPTISTA            | 11688262               | Pago            | 5555 4444 3333 1111 | 03/30    | 737             |                                                                    | Mastercard        | GB                     |
            | 13270/110        | THAILAND | +66 (96) 0032694  | Natyortiz21@hotmail.com      | NATALIA ORTIZ SANTO                    | 36845015813            | Pago            | 2223 0000 4841 0010 | 03/30    | 737             |                                                                    | Mastercard        | NL                     |
            | 13295/110        | ITALY    | +39 4350803       | OSANASB@HOTMAIL.COM          | OSANA BITENCUR SILVA                   | 383915031              | Pago            | 4988 4388 4388 4305 | 03/30    | 737             |                                                                    | Visa              | ES                     |
            | 13401/110        | EUA      | +1 (206) 7394279  | PHPGERMANO@GMAIL.COM         | PEDRO HENRIQUE PINTO PEIXOTO GERMANO   | 96011002462            | Pago            | 4917 6100 0000 0000 | 03/30    | 737             |                                                                    | Visa              | --                     |

    @pendingPayment @statusUpdate
    Scenario Outline: Orçamento com link de pagamento aguardando pagamento
        Given que o cliente recebeu o link de pagamento e ainda não realizou o pagamento
        When o orçamento está aguardando o pagamento
        Then o orçamento deve apresentar: status "<StatusPagamento>", data de criação do link, código externo, e valor "<ValorPagamento>"

        Examples:
            | orcamento/filial | StatusPagamento | ValorPagamento |
            | 13412/110        | Aguardando      | 4.681,90       |

    @manualUpdate @systemUser
    Scenario Outline: Atualizar status de pagamento manualmente no orçamento
        Given que o sistema de orçamentos permite atualizar o status de pagamento
        And o pagamento já foi processado com sucesso anteriormente
        When o usuário do sistema atualiza o status do pagamento no orçamento
        Then o status do pagamento no orçamento deve ser apresentado como "<NovoStatus>"
        And a data de pagamento não deve ser alterada
        And o horário de "Atualizado em" não deve se alterar

        Examples:
            | orcamento/filial | StatusPagamento | ValorPagamento | NovoStatus |
            | 13401/110        | Aguardando      | 4.681,90       | Pago       |


    @paymentValidation @dataValidation
    Scenario Outline: Validar tipos de dados aceitos nos campos de pagamento
        Given que o cliente está na tela de pagamento selecionando "<FormaPagamento>"
        When o cliente tenta informar dados inválidos nos campos "<Campo>" com valor "<ValorInvalido>"
        Then o sistema deve exibir uma mensagem de erro para o campo "<Campo>"

        Examples:
            | orcamento/filial | StatusPagamento | FormaPagamento | Campo            | ValorInvalido     |
            | 13426/110        | Aguardando      | Crédito        | telefone         | 12345             |
            | 13430/110        | Aguardando      | Crédito        | Data de Validade | 00/00             |
            | 13434/110        | Aguardando      | Crédito        | email            | mendeswebmail.com |
            | 13438/110        | Aguardando      | Crédito        | CPF/CNPJ         | 123456            |
            | 13451/110        | Aguardando      | Crédito        | CPF/CNPJ         | 123456789012      |

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
            | orcamento/filial | FormaPagamento | Campo          | ValorComCaracteresEspeciais    | Telefone    | Email                       | Nome                                      | cpf         | StatusPagamento | numeroCartao        | validade | codigoSeguranca | observação |
            | 13651/110        | Crédito        | Email          | cliente_exemplo@domínio.com.br | 47984981642 | ursulajoselaine@outlook.com | MARA CRISTINA RUMBELSPERGER DO NASCIMENTO | 93323328787 | Pago            | 6771 7980 2100 0008 | 03/30    | 737             |            |
            | 13655/110        | Crédito        | Telefone       | +55 (11) 99999-9999            | 21992880477 | RIBEIRO.CALI@GMAIL.COM      | LIVIA C R                                 | 31732065098 | Pago            | 2222 4000 6000 0007 | 03/30    | 737             |            |
            | 13652/110        | Crédito        | Nome no Cartão | João André D'Ávila             | 45991087606 | adersonmoura@hotmail.com    | GIULIA SGARBI MONTES                      | 36965852895 | Pago            | 4035 5010 0000 0008 | 03/30    | 737             |            |

    @invalidCard
    Scenario Outline: Rejeição de pagamento por dados incorretos no cartão de crédito
        When o cliente insere os dados do cartão
        And insere o telefone "<telefone>" e email "<email>"
        And confirma o pagamento
        Then o pagamento deve ser rejeitado
        And uma mensagem de erro é exibida com o texto "Ocorreu um erro. Por favor, tente novamente ou entre em contato com a atendente."
        And o botão "Tentar novamente" é exibido

        Examples:
            | orcamento/filial | Telefone    | Email               | Nome                 | cpf         | StatusPagamento | numeroCartao     | validade | codigoSeguranca | observação |
            | 13663/110        | 48999999999 | cliente@exemplo.com | GIULIA SGARBI MONTES | 08239097510 | Pago            | 4111111111111111 | 12/25    | 123             |            |

    Scenario: Cliente tenta realizar pagamento novamente após rejeição
        Given que o cliente teve o pagamento rejeitado
        When o cliente clica em "Tentar novamente"
        And o cliente informa os dados de pagamento novamente
        Then o sistema deve processar o pagamento
        And o cliente deve receber uma confirmação de "Pagamento realizado com sucesso" ou "Pagamento rejeitado", caso dados incorretos

        Examples:
            | orcamento/filial | Telefone    | Email                       | Nome                                      | cpf         | StatusPagamento | numeroCartao        | validade | codigoSeguranca | observação |
            | 13663/110        | 47984981642 | ursulajoselaine@outlook.com | MARA CRISTINA RUMBELSPERGER DO NASCIMENTO | 93323328787 | Pago            | 6771 7980 2100 0008 | 03/30    | 737             |            |

    @incorrectData
    Scenario Outline: Pagamento não processado por ausência de telefone ou email
        When o cliente insere os dados do cartão válidos
            | numeroCartao        | mesExpiracao | anoExpiracao | codigoSeguranca |
            | 5555 3412 4444 1115 | 03           | 30           | 737             |
        And insere o telefone "<telefone>" e email "<email>"
        And confirma o pagamento
        Then o pagamento deve não deve ser processado
        And uma mensagem de preenchimento obrigatório é exibido com o texto "Preencha este campo."

        Examples:
            | telefone    | email               |
            |             | cliente@exemplo.com |
            | 48999999999 |                     |
            |             |                     |

    Scenario: Atendente consulta status dos pagamentos de pedidos
        Given que o cliente realizou um pagamento
        And o usuário do sistema está no módulo "Buscas -> Pagamentos"
        When o usuário consulta o status dos pagamentos
        Then o sistema deve exibir o status do pagamento do pedido

    Scenario: Filtro de status de pagamento pago e pedido aberto
        Given que o usuário do sistema está no módulo "Buscas -> Pagamentos"
        When o usuário filtra por "Status do pagamento: Pago" e "Status do pedido: Aberto"
        Then o sistema deve exibir todos os pedidos pagos e que ainda não foram fechados

    Scenario Outline: Atendente verifica status de pagamento pendente
        Given que o cliente realizou um pagamento que está pendente
        And o usuário do sistema está no módulo "Buscas -> Pagamentos"
        And o usuário visualiza o pedido pendente
        When o usuário atualiza o status do pagamento do pedido
        Then o sistema deve exibir "Status do pagamento: Pago"

        Examples:
            | orcamento/filial | Telefone    | Email                       | Nome                                      | cpf         | StatusPagamento | numeroCartao        | validade | codigoSeguranca | observação |
            | 13688/110        | 47984981642 | ursulajoselaine@outlook.com | MARA CRISTINA RUMBELSPERGER DO NASCIMENTO | 93323328787 | Pago            | 6771 7980 2100 0008 | 03/30    | 737             |            |

    Scenario Outline: Atendente verifica status de pagamento rejeitado
        Given que o cliente realizou um pagamento que foi rejeitado
        And o usuário do sistema está no módulo "Buscas -> Pagamentos"
        And o usuário visualiza o pedido pendente
        When o usuário atualiza o status do pagamento do pedido
        Then o sistema deve exibir "Status do pagamento: Aguardando pagamento"

        Examples:
            | orcamento/filial | Telefone    | Email                   | Nome                      | cpf         | StatusPagamento | numeroCartao        | validade | codigoSeguranca | observação |
            | 13463/110        | 11985858757 | priscillanvig@gmail.com | DEBORAH GIERKENS FERREIRA | 13540543775 | Pago            | 4988 4388 4388 4305 | 03/30    | 737             |            |

    Scenario: Fechamento de pedido após pagamento confirmado
        Given que o status do pagamento é "Pago"
        And o status do pedido é "Aberto"
        When o usuário do sistema decide fechar o pedido
        Then o sistema deve atualizar o status do pedido para "Fechado"
        And o pedido deve estar pronto para o próximo estágio do processo