Feature: Transporte de email preenchido para a tela de atendimento

    @atendimento @email @selfcheckout @linkDePagamento
    Scenario Outline: Validação do transporte de email para a tela de atendimento
        Given que o cliente realiza um pagamento via <opcaoPagamento> no <tipoPagamento> em uma filial de <tipoFilial>
        When o cliente preenche o email e finaliza o pagamento
        Then o email preenchido <deveOuNao> ser apresentado na tela de atendimento
        And o endereço de email <deveOuNao> ser atualizado no banco de dados

        Examples:
            | opcaoPagamento | tipoPagamento   | tipoFilial               | deveOuNao |
            | ambos-credito  | selfcheckout    | medicamentos manipulados | deve      |
            | ambos-pix      | selfcheckout    | medicamentos injetáveis  | não deve  |
            | ambos-credito  | linkDePagamento | medicamentos manipulados | deve      |
            | ambos-pix      | linkDePagamento | medicamentos injetáveis  | não deve  |
            | credito        | selfcheckout    | medicamentos manipulados | deve      |
            | credito        | selfcheckout    | medicamentos injetáveis  | não deve  |
            | credito        | linkDePagamento | medicamentos manipulados | deve      |
            | credito        | linkDePagamento | medicamentos injetáveis  | não deve  |
            | pix            | selfcheckout    | medicamentos manipulados | deve      |
            | pix            | selfcheckout    | medicamentos injetáveis  | não deve  |
            | pix            | linkDePagamento | medicamentos manipulados | deve      |
            | pix            | linkDePagamento | medicamentos injetáveis  | não deve  |
