    # Feature: Distribuição de receitas conforme prescritor, cluster e atendente

    @focus     @prescritorC
    Scenario Outline: Receitas de prescritor classificado como C devem ser direcionadas ao cluster 3
        Given um prescritor com classificação <classificacao>
        And o cluster 3 está configurado para distribuição de receitas do prescritor classificado <classificacao>
        When eu importo uma receita com o nome do prescritor classificado como <classificacao>
        Then a receita deve ser atribuída ao cluster 3
        And a atendente do cluster 3 configurada na relação deve ser sugerida conforme regra de distribuição
        And quando a atendente atingiu o limite de receitas recebidas deve transbordar para a atendente do mesmo cluster
        And não deve distribuir para atendente de outro cluster

        Examples:
            | classificacao |
            | C             |

    #DANIEL COSTA BUCHWEITZ 1 SC 15125 C
    #JULIANO LEAL BURCKHARDT 1 PR 18298 C

    @limiteCluster3
    Scenario Outline: Limite de receitas por atendente do cluster 3
        Given o prescritor é classificado como <classificacao>
        And a receita está sendo direcionada ao cluster 3
        And a atendente já possui <limite_receitas> receitas atribuídas
        When eu importo uma nova receita para este prescritor
        Then a receita deve ser atribuída a outra atendente do mesmo cluster 3
        And o cluster 3 não deve transbordar para outro cluster
        And a atendente com menor número de receitas do mesmo cluster é sugerida na importação de receitas

        Examples:
            | classificacao | limite_receitas |
            | C             | 40              |

    @prescritorD
    Scenario Outline: Receitas de prescritor classificado como D devem ser direcionadas ao cluster 4
        Given um prescritor com classificação <classificacao>
        And o cluster 4 está configurado para distribuição de receitas do prescritor classificado <classificacao>
        When eu importo uma receita com o nome do prescritor classificado como <classificacao>
        Then a receita deve ser atribuída ao cluster 4
        And a atendente do cluster 4 configurada na relação deve ser sugerida conforme regra de distribuição
        And quando a atendente atingiu o limite de receitas recebidas deve transbordar para a atendente do mesmo cluster com menor número de receitas
        And quando atingir o limite de receitas para as atendentes do cluster 4 deve distribuir para atendente com menor número de receitas do cluster 3

        Examples:
            | classificacao |
            | D             |

    #DANILLO RAMALHO LEITE 1 PB 9367 D
    #PRISCILA SILVA SARKIS MOOR SANTOS 9 MT 6021 D

    @limiteCluster4
    Scenario Outline: Limite de receitas por atendente do cluster 4 e transbordo para outros clusters
        Given o prescritor é classificado como <classificacao>
        And a receita está sendo direcionada ao cluster 4
        And a atendente já possui <limite_receitas> receitas atribuídas
        When eu importo uma nova receita para este prescritor
        Then a receita deve ser atribuída a outra atendente do cluster 4
        And se todas as atendentes do cluster 4 já atingiram o limite de <limite_receitas> receitas recebidas deve transbordar para a atendente do mesmo cluster
        And quando atingir o limite de receitas para as atendentes do cluster 4 deve distribuir para atendente com menor número de receitas do cluster 3

        Examples:
            | classificacao | limite_receitas |
            | D             | 60              |

    @atendenteAusente
    Scenario: Atendente ausente durante a distribuição de receitas
        Given um prescritor com classificação <classificacao>
        And a atendente do cluster está configurada como ausente
        When eu importo uma receita para este prescritor
        Then deve ser apresentada a mensagem "Obs: A atendente deste médico está ausente, portanto, outra atendente será responsável por esta receita."
        And a receita deve ser distribuída para outra atendente do mesmo cluster com menor número de receitas recebidas

        Examples:
            | classificacao |
            | C             |
            | D             |

    #DANIEL COSTA BUCHWEITZ 1 SC 15125 C
    #JULIANO LEAL BURCKHARDT 1 PR 18298 C
    #PAULO HEITOR CARVALHO CAMARGO DE GODOI 1 GO 19101 C
    #MARIAH LOPES FERREIRA BARBARA 1 SP 172918 D

    @transbordoClusters
    Scenario Outline: Transbordo de receitas de prescritor classificado como D entre clusters 4 e 3
        Given um prescritor classificado como <classificacao>
        And todas as atendentes do cluster 4 atingiram o limite de <limite_cluster_4> receitas
        And todas as atendentes do cluster 3 atingiram o limite de <limite_cluster_3> receitas
        When eu importo uma nova receita para este prescritor
        Then deve sugerir uma atendente do cluster 4 ou 3 com menor número de receitas

        Examples:
            | classificacao | limite_cluster_4 | limite_cluster_3 |
            | D             | 60               | 40               |

    #DANILLO RAMALHO LEITE 1 PB 9367 D
    #PRISCILA SILVA SARKIS MOOR SANTOS 9 MT 6021 D

    @prescritorCSemTransbordo
    Scenario Outline: Receitas de prescritores classificados como C devem ser distribuídas apenas no cluster 3
        Given um prescritor classificado como <classificacao>
        And o cluster 3 está configurado para distribuição de receitas do prescritor classificado <classificacao>
        When eu importo uma receita com o nome do prescritor classificado como <classificacao>
        And as atendentes do cluster 3 estão no limite de receitas definido
        Then a receita deve ser atribuída ao cluster 3
        And o sistema não deve transbordar para outros clusters

        Examples:
            | classificacao |
            | C             |

    #DANIEL COSTA BUCHWEITZ 1 SC 15125 C
    #JULIANO LEAL BURCKHARDT 1 PR 18298 C

    @transbordoCluster4Para3
    Scenario Outline: Receita de prescritor classificado como D transborda para cluster 3
        Given um prescritor classificado como <classificacao>
        And o cluster 4 atingiu o limite de <limite_receitas> receitas para todas as atendentes
        When eu importo uma nova receita para este prescritor
        Then a receita deve ser transbordada para a atendente do cluster 3 com menor número de receitas
        And se o cluster 3 atingir o limite de <limite_cluster_3> receitas
        Then deve sugerir uma atendente do cluster 4 ou 3 com menor número de receitas

        Examples:
            | classificacao | limite_receitas | limite_cluster_3 |
            | D             | 60              | 40               |

    #DANILLO RAMALHO LEITE 1 PB 9367 D
    #PRISCILA SILVA SARKIS MOOR SANTOS 9 MT 6021 D

    @adicionarAtendenteCluster4
    Scenario: Adicionar atendente ao cluster 4 quando todos estão no limite
        Given um prescritor classificado como D
        And todas as atendentes do cluster 4 e do cluster 3 atingiram seus limites
        When uma nova atendente é adicionada ao cluster 4
        And eu importo uma nova receita para este prescritor
        Then a receita deve ser atribuída à nova atendente do cluster 4
    #DANILLO RAMALHO LEITE 1 PB 9367 D
    #PRISCILA SILVA SARKIS MOOR SANTOS 9 MT 6021 D

    @adicionarAtendenteCluster3
    Scenario: Adicionar atendente ao cluster 3 quando todos estão no limite
        Given um prescritor classificado como D
        And todas as atendentes do cluster 4 e do cluster 3 atingiram seus limites
        When uma nova atendente é adicionada ao cluster 3
        And eu importo uma nova receita para este prescritor
        Then a receita deve ser atribuída à nova atendente do cluster 3
    #DANIEL COSTA BUCHWEITZ 1 SC 15125 C
    #JULIANO LEAL BURCKHARDT 1 PR 18298 C

    @adicionarAtendenteClusters34
    Scenario: Adicionar atendente aos clusters 3 e 4 e distribuir conforme limite
        Given um prescritor classificado como D
        And todas as atendentes dos clusters 4 e 3 atingiram seus limites
        When uma nova atendente é adicionada ao cluster 4
        And uma nova atendente é adicionada ao cluster 3
        And eu importo uma nova receita para este prescritor
        Then a receita deve ser atribuída à atendente do cluster 4
        And se a atendente do cluster 4 atingir o limite
        Then a atendente do cluster 3 deve ser sugerida
    #DANIEL COSTA BUCHWEITZ 1 SC 15125 C
    ##DANIEL COSTA BUCHWEITZ 1 SC 15125 C 1 PR 18298 C
    #DANILLO RAMALHO LEITE 1 PB 9367 D
    #PRISCILA SILVA SARKIS MOOR SANTOS 9 MT 6021 D

    @cluster1PotencialAlto
    Scenario: Importar receita para cluster 1 com potencial alto e sugerir atendente
        Given o cluster 1 está configurado como potencial alto
        And um prescritor é classificado como qualquer classificação
        When eu importo uma receita para o cluster 1
        Then a atendente configurada na relação deve ser sugerida
        And se a atendente configurada já atingiu o limite de receitas
        Then outra atendente do mesmo cluster, com menor número de receitas, deve ser sugerida
        And se a atendente estiver ausente
        Then outra atendente do mesmo cluster, com menor número de receitas, deve ser sugerida

    @prescritorDSemRelacao
    Scenario: Prescritor D sem relação com nenhuma atendente
        Given um prescritor classificado como D
        And não há relação configurada entre o prescritor e qualquer atendente
        When eu importo uma receita para este prescritor
        Then a receita deve ser atribuída à atendente do cluster 4 com menor número de receitas
        And até as atendentes do cluster atingir o limite
        And depois que as atendentes do cluster atingir o limite deve
        Then deve distribuir entre as atendentes do cluster 3 e 4 com menor número de receitas
#PRISCILA SILVA SARKIS MOOR SANTOS 9 MT 6021 D
#ANDREIA CONCEICAO MILAN BROCHADO ANTONIOLLI 1 MS 2668 D
#BRUNO ALVES MENEZES DE LIMA 1 RJ 990248 D semRelacaoDefinida