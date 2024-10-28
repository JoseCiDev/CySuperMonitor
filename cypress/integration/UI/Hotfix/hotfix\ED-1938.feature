Feature: Manter o estado dos botões de pausa e atividade extra ao pausar, retomar e gerar relatório
    Para garantir a consistência e precisão na contabilidade de horas extras
    Como um usuário do sistema
    Eu quero que o estado dos botões de pausa e atividade extra seja mantido corretamente
    E quero que o relatório de horas reflita o tempo correto de pausa e atividades extras

    Background: Usuário autenticado e com atividades em andamento
    Given que o usuário está autenticado no sistema
    And o usuário tem uma atividade extra iniciada
    And o usuário tem a atividade pausada

    Scenario: Iniciar e finalizar a atividade extra
    When o usuário clica no botão de atividade extra para finalizar a atividade
    Then o botão de atividade extra deve mudar o estado para iniciar atividade extra
    And o sistema deve registrar o término da atividade extra
    When o usuário clica no botão de atividade extra novamente para iniciar uma nova atividade
    Then o botão de atividade extra deve mudar o estado para iniciado
    And o sistema deve criar um novo registro para a atividade extra

    Scenario: Pausar e despausar ficha de produção
    When o usuário clica no botão de pausa para despausar a atividade
    Then o botão de pausa deve mudar o estado para ativo
    And o sistema deve registrar o tempo de pausa
    When o usuário clica no botão de pausa novamente para pausar a atividade
    Then o botão de pausa deve mudar o estado para pausado
    And o sistema deve registrar o tempo de pausa

    Scenario: Verificar persistência do estado ao sair e retornar ao app
    When o usuário pausa a ficha e inicia atividade extra
    And o usuário sai do app
    And o usuário abre o app novamente
    Then o botão de pausa deve permanecer no estado pausado
    And o botão de atividade extra deve permanecer no estado iniciado ou finalizado conforme o estado anterior
    And o sistema deve impedir que as atividades sejam reiniciadas ou retomadas automaticamente

    Scenario: Conferir tempo de pausa e registros de atividades extras no relatório
    When o usuário administrador consulta o relatório do laboratório
    Then o relatório deve mostrar corretamente o tempo de pausa
    And o relatório deve incluir os registros das atividades extras, cada uma com seu tempo correspondente

    Scenario: Verificar contabilidade após múltiplas pausas e retomadas
    When o usuário pausa e despausa a atividade várias vezes
    And o usuário pausa e finaliza a atividade extra várias vezes
    And o usuário administrador consulta o relatório do laboratório
    Then o relatório deve mostrar corretamente o tempo total de pausa acumulado
    And o relatório deve incluir todos os registros de atividades extras, cada uma com seu tempo correspondente
