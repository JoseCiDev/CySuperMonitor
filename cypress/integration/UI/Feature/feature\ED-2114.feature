Feature: Gerenciamento e validação de permissões de perfis de usuário para módulos do sistema

  # Contexto: Com a nova estrutura de atendimento, é necessário adequar permissões para telas e módulos.

  @profile-management @admin
  Scenario Outline: Atribuir um perfil a um usuário
    Given que estou logado como administrador
    When atribuo o perfil <Perfil> ao usuário
    Then o usuário deve ter acesso a todos os módulos e telas associados ao perfil <Perfil>
    And o usuário deve visualizar os seguintes relatórios, se aplicável:
      | URL do Relatório     |
      | <URL do Relatório 1> |
      | <URL do Relatório 2> |
      | <URL do Relatório 3> |

    Examples:
      | Perfil                 | Acessos              | URL do Relatório 1                                 | URL do Relatório 2                         | URL do Relatório 3                                        | Acesso módulos e telas                                                          |
      | Monitora de fechamento | atendente            | http://baseUrl/relatorios/monitoramento-at         |                                            |                                                           | Acesso aos módulos e telas de atendente + visualização do relatório             |
      | Monitora de orçamento  | atendente e monitora | http://baseUrl/relatorios/monitoramento-backoffice | http://baseUrl/relatorios/monitoramento-or | http://baseUrl/relatorios/monitoramento-or-ativos-orcados | Acesso aos módulos e telas de atendente, monitora e visualização dos relatórios |
      | Monitora comercial     | atendente e monitora | http://baseUrl/relatorios/monitoramento-at         |                                            |                                                           | Acesso aos módulos e telas de atendente, monitora e visualização dos relatórios |
      | Monitora de operação   | administrador        |                                                    |                                            |                                                           |                                                                                 |


  @profile-management @admin
  Scenario Outline: Alterar o perfil de um usuário
    Given que estou logado como administrador
    When altero o perfil do usuário <Usuário> para <Novo Perfil>
    Then o usuário <Usuário> deve ter acesso a todos os módulos e telas associados ao <Novo Perfil>
    And o usuário <Usuário> deve visualizar os seguintes relatórios, se aplicável:
      | URL do Relatório     |
      | <URL do Relatório 1> |
      | <URL do Relatório 2> |
      | <URL do Relatório 3> |
      | <URL do Relatório 4> |

    Examples:
      | Usuário | Novo Perfil            | Acessos              | URL do Relatório 1                                 | URL do Relatório 2                         | URL do Relatório 3                                        | Acesso módulos e telas                                                          |
      | user1   | Monitora de orçamento  | atendente e monitora | http://baseUrl/relatorios/monitoramento-backoffice | http://baseUrl/relatorios/monitoramento-or | http://baseUrl/relatorios/monitoramento-or-ativos-orcados | Acesso aos módulos e telas de atendente e monitora+ visualização dos relatórios |
      | user2   | Monitora de fechamento | atendente            | http://baseUrl/relatorios/monitoramento-at         |                                            |                                                           | Acesso aos módulos e telas de atendente + visualização do relatório             |