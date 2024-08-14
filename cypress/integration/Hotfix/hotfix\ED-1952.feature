Feature: Gestão de Registros de Conferência e Observações no Orçamento
    Para garantir que as conferências sejam registradas corretamente no orçamento
    Como um usuário do sistema
    Eu quero que os registros de conferência e suas pendências sejam refletidos nas observações do orçamento

    Background: Usuário autenticado com acesso a orçamentos
        Given que o usuário está autenticado no sistema
        And o usuário tem permissão para registrar conferências e observações em orçamentos

    Scenario Outline: Registrar conferência de inclusão e verificar observação no orçamento
        When o usuário da "<tipoConferencia>" registra conferência no orçamento
        Then uma observação "<observacaoRegistrada>" deve ser adicionada ao orçamento

        Examples:
            | tipoConferencia | observacaoRegistrada                           |
            | inclusão        | Inclusão realizada (Inclusao)                  |
            | entrada         | Conferência Realizada (Conferencia de Entrada) |
            | saída           | Conferência Realizada (Conferencia de saida)   |

    Scenario: Registrar pendência na conferência de entrada e verificar observação
        When o usuário da "conferência de entrada" registra uma pendência no orçamento
        Then uma observação "Conferência de Entrada Pendente (Conferencia de Entrada)" deve ser adicionada a observação do orçamento

    Scenario: Registrar pendência na conferência de saída e verificar observação
        When o usuário da "conferência de saída" registra uma pendência no orçamento
        Then uma observação "Conferência de Saída Pendente (Conferencia de Saida)" deve ser adicionada a observação do orçamento

    Scenario: Remover registro de conferência de inclusão e verificar remoção da observação
        Given que o usuário da "conferência de inclusão" registrou conferência no orçamento
        When o usuário desfaz o registro de conferência de inclusão
        Then a observação "Inclusão realizada (Inclusao)" deve ser removida do orçamento

    Scenario: Remover registro de conferência de entrada e verificar remoção da observação
        Given que o usuário da "conferência de entrada" registrou conferência no orçamento
        When o usuário desfaz o registro de conferência de entrada
        Then a observação "Conferência Realizada (Conferencia de Entrada)" deve ser removida do orçamento

    Scenario: Remover registro de conferência de saída e verificar remoção da observação
        Given que o usuário da "conferência de saída" registrou conferência no orçamento
        When o usuário desfaz o registro de conferência de saída
        Then a observação "Conferência Realizada (Conferencia de saida)" deve ser removida do orçamento

    Scenario Outline: Verificar que registros de conferência de atendimento e backoffice não afetam observações
        When o usuário do "<tipoConferencia>" registra conferência no orçamento
        Then nenhuma observação deve ser registrada no orçamento

        Examples:
            | tipoConferencia |
            | atendimento     |
            | backoffice      |

    Scenario: Confirmar orçamento e verificar observação de confirmação
        When o usuário confirma o orçamento
        Then uma observação "Amarelinha Gerada (Atendimento)" deve ser adicionada ao orçamento