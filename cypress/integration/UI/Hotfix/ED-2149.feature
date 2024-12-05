# language: pt

@tarefa @logs @registro
Feature: Gerenciamento de Logs de Tarefas
    Para garantir que os logs das tarefas sejam precisos e completos,
    os usuários devem poder gerenciar e visualizar suas ações no log,
    confirmando que todas as interações estão sendo registradas corretamente.

    @entrada @pendencia @conferencia
    Scenario Outline: Registro de logs de tarefas com mensagens variadas
        Given que o usuário está na tela do orçamento
        And o pedido possui um estado válido para registros de <acao>
        When o usuário <acao>
        Then o log deve exibir "<mensagem>" com o horário, data e detalhes do usuário
        And a mensagem deve aparecer como o registro mais recente no log

        Examples:
            | orcamentoFilial | acao                                | mensagem                                                 |
            |                 | registra uma conferência de entrada | Conferência Realizada (Conferencia de Entrada)           |
            |                 | registra uma pendência de entrada   | Conferência De Entrada Pendente (Conferencia de Entrada) |
            |                 | resolve uma pendência de entrada    | Conferência Realizada (Conferencia de Entrada)           |
            |                 | registra uma conferência de saída   | Conferência Realizada (Conferencia de Saida)             |
            |                 | registra uma pendência de saída     | Conferência De Saída Pendente (Conferencia de Saida)     |
            |                 | resolve uma pendência de saída      | Conferência Realizada (Conferencia de Saida)             |

    @validacao @verificacao
    Scenario: Validar que todos os registros estão ordenados corretamente no log
        Given que o usuário está na tela do orçamento
        When o log é exibido
        Then os registros devem estar ordenados por data e hora de forma crescente
        And cada registro deve conter o nome do usuário que realizou a ação, data e hora


#
#36602 / 1313
#153201 / 5
#153384 / 5