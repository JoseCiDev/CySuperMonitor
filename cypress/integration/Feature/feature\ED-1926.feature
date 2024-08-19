Feature: Seleção de aroma pelo cliente no self-checkout
    Assegurar que o cliente pode selecionar o aroma de uma fórmula no self-checkout,
    e que a seleção é refletida corretamente nas telas de atendimento e atendimento encerrado.

    @aroma
    Scenario Outline: Seleção e exibição de aroma pelo cliente
        Given que o cliente acessa o self-checkout
        When o cliente seleciona o aroma "<aromaSelecionado>" para formula "<numeroFormula>"
        Then o aroma "<aromaSelecionado>" deve ser apresentado na tela de atendimento em andamento
        And o aroma "<aromaSelecionado>" deve ser apresentado na tela de atendimento encerrado
        And a frase "O cliente ainda não realizou a escolha dos sabores! Se necessário atualize a página." deve ser exibida no atendimento
        # 92531 / 5
        Examples:
            | numeroFormula | aromaSelecionado |
            | 1             | Cacau            |

    @persistenciaAroma
    Scenario Outline: Persistência da seleção de aroma ao navegar no self-checkout
        Given que o cliente acessa o self-checkout
        When o cliente seleciona o aroma "<aromaSelecionado>" para a fórmula número "<numeroFormula>"
        And o cliente navega para outra tela e retorna ao self-checkout
        Then o aroma "<aromaSelecionado>" deve estar selecionado no self-checkout
        # 93145 / 5
        Examples:
            | numeroFormula | aromaSelecionado |
            | 1             | Cacau            |
            | 2             | Laranja          |

    @persistenciaAroma
    Scenario Outline: Persistência de aroma selecionado após fechar e reabrir o navegador
        Given que o cliente acessa o self-checkout
        When o cliente seleciona o aroma "<aromaSelecionado>" para fórmula "<numeroFormula>"
        And o cliente fecha o navegador
        And o cliente reabre o navegador e acessa o self-checkout
        Then o aroma "<aromaSelecionado>" para fórmula "<numeroFormula>" deve estar selecionado no self-checkout
        # 93145 / 5
        Examples:
            | numeroFormula | aromaSelecionado |
            | 1             | Uva              |
            | 2             | Tangerina        |

    @formulas
    Scenario Outline: Exibição do número da fórmula e aroma no atendimento
        Given que o cliente selecionou o aroma "<aromaSelecionado>" para a fórmula número "<numeroFormula>"
        Then a tela de atendimento deve exibir a fórmula número "<numeroFormula>" e o aroma "<aromaSelecionado>"
        And a frase "O cliente ainda não realizou a escolha dos sabores! Se necessário atualize a página." não deve ser exibida no atendimento
        #92653 / 5
        Examples:
            | numeroFormula | aromaSelecionado |
            | 5             | Hortelã          |

    @semAroma
    Scenario Outline: Atendimento selecionando sem aroma
        Given que o cliente acessa o self-checkout para a fórmula número "<numeroFormula>"
        When o cliente seleciona "<aromaSelecionado>" para fórmula "<numeroFormula>"
        Then a frase "O cliente ainda não realizou a escolha dos sabores! Se necessário atualize a página." deve ser exibida no atendimento
        #92479 / 5
        Examples:
            | numeroFormula | aromaSelecionado |
            | 1             | Sem Aroma        |

    @persistenciaOpcao
    Scenario Outline: Opções de aroma disponíveis após reabrir o self-checkout
        Given que o cliente acessa o self-checkout para a fórmula número "5678"
        And o cliente fecha o self-checkout
        When o cliente reabre o self-checkout
        Then as opções de aroma devem estar disponíveis para seleção
        #92585 / 5
        Examples:
            | numeroFormula | aromaSelecionado |
            | 1             | Menta            |

    @aromaMudanca
    Scenario: O cliente seleciona um aroma, muda para outro e verifica se a mudança é refletida corretamente
        Given que o cliente acessa o self-checkout
        When o cliente seleciona o aroma "Laranha"
        And o cliente muda a seleção para o aroma "Menta"
        Then a tela de atendimento deve exibir o aroma "Laranha"
        And a tela de atendimento encerrado deve exibir o aroma "Menta"
    #92585 / 5

    @aromaDispositivos
    Scenario: O cliente seleciona um aroma em um dispositivo e acessa o self-checkout em outro dispositivo
        Given que o cliente acessa o self-checkout em um dispositivo
        When o cliente seleciona o aroma "Framboesa"
        And o cliente fecha o dispositivo e abre o self-checkout em outro dispositivo
        Then o aroma "Framboesa" deve estar selecionado no self-checkout no novo dispositivo
    #92585 / 5

    @interrupcaoSessao
    Scenario: O cliente tem uma interrupção de conexão durante a seleção de aroma e depois reabre o self-checkout
        Given que o cliente acessa o self-checkout
        When o cliente seleciona o aroma "Morango"
        And a conexão com a rede é interrompida
        And o cliente reabre o self-checkout após a interrupção
        Then o aroma "Morango" deve estar selecionado no self-checkout
    #93176 / 5

    @alteracaoFormula
    Scenario: O usuario muda para uma fórmula diferente após o cliente selecionar um aroma
        Given que o cliente acessa o self-checkout
        When o cliente seleciona o aroma "Uva"
        And o usuario muda a fórmula do orçamento para outra fórmula com aroma "8901"
        Then a seleção do aroma "Uva" deve ser descartada
        And a tela de atendimento para a fórmula número "8901" deve não exibir o aroma "Uva"
        And deve exibir o novo aroma selecionado
    #64881 / 5000

    @limpezaCookies
    Scenario: O cliente seleciona um aroma e depois limpa cookies e dados do navegador
        Given que o cliente acessa o self-checkout
        When o cliente seleciona o aroma "Hortelã"
        And o cliente limpa cookies e dados do navegador
        And o cliente reabre o self-checkout
        Then a seleção do aroma "Hortelã" deve ser mantida
        And a tela de atendimento deve exibir o aroma "Hortelã"
    #327385 / 1000

    # @alteracaoFormulaComAroma
    # Scenario: O usuario altera a fórmula para uma nova fórmula com aroma e seleciona o novo aroma
    #     Given que o cliente acessa o self-checkout
    #     When o cliente seleciona o aroma "Lavanda"
    #     And o usuario altera a fórmula do orçamento para a fórmula número "5678"
    #     And o cliente seleciona o aroma "Baunilha" para a nova fórmula
    #     Then a tela de atendimento deve exibir a fórmula número "5678" com o aroma "Baunilha"
    #     And a tela de atendimento encerrado deve exibir a fórmula número "5678" com o aroma "Baunilha"
    #327324 / 1000

    # @alteracaoFormulaSemAroma
    # Scenario: O usuario altera a fórmula para uma nova fórmula sem aroma disponível
    #     Given que o cliente acessa o self-checkout para a fórmula número "91011"
    #     When o cliente seleciona o aroma "Rosa"
    #     And o usuario altera a fórmula para a fórmula número "11213" onde não há aroma disponível
    #     Then a tela de atendimento deve exibir a fórmula número "11213"
    #     And a tela de atendimento deve exibir a frase "O cliente ainda não realizou a escolha dos sabores! Se necessário atualize a página."
    #     And o aroma "Rosa" deve ser removido da seleção
    # #326900 / 1000

    # @remocaoFormula
    # Scenario: O usuario remove a fórmula e seleciona uma nova fórmula com aroma
    #     Given que o cliente acessa o self-checkout para a fórmula número "6789"
    #     When o cliente seleciona o aroma "Cítrico"
    #     And o usuario remove a fórmula número "6789"
    #     And o cliente seleciona a fórmula número "2345" com o aroma "Jasmim"
    #     Then a tela de atendimento deve exibir a fórmula número "2345" com o aroma "Jasmim"
    #     And a tela de atendimento encerrado deve exibir a fórmula número "2345" com o aroma "Jasmim"
    #327034 / 1000

    # @alteracaoFormulaAromaDiferente
    # Scenario: O usuario altera a fórmula para uma nova fórmula com aroma diferente
    #     Given que o cliente acessa o self-checkout para o orçamento número "5678"
    #     When o cliente seleciona o aroma "Baunilha"
    #     And o usuario altera a fórmula para a fórmula número "91011" com o aroma "Jasmim"
    #     Then a tela de atendimento deve exibir a fórmula número "91011" com o aroma "Jasmim"
    #     And a tela de atendimento encerrado deve exibir a fórmula número "91011" com o aroma "Jasmim"
    #91807 / 5

    # @alteracaoFormulaSemAromaComAromaNova
    # Scenario: O usuario altera a fórmula para uma nova fórmula sem aroma e seleciona um novo aroma disponível
    #     Given que o cliente acessa o self-checkout para a fórmula número "1234"
    #     When o cliente seleciona o aroma "Lavanda"
    #     And o usuario altera a fórmula para a fórmula número "5678" onde não há aroma disponível
    #     And o cliente seleciona o aroma "Baunilha" na nova fórmula
    #     Then a tela de atendimento deve exibir a fórmula número "5678" com o aroma "Baunilha"
    #     And a tela de atendimento encerrado deve exibir a fórmula número "5678" com o aroma "Baunilha"
#326582 / 1000
#90478 / 5
#91035 / 5
#326498 / 1000
