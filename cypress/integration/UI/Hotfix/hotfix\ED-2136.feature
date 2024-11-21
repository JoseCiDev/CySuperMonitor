Feature: Registro de conferência para perfis autorizados

    Como administrador do sistema
    Eu quero que apenas perfis autorizados possam visualizar e registrar conferências
    Para garantir o controle de acesso às funcionalidades restritas na tela de atendimentos em andamento

    Background:
        Given o usuário está logado no sistema

    @visualizacao-botoes
    Scenario Outline: Verificação de exibição dos botões de conferência para perfis autorizados
        Given o usuário possui o perfil "<perfil>"
        When o usuário acessa a tela de Atendimentos → Em andamento
        Then os botões "Registrar conferência (Atendente)" e "Registrar conferência (BackOffice)" devem <estado> exibidos

        Examples:
            | perfil              | estado |
            | Monitora orçamento  | ser    |
            | Monitora Comercial  | ser    |
            | Monitora Fechamento | ser    |
            | Monitora Operação   | ser    |

    @registro-backoffice
    Scenario Outline: Registro de conferência BackOffice por perfis autorizados
        Given o usuário possui o perfil "<perfil>"
        And os botões "Registrar conferência (BackOffice)" estão visíveis
        When o usuário clica no botão "Registrar conferência (BackOffice)"
        And clica em "Salvar"
        Then deve registrar conferência backoffice com sucesso
        And uma mensagem de sucesso deve ser exibida

        Examples:
            | perfil              |
            | Monitora orçamento  |
            | Monitora Comercial  |
            | Monitora Fechamento |
            | Monitora Operação   |

    @registro-atendente
    Scenario Outline: Registro de conferência Atendimento por perfis autorizados
        Given o usuário possui o perfil "<perfil>"
        And os botões "Registrar conferência (Atendente)" estão visíveis
        When o usuário clica no botão "Registrar conferência (Atendente)"
        And clica em "Salvar"
        Then deve registrar conferência de atendimento com sucesso
        And uma mensagem de sucesso deve ser exibida

        Examples:
            | perfil              |
            | Monitora orçamento  |
            | Monitora Comercial  |
            | Monitora Fechamento |
            | Monitora Operação   |

    @atendente
    Scenario: Atendente vê os dois botões e realiza conferências para ambos os setores
        Given o usuário possui o perfil "Atendente"
        When o usuário acessa a tela de Atendimentos → Em andamento
        Then os botões "Registrar conferência (Atendente)" e "Registrar conferência (BackOffice)" devem ser exibidos
        When o usuário clica no botão "Registrar conferência (Atendente)"
        And registra conferência para o setor de atendimento
        Then deve registrar conferência de atendimento com sucesso
        And uma mensagem de sucesso deve ser exibida
        When o usuário clica no botão "Registrar conferência (BackOffice)"
        And registra conferência para o setor de backoffice
        Then deve registrar conferência backoffice com sucesso
        And uma mensagem de sucesso deve ser exibida

    @backoffice
    Scenario: BackOffice vê apenas o botão de conferência BackOffice e realiza conferência
        Given o usuário possui o perfil "BackOffice"
        When o usuário acessa a tela de Atendimentos → Em andamento
        Then o botão "Registrar conferência (BackOffice)" deve ser exibido
        And o botão "Registrar conferência (Atendente)" não deve ser exibido
        When o usuário clica no botão "Registrar conferência (BackOffice)"
        And registra conferência para o setor de backoffice
        Then deve registrar conferência backoffice com sucesso
        And uma mensagem de sucesso deve ser exibida