# language: pt

@dashboard
Feature: Dashboard de Receitas por Cluster
    Como um usuário
    Eu quero visualizar um dashboard de receitas
    Para acompanhar as receitas pendentes por cluster e priorizar o processamento

    Background:
    Dado que existem receitas com status "pendente" e "vinculado" em diferentes clusters
    E que estou autenticado no sistema
    E estou na página do dashboard de receitas
    E que o range de datas é de 10 dias

    @visualizacao
    Scenario: Visualizar receitas pendentes por cluster
    Quando eu acesso o dashboard de receitas
    Então eu devo ver a lista de clusters de 1 a 7
    E cada cluster deve mostrar a quantidade total de receitas pendentes
    E que o range de datas é de 10 dias
    E deve mostrar a data e hora da receita mais atrasada, sem considerar clientes alerta e urgente

    @filtro
    Scenario: Filtrar receitas vinculadas do dashboard
    Quando eu acesso o dashboard de receitas
    Então eu não devo ver receitas com status "vinculado"
    E apenas receitas com status "pendente" devem ser contabilizadas no dashboard

    @criacao
    Scenario Outline: Criar uma nova receita e atribuir a um cluster
            Dado que estou na página de criação de receita
            Quando eu crio uma nova receita com os seguintes dados:
            | nome           | cluster   | data           | status   |
            | <nome_receita> | <cluster> | <data_receita> | pendente |
        Então a nova receita deve ser contabilizada no cluster <cluster>

        Examples:
            | nome_receita | cluster | data_receita     |
            | Receita A    | 1       | 2024-08-20T14:00 |
            | Receita B    | 2       | 2024-08-19T10:30 |
            | Receita C    | 3       | 2024-08-18T09:15 |
            | Receita D    | 4       | 2024-08-17T08:00 |
            | Receita E    | 5       | 2024-08-16T07:45 |
            | Receita F    | 6       | 2024-08-15T06:30 |
            | Receita G    | 7       | 2024-08-14T05:15 |

    @edicao
    Scenario Outline: Editar uma receita e alterar seu cluster
        Dado que existe uma receita com status "pendente" no cluster <cluster_original>
        E estou na página de edição da receita
        Quando eu altero o cluster da receita de <cluster_original> para <novo_cluster>
        Então a receita deve ser contabilizada para o cluster <novo_cluster>
        E deve ser subtraída do cluster <cluster_original>

        Examples:
            | cluster_original | novo_cluster |
            | 1                | 2            |
            | 3                | 4            |
            | 5                | 6            |
            | 7                | 1            |

    @exclusao
    Scenario Outline: Excluir uma receita de um cluster
        Dado que existe uma receita com status "pendente" no cluster <cluster>
        Quando eu excluo a receita
        Então a quantidade total de receitas pendentes no cluster <cluster> deve ser reduzida

        Examples:
            | cluster |
            | 1       |
            | 2       |
            | 3       |
            | 4       |
            | 5       |
            | 6       |
            | 7       |

    @filtro
    Scenario Outline: Criar uma receita vinculada e verificar ausência no dashboard
            Dado que estou na página de criação de receita
            Quando eu crio uma nova receita com os seguintes dados:
            | nome           | cluster   | data           | status    |
            | <nome_receita> | <cluster> | <data_receita> | vinculado |
        Então a nova receita não deve ser contabilizada para o cluster <cluster>

        Examples:
            | nome_receita | cluster | data_receita     |
            | Receita H    | 1       | 2024-08-20T14:00 |
            | Receita I    | 2       | 2024-08-19T10:30 |
            | Receita J    | 3       | 2024-08-18T09:15 |
            | Receita K    | 4       | 2024-08-17T08:00 |
            | Receita L    | 5       | 2024-08-16T07:45 |
            | Receita M    | 6       | 2024-08-15T06:30 |
            | Receita N    | 7       | 2024-08-14T05:15 |

    @validacao
    Scenario Outline: Validar que receitas pendentes são contabilizadas corretamente no cluster
        Quando eu acesso o dashboard de receitas
        Então o total de receitas pendentes no cluster <cluster> deve ser <quantidade_pendente>
        E o dashboard deve refletir corretamente a quantidade de receitas pendentes no cluster <cluster>

        Examples:
            | cluster | quantidade_pendente |
            | 1       | 5                   |
            | 2       | 3                   |
            | 3       | 4                   |
            | 4       | 2                   |
            | 5       | 6                   |
            | 6       | 1                   |
            | 7       | 7                   |

    @clonagem
    Scenario: Clonar uma receita existente
            Dado que existe uma receita com os seguintes dados:
            | nome      | cluster | data             | status   |
            | Receita O | 3       | 2024-08-18T09:15 | pendente |
    E estou na página de receitas
    Quando eu clico em clonar receita
    Então uma nova receita deve ser criada com os mesmos dados da receita "Receita O"
    E essa nova receita deve aparecer na lista de receitas com status "pendente"
    E deve ser contabilizada no dashboard de receitas para o mesmo cluster da receita que foi clonada

    @edicao
    Scenario: Editar uma receita para uma data fora do range de 10 dias
    Dado que existe uma receita com status "pendente" no cluster 5
    E estou na página de edição da receita
    Quando eu altero a data da receita para "2024-07-01T09:15"
    Então essa receita não deve ser contabilizada no dashboard de receitas
    E o total de receitas pendentes no cluster 5 deve ser reduzido