Feature: Clonagem de receitas
  Como um atendente
  Quero clonar receitas a partir da tela de importação de receitas
  Para facilitar o processo de duplicação de receitas com dados semelhantes

  Background:
    Given que o usuário está logado no sistema de receitas

  Scenario: Clonar receita a partir da tela de importação de receitas
    Given que estou na tela de importação de receitas
    When eu busco uma receita específica
    And seleciono a opção de clonar a receita
    Then a receita deve ser clonada com sucesso
    And a receita clonada deve aparecer na lista de receitas importadas
