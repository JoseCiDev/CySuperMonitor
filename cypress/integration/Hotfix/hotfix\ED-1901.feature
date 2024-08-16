#/home/jose/projetos/CySuperMonitor/cypress/integration/Hotfix/feature\ED-1901.feature

@functional @createBudget
Feature: Criação de Orçamento

    Scenario Outline: Criação de orçamento 64260/5000 com várias fórmulas e ativos
        Given que o usuário atendente está autenticado no sistema
        And acessa a página de criação de orçamento
        And adiciona uma nova fórmula ao orçamento
        And seleciona os ativos para a fórmula farmacêutica <formaFarmaceutica>
        And especifica a quantidade de ativos <quantidadeAtivos>
        When o usuário confirma a criação do orçamento
        Then o sistema deve salvar o orçamento com as fórmulas e ativos selecionados
        And exibir a quantidade correta de medicamento no template de orçamento no atendimento, somando perda de <perdaEmbalagem> por embalagem e <perdaMoinho> do moinho, ao valor do contém informado ao criar orçamento.
        And exibir a quantidade correta de medicamento no template de orçamento no selfcheckout, somando perda de <perdaEmbalagem> por embalagem e <perdaMoinho> do moinho, ao valor do contém informado ao criar orçamento., ao valor do contém informado ao criar orçamento.

        Examples:
            | formaFarmaceutica | quantidadeAtivos | perdaEmbalagem | perdaMoinho |
            | Duo Lipo          | 2                | 3              | 3           |
            | Duo Lipo          | 3                | 3              | 3           |
            | Duo Lipo          | 4                | 3              | 3           |


@functional @editBudget
Feature: Edição de Orçamento

    Scenario Outline: Edição de um orçamento existente
        Given que o usuário atendente está autenticado no sistema
        And acessa a página de edição de orçamento
        And seleciona um orçamento existente para alterar
        When adiciona uma nova fórmula <formaFarmaceutica> ao orçamento
        And remove um ativo existente
        And ajusta a quantidade de ativos para <quantidadeAtivos>
        And confirma a edição do orçamento
        Then o sistema deve salvar as alterações feitas no orçamento
        And exibir a quantidade correta de medicamento no template de orçamento no atendimento, somando perda de <perdaEmbalagem> por embalagem e <perdaMoinho> do moinho, ao valor do contém informado ao criar orçamento.
        And exibir a quantidade correta de medicamento no template de orçamento no selfcheckout, somando perda de <perdaEmbalagem> por embalagem e <perdaMoinho> do moinho, ao valor do contém informado ao criar orçamento.

        Examples:
            | formaFarmaceutica | quantidadeAtivos | perdaEmbalagem | perdaMoinho |
            | Duo Lipo          | 2                | 3              | 3           |
            | Duo Lipo          | 3                | 3              | 3           |


@functional @formulaRejection
Feature: Rejeição de Fórmulas ou Ativos de Orçamento

    Scenario: Rejeição de fórmulas ou ativos de um orçamento
        Given que o usuário atendente está autenticado no sistema
        And acessa a página de edição de orçamento
        And seleciona um orçamento existente para editar
        And remove uma <formaFarmaceutica> do orçamento
        When o usuário confirma a remoção
        Then o sistema deve salvar as alterações feitas no orçamento
        And exibir a quantidade correta de medicamento no template de orçamento no atendimento, somando perda de <perdaEmbalagem> por embalagem e <perdaMoinho> do moinho, ao valor do contém informado ao criar orçamento.
        And exibir a quantidade correta de medicamento no template de orçamento no selfcheckout, somando perda de <perdaEmbalagem> por embalagem e <perdaMoinho> do moinho, ao valor do contém informado ao criar orçamento.

        Examples:
            | formaFarmaceutica | perdaEmbalagem | perdaMoinho |
            | Duo Lipo          | 3              | 3           |
            | Duo Lipo          | 3              | 3           |
            | Duo Lipo          | 3              | 3           |
            | Duo Lipo          | 3              | 3           |


@regressive @amountOfMedicine
Feature: Verificação de Quantidade de Medicamento

    Scenario Outline: Verificação da quantidade de medicamento no template de orçamento após criação
        Given que um novo orçamento foi criado com várias fórmulas e ativos, contendo <numeroEmbalagens> embalagens
        When o usuário visualiza o orçamento no template de orçamento no atendimento
        And no template de orçamento no selfcheckout
        Then a quantidade de medicamento exibida deve estar correta, sem considerar a perda da embalagem e do moinho
        And a soma da perda da embalagem e do moinho deve ser considerada para a forma farmacêutica <formaFarmaceutica>

        Examples:
            | numeroEmbalagens | formaFarmaceutica | perdaEmbalagem | perdaMoinho |
            | 1                | Duo Lipo          | 3              | 3           |
            | 2                | Duo Lipo          | 3              | 3           |
            | 3                | Duo Lipo          | 3              | 3           |
            | 4                | Duo Lipo          | 3              | 3           |
