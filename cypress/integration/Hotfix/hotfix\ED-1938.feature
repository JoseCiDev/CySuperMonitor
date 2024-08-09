Feature: Manter o estado dos botões de pausa e atividade extra ao pausar, retomar e gerar relatório
    Para garantir a consistência e precisão na contabilidade de horas extras
    Como um usuário do sistema
    Eu quero que o estado dos botões de pausa e atividade extra seja mantido corretamente
    E quero que o relatório de horas reflita o tempo correto de pausa e atividades extras

    Background: Usuário autenticado e com atividades em andamento
    Dado que o usuário está autenticado no sistema
    E o usuário tem uma atividade extra iniciada
    E o usuário tem a atividade pausada

    Scenario: Iniciar e finalizar a atividade extra
    Quando o usuário clica no botão de atividade extra para finalizar a atividade
    Então o botão de atividade extra deve mudar o estado para iniciar atividade extra
    E o sistema deve registrar o término da atividade extra
    Quando o usuário clica no botão de atividade extra novamente para iniciar uma nova atividade
    Então o botão de atividade extra deve mudar o estado para iniciado
    E o sistema deve criar um novo registro para a atividade extra

    Scenario: Pausar e despausar ficha de produção
    Quando o usuário clica no botão de pausa para despausar a atividade
    Então o botão de pausa deve mudar o estado para ativo
    E o sistema deve registrar o tempo de pausa
    Quando o usuário clica no botão de pausa novamente para pausar a atividade
    Então o botão de pausa deve mudar o estado para pausado
    E o sistema deve registrar o tempo de pausa

    Scenario: Verificar persistência do estado ao sair e retornar ao app
    Quando o usuário pausa a ficha e inicia atividade extra
    E o usuário sai do app
    E o usuário abre o app novamente
    Então o botão de pausa deve permanecer no estado pausado
    E o botão de atividade extra deve permanecer no estado iniciado ou finalizado conforme o estado anterior
    E o sistema deve impedir que as atividades sejam reiniciadas ou retomadas automaticamente

    Scenario: Conferir tempo de pausa e registros de atividades extras no relatório
    Quando o usuário administrador consulta o relatório do laboratório
    Então o relatório deve mostrar corretamente o tempo de pausa
    E o relatório deve incluir os registros das atividades extras, cada uma com seu tempo correspondente

    Scenario: Verificar contabilidade após múltiplas pausas e retomadas
Quando o usuário pausa e despausa a atividade várias vezes
E o usuário pausa e finaliza a atividade extra várias vezes
E o usuário administrador consulta o relatório do laboratório
Então o relatório deve mostrar corretamente o tempo total de pausa acumulado
E o relatório deve incluir todos os registros de atividades extras, cada uma com seu tempo correspondente
