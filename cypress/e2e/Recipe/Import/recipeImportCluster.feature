Feature: Importação de receitas

    Background:
        Given que estou logado no sistema  para importar receitas com cluster

    Scenario: Importar receita
        When eu realizo a importação de uma receita com o cluster selecionado de forma aleatória
        Then os dados das receitas importadas com cluster, devem ser capturados e exibidos corretamente