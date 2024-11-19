Feature: Edição de Receitas e Pedidos com Controle por Senha

    Background:
        Given que o usuário do sistema tem acesso ao módulo de receitas e pedidos

    Scenario: Edição de Receita Confirmada por Administrador
        Given que o usuário do sistema deseja editar uma receita vinculado ao pedido confirmado
        When o usuário tenta editar a receita pelo módulo Gerenciar Receitas
        Then o sistema deve abrir uma modal solicitando a senha de autorização
        And a edição da receita deve ser liberada após a inserção da senha correta

    Scenario: Tentativa de Edição de Receita Confirmada por Usuário Não Administrador
        Given que o usuário do sistema não possui perfil administrador
        When o usuário tenta editar uma receita confirmada no módulo Gerenciar Receitas
        Then o sistema deve negar salvar a edição e exibir a modal solicitando autorização requerida

    Scenario: Edição de Receita Vinculada a Pedido Confirmado e Incluso
        Given que o pedido está confirmado e marcado como "Incluso"
        And o usuário do sistema com perfil administrador deseja editar a receita vinculada ao pedido
        When o usuário tenta editar a receita no módulo Atendimentos -> Encerrados
        Then o sistema deve abrir uma modal solicitando a senha de autorização
        And a edição da receita deve ser liberada após a inserção da senha correta

    Scenario: Edição de Pedido Confirmado por Administrador
        Given que o usuário do sistema com perfil administrador deseja editar um pedido confirmado
        And o pedido está na etapa de pedidos encerrados
        When o usuário tenta editar o pedido confirmado
        Then o sistema deve abrir uma modal solicitando a senha de autorização
        And a edição do pedido deve ser liberada após a inserção da senha correta

    Scenario: Reabertura de Pedido para Alteração de Informações
        Given que o pedido foi previamente confirmado
        And o usuário do sistema deseja alterar informações do pedido
        When o usuário reabre o pedido para alterar dados
        Then o sistema deve permitir a reabertura do pedido
        And as informações atualizadas devem ser salvas ao reconfirmar o pedido

    Scenario: Inclusão de Pedido Confirmado
        Given que o pedido foi confirmado
        When o usuário do sistema acessa a tela de atendimentos encerrados
        And seleciona a opção de "Inclusão"
        And marca como pedido incluso e salva
        Then o sistema deve marcar o pedido como incluso

    Scenario: Vinculação de Receita a Pedido
        Given que o usuário do sistema tem um pedido e uma receita
        When o usuário vincula a receita ao pedido
        Then o pedido deve passar a exibir as informações da receita vinculada

    Scenario: Edição de Receita por Administrador Após Inclusão
        Given que a o pedido foi confirmado e marcado como "Inclusa"
        And o usuário do sistema com perfil administrador deseja editar a receita
        When o usuário tenta editar a receita no gerenciar receitas
        Then o sistema deve solicitar a senha de autorização para liberar a edição
        And a edição deve ser permitida após a senha ser inserida corretamente
