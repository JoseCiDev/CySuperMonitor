# Feature: Importação de Receitas

#     Background:
#         Given que estou logado no sistema

#     @importacao_pdf
#     Scenario Outline: Importar receitas em diferentes formatos
#         When eu realizo a importação de uma receita
#             | file | prescriber | patient | channelReceiptRecipe | attendantResponsibleRecipes | cluster | recipeType | textNoteRecipe | urgentRecipe | clientAlert | controlledMedication | customerPhone |
#         Then a receita deve ser importada com sucesso

#         Examples:
#             | file                  | prescriber | patient | channelReceiptRecipe | attendantResponsibleRecipes   | cluster  | recipeType | textNoteRecipe         | urgentRecipe | clientAlert | controlledMedication | customerPhone |
#             | img/recipeExample.pdf | 999990-SC  | 618484  | Whatsapp             | Graziele Fabiane Martins Wahl | Cluster1 | HasRecipe  | lorem ipsum... (gerar) | true         | true        | true                 | 48991888641   |
#             | img/recipeJpeg.jpg    | 888880-SC  | 123456  | Email                | Pedro Henrique Santos         | Cluster2 | HasRecipe  | lorem ipsum... (gerar) | false        | false       | false                | 48991234567   |

Feature: Validação de pagamento de pedido e consistência dos dados fornecidos

    Background:
        Given que estou logado no sistema

    Scenario: Validar pagamento de pedido, atualização do status e consistência dos dados fornecidos
        When eu realizo a importacao de uma receita
        Then a receita deve ser importada com sucesso
