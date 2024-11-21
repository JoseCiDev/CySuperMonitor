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
            | perfil             | estado  |
            | Monitora orçamento | ser     |
            | Comercial          | ser     |
            | Fechamento         | ser     |
            | Operacional        | ser     |
            | Financeiro         | não ser |
            | Suporte técnico    | não ser |

    @registro-backoffice
    Scenario Outline: Registro de conferência BackOffice por perfis autorizados
        Given o usuário possui o perfil "<perfil>"
        And os botões "Registrar conferência (BackOffice)" estão visíveis
        When o usuário clica no botão "Registrar conferência (BackOffice)"
        And clica em "Salvar"
        Then a mensagem "Conferência registrada com sucesso" deve ser exibida

        Examples:
            | perfil             |
            | Monitora orçamento |
            | Comercial          |
            | Fechamento         |
            | Operacional        |

    @registro-atendente
    Scenario Outline: Registro de conferência Atendimento por perfis autorizados
        Given o usuário possui o perfil "<perfil>"
        And os botões "Registrar conferência (Atendente)" estão visíveis
        When o usuário clica no botão "Registrar conferência (Atendente)"
        And clica em "Salvar"
        Then a mensagem "Conferência registrada com sucesso" deve ser exibida

        Examples:
            | perfil             |
            | Monitora orçamento |
            | Comercial          |
            | Fechamento         |
            | Operacional        |
