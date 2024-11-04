# Feature: Importação de receitas

#     Background:
#         Given que estou logado no sistema  para importar receitas com canal de recebimento, cluster, medicação controlada, urgente e cliente alerta

#     Scenario: Importar receita
#         When eu realizo a importação de uma receita com o canal de recebimento selecionado de forma aleatória
#         When eu realizo a importação de uma receita com o cluster selecionado de forma aleatória
#         When eu realizo a importação de uma receita de medicação controlada
#         When eu realizo a importação de uma receita urgente
#         When eu realizo a importação de uma receita sinalizada como cliente alerta
#         Then os dados das receitas importadas com canal de recebimento, cluster, medicação controlada, urgente e cliente alerta, devem ser capturados e exibidos corretamente