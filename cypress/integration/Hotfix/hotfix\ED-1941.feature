Feature: Gerenciamento de Orçamento e Self-checkout

    Background: Usuário autenticado e com orçamento preparado
        Given que o usuário está autenticado no sistema
        And que o usuário enviou o link de self-checkout para o cliente

    @alteracao @nao-sincronizado @erro @cliente @paciente
    Scenario: Alterar cliente sem sincronizar informações
        Given que o orçamento foi criado com cliente "Cliente B" e paciente "Paciente C"
        When o usuário altera o cliente para "Cliente D"
        And o usuário não clica no botão de sincronizar informações
        Then o cliente deve ver uma página com a mensagem "Link inválido. Por favor, entre em contato com sua atendente."
    #61712/5000

    @alteracao @nao-sincronizado @erro @paciente @cliente
    Scenario: Alterar paciente sem sincronizar informações
        Given que o orçamento foi criado com cliente "Cliente E" e paciente "Paciente F"
        When o usuário altera o paciente para "Paciente G"
        And o usuário não clica no botão de sincronizar informações
        Then o cliente deve ver página de self-checkout com o nome do paciente atualizado
    #64879/5000

    @alteracao @sincronizado @sucesso @cliente @paciente
    Scenario: Sincronizar informações com cliente e paciente distintos
        Given que o orçamento foi criado com cliente "Cliente H" e paciente "Paciente I"
        When o usuário altera o cliente para "Cliente J" e o paciente para "Paciente K"
        And o usuário clica no botão de sincronizar informações
        Then o cliente deve ver o nome "Cliente J" e o paciente "Paciente K" na página de self-checkout
    #64881/5000

    @alteracao @sincronizado @parametrizado @cliente @paciente
    Scenario Outline: Sincronizar informações para diferentes clientes e pacientes distintos
        Given que o orçamento foi criado com cliente "<clienteOriginal>" e paciente "<pacienteOriginal>"
        When o usuário altera o cliente para "<clienteNovo>" e o paciente para "<pacienteNovo>"
        And o usuário clica no botão de sincronizar informações
        Then o cliente deve ver o nome "<clienteNovo>" e o paciente "<pacienteNovo>" na página de self-checkout
        #61062/5000

        Examples:
            | clienteOriginal | pacienteOriginal | clienteNovo | pacienteNovo |
            | Cliente L       | Paciente M       | Cliente N   | Paciente O   |
            | Cliente P       | Paciente Q       | Cliente R   | Paciente S   |

    @alteracao @nao-sincronizado @erro @cliente @paciente
    Scenario: Alterar cliente e paciente sem sincronizar informações
        Given que o orçamento foi criado com cliente "Cliente B" e paciente "Paciente B"
        When o usuário altera o cliente para "Cliente C" e o paciente para "Paciente C"
        And o usuário não clica no botão de sincronizar informações
        Then o cliente deve ver uma página com a mensagem "Link inválido. Por favor, entre em contato com sua atendente."
    #64882/5000

    @alteracao @sincronizado @sucesso @cliente @paciente
    Scenario: Sincronizar informações e atualizar self-checkout
        Given que o orçamento foi criado com cliente "Cliente D" e paciente "Paciente D"
        When o usuário altera o cliente para "Cliente E" e o paciente para "Paciente E"
        And o usuário clica no botão de sincronizar informações
        Then o cliente deve ver o nome "Cliente E" e o paciente "Paciente E" na página de self-checkout
    #64882/5000

    @alteracao @cliente-excluido @erro @cliente
    Scenario: Excluir cliente após criação do orçamento
        Given que o orçamento foi criado com cliente "Cliente X" e paciente "Paciente Y"
        When o usuário exclui o cliente "Cliente X"
        Then o cliente deve ver uma página com a mensagem "Link inválido. Por favor, entre em contato com sua atendente."
    #64882/5000