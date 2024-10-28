@relatorioNPS
Feature: Otimizar e melhorar apresentação dos dados no relatório NPS

    Background:
        Given que estou na página de relatórios NPS

    @acesso @administrador
    Scenario: Apenas usuários administradores podem acessar o relatório NPS
        Given que estou logado como administrador
        When eu navego para a página de relatórios NPS
        Then eu devo ver a página de relatórios NPS

    @acesso @naoAdministrador
    Scenario: Usuários não administradores não podem acessar o relatório NPS
        Given que estou logado como usuário não administrador
        When eu tento acessar a página de relatórios NPS
        Then eu devo ver uma mensagem de acesso negado

    @filtro @data
    Scenario Outline: Aplicar filtro de intervalo de datas
        When eu aplico um filtro de intervalo de datas de "<dataInicial>" até "<dataFinal>"
        Then a caixa de avaliação do atendimento e avaliação da empresa devem exibir a média de "<dataInicial>" até "<dataFinal>"

        Examples:
            | dataInicial | dataFinal  |
            | 15/05/2024  | 08/08/2024 |
            | 01/05/2024  | 15/05/2024 |
            | 01/04/2024  | 01/05/2024 |

    @filtro @data
    Scenario Outline: Informar quando um filtro está sendo aplicado
        When eu aplico um filtro de intervalo de datas de "<dataInicial>" até "<dataFinal>"
        Then a caixa de avaliação do atendimento e avaliação da empresa devem exibir a mensagem "Média de <dataInicial> até <dataFinal>"

        Examples:
            | dataInicial | dataFinal  |
            | 15/05/2024  | 08/08/2024 |
            | 01/05/2024  | 15/05/2024 |
            | 01/04/2024  | 01/05/2024 |

    @filtro @cluster
    Scenario Outline: Filtrar resultados de NPS por cluster
        When eu aplico um filtro de cluster "<cluster>"
        Then os resultados de NPS devem ser filtrados pelo cluster "<cluster>"

        Examples:
            | cluster        |
            | Cluster 2      |
            | Cluster 3,4    |
            | Cluster 6,7,13 |
            | Cluster 12,14  |

    @filtro @filial
    Scenario Outline: Filtrar resultados de NPS por filial
        When eu aplico um filtro de filial "<filial>"
        Then os resultados de NPS devem ser filtrados pela filial "<filial>"

        Examples:
            | filial           |
            | Filial 5,1000    |
            | Filial 1000,2000 |
            | Filial 13,1313   |
            | Filial 2000      |
            | Filial 2013      |

    @filtro @data
    Scenario Outline: Exibir mensagem quando um filtro de datas está aplicado
        When eu aplico um filtro de intervalo de datas de <dataInicial> até <dataFinal>
        Then a caixa de nota deve exibir "Média de <dataInicial> até <dataFinal>"

        Examples:
            | dataInicial | dataFinal  |
            | 01/01/2023  | 31/01/2023 |
            | 01/02/2023  | 28/02/2023 |
            | 01/03/2023  | 31/03/2023 |

    @grid
    Scenario: Verificar coluna 'Finalizado por'
        When eu visualizo a coluna 'Finalizado por' no grid
        Then deve exibir o atendente responsável pelo atendimento

    @grid @label
    Scenario: Ajustar label da coluna 'Finalizado por'
        When eu visualizo a coluna 'Finalizado por' no grid
        Then a label deve ser ajustada para 'Atendente responsável'
        