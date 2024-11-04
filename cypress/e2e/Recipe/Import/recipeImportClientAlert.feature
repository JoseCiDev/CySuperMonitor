Feature: Importação de receitas

    Background:
        Given que estou logado no sistema  para importar receitas com cliente alerta

    Scenario: Importar receita
        When eu realizo a importação de uma receita sinalizada como cliente alerta
        Then os dados das receitas importadas com cliente alerta, devem ser capturados e exibidos corretamente