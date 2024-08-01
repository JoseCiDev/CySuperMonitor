    #/home/jose/projetos/CySuperMonitor/cypress/integration/Hotfix/hotfix\ED-1921.feature

    Scenario: Não exibir dados pessoais e endereço ao efetuar pagamento via PIX pelo Easy para orçamentos de injetáveis
        Given que estou na página de pagamento via PIX pelo Easy
        And o orçamento é de injetáveis
        When eu clicar em "Efetuar pagamento"
        Then os dados pessoais do paciente não devem ser exibidos na tela de atendimento em andamento
        And o endereço do paciente não deve ser exibido na tela de atendimento em Andamento