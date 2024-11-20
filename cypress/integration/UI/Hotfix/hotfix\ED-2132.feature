Feature: Validação de Campos Obrigatórios no Processo de Pagamento

  Background:
    Given o usuário está na página de pagamento

  @focus @validation
  Scenario Outline: Foco e aviso ao deixar um campo obrigatório vazio
    Given o campo "<campo>" está vazio
    When o usuário tenta concluir o pagamento
    Then o foco do cursor deve ser levado ao campo "<campo>"
    And deve ser exibida a mensagem "Preencha este campo"

    Examples:
      | campo                  |
      | telefone               |
      | email                  |
      | nome                   |
      | data de nascimento     |
      | CPF                    |
      | CEP                    |
      | estado                 |
      | cidade                 |
      | bairro                 |
      | rua                    |
      | número da residência   |
      | confirmação de endereço|
      
  @success
  Scenario: Todos os campos preenchidos corretamente
    Given o usuário preenche todos os campos obrigatórios corretamente
    When o usuário tenta concluir o pagamento
    Then o pagamento deve ser processado com sucesso
    And nenhuma mensagem de erro deve ser exibida
