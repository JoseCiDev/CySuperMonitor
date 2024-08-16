Feature: Seleção de aroma pelo cliente no self-checkout
    Assegurar que o cliente pode selecionar o aroma de uma fórmula no self-checkout,
    e que a seleção é refletida corretamente nas telas de atendimento e atendimento encerrado.

    @aroma
    Scenario Outline: Seleção e exibição de aroma pelo cliente
        Given que o cliente acessa o self-checkout para o orçamento número "<92531 / 5>"
        When o cliente seleciona o aroma "<aromaSelecionado>" para formula "<numeroFormula>"
        Then o aroma "<aromaSelecionado>" deve ser apresentado na tela de atendimento em andamento
        And o aroma "<aromaSelecionado>" deve ser apresentado na tela de atendimento encerrado
        And a frase "O cliente ainda não realizou a escolha dos sabores" deve ser exibida no atendimento

        Examples:
            | numeroFormula | aromaSelecionado |
            | 1             | Cacau            |

    @persistenciaAroma
    Scenario Outline: Persistência da seleção de aroma ao navegar no self-checkout
        Given que o cliente acessa o self-checkout para o orçamento número "93145 / 5"
        When o cliente seleciona o aroma "<aromaSelecionado>" para a fórmula número "<numeroFormula>"
        And o cliente navega para outra tela e retorna ao self-checkout
        Then o aroma "<aromaSelecionado>" deve estar selecionado no self-checkout

        Examples:
            | numeroFormula | aromaSelecionado |
            | 1             | Cacau            |
            | 2             | Laranja          |

    @persistenciaAroma
    Scenario: Persistência de aroma selecionado após fechar e reabrir o navegador
        Given que o cliente acessa o self-checkout para a fórmula número "5678"
        When o cliente seleciona o aroma "Baunilha"
        And o cliente fecha o navegador
        And o cliente reabre o navegador e acessa o self-checkout para a fórmula número "5678"
        Then o aroma "Baunilha" deve estar selecionado no self-checkout


    @formulas
    Scenario Outline: Exibição do número da fórmula e aroma no atendimento
        Given que o cliente selecionou o aroma "<aromaSelecionado>" para a fórmula número "<numeroFormula>"
        Then a tela de atendimento deve exibir a fórmula número "<numeroFormula>" e o aroma "<aromaSelecionado>"
        And a frase "O cliente ainda não realizou a escolha dos sabores" deve ser exibida no atendimento

        Examples:
            | numeroFormula | aromaSelecionado |
            | 1234          | Lavanda          |
            | 5678          | Baunilha         |
            | 91011         | Jasmim           |

    @semAroma
    Scenario: Atendimento sem seleção de aroma
        Given que o cliente acessa o self-checkout para a fórmula número "1234"
        When o cliente não seleciona nenhum aroma
        Then a frase "O cliente ainda não realizou a escolha dos sabores" deve ser exibida no atendimento
        And a tela de atendimento deve exibir apenas o número da fórmula "1234" sem aroma

    @persistenciaOpcao
    Scenario: Opções de aroma disponíveis após reabrir o self-checkout
        Given que o cliente acessa o self-checkout para a fórmula número "5678"
        And o cliente fecha o self-checkout
        When o cliente reabre o self-checkout
        Then as opções de aroma devem estar disponíveis para seleção

    @aromaMudanca
    Scenario: O cliente seleciona um aroma, muda para outro e verifica se a mudança é refletida corretamente
        Given que o cliente acessa o self-checkout para a fórmula número "1234"
        When o cliente seleciona o aroma "Lavanda"
        And o cliente muda a seleção para o aroma "Baunilha"
        Then a tela de atendimento deve exibir o aroma "Baunilha"
        And a tela de atendimento encerrado deve exibir o aroma "Baunilha"

    @cancelamentoAroma
    Scenario: O cliente seleciona um aroma e cancela a seleção antes de concluir a compra
        Given que o cliente acessa o self-checkout para a fórmula número "5678"
        When o cliente seleciona o aroma "Jasmim"
        And o cliente cancela a seleção do aroma antes de concluir a compra
        Then a tela de atendimento não deve exibir o aroma "Jasmim"
        And a tela de atendimento encerrado não deve exibir o aroma "Jasmim"

    @aromaDispositivos
    Scenario: O cliente seleciona um aroma em um dispositivo e acessa o self-checkout em outro dispositivo
        Given que o cliente acessa o self-checkout para a fórmula número "91011" em um dispositivo
        When o cliente seleciona o aroma "Rosa"
        And o cliente fecha o dispositivo e abre o self-checkout em outro dispositivo
        Then o aroma "Rosa" deve estar selecionado no self-checkout no novo dispositivo

    @falhaPersistencia
    Scenario: Testar a situação onde a persistência do aroma falha devido a um problema no servidor ou no navegador
        Given que o cliente acessa o self-checkout para a fórmula número "2345"
        When o cliente seleciona o aroma "Menta"
        And ocorre uma falha na persistência devido a um problema no servidor
        Then o sistema deve exibir uma mensagem de erro informando ao cliente sobre a falha na persistência
        And a tela de atendimento não deve exibir o aroma "Menta"

    @interrupcaoSessao
    Scenario: O cliente tem uma interrupção de conexão durante a seleção de aroma e depois reabre o self-checkout
        Given que o cliente acessa o self-checkout para a fórmula número "6789"
        When o cliente seleciona o aroma "Cítrico"
        And a conexão com a rede é interrompida
        And o cliente reabre o self-checkout após a interrupção
        Then o aroma "Cítrico" deve estar selecionado no self-checkout

    @semAroma
    Scenario: O cliente acessa o self-checkout e não seleciona nenhum aroma
        Given que o cliente acessa o self-checkout para a fórmula número "3456"
        When o cliente não seleciona nenhum aroma
        Then a frase "O cliente ainda não realizou a escolha dos sabores" deve ser exibida na tela de atendimento
        And a tela de atendimento encerrado deve exibir a frase "O cliente ainda não realizou a escolha dos sabores"


    @alteracaoFormula
    Scenario: O usuario muda para uma fórmula diferente após o cliente selecionar um aroma
        Given que o cliente acessa o self-checkout para a fórmula número "4567"
        When o cliente seleciona o aroma "Lavanda"
        And o usuario muda a fórmula do orçamento para outra fórmula com aroma "8901"
        Then a seleção do aroma "Lavanda" deve ser descartada
        And a tela de atendimento para a fórmula número "8901" deve não exibir o aroma "Lavanda"
        And deve exibir o novo aroma selecionado

    @limpezaCookies
    Scenario: O cliente seleciona um aroma e depois limpa cookies e dados do navegador
        Given que o cliente acessa o self-checkout para a fórmula número "5678"
        When o cliente seleciona o aroma "Baunilha"
        And o cliente limpa cookies e dados do navegador
        And o cliente reabre o self-checkout
        Then a seleção do aroma "Baunilha" deve ser removida
        And a tela de atendimento não deve exibir o aroma "Baunilha"

    @alteracaoFormulaComAroma
    Scenario: O usuario altera a fórmula para uma nova fórmula com aroma e seleciona o novo aroma
        Given que o cliente acessa o self-checkout para a fórmula número "1234"
        When o cliente seleciona o aroma "Lavanda"
        And o usuario altera a fórmula do orçamento para a fórmula número "5678"
        And o cliente seleciona o aroma "Baunilha" para a nova fórmula
        Then a tela de atendimento deve exibir a fórmula número "5678" com o aroma "Baunilha"
        And a tela de atendimento encerrado deve exibir a fórmula número "5678" com o aroma "Baunilha"

    @alteracaoFormulaSemAroma
    Scenario: O usuario altera a fórmula para uma nova fórmula sem aroma disponível
        Given que o cliente acessa o self-checkout para a fórmula número "91011"
        When o cliente seleciona o aroma "Rosa"
        And o usuario altera a fórmula para a fórmula número "11213" onde não há aroma disponível
        Then a tela de atendimento deve exibir a fórmula número "11213"
        And a tela de atendimento deve exibir a frase "O cliente ainda não realizou a escolha dos sabores"
        And o aroma "Rosa" deve ser removido da seleção

    @remocaoFormula
    Scenario: O usuario remove a fórmula e seleciona uma nova fórmula com aroma
        Given que o cliente acessa o self-checkout para a fórmula número "6789"
        When o cliente seleciona o aroma "Cítrico"
        And o usuario remove a fórmula número "6789"
        And o cliente seleciona a fórmula número "2345" com o aroma "Jasmim"
        Then a tela de atendimento deve exibir a fórmula número "2345" com o aroma "Jasmim"
        And a tela de atendimento encerrado deve exibir a fórmula número "2345" com o aroma "Jasmim"

    @alteracaoFormulaAromaDiferente
    Scenario: O usuario altera a fórmula para uma nova fórmula com aroma diferente
        Given que o cliente acessa o self-checkout para o orçamento número "5678"
        When o cliente seleciona o aroma "Baunilha"
        And o usuario altera a fórmula para a fórmula número "91011" com o aroma "Jasmim"
        Then a tela de atendimento deve exibir a fórmula número "91011" com o aroma "Jasmim"
        And a tela de atendimento encerrado deve exibir a fórmula número "91011" com o aroma "Jasmim"

    @alteracaoFormulaSemAromaComAromaNova
    Scenario: O usuario altera a fórmula para uma nova fórmula sem aroma e seleciona um novo aroma disponível
        Given que o cliente acessa o self-checkout para a fórmula número "1234"
        When o cliente seleciona o aroma "Lavanda"
        And o usuario altera a fórmula para a fórmula número "5678" onde não há aroma disponível
        And o cliente seleciona o aroma "Baunilha" na nova fórmula
        Then a tela de atendimento deve exibir a fórmula número "5678" com o aroma "Baunilha"
        And a tela de atendimento encerrado deve exibir a fórmula número "5678" com o aroma "Baunilha"

#
#92653 / 5
#92479 / 5
#92585 / 5
#93176 / 5
