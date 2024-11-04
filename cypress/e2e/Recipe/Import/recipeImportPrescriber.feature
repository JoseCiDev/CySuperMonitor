Feature: Importação de receitas

    Background:
        Given que estou logado no sistema para importar receitas com prescritor

    Scenario: Importar receita
        When eu realizo a importacao de uma receita com prescritor potencial "AA"
        Then os dados das receitas importadas com prescritor, devem ser capturados e exibidos corretamente