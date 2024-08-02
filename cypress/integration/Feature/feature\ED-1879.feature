Feature: Envio automático de mensagens via WhatsApp para clientes

    @budgetConfirmed
    Scenario Outline: Enviar mensagem ao confirmar orçamento
        Given O atendente configurou os dados de contato corretamente "<telefoneCliente>"
        And O orçamento foi "<acaoPedido>"
        When O sistema processa o orçamento
        Then Uma mensagem automática deve ser enviada para o cliente

        Examples:
            | telefoneCliente | acaoPedido | telefonePrescritor |
            | 5548991888641   | confirmado | 5548988661772      |

    @editBudget
    Scenario Outline: Enviar mensagem ao confirmar orçamento
        Given O atendente configurou os dados de contato de contato corretamente "<telefoneCliente>"
        And O orçamento foi "<acaoPedido>"
        When O sistema processa o orçamento
        Then Uma mensagem automática não deve ser enviada para o cliente

        Examples:
            | telefoneCliente | acaoPedido | telefonePrescritor |
            | 5511963983696   | reaberto   | 552199721305       |
            | 552278342407    | editado    | 5566999654811      |

    @sendMessage
    Scenario Outline: Enviar mensagem com configuração para enviar mensagem em dois locais
        Given O atendente configurou os dados de contato corretamente como "<telefoneCliente>"
        And A opção para enviar mensagem está marcada em Configurar contato
        And A opção para enviar mensagem está marcada ao confirmar o orçamento
        And O orçamento foi "<acaoPedido>"
        When O sistema processa o orçamento
        Then Uma mensagem automática deve ser enviada para "<telefoneCliente>"

        Examples:
            | telefoneCliente | acaoPedido |
            | 5553991523684   | confirmado |

    @notSendMessage
    Scenario Outline: Não enviar mensagem com configuração para não enviar mensagem em dois locais
        Given O atendente configurou os dados de contato corretamente como "<telefoneCliente>"
        And A opção para enviar mensagem está desmarcada em Configurar contato
        And A opção para enviar mensagem está marcada ao confirmar o orçamento
        And O orçamento foi "<acaoPedido>"
        When O sistema processa o orçamento
        Then Nenhuma mensagem automática deve ser enviada
        And o atendente deve visualizar uma mensagem informando que a mensagem automática não foi disparada

        Examples:
            | telefoneCliente | acaoPedido |
            | 5521979558871   | confirmado |

    @sendMessage @compoundedDrugs
    Scenario Outline: Enviar mensagem para cliente que não é paciente
        Given O atendente configurou os dados de contato corretamente como "<telefoneCliente>"
        And O cliente é "<tipoCliente>"
        And O orçamento foi "<acaoPedido>"
        When O sistema processa o orçamento
        Then Uma mensagem automática deve ser enviada para "<telefoneCliente>"

        Examples:
            | telefoneCliente | tipoCliente           | acaoPedido |
            | 5511999464335   | diferente de paciente | confirmado |

    @sendMessage @compoundedDrugs
    Scenario Outline: Enviar mensagem para cliente de filiais de manipulados
        Given O atendente configurou os dados de contato corretamente como "<telefoneCliente>"
        And O orçamento é de filiais de manipulados
        And O orçamento foi "<acaoPedido>"
        When O sistema processa o orçamento
        Then Uma mensagem automática deve ser enviada para "<telefoneCliente>"

        Examples:
            | telefoneCliente | acaoPedido |
            | 5554999312315   | confirmado |

    @sendMessage @InjectableMedication
    Scenario Outline: Enviar mensagem para cliente de injetáveis
        Given O atendente configurou os dados de contato corretamente como "<telefoneCliente>"
        And O cliente é de injetáveis
        And O orçamento foi "<acaoPedido>"
        When O sistema processa o orçamento
        Then Uma mensagem automática deve ser enviada para "<telefoneCliente>"

        Examples:
            | telefoneCliente | acaoPedido |
            | 5511973344622   | confirmado |

    @sendMessage @moreThanOneCustomerSamePhoneNumber
    Scenario Outline: Enviar mensagem quando há mais de um cliente com o mesmo número de telefone
        Given Há mais de um cliente com o número de telefone "<telefoneCliente>"
        And O atendente configurou os dados de contato corretamente
        And O orçamento foi "<acaoPedido>"
        When O sistema processa o orçamento
        Then Uma mensagem automática deve ser enviada para "<telefoneCliente>"
        Then O sistema deve garantir que a mensagem é enviada para o cliente do orçamento
        And não para o outro cliente que contém o mesmo número de telefone

        Examples:
            | telefoneCliente | acaoPedido |
            | 555191526944    | confirmado |

    @notSendMessage @noContactDetails
    Scenario Outline: Não enviar mensagem quando o cliente não tem os dados de contato no cadastro e não é configurado no atendimento
        Given O cliente não tem os dados de contato no cadastro
        And O número telefônico não foi configurado em Configurar contato, no atendimento
        When O usuário salva os dados de contato
        Then visualiza mensagem de obrigatoriedade de preenchimento do campo contato telefônico
        And a modal permanece aberta

        Examples:
            | acaoPedido |
            | confirmado |
