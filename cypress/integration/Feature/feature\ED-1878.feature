#/home/jose/projetos/CySuperMonitor/cypress/integration/Feature/feature\ED-1878.feature

@funcional @visualizacao @orcamento
Feature: Exibição do Valor do Orçamento na Tela de Atendimento

    Scenario: Exibição do valor do orçamento na tela de visualização do atendimento
        Given que o usuário atendente está autenticado no sistema
        And acessa a tela de visualização do atendimento
        When visualiza um orçamento
        Then o valor do orçamento deve ser exibido em reais acima da informação de débito e crédito do cliente.


@funcional @classificacao @atendimentosAndamento
Feature: Classificação do Valor do Orçamento na tela de Atendimentos em Andamento

    Scenario Outline: Classificação do valor do orçamento na tela de atendimentos em andamento
        Given que o usuário atendente está autenticado no sistema
        And acessa a tela de atendimentos em andamento
        When visualiza um orçamento com valor <valorOrcamento>
        Then o ícone exibido deve ser <icone>

        Examples:
            | valorOrcamento | icone    |
            | 300.00         | dinheiro |
            | 750.00         | ouro     |
            | 2000.00        | diamante |


@funcional @classificacao @buscasPagamentos
Feature: Classificação do Valor do Orçamento na Grid de Pagamentos no Módulo de Buscas

    Scenario Outline: Classificação do valor do orçamento na grid de pagamentos no módulo de buscas
        Given que o usuário atendente está autenticado no sistema
        And acessa a grid de pagamentos no módulo de buscas
        When visualiza um orçamento com valor <valorOrcamento>
        Then o ícone exibido deve ser <icone>

        Examples:
            | valorOrcamento | icone    |
            | 300.00         | dinheiro |
            | 750.00         | ouro     |
            | 2000.00        | diamante |


@funcional @classificacao @backofficeAndamento
Feature: Classificação do Valor do Orçamento na Grid de Backoffice em Andamento

    Scenario Outline: Classificação do valor do orçamento na grid da tela de backoffice em andamento
        Given que o usuário atendente está autenticado no sistema
        And acessa a grid da tela de backoffice em andamento
        When visualiza um orçamento com valor <valorOrcamento>
        Then o ícone exibido deve ser <icone>

        Examples:
            | valorOrcamento | icone    |
            | 300.00         | dinheiro |
            | 750.00         | ouro     |
            | 2000.00        | diamante |


@funcional @criacao @orcamento
Feature: Criação de Orçamento com Valor e Classificação Correta

    Scenario Outline: Criação de orçamento com valor e classificação correta
        Given que o usuário atendente está autenticado no sistema
        And acessa a tela de criação de orçamento
        When cria um orçamento com valor <valorOrcamento>
        Then o valor do orçamento deve ser exibido em reais acima da informação de débito e crédito do cliente.
        And o ícone exibido deve ser <icone>

        Examples:
            | valorOrcamento | icone    |
            | 300.00         | dinheiro |
            | 750.00         | ouro     |
            | 2000.00        | diamante |


@funcional @edicao @orcamento
Feature: Edição de Orçamento Alterando o Valor e Classificação Correta

    Scenario Outline: Edição de orçamento alterando o valor e classificação correta
        Given que o usuário atendente está autenticado no sistema
        And acessa a tela de edição de orçamento
        When edita um orçamento existente alterando o valor para <valorOrcamento>
        Then o valor do orçamento deve ser exibido em reais acima da informação de débito e crédito do cliente.
        And o ícone exibido deve ser <icone>

        Examples:
            | valorOrcamento | icone    |
            | 300.00         | dinheiro |
            | 750.00         | ouro     |
            | 2000.00        | diamante |


