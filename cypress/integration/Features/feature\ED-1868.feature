# language: pt
Feature: Geração de Link de Pagamento

  Scenario: Cliente escolhe pagar com crédito
    Given que o cliente recebeu um link de pagamento
    When o cliente escolhe a forma de pagamento "crédito"
    Then o formulário de pagamento deve apresentar as opções de pagamento com cartão de crédito
    And o cliente realiza o pagamento com sucesso
    Then o cliente deve visualizar a mensagem "Pagamento Realizado com Sucesso" na tela
72238/5

  Scenario: Cliente escolhe pagar com Pix
    Given que o cliente recebeu um link de pagamento
    When o cliente escolhe a forma de pagamento "Pix"
    Then o formulário de pagamento deve apresentar a opção de pagamento via Pix
    And o cliente realiza o pagamento com sucesso
    Then o cliente deve visualizar a mensagem "Pagamento Realizado com Sucesso" na tela

  Scenario: Usuário gera link de pagamento via Pix com apenas nome do cliente
    Given que o cliente está recebendo um link de pagamento e não tem um cadastro
    When o cliente escolhe a forma de pagamento "Pix"
    And o cliente informa telefone, email e endereço
    Then o link de pagamento é gerado com sucesso
    And o cliente realiza o pagamento usando o link de Pix
    And o cliente deve visualizar a mensagem "Pagamento Realizado com Sucesso" na tela

  Scenario: Puxar endereço do Fcerta ao gerar link de pagamento
    Given que o cliente está recebendo um link de pagamento
    When o cliente escolhe a forma de pagamento "crédito"
    And o cliente já é cadastrado no Fcerta
    Then o último endereço cadastrado no Fcerta deve ser apresentado como sugestão no formulário

  Scenario: Envio de dados de endereço preenchidos no gateway de pagamento para o SuperMonitor
    Given que o cliente preencheu o endereço no formulário de pagamento
    When o pagamento é confirmado com sucesso
    Then os dados de endereço preenchidos devem ser automaticamente enviados para o SuperMonitor

  Scenario: Cliente não cadastrado visualiza campos de endereço para preenchimento
    Given que o cliente não está cadastrado no sistema
    When o cliente acessa a página de finalização de compra
    Then o cliente deve visualizar os campos "cep", "endereço", "número", "complemento", "bairro", "uf", "município" e "uf" para preenchimento

  Scenario: Cliente preenche campos de endereço obrigatórios
    Given que o cliente está preenchendo o formulário de endereço para entrega
    When o cliente tenta prosseguir sem preencher os campos "cep", "endereço", "número", "complemento", "bairro", "uf" e "município"
    Then o sistema deve impedir a continuação e destacar os campos "cep", "endereço", "número", "complemento", "bairro", "uf" e "município" como obrigatórios

