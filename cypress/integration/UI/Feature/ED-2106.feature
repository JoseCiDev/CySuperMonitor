Feature: Indicar o responsável pela separação de pedidos de injetáveis

    Como administrador do sistema
    Eu quero que o campo "Responsável pela separação" seja exibido e funcional somente para filiais de injetáveis (13, 1313, 2013)
    Para garantir o registro do colaborador responsável e a geração de relatórios corretos

    Background:
        Given o usuário está autenticado no sistema
        And o usuário possui acesso à tela "Conferências → Conf. saída"
        And existem pedidos nas filiais "13", "1313" e "2013" com produtos injetáveis

    # @exibicao-campo
    # Scenario Outline: Exibir campo "Responsável pela separação" para filiais injetáveis
    #     Given o pedido pertence à filial "<filial>"
    #     When o usuário abre a modal de conferência de saída para o pedido
    #     Then o campo "Responsável pela separação" deve <estado> exibido
    #     And a lista de opções deve exibir somente usuários com perfil "Conferência"

    #     Examples:
    #         | filial | estado  |
    #         | 13     | ser     |
    #         | 1313   | ser     |
    #         | 2013   | ser     |
    #         | 1000   | não ser |
    #         | 2000   | não ser |
    #         | 5      | não ser |

    # #48063/13
    # #38484/1313
    # #7537/2013
    # #342636/1000
    # #100623/2000
    # #170069/5

    # @selecionar-responsavel
    # Scenario Outline: Selecionar responsável pela separação para pedidos injetáveis
    #     Given o pedido pertence à filial "<filial>"
    #     And o usuário abriu a modal de conferência de saída
    #     When o usuário seleciona "<usuario>" no campo "Responsável pela separação"
    #     And clica em "Salvar conferência"
    #     Then o sistema deve salvar o id do usuário "<idUsuario>" no banco de dados

    #     Examples:
    #         | filial | usuario          | idUsuario |
    #         | 13     | conf saida       | 999978    |
    #         | 1313   | farma conf saida | 999981    |

    # #48063/13
    # #38484/1313
    # #7537/2013

    # @validacao-salvamento
    # Scenario Outline: Validar salvamento do responsável pela separação
    #     Given o pedido pertence à filial "<filial>"
    #     And o campo "Responsável pela separação" está visível
    #     When o usuário seleciona "<responsavel>" no campo
    #     And clica em "Salvar conferência"
    #     Then o sistema deve salvar "<responsavel>" como responsável para o pedido no banco de dados

    #     Examples:
    #         | filial | responsavel    |
    #         | 13     | João Silva     |
    #         | 1313   | Maria Oliveira |
    #         | 2013   | Ana Pereira    |

    # #48063/13
    # #38484/1313
    # #7537/2013

    @erros-campo
    Scenario: Validar comportamento do sistema ao não selecionar um responsável
        Given o pedido pertence à filial "13"
        And o usuário abriu a modal de conferência de saída
        When o usuário tenta salvar a conferência sem preencher o campo "Responsável pela separação"
        Then o sistema deve exibir a mensagem de erro "Selecione um responsável pela separação antes de salvar"
        And o pedido não deve ser salvo

    @integridade-dados
    Scenario: Validar integridade dos dados ao alterar responsável
        Given o pedido pertence à filial "13"
        And "FarmaConfSaida" foi salvo como responsável anteriormente
        When o usuário altera o responsável para "ConfSaidaTeste"
        And clica em "Salvar conferência"
        Then o sistema deve atualizar o banco de dados para exibir "Maria Oliveira" como responsável
        And o histórico de alterações deve registrar a mudança de "João Silva" para "Maria Oliveira"
# #48063/13
# #38484/1313
# #7537/2013