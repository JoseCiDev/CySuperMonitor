@imageSkuProduct
Feature: Alteração de Imagem de Produto
    Como um usuário atendente
    Eu quero criar, editar e remover um produto do orçamento
    Para validar se a alteração da imagem/sku do produto surtiu efeito

    @createBudget
    Scenario: Criar um orçamento com o produto Happy Theanine Pote 60 Caps 30g
        Given que estou na página de criação de orçamento
        When eu adiciono o produto "Happy Theanine Pote 60 Caps 30g"
        And eu salvo o orçamento
        Then o produto deve ser adicionado ao orçamento com sucesso
        And a imagem do produto deve ser exibida corretamente no selfcheckout com SKU "14585"


    @editBudget
    Scenario: Editar o produto no orçamento
        Given que estou na página de edição de orçamento
        And o orçamento contém o produto "Happy Theanine Pote 60 Caps 30g"
        When eu troco o produto por outro produto
        And eu salvo o orçamento
        Then o produto deve ser atualizado no orçamento com sucesso
        And a imagem do produto deve ser exibida corretamente no selfcheckout com SKU "14585"


    @removeProduct
    Scenario: Remover o produto do orçamento
        Given que estou na página de edição de orçamento
        And o orçamento contém o produto "Happy Theanine Pote 60 Caps 30g" com SKU "14585"
        When eu removo o produto do orçamento
        And eu salvo o orçamento
        Then o produto deve ser removido do orçamento com sucesso


    @validateImage
    Scenario Outline: Validar a imagem do produto no selfcheckout
        Given que estou na página de selfcheckout
        When eu inspeciono o elemento da imagem do produto
        Then o número de SKU deve ser "<sku>"

        Examples:
            | sku   |
            | 14585 |