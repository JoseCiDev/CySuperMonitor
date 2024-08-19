Feature: Validação dos novos códigos de envase de Estradiol no Selfcheckout

    @envase @estradiol @selfcheckout
    Background:
        Given que o cliente acessa o selfcheckout
        And o cliente recebeu um orçamento de medicamentos manipulados

    @envase @validacao_codigos
    Scenario Outline: Exibir e validar código de envase de Estradiol no selfcheckout
        Given que o orçamento inclui o produto "<descricao_produto>"
        When o cliente revisa o orçamento no selfcheckout
        Then o código de envase "<codigo>" é exibido corretamente
        And a forma farmacêutica é "gel transdérmico"
        And o número de doses é "240"
        And a perda de processo é calculada corretamente
        #64899 / 5000
        Examples:
            | descricao_produto                           | codigo |
            | Estradiol 0,2mg (0,02%) em gel 1 jato       | 54492  |
            | Estradiol 0,25mg (0,025%) em gel 1 jato     | 54493  |
            | Estradiol 0,3mg (0,03%) em gel 1 jato       | 54494  |
            | Estradiol 0,4mg (0,04%) em gel 1 jato       | 54495  |
            | Estradiol 0,6mg (0,06%) em gel 1 jato       | 54496  |
            | Estradiol 0,8mg (0,08%) em gel 1 jato       | 54497  |
            | Estradiol 1,2mg (0,12%) em gel 1 jato       | 54498  |
            | Estradiol 2,5mg (0,25%) em gel 1 jato       | 54499  |
            | Estradiol 1mg/Estriol 4mg em duolipo 1 jato | 54502  |
