Feature: Importação de receitas

    Background:
        Given que estou logado no sistema para importar receitas com contato principal

    Scenario: Importar receita
        When eu realizo a importação de uma receita sem contato principal
        Then os dados da receita sem contato principal devem ser exibidos corretamente