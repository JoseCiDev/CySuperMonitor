# language: pt
Feature: Filtro "DT direcionada para"
    Como um usuário do sistema
    Eu quero visualizar os perfis de Administrador, Farmacêutico, Monitora de Orçamento e Monitora Comercial no filtro "DT direcionada para"
    Para garantir que todos os perfis relevantes estejam disponíveis para seleção

    Background: O usuário está autenticado no sistema e acessa a página de busca
        Given que estou autenticado no sistema
        And estou na página gerenciamento de DT's

    Scenario: Visualizar todos os perfis relevantes no filtro "DT direcionada para"
        When eu abrir o filtro "DT direcionada para"
        Then devo visualizar os seguintes perfis no filtro:
            | Perfil                |
            | Administrador         |
            | Farmacêutico          |
            | Monitora de Orçamento |
            | Monitora Comercial    |

    Scenario: Selecionar um perfil no filtro "DT direcionada para" e verificar os resultados
        When eu abrir o filtro "DT direcionada para"
        And selecionar um usuário de perfil "Monitora Comercial"
        And clicar em "Procurar"
        Then devo visualizar somente as DTs direcionadas para o perfil "Monitora Comercial"

        Examples: Perfis para seleção
            | Perfil                |
            | Farmacêutico          |
            | Monitora de Orçamento |
            | Monitora Comercial    |

    Scenario: Visualizar mensagem quando nenhum perfil é selecionado
        When eu abrir o filtro "DT direcionada para"
        And não selecionar nenhum perfil
        And clicar em "Procurar"
        Then devo visualizar as DTs direcionadas para o usuário que está logado

    Scenario: Visualizar DTs após seleção de múltiplos perfis
        When eu abrir o filtro "DT direcionada para"
        And selecionar os perfis:
            | Perfil             |
            | Farmacêutico       |
            | Monitora Comercial |
        And clicar em "Procurar"
        Then devo visualizar as DTs direcionadas para os perfis "Farmacêutico" e "Monitora Comercial"