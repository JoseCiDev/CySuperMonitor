@gpe
Feature: Manutenção correta das datas de pagamento e atualização do status

    @credito @ux
    Scenario Outline: Atualização da data de última modificação do status de pagamento
    Dado que o cliente realizou um pagamento via cartão de crédito e o status foi atualizado com sucesso no GPE
    Quando o usuário do sistema atualiza o status do pagamento
    Então a data da última atualização do status de pagamento abaixo da informação de "Pago" não deve ser atualizada
    E a data original do pagamento do pedido não deve ser alterada

    @pix @ux
    Scenario Outline: Atualização da data de última modificação do status de pagamento
    Dado que o cliente realizou um pagamento via PIX e o status foi atualizado com sucesso no GPE
    Quando o usuário do sistema atualiza o status do pagamento
    Então a data da última atualização do status de pagamento abaixo da informação de "Pago" não deve ser atualizada
    E a data original do pagamento do pedido não deve ser alterada