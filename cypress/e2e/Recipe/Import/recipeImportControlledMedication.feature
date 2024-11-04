Feature: Importação de receitas

    Background:
        Given que estou logado no sistema  para importar receitas com medicação controlada

    Scenario: Importar receita
        When eu realizo a importação de uma receita de medicação controlada
        Then os dados das receitas importadas com medicação controlada, devem ser capturados e exibidos corretamente