# Explicação dos Cenários:
# Disparo de E-mail para Pedidos Urgentes Fechados:

# Cobre: Garante que quando um pedido de uma filial relevante for fechado como urgente, um e-mail será disparado para "caixa3@essentia.com.br" com o assunto e corpo corretos.
# Excluir Pedidos de Filiais Injetáveis da Regra:

# Cobre: Filiais injetáveis (13, 1313, 2013) devem ser excluídas da regra, garantindo que, mesmo que sejam fechadas como urgentes, não disparem o e-mail.
# Validação do Conteúdo do E-mail de Pedidos Urgentes:

# Cobre: Verifica que o e-mail enviado tem o conteúdo correto, incluindo o assunto "Pedido urgente" e o corpo com o número do pedido e a filial.
# Pedido Não Urgente Não Deve Enviar E-mail:

# Cobre: Assegura que pedidos que não foram marcados como urgentes não disparem nenhum e-mail, mesmo que a amarelinha seja fechada.
# Verificar que E-mail é Enviado Apenas para "caixa3@essentia.com.br":

# Cobre: Garante que o e-mail só será enviado para o destinatário correto e não para outros endereços de e-mail.

Feature: Sinalização e tratativa de faturamento para pedidos urgentes
    Para garantir que pedidos urgentes sejam tratados de forma eficiente,
    um e-mail deve ser disparado para a caixa de entrada correta quando pedidos urgentes são fechados, editados ou reconfirmados.

    Background:
        Given que o sistema está configurado para sinalizar pedidos urgentes
        And o e-mail de destino para sinalização é "caixa3@essentia.com.br"

    @urgentEmail
    Scenario Outline: Disparo de e-mail para pedidos urgentes fechados
        Given que um pedido da filial "<filial>" foi marcado como urgente
        When a amarelinha do pedido é fechada como urgente
        Then um e-mail deve ser enviado para "caixa3@essentia.com.br"
        And o assunto do e-mail deve ser "Pedido urgente"
        And o corpo do e-mail deve conter o número do pedido "<numeroPedido>" e a filial "<filial>"
        @urgentEmail

        Examples:
            | filial | numeroPedido |
            | 5      | 145524       |
            | 2000   | 99285        |
            | 1000   | 337655       |
            | 1020   | 17211        |
            | 1010   | 14685        |

    @injetaveisExclusao
    Scenario Outline: Excluir pedidos de filiais injetáveis da regra
        Given que um pedido urgente é registrado para a filial "<filial>"
        When a amarelinha do pedido "<numeroPedido>" é fechada como urgente
        Then o sistema não deve enviar nenhum e-mail para "caixa3@essentia.com.br"
        And o pedido deve seguir sem notificação externa

        Examples:
            | filial | numeroPedido |
            | 13     | 46394        |
            | 1313   | 35833        |
            | 2013   | 7191         |

    @assuntoCorpoEmail
    Scenario Outline: Validação do conteúdo do e-mail de pedidos urgentes
        Given que um pedido urgente da filial "<filial>" foi fechado
        When o sistema envia um e-mail de notificação
        Then o assunto do e-mail deve ser "Pedido urgente"
        And o corpo do e-mail deve incluir a mensagem "Pedido número: <numeroPedido>, Filial: <filial>"

        Examples:
            | filial | numeroPedido |
            | 1000   | 337654       |
            | 2000   | 99278        |
            | 5      | 145519       |

    @filialNaoUrgente
    Scenario Outline: Pedido não urgente não deve enviar e-mail
        Given que um pedido não foi marcado como urgente
        When a amarelinha do pedido é fechada
        Then o sistema não deve enviar nenhum e-mail para "caixa3@essentia.com.br"

        Examples:
            | filial | numeroPedido |
            | 5      | 145621       |

    @outroDestino
    Scenario Outline: Verificar que e-mail é enviado apenas para caixa3@essentia.com.br
        Given que um pedido urgente da filial "1000" foi fechado
        When o sistema tenta enviar um e-mail de notificação
        Then o destinatário do e-mail deve ser "caixa3@essentia.com.br"
        And o e-mail não deve ser enviado para nenhum outro endereço

        Examples:
            | filial | numeroPedido |
            | 1000   | 337675       |

    @edicaoPedido
    Scenario Outline: Disparo de e-mail após edição de pedido confirmado
        Given que um pedido da filial "<filial>" foi previamente confirmado
        When o usuário do sistema edita o pedido e salva as alterações
        Then um e-mail deve ser enviado para "caixa3@essentia.com.br"
        And o assunto do e-mail deve ser "Pedido urgente"
        And o corpo do e-mail deve incluir a mensagem "Pedido número: <numeroPedido>, Filial: <filial>"

        Examples:
            | filial | numeroPedido |
            | 1000   | 78901        |
            | 2000   | 89012        |
            | 5      | 90123        |

    @reaberturaPedido
    Scenario Outline: Disparo de e-mail após reabertura e reconfirmação de pedido
        Given que um pedido da filial "<filial>" foi previamente confirmado e fechado
        When o usuário do sistema reabre o pedido e o reconfirma
        Then um e-mail deve ser enviado para "caixa3@essentia.com.br"
        And o assunto do e-mail deve ser "Pedido urgente"
        And o corpo do e-mail deve incluir a mensagem "Pedido número: <numeroPedido>, Filial: <filial>"

        Examples:
            | filial | numeroPedido |
            | 1020   | 123456       |
            | 1010   | 654321       |
            | 2000   | 789012       |