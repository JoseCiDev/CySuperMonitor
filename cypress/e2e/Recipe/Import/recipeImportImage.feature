Feature: Importação de receitas

    Background:
        Given que estou logado no sistema para importar receitas com imagem

    Scenario: Importar receita
        When eu realizo a importacao de uma receita com imagem em formato pdf
        When eu realizo a importacao de uma receita com imagem em formato jpg
        Then os dados das receitas importadas com imagem pdf, devem ser capturados e exibidos corretamente
        Then os dados das receitas importadas com imagem jpg, devem ser capturados e exibidos corretamente