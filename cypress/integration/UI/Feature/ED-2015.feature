# Feature: dashboard de atendimentos
# Essa feature descreve o comportamento do dashboard que exibe os atendimentos pendentes,
# Dúvidas técnicas e Atendimentos Urgentes por cluster, baseado na data de envio do orçamento pelo BackOffice.

@dashboard @atendimentosPendentes @clusters
Feature: Exibir Dashboard do Atendimento por Clusters

    Background:
        Given que estou logado no sistema como um usuário autorizado
        And estou na página "Dashboard de Atendimentos"

    @atualizar @recarregarAutomaticamente
    Scenario: Atualizar automaticamente o dashboard a cada 5 minutos
        Given que estou visualizando o dashboard de atendimentos
        When espero por 5 minutos
        Then o dashboard deve ser atualizado automaticamente

    @menu @ui
    Scenario: Minimizar o menu lateral ao entrar no dashboard
        Given que naveguei até o dashboard de atendimentos
        Then o menu lateral deve ser minimizado automaticamente

    @atendimentosPendentes @VisualizarCluster
    Scenario Outline: Exibir dados de clusters, incluindo atendimentos pendentes e dúvidas técnicas
        Given que estou visualizando o dashboard de atendimentos
        When o intervalo de datas é definido como "<intervaloDatas>"
        Then devo ver os clusters 1, 2, 3, 4, 6, 7, 10, 12, 13 e 14
        And o cluster "<cluster>" deve exibir:
            | campo                         | valor                       |
            | Atend. Pendentes              | <atendimentosPendentes>     |
            | Atend. Aguardando DT          | <DuvidasTecnicasPendentes>  |
            | Atend. Urgentes               | <receitasUrgentes>          |
            | Data do Orçamento Mais Antigo | <dataOrcamentoMaisAtrasado> |
        And a contagem "Atend. Aguardando DT" não deve ser incluída em "Atend. Pendentes"
        And os "Atend. Urgentes" devem estar destacadas em vermelho

        Examples: Dados dos Clusters para Atendimentos Pendentes
            | intervaloDatas | cluster | atendimentosPendentes | DuvidasTecnicasPendentes | receitasUrgentes | dataOrcamentoMaisAtrasado |
            | 10 dias        | 1       | 15                    | 5                        | 3                | 01/09/2024                |
            #425360<>110726/5
            | 10 dias        | 2       | 10                    | 2                        | 1                | 02/09/2024                |
            | 10 dias        | 3       | 20                    | 8                        | 0                | 03/09/2024                |
            | 10 dias        | 4       | 12                    | 3                        | 2                | 01/09/2024                |
            | 10 dias        | 6       | 18                    | 4                        | 5                | 04/09/2024                |
            | 10 dias        | 7       | 18                    | 4                        | 5                | 04/09/2024                |
            | 10 dias        | 10      | 18                    | 4                        | 5                | 04/09/2024                |
            | 10 dias        | 12      | 18                    | 4                        | 5                | 04/09/2024                |
            | 10 dias        | 13      | 18                    | 4                        | 5                | 04/09/2024                |
            | 10 dias        | 14      | 18                    | 4                        | 5                | 04/09/2024                |

    @totaisGlobais @verResumo
    Scenario: Exibir total global de atendimentos pendentes sem DT pendente
        Given que estou no dashboard de atendimentos
        When todas as dúvidas técnicas são resolvidas
        Then o total global de atendimentos pendentes deve incluir aqueles marcados como urgentes
        And deve excluir dúvidas técnicas não resolvidas

    @receitasUrgentes
    Scenario Outline: Destacar atendimentos Urgentes em vermelho
        Given que estou no dashboard de atendimentos
        Then as receitas marcadas como "Urgentes" devem aparecer destacadas em vermelho para o cluster "<cluster>"

        Examples:
            | cluster |
            | 1       |
            | 2       |
            | 3       |
            | 4       |
            | 6       |
            | 7       |
            | 10      |
            | 12      |
            | 13      |
            | 14      |

    @injetaveis @clusterSpecifico
    Scenario Outline: Exibir dados do cluster de injetáveis separadamente
        Given que estou visualizando o dashboard de atendimentos
        Then o cluster de injetáveis "<injetaveisCluster>" deve exibir:
            | campo                         | injetaveisCluster           |
            | Atend. Pendentes              | <13>                        |
            | Atend. Aguardando DT          | <13>                        |
            | Atendimentos Urgentes         | <13>                        |
            | Atend. Pendentes              | <14>                        |
            | Atend. Aguardando DT          | <14>                        |
            | Atendimentos Urgentes         | <14>                        |
            | Data do Orçamento Mais Antigo | <dataOrcamentoMaisAtrasado> |
