Feature: Validação do Endereço no Selfcheckout para Orçamentos de Medicamentos Manipulados e Injetáveis

    @hotfix @medicamentos @selfcheckout @validacaoEndereco
    Background:
        Given que o cliente acessa o selfcheckout
        And que o cliente possui um orçamento de medicamento manipulados ou injetáveis

    @manipulados @enderecoCorreto
    Scenario: Exibir endereço do cadastro se preenchido corretamente
        Given que o cliente possui um orçamento de medicamentos manipulados
        And o endereço no cadastro está preenchido corretamente
        When o cliente vai realizar o pagamento
        Then o endereço do cadastro é exibido na tela de pagamento
        And o cliente pode usá-lo como sugestão

    @manipulados @inserirEndereco
    Scenario: Inserir e exibir novo endereço no selfcheckout
        Given que o cliente possui um orçamento de medicamentos manipulados
        And o endereço no cadastro está preenchido corretamente
        When o cliente insere um novo endereço no selfcheckout
        And o cliente finaliza o pagamento
        Then o novo endereço inserido é exibido na tela de atendimento

    @validacao @enderecoIncorreto
    Scenario Outline: Validar endereço incorreto no selfcheckout
        Given que o cliente possui um orçamento de medicamentos manipulados
        And o endereço no cadastro é "<endereco>"
        When o cliente vai realizar o pagamento
        Then o endereço não é exibido no selfcheckout como sugestão
        And o endereço apresentado no atendimento é o endereço inserido pelo cliente.

        Examples:
            | endereco                             |
            | todos os campos preenchidos com zero |

    @injetaveis @enderecoCadastro
    Scenario: Usar endereço do cadastro para medicamentos injetáveis
        Given que o cliente possui um orçamento de medicamentos injetáveis
        And o endereço no cadastro está preenchido corretamente
        When o cliente vai realizar o pagamento
        Then o endereço do cadastro não é exibido na tela de pagamento
        And o endereço apresentado no atendimento é o endereço cadastrado

    @sistema @alteracaoEndereco
    Scenario: Alterar endereço do cadastro do cliente
        Given que o usuário do sistema acessa o cadastro do cliente
        When o usuário altera o endereço do cliente
        Then o novo endereço é salvo no sistema
        And o cliente vê o novo endereço como sugestão, ao acessar o selfcheckout

    @validacao @camposObrigatorios
    Scenario Outline: Validar campos obrigatórios no selfcheckout
        Given que o cliente possui um orçamento de medicamentos manipulados
        When o cliente vai realizar o pagamento
        And preenche os campos "<cep>", "<rua>", "<numeroResidencia>","<bairro>", "<cidade>", "<estado>", "<numero>"
        Then o pagamento só é concluído se todos os campos obrigatórios estiverem preenchidos corretamente

        Examples:
            | cep         | rua                                  | numeroResidencia | bairro                                | cidade               | estado     |
            | "71515-785" | "SHIN QL 11 CONJUNTO 8"              | 3                | SETOR DE HABITACOES INDIVIDUAIS NORTE | "BRASILIA"           | "DF"       |
            | "71926-500" | "QUADRA 208"                         | 10               |                                       | "SUL (AGUAS CLARAS)" | "BRASILIA" | "DF" |
            | "73270-362" | "CONDOMINIO RECANTO DA SERRA RUA 4	" | 5                | NOVA COLINA                           | "SOBRADINHO "        | "BRASILIA" | "DF" |
