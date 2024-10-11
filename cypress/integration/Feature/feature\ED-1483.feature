@receita @continuidade @formulas
Feature: Gestão de receitas com continuação de fórmulas

    Background:
    Dado que o usuário está logado no sistema

    @visualizacao
    Scenario Outline: Visualizar receita com continuação de fórmulas
        Dado que o usuário acessa a receita vinculada ao atendimento com <tipoAtendimento>
        Quando o usuário visualiza a receita
        Então deve apresentar a aba de histórico de pedidos
        E deve apresentar o histórico de pedidos na aba
        E o histórico de pedidos deve exibir as últimos cinco atendimentos confirmados do paciente
        E o histórico deve apresentar número de atendimento/filial, data e hora de recebimento da receita, valor total do atendimento, lista das fórmulas, aroma, tempo de tratamento e sinalização de continuação
        E a aba histórico de continuação de fórmula deve ser apresentada antes da aba L.I.D.E.
        #65525/5000 medicamentoManipulado
        #FÓRMULA COM COQ10 E DEMAIS ATIVOS - Baunilha - 30 - C
        #FÓRMULA COM IMUNEL E DEMAIS ATIVOS - Laranja - 30 - C
        #FÓRMULA COM MAGNESIO BISGLICINATO E DEMAIS ATIVOS - Morango - 30 - C

        #65526/5000 medicamentoManipulado
        #FÓRMULA COM VIT C TAMPONADA E DEMAIS ATIVOS - Abacaxi - 30 - C
        #FÓRMULA COM OXANDROLONA E DEMAIS ATIVOS - Morango - 60 - N/A
        #FÓRMULA COM GLUTAMINA E DEMAIS ATIVOS - Cacau - Morango 90 - C

        #65527/5000 medicamentoManipulado
        #FÓRMULA COM GLUTAMINA E DEMAIS ATIVOS - Sem Aroma - 90
        #FÓRMULA COM CITRULINA DIMALATO E DEMAIS ATIVOS - Uva - 60
        #FÓRMULA COM ARGININA CLORIDRATO E DEMAIS ATIVOS - Limão - 30
        #65527 - 3	FÓRMULA COM ARGININA CLORIDRATO / ASHWAGANDHA EXTRATO SECO / CATUABA EXT SECO / EPIMEDIUM EXTRATO (10% ICARIIN / MACA PERUANA / PANAX GINSENG / POTE 30 SACHES - N/A - 30

        #65528/5000 medicamentoManipulado
        #FÓRMULA COM METILCOBALAMINA P/ FILME ORODI E DEMAIS ATIVOS - Menta - 30 - C

        #65529/5000 medicamentoManipulado
        #FÓRMULA COM METILCOBALAMINA - Hortelã - 60 - C
        #FÓRMULA COM MAGNESIO INOSITOL E DEMAIS ATIVOS - Sem Aroma - 90 - C

        #65535/5000 vinculado a receita 425353

        Examples:
            | tipoAtendimento          |
            | medicamentos manipulados |
            | medicamentos injetáveis  |

    @visualizacao @historico
    Scenario: Visualizar receita criada antes da implementação da data de prescrição
    Dado que o usuário acessa uma receita criada antes da implementação da data de prescrição
    Quando o usuário visualiza a receita
    Então deve garantir que nenhuma quebra de funcionalidade ocorreu
    E a informação de continuação não deve ser exibida

    @listvisualizacaoagem @historico @ordenacao
    Scenario: Listar os atendimentos por ordem de data de entrada considerando a data de prescrição da receita
    Dado que o usuário visualiza receita
    Quando o usuário acessa a aba de histórico de continuação de fórmulas
    Então os atendimentos devem ser listados por ordem de data de entrada
    E a ordenação deve considerar a data de prescrição da receita visualizada


    @registro
    Scenario Outline: Registrar receita com data de prescrição e continuação
        Dado que o usuário está registrando uma receita
        Quando o usuário informa a data da prescrição no campo
        E vincula receita ao atendimento
        E o usuário informa o tempo de tratamento para cada fórmula
        E o usuário marca a continuação para as fórmulas no atendimento
        Então a data da prescrição deve ser obrigatória
        E a receita deve ser registrada com as informações fornecidas
        E apresentada com as informações fornecidas

        Examples:
            | tipoAtendimento          |
            | medicamentos manipulados |
            | medicamentos injetáveis  |

    @busca @prescricao
    Scenario Outline: Buscar receita pela data de prescrição
        Dado que o usuário está na tela <tela>
        Quando o usuário filtra receitas pela data de prescrição
        Então as receitas devem ser apresentadas corretamente com base na data da prescrição informada

        Examples:
            | tela               |
            | importar receitas  |
            | gerenciar receitas |
            | gerenciar dt's     |

    @validacao @prescricao
    Scenario: Validar caracteres aceitos no campo data de prescrição
    Dado que o usuário está registrando uma receita
    Quando o usuário tenta inserir caracteres inválidos no campo data de prescrição
    Então o sistema deve aceitar apenas caracteres válidos (formato de data)

    #@continuidade
    #Scenario Outline: Clonar receita com continuação
    #Dado que o usuário clonou uma receita existente
    #Quando o usuário visualiza a receita clonada
    #Então a continuação deve permanecer marcada nas fórmulas

    #Examples:
    #| tipoAtendimento          |
    #| medicamentos manipulados |
    #| medicamentos injetáveis  |

    @exclusao
    Scenario: Receita com continuação excluída não deve ser apresentada na busca
    Dado que o usuário excluiu uma receita com continuação
    Quando o usuário realiza uma busca de receitas
    Então a receita excluída não deve ser exibida nos resultados de busca

    @edicao
    Scenario Outline: Editar receita e alterar data de prescrição
        Dado que o usuário está editando uma receita existente com <tipoAtendimento>
        Quando o usuário altera a data da prescrição
        E o usuário salva as alterações
        Então a nova data de prescrição deve ser salva corretamente
        E o histórico de continuação deve ser atualizado

        Examples:
            | tipoAtendimento          |
            | medicamentos manipulados |
            | medicamentos injetáveis  |

    @validacao
    Scenario: Validar que o campo continuacao foi adicionado corretamente
    Dado que a coluna `continuacao` foi adicionada à tabela `orcamento_formulas`
    E o campo `date_da_receita` foi adicionado à tabela `receita`
    Então a estrutura da tabela deve estar correta conforme o SQL fornecido

    @validacao @integridade
    Scenario: Garantir que nada quebrou após a implementação da data da prescrição
    Dado que o sistema agora possui o campo data de prescrição
    Quando o usuário acessa receitas antigas
    Então o sistema deve garantir que nada quebrou na visualização e nos registros

    @visualizacao
    Scenario Outline: Visualizar receita em diferentes fluxos
        Dado que o usuário está visualizando receitas em <telaReceita>
        Quando o usuário acessa a receita
        Então a informação de continuação deve ser apresentada corretamente

        Examples:
            | telaReceita            |
            | inclusão               |
            | conferência de entrada |
            | conferência de saída   |
            | expedição              |

    @prescricao @historico
    Scenario: Validar apresentação do histórico de continuação com receitas juntas
    Dado que as receitas A, B e C estão juntas no sistema
    Quando o usuário visualiza a receita B
    Então o histórico de continuação deve apresentar as últimos cinco atendimentos considerando a data de prescrição da receita B
    E as receitas A e C não devem ser exibidas no histórico

    @prescricao @ordem
    Scenario: Garantir a ordem de apresentação das abas
Dado que o usuário está visualizando a receita
Então a aba histórico de continuação deve ser apresentada antes da aba L.I.D.E.
