Feature: Importação de receitas

    Background:
        Given que estou logado no sistema para importar receitas com paciente

    Scenario: Importar receita
        When eu realizo a importacao de uma receita com paciente selecionado aleatoriamente
        Then os dados das receitas importadas com paciente, devem ser capturados e exibidos corretamente