@funcional @remocao @orcamento
Feature: Remoção de Produtos do Orçamento Alterando o Valor e Classificação Correta

    Scenario Outline: Remoção de produtos do orçamento alterando o valor e classificação correta
        Given que o usuário atendente está autenticado no sistema
        And acessa a tela de edição de orçamento
        When remove produtos de um orçamento existente alterando o valor para <valorOrcamento>
        Then o valor do orçamento deve ser exibido em reais acima da informação de débito e crédito do cliente.
        And o ícone exibido deve ser <icone>

        Examples:
            | valorOrcamento | icone    |
            | 300.00         | dinheiro |
            | 750.00         | ouro     |
            | 2000.00        | diamante |


@funcional @desconto @orcamento
Feature: Desconto em Produtos do Orçamento Alterando o Valor e Classificação Correta

    Scenario Outline: Desconto em produtos do orçamento alterando o valor e classificação correta
        Given que o usuário atendente está autenticado no sistema
        And acessa a tela de edição de orçamento
        When Cede desconto a produtos de um orçamento existente alterando o valor para <valorOrcamento>
        Then o valor do orçamento deve ser exibido em reais acima da informação de débito e crédito do cliente.
        And o ícone exibido deve ser <icone>

        Examples:
            | valorOrcamento | icone    |
            | 300.00         | dinheiro |
            | 750.00         | ouro     |
            | 2000.00        | diamante |


@regressivo @validacao @orcamento
Feature: Verificação da Exibição e Classificação Correta do Valor do Orçamento

    Scenario Outline: Verificação da exibição e classificação correta do valor do orçamento após criação
        Given que o usuário atendente criou um novo orçamento com valor <valorOrcamento>
        When visualiza o orçamento na tela de visualização do atendimento
        Then o valor do orçamento deve ser exibido em reais acima da informação de débito e crédito do cliente.
        And o ícone exibido deve ser <icone>

        Examples:
            | valorOrcamento | icone    |
            | 300.00         | dinheiro |
            | 750.00         | ouro     |
            | 2000.00        | diamante |


@regressivo @validacao @orcamento
Feature: Verificação da Exibição e Classificação Correta do Valor do Orçamento

    Scenario Outline: Verificação da exibição e classificação correta do valor do orçamento após edição
        Given que o usuário atendente editou um orçamento existente para alterar o valor para <valorOrcamento>
        When visualiza o orçamento na tela de visualização do atendimento
        Then o valor do orçamento deve ser exibido em reais acima da informação de débito e crédito do cliente.
        And o ícone exibido deve ser <icone>

        Examples:
            | valorOrcamento | icone    |
            | 300.00         | dinheiro |
            | 750.00         | ouro     |
            | 2000.00        | diamante |


@regressivo @validacao @orcamento
Feature: Verificação da Exibição e Classificação Correta do Valor do Orçamento

    Scenario Outline: Verificação da exibição e classificação correta do valor do orçamento após remoção de produtos
        Given que o usuário atendente removeu produtos de um orçamento existente alterando o valor para <valorOrcamento>
        When visualiza o orçamento na tela de visualização do atendimento
        Then o valor do orçamento deve ser exibido em reais acima da informação de débito e crédito do cliente.
        And o ícone exibido deve ser <icone>

        Examples:
            | valorOrcamento | icone    |
            | 300.00         | dinheiro |
            | 750.00         | ouro     |
            | 2000.00        | diamante |


@funcional @classificacao @limites
Feature: Validação dos Limites de Valor para Exibição dos Ícones de Classificação do Orçamento

    Scenario Outline: Validação dos limites de valor para exibição do ícone de classificação do orçamento
        Given que o usuário atendente está autenticado no sistema
        And acessa a tela de visualização do atendimento
        When visualiza um orçamento com valor <valorOrcamento>
        Then o ícone exibido deve ser <icone>

        Examples:
            | valorOrcamento | icone    |
            | 0.00           | dinheiro |
            | 500.00         | dinheiro |
            | 501.00         | ouro     |
            | 1500.00        | ouro     |
            | 1500.01        | diamante |
            | 2000.00        | diamante |

