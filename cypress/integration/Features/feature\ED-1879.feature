Feature: Envio automático de mensagens via WhatsApp para clientes

    # Cenário 1: Confirmar pedido com número de telefone de cliente
    Scenario Outline: Enviar mensagem ao confirmar pedido
        Given O atendente configurou o número de telefone de contato corretamente "<telefone_cliente>"
        And O pedido foi "<acao_pedido>"
        When O sistema processa o pedido
        Then Uma mensagem automática deve ser enviada para o cliente

        Examples:
            | telefone_cliente | acao_pedido | telefone_prescritor |
            | 5548991888641    | confirmado  | 5548988661772       |


    # Cenário 2: Confirmar pedido com número de telefone de cliente
    Scenario Outline: Enviar mensagem ao confirmar pedido
        Given O atendente configurou o número de telefone de contato corretamente "<telefone_cliente>"
        And O pedido foi "<acao_pedido>"
        When O sistema processa o pedido
        Then Uma mensagem automática não deve ser enviada para o cliente

        Examples:
            | telefone_cliente | acao_pedido | telefone_prescritor |
            | 5511963983696    | reaberto    | 552199721305        |
            | 552278342407     | editado     | 5566999654811       |

    # Cenário 4: Configuração para enviar mensagem em dois locais
    Scenario Outline: Enviar mensagem com configuração para enviar mensagem em dois locais
        Given O atendente configurou o número de contato corretamente como "<telefone_cliente>"
        And A opção para enviar mensagem está marcada em Configurar contato
        And A opção para enviar mensagem está marcada ao confirmar o pedido
        And O pedido foi "<acao_pedido>"
        When O sistema processa o pedido
        Then Uma mensagem automática deve ser enviada para "<telefone_cliente>"

        Examples:
            | telefone_cliente | acao_pedido |
            | 5553991523684    | confirmado  |


    # Cenário 5: Configuração para não enviar mensagem em dois locais
    Scenario Outline: Não enviar mensagem com configuração para não enviar mensagem em dois locais
        Given O atendente configurou o número de telefone de contato corretamente como "<telefone_cliente>"
        And A opção para enviar mensagem está desmarcada em Configurar contato
        And A opção para enviar mensagem está marcada ao confirmar o pedido
        And O pedido foi "<acao_pedido>"
        When O sistema processa o pedido
        Then Nenhuma mensagem automática deve ser enviada
        And o atendente deve visualizar uma mensagem informando que a mensagem automática não foi disparada

        Examples:
            | telefone_cliente | acao_pedido |
            | 5521979558871    | confirmado  |

    # Cenário 6: Confirmar pedido com cliente diferente de paciente
    Scenario Outline: Enviar mensagem para cliente que não é paciente
        Given O atendente configurou o contato corretamente como "<telefone_cliente>"
        And O cliente é "<tipo_cliente>"
        And O pedido foi "<acao_pedido>"
        When O sistema processa o pedido
        Then Uma mensagem automática deve ser enviada para "<telefone_cliente>"

        Examples:
            | telefone_cliente | tipo_cliente          | acao_pedido |
            | 5511999464335    | diferente de paciente | confirmado  |


    # Cenário 7: Confirmar pedido com cliente de filiais de manipulados
    Scenario Outline: Enviar mensagem para cliente de filiais de manipulados
        Given O atendente configurou o número de telefone de contato corretamente como "<telefone_cliente>"
        And O pedido é de filiais de manipulados
        And O pedido foi "<acao_pedido>"
        When O sistema processa o pedido
        Then Uma mensagem automática deve ser enviada para "<telefone_cliente>"

        Examples:
            | telefone_cliente | acao_pedido |
            | 5554999312315    | confirmado  |


    # Cenário 8: Confirmar pedido com cliente de injetáveis
    Scenario Outline: Enviar mensagem para cliente de injetáveis
        Given O atendente configurou o contato corretamente em dados cliente como "<telefone_cliente>"
        And O cliente é de injetáveis
        And O pedido foi "<acao_pedido>"
        When O sistema processa o pedido
        Then Uma mensagem automática deve ser enviada para "<telefone_cliente>"

        Examples:
            | telefone_cliente | acao_pedido |
            | 5511973344622    | confirmado  |


    # Cenário 9: Cliente com mais de um cliente com o mesmo número de telefone
    Scenario Outline: Enviar mensagem quando há mais de um cliente com o mesmo número de telefone
        Given Há mais de um cliente com o número de telefone "<telefone_cliente>"
        And O atendente configurou o número de telefone de contato corretamente em dados cliente
        And O pedido foi "<acao_pedido>"
        When O sistema processa o pedido
        Then Uma mensagem automática deve ser enviada para "<telefone_cliente>"
        Then O sistema deve garantir que a mensagem é enviada para o cliente do pedido
        And não para o outro cliente que contém o mesmo número de telefone

        Examples:
            | telefone_cliente | acao_pedido |
            | 555191526944     | confirmado  |


    # Cenário 10: Cliente sem número telefônico
    Scenario Outline: Não enviar mensagem quando o cliente não tem número telefônico no cadastro e não é configurado em Configurar contato
        Given O cliente não tem número telefônico no cadastro
        And O número telefônico não foi configurado em Configurar contato
        When O salva os dados de contato
        Then visualiza mensagem de obrigatoriedade de preenchimento do campo contato telefônico
        And a modal permanece aberta

        Examples:
            | acao_pedido |
            | confirmado  |
