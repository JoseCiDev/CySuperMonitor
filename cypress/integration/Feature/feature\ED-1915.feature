#/home/jose/projetos/CySuperMonitor/cypress/integration/Feature/feature\ED-1915.feature

Feature: Alteração de Imagem de Produto
    Como um usuário atendente
    Eu quero criar, editar e remover um produto do orçamento
    Para validar se a alteração da imagem/sku do produto surtiu efeito

    @productCreation
    Scenario: Criar um orçamento com o produto MONDZ 1 PACOTE 50G ESSENTIAL

        Given que estou na página de criação de orçamento
        When eu adiciono o produto "MONDZ 1 PACOTE 50G ESSENTIAL"
        And eu salvo o orçamento
        Then o produto deve ser adicionado ao orçamento com sucesso
        And a imagem do produto deve ser exibida corretamente no selfcheckout com SKU "14636"

    @productCreation
    Scenario: Criar um orçamento com o produto MG COMPLEX POTE 90 CAPS ESSENT

        Given que estou na página de criação de orçamento
        When eu adiciono o produto "MG COMPLEX POTE 90 CAPS ESSENT"
        And eu salvo o orçamento
        Then o produto deve ser adicionado ao orçamento com sucesso
        And a imagem do produto deve ser exibida corretamente no selfcheckout com SKU "15151"

    @productEdition
    Scenario: Editar o produto MONDZ 1 PACOTE 50G ESSENTIAL no orçamento

        Given que estou na página de edição de orçamento
        And o orçamento contém o produto "MONDZ 1 PACOTE 50G ESSENTIAL"
        When eu troco o produto por "MG COMPLEX POTE 90 CAPS ESSENT"
        And eu salvo o orçamento
        Then o produto deve ser atualizado no orçamento com sucesso
        And a imagem do produto deve ser exibida corretamente no selfcheckout com SKU "15151"

    @productEdition
    Scenario: Editar o produto MG COMPLEX POTE 90 CAPS ESSENT no orçamento

        Given que estou na página de edição de orçamento
        And o orçamento contém o produto "MG COMPLEX POTE 90 CAPS ESSENT"
        When eu troco o produto por "MONDZ 1 PACOTE 50G ESSENTIAL"
        And eu salvo o orçamento
        Then o produto deve ser atualizado no orçamento com sucesso
        And a imagem do produto deve ser exibida corretamente no selfcheckout com SKU "14636"

    @removalProduct
    Scenario: Remover o produto MONDZ 1 PACOTE 50G ESSENTIAL do orçamento

        Given que estou na página de edição de orçamento
        And o orçamento contém o produto "MONDZ 1 PACOTE 50G ESSENTIAL" com SKU "14636"
        When eu removo o produto do orçamento
        And eu salvo o orçamento
        Then o produto deve ser removido do orçamento com sucesso

    @removalProduct
    Scenario: Remover o produto MG COMPLEX POTE 90 CAPS ESSENT do orçamento

        Given que estou na página de edição de orçamento
        And o orçamento contém o produto "MG COMPLEX POTE 90 CAPS ESSENT" com SKU "15151"
        When eu removo o produto do orçamento
        And eu salvo o orçamento
        Then o produto deve ser removido do orçamento com sucesso

    @validation_image
    Scenario Outline: Validar a imagem do produto no selfcheckout

        Given que estou na página de selfcheckout
        When eu inspeciono o elemento da imagem do produto
        Then o número de SKU deve ser "<sku>"

        Examples:
            | sku   |
            | 14636 |
            | 15151 |