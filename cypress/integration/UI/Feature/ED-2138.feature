Feature: Restrição de acesso ao menu "Configurações => Médicos"

    Como administrador do sistema
    Eu quero restringir o acesso ao menu "Configurações => Médicos" apenas para usuários com perfil de administrador
    Para garantir segurança e evitar alterações não autorizadas nas informações dos prescritores

    Background:
        Given o sistema está configurado com perfis de acesso
        And o menu "Configurações => Médicos" está disponível no sistema
        And o usuário está autenticado no sistema

    @acesso-administrador
    Scenario: Administrador acessa o menu "Configurações => Médicos"
        Given o usuário possui o perfil de administrador
        When o usuário acessa o menu "Configurações"
        Then o submenu "Médicos" deve ser exibido
        And o usuário deve acessar a página "Médicos" com sucesso

    @acesso-restrito
    Scenario Outline: Usuários não autorizados não visualizam o menu "Configurações => Médicos"
        Given o usuário possui o perfil "<perfil>"
        When o usuário acessa o menu "Configurações"
        Then o submenu "Médicos" não deve ser exibido
        And o usuário não deve acessar a página "Médicos"

        Examples:
            | perfil                 | id_acl_role |
            | Atendente              | 3           |
            | Expedição              | 4           |
            | Caixa                  | 5           |
            | Farmacêutico           | 7           |
            | Orçamentista           | 8           |
            | Visitação              | 10          |
            | Recepção               | 12          |
            | Inclusão               | 14          |
            | Conferência            | 16          |
            | Almoxarifado           | 17          |
            | Backoffice             | 19          |
            | Laboratório            | 20          |
            | Monitora de fechamento | 22          |
            | Monitora de orçamento  | 23          |
            | Monitora comercial     | 24          |

    @tentativa-acesso-direto
    Scenario Outline: Usuário tenta acessar diretamente o menu "Médicos" sem permissão
        Given o usuário possui o perfil "<perfil>"
        When o usuário tenta acessar diretamente a URL "/configuracoes/medicos"
        Then o sistema deve exibir a mensagem "Acesso negado"
        And o usuário deve visualizar mensagem informando que não há permissão para acesso

        Examples:
            | perfil                 | id_acl_role |
            | Atendente              | 3           |
            | Expedição              | 4           |
            | Caixa                  | 5           |
            | Farmacêutico           | 7           |
            | Orçamentista           | 8           |
            | Visitação              | 10          |
            | Recepção               | 12          |
            | Inclusão               | 14          |
            | Conferência            | 16          |
            | Almoxarifado           | 17          |
            | Backoffice             | 19          |
            | Laboratório            | 20          |
            | Monitora de fechamento | 22          |
            | Monitora de orçamento  | 23          |
            | Monitora comercial     | 24          |

    @regressao
    Scenario: Garantir que outros menus não sejam impactados
        Given o usuário possui qualquer perfil válido
        When o usuário acessa o menu "Configurações"
        Then os submenus diferentes de "Médicos" devem ser exibidos normalmente
