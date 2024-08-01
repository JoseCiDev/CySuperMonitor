#/home/jose/projetos/CySuperMonitor/cypress/integration/Hotfix/hotfix\ED-1908
@funcional @busca @nomePaciente
Feature: Busca de Orçamentos por Nome do Paciente

    Scenario Outline: Busca de orçamentos antigos por nome do paciente
        Given que o usuário atendente está autenticado no sistema
        And acessa a página de busca de orçamentos
        And seleciona a opção de buscar por orçamentos antigos
        And informa o nome do paciente <nomePaciente>
        When o usuário confirma a busca
        Then o sistema deve retornar os orçamentos antigos correspondentes ao nome do paciente <nomePaciente>

        Examples:
            | nomePaciente                     |
            | LOUISE FABIANA LIMONGI KOVALESKI |
            | LUCA DESCHAMPS GHANEM            |


@funcional @busca @nomePrescritor
Feature: Busca de Orçamentos por Nome do Prescritor

    Scenario Outline: Busca de orçamentos antigos por nome do prescritor
        Given que o usuário atendente está autenticado no sistema
        And acessa a página de busca de orçamentos
        And seleciona a opção de buscar por orçamentos antigos
        And informa o nome do prescritor <nomePrescritor>
        When o usuário confirma a busca
        Then o sistema deve retornar os orçamentos antigos correspondentes ao nome do prescritor <nomePrescritor>

        Examples:
            | nomePrescritor                   |
            | TICIANE ARAGAO DA SILVEIRA GOMES |
            | BRUNO AUGUSTO BARIZZA            |


@funcional @busca @nomeAtendente
Feature: Busca de Orçamentos por Nome da Atendente

    Scenario Outline: Busca de orçamentos antigos por nome da atendente
        Given que o usuário atendente está autenticado no sistema
        And acessa a página de busca de orçamentos
        And seleciona a opção de buscar por orçamentos antigos
        And informa o nome da atendente <nomeAtendente>
        When o usuário confirma a busca
        Then o sistema deve retornar os orçamentos antigos correspondentes ao nome da atendente <nomeAtendente>

        Examples:
            | nomeAtendente    |
            | Carla Mota       |
            | Rafael Lima      |
            | Larissa Ferreira |
            | Bruno Mendes     |


@funcional @busca @numeroOrcamento
Feature: Busca de Orçamentos por Número do Orçamento

    Scenario Outline: Busca de orçamentos antigos por número do orçamento
        Given que o usuário atendente está autenticado no sistema
        And acessa a página de busca de orçamentos
        And seleciona a opção de buscar por orçamentos antigos
        And informa o número do orçamento <numeroOrcamento>
        When o usuário confirma a busca
        Then o sistema deve retornar os orçamentos antigos correspondentes ao número do orçamento <numeroOrcamento>

        Examples:
            | numeroOrcamento |
            | 12345           |
            | 67890           |
            | 11223           |
            | 44556           |


@funcional @busca @statusOrcamento
Feature: Busca de Orçamentos por Status

    Scenario Outline: Busca de orçamentos antigos por status (finalizado ou não)
        Given que o usuário atendente está autenticado no sistema
        And acessa a página de busca de orçamentos
        And seleciona a opção de buscar por orçamentos antigos
        And informa se o orçamento está <statusOrcamento>
        When o usuário confirma a busca
        Then o sistema deve retornar os orçamentos antigos correspondentes ao status <statusOrcamento>

        Examples:
            | statusOrcamento |
            | finalizado      |
            | não finalizado  |


@funcional @busca @todosCriterios
Feature: Busca de Orçamentos por Todos os Critérios

    Scenario Outline: Busca de orçamentos antigos por todos os critérios
        Given que o usuário atendente está autenticado no sistema
        And acessa a página de busca de orçamentos
        And seleciona a opção de buscar por orçamentos antigos
        And informa o nome do paciente <nomePaciente>
        And informa o nome do prescritor <nomePrescritor>
        And informa o nome da atendente <nomeAtendente>
        And informa o número do orçamento <numeroOrcamento>
        And informa se o orçamento é do usuário <orcamentoUsuario>
        And informa se o orçamento está <statusOrcamento>
        When o usuário confirma a busca
        Then o sistema deve retornar os orçamentos antigos correspondentes aos critérios informados

        Examples:
            | nomePaciente   | nomePrescritor      | nomeAtendente    | numeroOrcamento | orcamentoUsuario | statusOrcamento |
            | João da Silva  | Dr. Lucas Lima      | Carla Mota       | 12345           | usuário          | finalizado      |
            | Maria Oliveira | Dra. Julia Santos   | Rafael Lima      | 67890           | todos            | não finalizado  |
            | Carlos Souza   | Dr. Pedro Costa     | Larissa Ferreira | 11223           | usuário          | finalizado      |
            | Ana Pereira    | Dra. Fernanda Rocha | Bruno Mendes     | 44556           | todos            | não finalizado  |


@regressivo @busca
Feature: Verificação da Correção da Busca de Orçamentos Antigos

    Scenario: Verificação da funcionalidade de busca de orçamentos antigos corrigida
        Given que o erro na busca de orçamentos antigos foi corrigido
        When o usuário atendente busca por orçamentos antigos informando os critérios de busca
        Then o sistema deve retornar corretamente os orçamentos antigos que correspondem aos critérios informados
