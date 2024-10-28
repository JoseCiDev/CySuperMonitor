#/home/jose/projetos/CySuperMonitor/cypress/integration/Hotfix/hotfix\ED-1911.feature

@functional  @paymentStatus @serviceScreen @compoundedMedicationBudget
Feature: Atualização do Status de Pagamento na Tela de Atendimento para Orçamentos Manipulados

    Scenario: Atualização do status de pagamento dentro da tela de atendimento para orçamentos manipulados
        Given que o usuário atendente está autenticado no sistema
        And acessa a tela de atendimento
        And seleciona um orçamento com status de pagamento pendente no qual o cliente enviou o comprovante de pagamento.
        When o usuário clica no botão de atualizar status de pagamento
        Then o sistema deve retornar o status de pagamento pago
        And deve exibir corretamente a forma de pagamento e o endereço do cliente armazenado no fcerta
        And deve garantir que foi feito somente um pagamento para o orçamento

@functional @paymentStatus @serviceScreen @injectableBudget
Feature: Atualização do Status de Pagamento na Tela de Atendimento para Orçamentos Injetáveis

    Scenario: Atualização do status de pagamento dentro da tela de atendimento para orçamentos injetáveis
        Given que o usuário atendente está autenticado no sistema
        And acessa a tela de atendimento
        And seleciona um orçamento com status de pagamento pendente no qual o cliente enviou o comprovante de pagamento.
        When o usuário clica no botão de atualizar status de pagamento
        Then o sistema deve retornar o status de pagamento pago
        And deve exibir corretamente a forma de pagamento e o endereço do cliente armazenado no fcerta
        And deve garantir que foi feito somente um pagamento para o orçamento

@functional @paymentStatus @listOfServices @compoundedMedicationBudget
Feature: Atualização do Status de Pagamento na Lista de Atendimentos para Orçamentos Manipulados

    Scenario: Atualização do status de pagamento na lista de atendimentos para orçamentos manipulados
        Given que o usuário atendente está autenticado no sistema
        And acessa a lista de atendimentos
        And há dois orçamentos manipulados pagos no GPE com o mesmo cartão de crédito
        When o usuário clica no botão de atualizar status na lista de atendimentos
        Then o sistema deve exibir o status correto de pagamento para ambos os orçamentos
        And deve garantir que o status de ambos os orçamentos está atualizado para "pago"
        And deve garantir que foi feito somente um pagamento para cada orçamento

@functional @paymentStatus @listOfServices @injectableBudget
Feature: Atualização do Status de Pagamento na Lista de Atendimentos para Orçamentos Injetáveis

    Scenario: Atualização do status de pagamento na lista de atendimentos para orçamentos injetáveis
        Given que o usuário atendente está autenticado no sistema
        And acessa a lista de atendimentos
        And há dois orçamentos injetáveis pagos no GPE
        When o usuário clica no botão de atualizar status na lista de atendimentos
        Then o sistema deve exibir o status correto de pagamento para ambos os orçamentos
        And deve garantir que o status de ambos os orçamentos está atualizado para "pago"
        And deve garantir que foi feito somente um pagamento para cada orçamento

@regressive  @paymentStatus @compoundedMedicationBudget
Feature: Verificação de Atualização do Status de Pagamento para Orçamentos Manipulados

    Scenario: Verificação de atualização correta do status de pagamento na tela de atendimento para orçamentos manipulados
        Given que o erro na atualização do status de pagamento foi corrigido
        When o usuário atendente clica no botão de atualizar status de pagamento dentro da tela de atendimento para orçamentos manipulados
        Then o sistema deve retornar o status de pagamento atualizado corretamente
        And deve exibir corretamente a forma de pagamento e o endereço do cliente armazenado no fcerta
        And deve garantir que foi feito somente um pagamento para o orçamento

@regressive  @paymentStatus @injectableBudget
Feature: Verificação de Atualização do Status de Pagamento para Orçamentos Injetáveis

    Scenario: Verificação de atualização correta do status de pagamento na tela de atendimento para orçamentos injetáveis
        Given que o erro na atualização do status de pagamento foi corrigido
        When o usuário atendente clica no botão de atualizar status de pagamento dentro da tela de atendimento para orçamentos injetáveis
        Then o sistema deve retornar o status de pagamento atualizado corretamente
        And deve exibir corretamente a forma de pagamento e o endereço do cliente armazenado no fcerta
        And deve garantir que foi feito somente um pagamento para o orçamento