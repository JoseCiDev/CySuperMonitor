
@functional
Feature: Desvincular receita de atendimento encerrado

  Background:
    Given que eu estou logado como um usuário <usuario>

  @functional
  @screens
  Scenario Outline: Apresentar aviso ao desvincular receita de atendimento encerrado
    Given que eu estou na tela de <tela>
    And eu tenho uma receita vinculada a um <statusAtendimento>
    When eu tento desvincular a receita do atendimento
    Then eu devo ver um aviso informando que a receita está vinculada a um atendimento encerrado
    And um log da ação deve ser registrado

    Examples:
      | tela                  | usuario             | statusAtendimento |
      | importar receitas     | jeniffer.santos     | encerrado         |
      | gerenciar receitas    | jeniffer.santos     | encerrado         |
      | atendimento encerrado | alexsandra.ferreira | encerrado         |


@non_functional
Feature: Desvincular receita de atendimento em andamento

  Background:
    Given que eu estou logado como um usuário <usuario>

  # Performance ao desvincular receita de pedido fechado
  @performance
  Scenario: Apresentar aviso ao desvincular receita de atendimento em andamento
    Given que eu estou na tela de <tela>
    And eu tenho uma receita vinculada a um <statusAtendimento>
    When eu tento desvincular a receita do atendimento
    Then eu devo ver um aviso informando que a receita foi desvinculada com sucesso

    Examples:
      | tela                     | usuario             | statusAtendimento |
      | importar receitas        | jeniffer.santos     | em andamento      |
      | gerenciar receitas       | jeniffer.santos     | em andamento      |
      | atendimento em andamento | alexsandra.ferreira | em andamento      |



  # Verificar mensagem de aviso para desvincular receitas não vinculadas
  Scenario: Verificar mensagem de aviso para desvincular receitas não vinculadas
    Given que eu estou na tela de atendimento <tela>
    And eu tenho uma receita que não está vinculada a nenhum pedido
    When eu tento desvincular a receita
    Then eu devo ver um aviso informando que a receita não está vinculada a nenhum pedido
    And nenhum log deve ser registrado

    Examples:
      | tela                     |
      | importar receitas        |
      | gerenciar receitas       |
      | atendimento em andamento |
      | atendimento encerrado    |


  # Verificar mensagem de aviso para desvincular receitas vinculadas
  Scenario: Verificar mensagem de aviso para desvincular receitas não vinculadas
    Given que eu estou na tela de <tela>
    And eu tenho uma receita que está vinculada a atendimento confirmado
    When eu tento desvincular a receita
    Then eu devo ver um aviso informando que a receita já possui amarelinha e que será registrado um log
    And o texto da mensagem deve ser "Esta receita já possui amarelinha, um histórico desta ação foi salvo..", sem erros gramaticais
    And deve ser registrado um log da tentativa de desvincular

    Examples:
      | tela                     |
      | importar receitas        |
      | gerenciar receitas       |
      | atendimento em andamento |
      | atendimento encerrado    |