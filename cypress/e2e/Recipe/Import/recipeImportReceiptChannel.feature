Feature: Importação de receitas

    Background:
        Given que estou logado no sistema  para importar receitas com canal de recebimento

    Scenario: Importar receita
        When eu realizo a importação de uma receita com o canal de recebimento selecionado de forma aleatória
        Then os dados das receitas importadas com canal de recebimento, devem ser capturados e exibidos corretamente