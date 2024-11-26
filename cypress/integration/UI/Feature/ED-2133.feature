Feature: Envio automático de e-mail para solicitação de nota detalhada

    Como um usuário do sistema
    Eu quero que o sistema envie automaticamente um e-mail para a equipe de caixa
    Para evitar a necessidade de notificação manual ao solicitar nota detalhada

    Background:
        Given que o usuário está autenticado
        And a opção "Deseja Nota Detalhada" está visível na confirmação do pedido

    @emailFormat
    Scenario Outline: Validação do formato do e-mail enviado
        Given que a opção "Deseja Nota Detalhada" foi <estado_do_checkbox>
        When o usuário <acao> o pedido
        Then o assunto do e-mail deve ser no padrão "SOLICITAÇÃO DE NOTA DETALHADA - ORÇ (NÚMERO DO ORÇ) (NOME DO PACIENTE) - PROMETIDO P/ (FORMA DE ENVIO) (PROMETIDO)"
        And o corpo do e-mail deve conter "Cliente solicita o envio de nota detalhada"
        And o e-mail deve ser enviado para "caixasmart@essentia.com.br"

        Examples:
            | estado_do_checkbox | acao     |
            | marcada            | confirma |
            | marcada            | edita    |
            | marcada            | reabre   |

    @email-sent
    Scenario Outline: Envio de e-mail condicionado ao estado do checkbox
        Given que a opção "Deseja Nota Detalhada" está <estado_do_checkbox>
        When o usuário <acao> o pedido
        Then o e-mail deve <status_do_email> ser enviado para "caixasmart@essentia.com.br"

        Examples:
            | estado_do_checkbox | acao     | status_do_email |
            | marcada            | confirma |                 |
            | desmarcada         | confirma | não             |
            | marcada            | edita    |                 |
            | desmarcada         | edita    | não             |
            | marcada            | reabre   |                 |
            | desmarcada         | reabre   | não             |