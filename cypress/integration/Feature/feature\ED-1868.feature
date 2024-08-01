# language: pt
Feature: Geração de Link de Pagamento

  Scenario: Cliente escolhe pagar com crédito
    Given que o cliente recebeu um link de pagamento
    When o cliente escolhe a forma de pagamento "crédito"
    Then o formulário de pagamento deve apresentar as opções de pagamento com cartão de crédito
    And o cliente realiza o pagamento com sucesso
    Then o cliente deve visualizar a mensagem "Pedido Recebido" na tela

  Scenario: Cliente escolhe pagar com Pix
    Given que o cliente recebeu um link de pagamento
    When o cliente escolhe a forma de pagamento "Pix"
    Then o formulário de pagamento deve apresentar a opção de pagamento via Pix
    And o cliente realiza o pagamento com sucesso
    Then o cliente deve visualizar a mensagem "Pedido Recebido" na tela

  Scenario: Usuário gera link de pagamento via Pix com apenas nome do cliente
    Given que o cliente está recebendo um link de pagamento e não tem um cadastro
    When o cliente escolhe a forma de pagamento "Pix"
    And o cliente informa telefone, email e endereço
    Then o link de pagamento é gerado com sucesso
    And o cliente realiza o pagamento usando o link de Pix
    And o cliente deve visualizar a mensagem "Pedido Recebido" na tela

  Scenario: Puxar endereço do Fcerta ao gerar link de pagamento
    Given que o cliente está recebendo um link de pagamento
    When o cliente escolhe a forma de pagamento "crédito"
    And o cliente já é cadastrado no Fcerta
    Then o último endereço cadastrado no Fcerta deve ser apresentado como sugestão no formulário

  Scenario: Envio de dados de endereço preenchidos no gateway de pagamento para o SuperMonitor
    Given que o cliente preencheu o endereço no formulário de pagamento
    When o pagamento é confirmado com sucesso
    Then os dados de endereço preenchidos devem ser automaticamente enviados para o SuperMonitor

  Scenario: Alteração de endereço antes da confirmação do pagamento
    Given que o cliente acessou o formulário de pagamento
    And preencheu o endereço de entrega inicial
    When o cliente altera o endereço de entrega para um novo endereço antes da confirmação do pagamento
    And o pagamento é confirmado com sucesso
    Then o sistema deve enviar os dados do novo endereço para o SuperMonitor
    And o usuário do SuperMonitor deve visualizar os dados do novo endereço em atendimento em andamento

  Scenario: Tentativa de alteração de endereço após a confirmação do pagamento
    Given que o cliente acessou o formulário de pagamento
    And preencheu o endereço de entrega
    And o pagamento foi confirmado com sucesso
    When o cliente tenta alterar o endereço de entrega
    Then o sistema não apresenta a tela para alteração do endereço
    And deve apresentar a mensagem "Pedido Recebido"
    And a tela de pedido finalizado com sucesso é exibida

  Scenario: Remoção de endereço antes da confirmação do pagamento
    Given que o cliente preencheu o endereço no formulário de pagamento
    And o cliente remove o endereço antes da confirmação do pagamento
    When o cliente tenta confirmar o pagamento
    Then uma mensagem de obrigatoriedade de preenchimento é exibida solicitando que os campos do endereço sejam preenchidos

  Scenario: Alteração de endereço pelo usuário do sistema e visualização pelo cliente e no SuperMonitor
    Given que o usuário do sistema altera o endereço de entrega no cadastro do cliente Fcerta
    And o cliente visualiza o novo endereço de entrega atualizado na tela de confirmação de pedido
    When o cliente realiza o pagamento do pedido
    Then o novo endereço de entrega é apresentado no registro do pagamento no SuperMonitor em atendimentos em andamento

  Scenario: Cliente não cadastrado visualiza campos de endereço para preenchimento
    Given que o cliente não está cadastrado no sistema
    When o cliente acessa a página de finalização de compra
    Then o cliente deve visualizar os campos "cep", "endereço", "número", "complemento", "bairro", "uf", "município" e "uf" para preenchimento

  Scenario: Cliente preenche campos de endereço obrigatórios
    Given que o cliente está preenchendo o formulário de endereço para entrega
    When o cliente tenta prosseguir sem preencher os campos "cep", "endereço", "número", "complemento", "bairro", "uf" e "município"
    Then o sistema deve impedir a continuação e destacar os campos "cep", "endereço", "número", "complemento", "bairro", "uf" e "município" como obrigatórios
    