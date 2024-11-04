Feature: Importação de receitas

    Background:
        Given que estou logado no sistema  para importar receitas urgentes

    Scenario: Importar receita
        When eu realizo a importação de uma receita urgentes
        Then os dados das receitas importadas urgentes, devem ser capturados e exibidos corretamente