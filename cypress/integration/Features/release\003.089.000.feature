
@importRecipes
Feature: Importar Receitas
    Como um usuário do sistema de farmácia
    Eu quero importar receitas em diferentes formatos
    Para que eu possa registrar e processar pedidos de medicamentos

    Background: Usuário logado e na página de importação de receitas
        Given que o usuário está logado no sistema
        And está na página de "Importar Receitas"

    @varejo
    Scenario Outline: Importar receita de varejo com todos os dados preenchidos
        When o usuário seleciona a opção "Varejo"
        And preenche todos os campos obrigatórios para varejo
        And submete o formulário de importação
        Then a receita de varejo é importada com sucesso
        And uma mensagem de confirmação é exibida

        Examples:
            | MEDICO VAREJO GERAL | Paciente                 | Canal de recebimento | Atendente responsável        | Cluster |
            | MEDICO VAREJO GERAL | Euclides Beckmann        | Whatsapp             | Tamires Silva Luiz           | 3       |
            | MEDICO VAREJO GERAL | Cliente Teste QA         | Whatsapp clinica     | Ingrid Lorrane Pereira Gomes | 5       |
            | MEDICO VAREJO GERAL | CLAUDIA MARIA DA FONSECA | Email                | Ana Paula Neves              | 1       |


    @prescription @pdf
    Scenario Outline: Importar prescrição em formato PDF
        When o usuário seleciona a opção "Prescrição"
        And faz upload de uma imagem da receita em formato "PDF"
        And preenche todos os campos obrigatórios para prescrição
        And submete o formulário de importação
        Then a prescrição em PDF é importada com sucesso
        And uma mensagem de confirmação é exibida

        Examples:
            | Prescritor          | Paciente                | Canal de recebimento | Atendente responsável        | Cluster |
            | Fabio Juca          | Euclides Beckmann       | Whatsapp             | Tamires Silva Luiz           | 1       |
            | Prescritor Teste QA | Cliente Teste QA        | Whatsapp clinica     | Ingrid Lorrane Pereira Gomes | 5       |
            | Renato Reis Silva   | ANA MARIA GONCALES MORI | Email                | Ana Paula Neves              | 4       |


    @prescription @jpg
    Scenario Outline: Importar prescrição em formato JPG
        When o usuário seleciona a opção "Prescrição"
        And faz upload de uma imagem da receita em formato "JPG"
        And preenche todos os campos obrigatórios para prescrição
        And submete o formulário de importação
        Then a prescrição em JPG é importada com sucesso
        And uma mensagem de confirmação é exibida

        Examples:
            | Prescritor          | Paciente             | Canal de recebimento | Atendente responsável        | Cluster    |
            | Fabio Juca          | Euclides Beckmann    | Whatsapp             | Tamires Silva Luiz           | 01/01/2023 |
            | Prescritor Teste QA | Cliente Teste QA     | Whatsapp clinica     | Ingrid Lorrane Pereira Gomes | 02/02/2023 |
            | PAULO KAUFFMAN      | Leila Maria de Souza | Visitação            | Ana Paula Neves              | 03/03/2023 |


    @retail @urgency
    Scenario Outline: Importar receita de varejo com aviso de urgência
        When o usuário seleciona a opção "Varejo"
        And marca a opção de "Aviso de urgência"
        And preenche os campos <Paciente>, <Canal de recebimento>, <Atendente responsável>, <Data de recebimento>
        And submete o formulário de importação
        Then a receita de varejo com aviso de urgência é importada com sucesso
        And uma mensagem de confirmação é exibida

        Examples:
            | Prescritor          | Paciente                | Canal de recebimento | Atendente responsável        | Cluster |
            | Fabio Juca          | Euclides Beckmann       | Whatsapp             | Tamires Silva Luiz           | 1       |
            | Prescritor Teste QA | Cliente Teste QA        | Whatsapp clinica     | Ingrid Lorrane Pereira Gomes | 5       |
            | Renato Reis Silva   | ANA MARIA GONCALES MORI | Email                | Ana Paula Neves              | 4       |

    @prescription @controlledMedication
    Scenario Outline: Importar prescrição com aviso de medicamento controlado
        When o usuário seleciona a opção "Prescrição"
        And marca a opção de "Aviso de medicamento controlado"
        And faz upload de uma imagem da receita em formato "PDF"
        And preenche todos os campos obrigatórios para prescrição
        And submete o formulário de importação
        Then a prescrição com aviso de medicamento controlado é importada com sucesso
        And uma mensagem de confirmação é exibida

        Examples:
            | Prescritor          | Paciente          | Canal de recebimento | Atendente responsável        | Cluster    |
            | Fabio Juca          | Euclides Beckmann | Whatsapp             | Tamires Silva Luiz           | 01/01/2023 |
            | Prescritor Teste QA | Cliente Teste QA  | Whatsapp clinica     | Ingrid Lorrane Pereira Gomes | 02/02/2023 |
            | Renato Reis Silva   | Maria             | Email                | Ana Paula Neves              | 03/03/2023 |

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Feature: Gerenciamento de Observações Farmacêuticas
        Como um usuário do sistema
        Eu quero gerenciar observações farmacêuticas
        Para que eu possa configurar, criar e excluir observações de forma eficiente

        Context:
        Given que o usuário está logado no sistema
        And está na página de Receitas e "Observações Farmacêuticas"

    Scenario: Configurar senha de observação farmacêutica
        When o usuário administrador edita o usuário em "Configurar senha de receita", na seção de configuração de atendentes
        And insere uma nova senha de receita
        And clica em "Salvar"
        Then uma mensagem de confirmação é exibida

    Scenario: Configurar carimbo da observação farmacêutica
        When o usuário seleciona "Configurar carimbo da receita", na seção de configuração de atendentes
        And insere uma nova imagem para o carimbo
        And clica em "Salvar"
        Then uma mensagem de confirmação é exibida

    Scenario: Criar uma nova observação farmacêutica
        When o usuário farmacêutico ou admministrador, clica em "Criar nova observação farmacêutica", na seção de configuração de receitas
        And preenche os campos de senha
        And preenche o texto da observação farmacêutica
        And clica em "Adicionar"
        Then a nova observação farmacêutica é adicionada à lista

    Scenario: Excluir uma observação farmacêutica
        Given que o usuário visualiza a lista de observações farmacêuticas
        When o usuário seleciona uma observação farmacêutica existente
        And clica em "Excluir"
        And confirma a exclusão
        Then a observação farmacêutica é removida da lista

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Feature: Clonar Receitas
    Como um usuário do sistema
    Eu quero clonar receitas
    Para que eu possa gerenciar eficientemente as receitas de varejo e prescrição com ou sem observações farmacêuticas

    # Usando Background para definir pré-condições comuns
    Background:
        Given que o usuário está autenticado
        And está na página de receitas

    # Usando Esquema do Scenario para evitar repetição e cobrir múltiplas opções
    Scenario Outline: Clonar receita com e sem observação farmacêutica
        When o usuário seleciona a opção de clonar uma "<TipoReceita>"
        And escolhe "<ObservacaoFarmaceutica>"
        And clica no botão de clonar
        Then uma nova receita é criada com as mesmas informações da original
        And a nova receita "<ObservacaoFarmaceutica>" uma observação farmacêutica

        Examples:
            | TipoReceita        | ObservacaoFarmaceutica |
            | receita de varejo  | com                    |
            | receita de varejo  | sem                    |
            | Receita prescrição | com                    |
            | Receita prescrição | sem                    |

    # Scenario específico para cancelamento da clonagem
    Scenario Outline: Cancelar clonagem da receita
        Given que o usuário iniciou o processo de clonagem de uma receita
        When o usuário clica no botão de cancelar clonagem
        Then o processo de clonagem é cancelado
        And nenhuma nova receita é criada

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Feature: Gerenciamento de Dúvidas Técnicas
    Como um usuário do sistema
    Eu quero criar, excluir, responder e marcar dúvidas técnicas como resolvidas
    Para que eu possa gerenciar eficientemente as dúvidas técnicas dentro do sistema

    Background:
        Given que o usuário está autenticado
        And está na página de dúvidas técnicas

    Scenario Outline: Criar uma nova dúvida técnica
        When o usuário cria uma nova dúvida técnica selecionando a categoria "<CategoriaDúvidaTécnica>"
        And envia para o usuário destinatário
        Then uma notificação é enviada para o usuário destinatário
        And o contador de notificações do usuário destinatário é incrementado

        Examples:
            | CategoriaDúvidaTécnica  |
            | Assinatura Farmacêutica |
            | Conferência Manuscrita  |
            | Contato Prescritor (DT) |
            | Dúvida Interna          |
            | Dúvida Conferencias     |
            | Aguardando autorização  |
            | Dúvida Téc. Urgente     |
            | Pedido Isento           |


    Scenario: Excluir uma dúvida técnica
        Given que o usuário administrador seleciona uma dúvida técnica existente
        When o usuário exclui a dúvida técnica
        Then uma notificação é enviada para o usuário remetente e para o usuário destinatário
        And o contador de notificações do usuário remetente e do usuário destinatário é decrementado

    Scenario Outline: Responder a uma dúvida técnica
        Given que o usuário destinatário seleciona uma dúvida técnica recebida
        When o usuário seleciona a "<TipoResposta>" responde à dúvida técnica
        Then uma notificação é enviada para o usuário remetente
        And o contador de notificações do usuário remetente é incrementado

        Examples:
            | TipoResposta          |
            | Aguardando Prescritor |
            | Aguardando P & D      |
            | Pendência Interna     |
            | Respondido            |


    Scenario Outline: Marcar uma dúvida técnica como resolvida com diferentes perfis
        Given que o <perfil> seleciona uma dúvida técnica enviada
        When o <perfil> marca a dúvida técnica como resolvida
        Then uma notificação é enviada para o usuário destinatário
        And o contador de notificações do usuário destinatário é decrementado

        Examples:
            | Perfil        |
            | Atendente     |
            | Administrador |

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

@editarReceitas
Feature: Edição de Receitas
    Como um usuário do sistema de farmácia
    Eu quero editar informações de receitas
    Para que eu possa atualizar dados conforme necessário

    Background:
        Given que o usuário está autenticado no sistema
        And o usuário acessa a Feature de edição de receitas

    @varejo
    Scenario Outline: Editar informações básicas da receita
        When o usuário edita o "paciente" para "<Paciente>"
        And o usuário edita o "canal de recebimento" para "<CanalRecebimento>"
        And o usuário edita o "atendente responsável" para "<AtendenteResponsavel>"
        Then as informações são atualizadas com sucesso

        Examples:
            | Paciente                    | CanalRecebimento            | AtendenteResponsavel |
            | Euclides Beckmann           | Whatsapp                    | Tamires Silva Luiz   |
            | Cliente Teste QA            | Cliente Teste QA            | Email                | Ingrid Lorrane Pereira Gomes | Juliana Drewek |
            | GLASSES SANTANA COSTA       | Injetáveis Whatsapp         | Ana Paula Neves      | Rafaela Gomes |
            | ALAIN DANIEL BUNEL          | Easy Health                 | Ana Paula Neves      | Amanda  da Silva Copetti |
            | DANIELA MIRANDA             | MedX                        | Ana Paula Neves      | Nataniele  Dos Santos Abadi |
            | ADEMIR REINERT              | Visitação                   | Ana Paula Neves      | Priscila  Goedert Conrado |
            | ANA PAULA DIAS              | Balcão/Pessoalmente         | Ana Paula Neves      | Nachany Barbiero |
            | ABIANE CRISTINA DE SOUZA    | Whatsapp clinica/prescritor | Ana Paula Neves      | Moniqui Motta |
            | LEANDRO DOS SANTOS          | Email clinica/prescritor    | Ana Paula Neves      | Dioneia Bueno Leite |
            | BELKIS LEANDRA GAIGA CIOFFI | Injetáveis E-mail           | Ana Paula Neves      | Jessica Dos Santos |
            | GISELE REINERT              | Injetáveis EasyHealth       | Ana Paula Neves      | Merssia de Souza Martins |


    @urgency @alert
    Scenario Outline: Editar avisos na receita
        When o usuário edita o "<aviso>" para "<status>"
        Then o "<aviso>" é atualizado para "<status>"

        Examples:
            | aviso                           | status     |
            | aviso de urgência               | Ativado    |
            | aviso de cliente alerta         | Desativado |
            | aviso de medicamento controlado | Ativado    |


    @sinalization
    Scenario: Editar sinalizações da prescrição
        Given que o usuário seleciona uma receita com sinalização "não possui receita"
        When o usuário muda a sinalização para "possui receita"
        And o usuário adiciona uma observação em texto "Receita adicionada após verificação"
        Then a sinalização e a observação são atualizadas com sucesso

    @imagem
    Scenario: Adicionar imagem da receita
        Given que o usuário seleciona a opção para adicionar imagem da receita
        When o usuário faz upload de um arquivo ".jpg"
        Then a imagem é adicionada à receita com sucesso

    @pdf
    Scenario: Adicionar PDF da receita
        Given que o usuário seleciona a opção para adicionar PDF da receita
        When o usuário faz upload de um arquivo ".pdf"
        Then o PDF é adicionado à receita com sucesso

    @completedata
    Scenario: Editar todos os dados da receita
        When o usuário edita todos os campos disponíveis com dados válidos
        Then todas as edições são salvas com sucesso

        Examples:
            | Paciente                    | CanalRecebimento            | AtendenteResponsavel        | Prescritor                | Cluster     |
            | Euclides Beckmann           | Whatsapp                    | Tamires Silva Luiz          | NINA SOBRAL               | 1           |
            | Cliente Teste QA            | Cliente Teste QA            | Email                       | Juliana Drewek            | BRUNA VERAO | 2 |
            | GLASSES SANTANA COSTA       | Injetáveis Whatsapp         | Rafaela Gomes               | CLAUDIA DA SILVA GUEDES   | 3           |
            | ALAIN DANIEL BUNEL          | Easy Health                 | Amanda  da Silva Copetti    | ELIZA MACHADO REIS        | 4           |
            | DANIELA MIRANDA             | MedX                        | Nataniele  Dos Santos Abadi | HELTON FINOCCHIO DE PAIVA | 5           |
            | ADEMIR REINERT              | Visitação                   | Priscila  Goedert Conrado   | JOSE ROBERTO              | 6           |
            | ANA PAULA DIAS              | Balcão/Pessoalmente         | Nachany Barbiero            | ULISSES SILVA DA CUNHA    | 7           |
            | ABIANE CRISTINA DE SOUZA    | Whatsapp clinica/prescritor | Moniqui Motta               | MARIA PAULA               | 10          |
            | LEANDRO DOS SANTOS          | Email clinica/prescritor    | Dioneia Bueno Leite         | NATALIA SANTOS            | 12          |
            | BELKIS LEANDRA GAIGA CIOFFI | Injetáveis E-mail           | Jessica Dos Santos          | SABRINA HEUPA             | 13          |
            | GISELE REINERT              | Injetáveis EasyHealth       | Merssia de Souza Martins    | CLAUDIO LOPES SIMPLICIO   | 14          |

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

@deleteRecipes
Feature: Excluir Receitas
    Como um usuário do sistema de farmácia
    Eu quero excluir receitas individualmente
    Para que eu possa gerenciar as receitas de forma eficiente

    Background:
        Given que o usuário está autenticado no sistema
        And o usuário acessa a Feature de gerenciamento de receitas

    @retail
    Scenario Outline: Excluir uma receita de varejo
        Given que o usuário tem acesso à lista de receitas de varejo
        When o usuário seleciona uma receita de varejo para exclusão
        And o usuário confirma a exclusão da receita
        Then a receita é excluída com sucesso
        And uma mensagem de confirmação "Receita "<numeroReceita>" removida com sucesso!" é exibida

        Examples:
            | numeroReceita |
            | 425304        |


    @prescription
    Scenario Outline: Excluir uma prescrição
        Given que o usuário tem acesso à lista de prescrições
        When o usuário seleciona uma prescrição para exclusão
        And o usuário confirma a exclusão da prescrição
        Then a prescrição é excluída com sucesso
        And uma mensagem de confirmação "Prescrição excluída com sucesso" é exibida

        Examples:
            | numeroReceita |
            | 425300        |


    @cancellation
    Scenario: Cancelar a exclusão de uma receita
        Given que o usuário seleciona uma receita para exclusão
        When o usuário decide cancelar a exclusão
        Then a ação de exclusão é cancelada
        And a receita permanece na lista de receitas

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Feature: Vincular e Desvincular Receitas
    Como um usuário do sistema
    Quero vincular e desvincular receitas
    Para gerenciar orçamentos de maneira eficiente

    Background:
        Given que estou logado no sistema

    @retail @Link
    Scenario Outline: Vincular receita de varejo pela tela de importar receitas pelo botão vincular
        Given que estou na tela de "<TelaSistema>"
        When clico no botão "Vincular" para a receita "Receita Varejo 425296"
        Then a receita "Receita Varejo 425296" deve estar vinculada ao orçamento "14093/1010"

        Examples:
            | TelaSistema              |
            | importar receitas        |
            | gerenciar receitas       |
            | atendimento em andamento |
            | atendimento encerrado    |


    @retail @Unlink
    Scenario Outline: Desvincular receita de varejo pela tela de importar receitas pelo botão vincular
        Given que estou na tela de "<TelaSistema>"
        When clico no botão "Desvincular" para a receita "Receita Varejo 425296"
        Then a receita "Receita Varejo 425296" deve estar desvinculada do orçamento "14093/1010"

        Examples:
            | TelaSistema              |
            | importar receitas        |
            | gerenciar receitas       |
            | atendimento em andamento |
            | atendimento encerrado    |


    @prescription @Link
    Scenario: Vincular receita de prescrição pela tela de importar receitas pelo botão vincular
        Given que estou na tela de "<TelaSistema>"
        When clico no botão "Vincular" para a receita "Receita Prescrição 425301"
        Then a receita "Receita Prescrição 425301" deve estar vinculada ao orçamento "16604/1020"

        Examples:
            | TelaSistema              |
            | importar receitas        |
            | gerenciar receitas       |
            | atendimento em andamento |
            | atendimento encerrado    |


    @prescription @Unlink
    Scenario: Desvincular receita de prescrição pela tela de importar receitas pelo botão vincular
        Given que estou na tela de "<TelaSistema>"
        When clico no botão "Desvincular" para a receita "Receita Prescrição 1"
        Then a receita "Receita Prescrição 1" deve estar desvinculada do orçamento

        Examples:
            | TelaSistema              |
            | importar receitas        |
            | gerenciar receitas       |
            | atendimento em andamento |
            | atendimento encerrado    |

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Feature: Busca Avançada de Receitas
    Como um usuário do sistema
    Quero utilizar múltiplos parâmetros de busca para encontrar receitas
    Para facilitar a gestão de receitas e orçamentos

    Background: Usuário está autenticado e na página de busca de receitas
        Given que o usuário está logado no sistema
        And está na página de "Busca de Receitas"

    @AdvancedSearch
    Scenario: Buscar receitas por data, cluster e status
        Given o usuário define a "Data inicial" como "01/01/2023"
        And o usuário define a "Data final" como "31/01/2023"
        And o usuário seleciona o "Cluster" como "Sul"
        And o usuário marca a opção de "Receita pendente"
        When o usuário clica em "Buscar"
        Then as receitas correspondentes aos critérios de busca são exibidas

    @CombinedSearch
    Scenario: Buscar receitas combinando todos os parâmetros disponíveis
        Given o usuário define a "Data inicial" como "01/01/2023"
        And o usuário define a "Data final" como "31/01/2023"
        And o usuário seleciona o "Cluster" como "Sul"
        And o usuário seleciona o "Canal de recebimento" como "Online"
        And o usuário insere o "Número da Receita" como "RX123456"
        And o usuário insere o "Paciente" como "João Silva"
        And o usuário insere o "Prescritor" como "Dra. Ana Pereira"
        And o usuário insere o "Número do Orçamento" como "ORC78910"
        And o usuário insere o "Orçamentista" como "Carlos Rocha"
        And o usuário insere o "Atendente responsável" como "Maria Lima"
        And o usuário marca a opção de "Receita vinculada"
        When o usuário clica em "Buscar"
        Then as receitas que correspondem exatamente a todos os critérios de busca são exibidas

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Feature: Gerenciamento de Orçamentos no Backoffice

    Background: Usuário está autenticado e no sistema backoffice
        Given que o usuário está logado no sistema backoffice

    @SearchBudget
    Scenario Outline: Buscar por orçamentos com filtros específicos
        When o usuário acessa a página de "Backoffice em andamento"
        And insere os seguintes filtros de busca:
            | Campo                 | Valor             |
            | Data entrada          | <DataEntrada>     |
            | Data inicial receita  | <DataInicial>     |
            | Data final receita    | <DataFinal>       |
            | Cluster               | <Cluster>         |
            | Canal recebimento     | <Canal>           |
            | Número Receita        | <NumeroReceita>   |
            | Paciente              | <Paciente>        |
            | Prescritor            | <Prescritor>      |
            | Número Orçamento      | <NumeroOrcamento> |
            | Atendente responsável | <Atendente>       |
            | Amarelinha urgente    | <Amarelinha>      |
            | Dúvida técnica        | <DuvidaTecnica>   |
        Then o sistema exibe os orçamentos que correspondem aos filtros

        Examples:
            | DataEntrada | DataInicial | DataFinal  | Cluster | Canal            | NumeroReceita | Paciente | Prescritor | NumeroOrcamento | Atendente                    | Amarelinha | DuvidaTecnica |
            | 17/07/2024  | 15/07/2024  | 17/07/2024 | 1       | Whatsapp         | 425296        | *        | *          | 14068/1010      | Tamires Silva Luiz           | Sim        | Não           |
            | 17/07/2024  | 15/07/2024  | 17/07/2024 | 4       | Whatsapp clinica | 425300        | *        | *          | 14093/1010      | Ingrid Lorrane Pereira Gomes | Não        | Sim           |


    @MarkUse
    Scenario: Marcar orçamento como em uso
        Given o usuário seleciona o orçamento "14068/1010"
        When o usuário marca o orçamento como "Em uso"
        Then o sistema atualiza o status do orçamento para "Em uso"

    @PersonalControl
    Scenario Outline: Sinalizar ações no controle pessoal
        Given o usuário está visualizando o orçamento "<NumeroOrcamento>"
        When o usuário sinaliza "<Acao>"
        Then o sistema registra a ação e apresenta na controle pessoal

        Examples:
            | NumeroOrcamento | Acao                           |
            | 14068/1010      | enviado para orçamento parcial |
            | 14093/1010      | informado cliente sobre DT     |

    @GenerateSendLink
    Scenario: Gerar e enviar link de continuidade do atendimento
        Given o usuário está iniciando o atendimento do orçamento "14068/1010"
        When o usuário gera um link de continuidade do atendimento
        And o usuário envia o link de continuidade, "Copy" e "Link" para o cliente
        Then o cliente recebe o link para continuar o atendimento e visualizar seu orçamento no SelfCheckout

    @BackofficeConferenceRegistration
    Scenario Outline: Registrar conferência Backoffice
        Given o backoffice está registrando conferência no orçamento "28288 / 5 "
        When o usuário <Ação> no registro de conferência Backoffice
        Then o usuário backoffice <Resultado> na conferência Backoffice
        And uma mensagem de confirmação é exibida

        Examples:
            | Ação                 | Resultado                    |
            | aponta equívocos     | registra os equívocos        |
            | não aponta equívocos | não registra nenhum equívoco |

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Feature: Atendimento em Andamento

    Background: Usuário atendente está autenticado e no sistema
        Given que o atendente está logado no sistema

    @ConfigureTreatmentTime
    Scenario: Configurar tempo de tratamento para as fórmulas
        Given o atendente seleciona a opção tempo de tratamento para as fórmulas "Fórmula X"
        When o atendente configura o tempo de tratamento para "30 dias"
        Then o sistema atualiza o tempo de tratamento da fórmula para "30 dias"
        And uma mensagem de confirmação é exibida

    @LinkRecipe
    Scenario: Vincular uma receita ao orçamento
        Given o atendente está visualizando o orçamento "14068/1010"
        When o atendente vincula a receita "425296"
        Then o sistema vincula a receita "425296" ao orçamento "14068/1010"
        And uma mensagem de confirmação é exibida

    @UnlinkRecipe
    Scenario: Desvincular uma receita do orçamento
        Given o atendente está visualizando o orçamento "14068/1010" com a receita "425296" vinculada
        When o atendente desvincula a receita "425296"
        Then o sistema remove o vínculo da receita "425296" do orçamento "14068/1010"
        And uma mensagem de confirmação é exibida

    @ViewRecipe
    Scenario: Visualizar detalhes da receita vinculada
        Given o atendente está visualizando o orçamento "14068/1010" com a receita "425296" vinculada
        When o atendente seleciona para visualizar a receita "425296"
        Then o sistema exibe os detalhes da receita "425296"

    @InsertPharmaceuticalObservation
    Scenario: Inserir observação farmacêutica na receita
        Given o atendente está visualizando a receita "425296"
        When o atendente insere uma observação farmacêutica "Verificar dosagem"
        Then o sistema salva a observação "Verificar dosagem" na receita "425296"

    @SendTechnicalQuestions
    Scenario: Enviar dúvidas técnicas sobre a receita
        Given o atendente está visualizando a receita "425296"
        When o atendente envia uma dúvida técnica "Confirmação de dosagem"
        Then o sistema registra e envia a dúvida técnica "Confirmação de dosagem" para o destinatário

    @SendEmailBudget
    Scenario: Enviar e-mail do orçamento para o cliente
        Given o atendente está visualizando o orçamento "14068/1010"
        When o atendente envia o orçamento por e-mail para o cliente "cliente@example.com"
        Then o sistema envia o orçamento "14068/1010" para "cliente@example.com"
        And o atendente visualiza mensagem informando sucesso no envio

    @SendLinkContinuitySelfCheckout
    Scenario: Enviar link de continuidade self-checkout para o cliente
        Given o atendente está finalizando o atendimento do orçamento "14068/1010"
        When o atendente gera e envia o link de continuidade self-checkout para o cliente
        Then o cliente recebe o link de continuidade self-checkout

    @SendCopy
    Scenario: Enviar copy do orçamento para o cliente
        Given o atendente está visualizando o orçamento "14068/1010"
        When o atendente envia um copy do orçamento para o cliente
        Then o cliente recebe o copy do orçamento

    @SendLink
    Scenario: Enviar link do orçamento para o cliente
        Given o atendente está visualizando o orçamento "14068/1010"
        When o atendente envia o link do orçamento para o cliente
        Then o cliente recebe o link do orçamento

    @ConfigureCustomerContact
    Scenario: Configurar contato do cliente com idioma e telefone
        Given o atendente seleciona o orçamento e acessar tela de configurar contato "Cliente X"
        When o atendente configura o idioma "Português" e o telefone "11999999999"
        Then o sistema atualiza o idioma e o telefone do cliente "Cliente X"
        And uma mensagem de confirmação é exibida

    @ViewCustomerData
    Scenario: Visualizar dados do cliente
        Given o atendente seleciona o orçamento cliente "Cliente X"
        When o atendente solicita visualizar os dados
        Then o sistema exibe os dados do cliente "Cliente X"

    @Add/DeletePharmaceuticalNotes
    Scenario: Visualizar observações entre paciente e médico
        Given o atendente seleciona o cliente "Cliente X"
        When o atendente visualiza as observações entre paciente e médico
        Then o sistema exibe as observações entre paciente e médico para "Cliente X"

    @EndService
    Scenario: Encerrar atendimento selecionando motivo
        Given o atendente está atendendo o cliente do orçamento  "28288 / 5"
        When o atendente seleciona encerrar atendimento com o motivo "Dúvida resolvida"
        Then o sistema registra o encerramento do atendimento com o motivo "Dúvida resolvida"
        And uma mensagem de confirmação é exibida

    @RegistraConferenciaAtendente
    Scenario Outline: Registrar conferência atendente
        Given o atendente está revisando o atendimento "ATD456"
        When o atendente <Ação> na conferência
        Then o sistema <Resultado> na conferência
        And uma mensagem de confirmação é exibida

        Examples:
            | Ação                 | Resultado                    |
            | aponta equívocos     | registra os equívocos        |
            | não aponta equívocos | não registra nenhum equívoco |


    @ConfirmService
    Scenario Outline: Confirmar atendimento com diversos parâmetros
        Given o atendente está finalizando o atendimento "28477 / 5"
        When o atendente confirma o atendimento com os seguintes detalhes <FormaPagamento>, <TempoRepeticao>, <CanalFechamento>, <EmailContato>, <StatusPedido>, <StatusPagamento>, <EnderecoEntrega>, <FormaEnvio>, <OrçamentoJunto>, <DataPrometidaEntrega>, <Aroma>, <PossuiReceita>, <UrgenciaPedido>
        Then o sistema confirma o atendimento com todos os detalhes fornecidos
        And uma mensagem de confirmação com sucesso é exibida

        Examples:
            | FormaPagamento    | TempoRepeticao | CanalFechamento | EmailContato         | StatusPedido | StatusPagamento | EnderecoEntrega    | FormaEnvio | OrçamentoJunto | DataPrometidaEntrega | Aroma        | PossuiReceita | UrgenciaPedido |
            | Cartão de Crédito | 30 dias        | E-mail          | cliente@example.com  | INCLUSÃO     | Pago            | Rua Exemplo, 123   | Correios   | ORC789         | 15/10/2023           | Lavanda      | sim           | Não urgente    |
            | Boleto Bancário   | 15 dias        | WhatsApp        | cliente2@example.com | CAIXA        | Não pago        | Av. Fictícia, 987  | SEDEX      | ORC790         | 20/11/2023           | Sem Aroma    | não           | Urgente        |
            | PIX               | Sem repetição  | Telefone        | cliente3@example.com | INCLUSÃO     | Pago            | Travessa Real, 456 | Motoboy    | ORC791         | 05/12/2023           | Solução Oral | repetição     | Não urgente    |


    @SendLinkNPS
    Scenario: Enviar link de avaliação NPS
        Given o atendimento "ATD456" foi concluído
        When o atendente envia o link de avaliação NPS para "cliente@example.com"
        Then o cliente "cliente@example.com" recebe o link de avaliação NPS


# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Feature: Gerenciamento de Orçamentos
        Como um usuário do sistema de inclusão
        Eu quero realizar a inclusão de orçamentos, marcar uso, registrar conferências
        Para que eu possa gerenciar eficientemente os orçamentos dos clientes

        @SearchBudget
        Esquema do Scenario: Buscar por orçamento com filtros específicos
        Given que o usuário acessa a Feature de busca por orçamento
        When o usuário define os seguintes filtros de busca:
            | DataInicial   | DataFinal   | FormaEnvio   | PacienteCliente   | Filial   | CampanhaExterna   |
            | <DataInicial> | <DataFinal> | <FormaEnvio> | <PacienteCliente> | <Filial> | <CampanhaExterna> |
        Then o sistema exibe os orçamentos que correspondem aos critérios de busca

        Examples:
            | DataInicial | DataFinal  | FormaEnvio                      | PacienteCliente | Filial | CampanhaExterna |
            | 01/01/2023  | 31/01/2023 | Correios - Sedex SC             | João Silva      | 4      | Sim             |
            | 15/02/2023  | 15/03/2023 | Correios - Sedex 10             | Maria Oliveira  | 5      | Não             |
            | 01/04/2023  | 30/04/2023 | Balcão SMART                    | Carlos Pereira  | 1000   | Sim             |
            | 01/05/2023  | 31/05/2023 | Funcionário - Retirada Recepção | Ana Costa       | 1020   | Não             |


    @marca_uso
    Scenario: Marcar uso no orçamento
        Given que o usuário acessa a Feature de marcação de uso em um orçamento
        When o usuário marca o uso no orçamento "28477/5"
        Then o sistema registra o uso no orçamento "28477/5"
        And uma mensagem de confirmação é exibida

    @registro_conferencia
    Scenario Outline: Registrar conferência com e sem equívocos
        Given que o usuário acessa a Feature de registro de conferência
        When o usuário realiza o registro de conferência com "<Equívoco>"
        Then o sistema "<Ação>" na conferência
        And uma mensagem de confirmação é exibida

        Examples:
            | Equívoco      | Ação                         |
            | Com equívocos | registra os equívocos        |
            | Sem equívocos | não registra nenhum equívoco |


    @realiza_inclusao
    Scenario Outline: Realizar inclusão de orçamento com diferentes situações
        Given que o usuário acessa a Feature de inclusão de orçamento
        When o usuário inclui um orçamento com a situação "<Situação>"
        Then uma mensagem de confirmação com sucesso é exibida

        Examples:
            | Situação           |
            | Amarelinha Inclusa |
            | Urgente            |
            | Prioridade         |
            | Prescritor AA/BB   |
            | Matriz             |
            | Entrega            |
            | Sedex 10           |
            | Palhoça            |
            | T3 / T4            |
            | Geladeira          |
            | Homeopatia         |
            | Controlado         |
            | Funcionário        |
            | COMBO/PACK         |

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Feature: Gerenciamento de Conferência de Entrada
    Como um usuário da conferência de entrada
    Eu quero buscar por orçamentos, registrar conferências, enviar orçamentos para pendência e remover pendências
    Para garantir que nada errado seja enviado para produção no laboratório

    @SearchBudget
    Scenario Outline: Buscar por orçamento com filtros específicos
        Given que o usuário acessa a Feature de busca por orçamento
        When o usuário define os seguintes filtros de busca:
            | DataInicial   | DataFinal   | FormaEnvio   | PacienteCliente   | AmarelinhaUrgente   | Filial   | CampanhaExterna   |
            | <DataInicial> | <DataFinal> | <FormaEnvio> | <PacienteCliente> | <AmarelinhaUrgente> | <Filial> | <CampanhaExterna> |
        Then o sistema exibe os orçamentos que correspondem aos critérios de busca

        Examples:
            | DataInicial | DataFinal  | FormaEnvio          | PacienteCliente | AmarelinhaUrgente | Filial | CampanhaExterna |
            | 01/01/2023  | 31/01/2023 | Correios - Sedex SC | João Silva      | Não               | 4      | Sim             |
            | 15/02/2023  | 15/03/2023 | Correios - Sedex 10 | Maria Oliveira  | Sim               | 5      | Não             |

    @conferenceRecord
    Scenario Outline: Registrar conferência com e sem equívocos
        Given que o usuário acessa a Feature de registro de conferência
        When o usuário registra a conferência do orçamento "28477/5" com "<Equívoco>"
        Then o sistema "<Ação>" na conferência

        Examples:
            | Equívoco      | Ação                                                     |
            | Com equívocos | marca o orçamento como pendente com detalhes do equívoco |
            | Sem equívocos | aprova o orçamento para a próxima etapa                  |

    @sendPending
    Scenario Outline: Enviar orçamento para pendência
        Given que o usuário acessa a Feature de enviar orçamento para pendência
        When o usuário envia o orçamento "41239/5" para pendência devido a "<Motivo>"
        Then o sistema registra a pendência com o motivo "<Motivo>"

        Examples:
            | Motivo                                           |
            | Aguardando autorização repet/validação receita   |
            | Aguardando Imagem da Receita                     |
            | Contato/retorno cliente                          |
            | Dúvida interna conf. entrada                     |
            | Dúvida técnica com prescritor                    |
            | E-mail de Cancelamento ou Alterações             |
            | Pendência de lote (verificando estoque/previsão) |
            | Verificando com laboratório                      |
            | Voltou para o laboratório para correção          |

    @removePending
    Scenario: Retirar orçamento da pendência
        Given que o usuário acessa a Feature de retirar orçamento da pendência
        When o usuário retira o orçamento "41239/5" da pendência
        Then o sistema atualiza o status do orçamento "41239/5" e o redireciona para Conferência de saída
        And  uma mensagem de confirmação com sucesso é exibida

    @returnInclusion
    Scenario: Retornar orçamento para inclusão
        Given que o usuário identifica um erro crítico no orçamento "41159/5" durante a conferência
        When o usuário decide retornar o orçamento "41159/5" para inclusão
        Then o sistema redireciona o orçamento "28477/5" para Inclusão
        And  uma mensagem de confirmação com sucesso é exibida

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Feature: Conferência de Saída
    Como um usuário de conferência de saída
    Quero conferir orçamentos de saída
    Para garantir que nada errado seja enviado para expedição

    Background:
        Given que estou logado no sistema

    @SearchBudget
    Scenario Outline: Buscar por orçamento
        Given que estou na tela de busca de orçamentos
        When busco por orçamentos com <filtro>
        Then devo ver os resultados de orçamentos correspondentes ao <filtro>

        Examples:
            | filtro                        |
            | "Data inicial prometido para" |
            | "Data final prometido para"   |
            | "Forma de envio"              |
            | "Paciente/Cliente"            |
            | "Amarelinha urgente"          |
            | "Filial"                      |
            | "Campanha externa"            |

    @RegisterConference
    Scenario Outline: Registrar conferência com/sem equívoco
        Given que estou na tela de conferência de saída
        When registro a conferência no orçamento "21991/5" com <equivoco>
        Then o registro deve ser salvo com <equivoco>
        And uma mensagem de confirmação é exibida

        Examples:
            | equivoco       |
            | "equívoco"     |
            | "sem equívoco" |

    @SendPending
    Scenario Outline: Enviar orçamento para pendência de saída
        Given que estou na tela de conferência de saída
        When envio o orçamento "27839/5" para pendência de saída
        Then o orçamento deve estar na lista de pendências de saída
        And uma mensagem de confirmação é exibida

        Examples:
            | motivo                                             |
            | "Aguardando autorização repet/validação receita"   |
            | "Aguardando Imagem da Receita"                     |
            | "Contato/retorno cliente"                          |
            | "Dúvida interna conf. entrada"                     |
            | "Dúvida técnica com prescritor"                    |
            | "Dúvida/confirmação com atendente"                 |
            | "E-mail de Cancelamento ou Alterações"             |
            | "Pendência de lote (verificando estoque/previsão)" |
            | "Verificando com laboratório"                      |

    @RemovePending
    Scenario: Remover pendência de saída
        Given que estou na tela de pendências de saída
        When removo a pendência do orçamento "27839/5"
        Then o orçamento deve ser removido da lista de pendências de saída
        And uma mensagem de confirmação é exibida

    @ReturnEntranceConference
    Scenario: Retornar orçamento para conferência de entrada
        Given que estou na tela de conferência de saída
        When retorno o orçamento para a conferência de entrada
        Then o orçamento deve estar marcado como "retornado para conferência de entrada"

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Feature: Expedição de Produtos
    Como um usuário da expedição
    Quero gerenciar a expedição dos produtos
    Para garantir que os produtos sejam entregues corretamente aos clientes

    Background:
        Given que estou logado no sistema

    @PreparePost
    Scenario Outline: Preparar postagem
        Given que estou na tela de preparação de postagem
        When preencho os detalhes da postagem:
            | campo                 | valor           |
            | "Serviço de Postagem" | <servico>       |
            | "Nome"                | <nome>          |
            | "Aos Cuidados"        | <aosCuidados>   |
            | "Email"               | <email>         |
            | "Endereço Cadastrado" | <endereco>      |
            | "Dados de Endereço"   | <dadosEndereco> |
        And clico em "Salvar"
        Then a postagem deve ser salva com os detalhes:
            | campo                 | valor           |
            | "Serviço de Postagem" | <servico>       |
            | "Nome"                | <nome>          |
            | "Aos Cuidados"        | <aosCuidados>   |
            | "Email"               | <email>         |
            | "Endereço Cadastrado" | <endereco>      |
            | "Dados de Endereço"   | <dadosEndereco> |

        Examples:
            | servico            | nome         | aosCuidados    | email              | endereco     | dadosEndereco    |
            | "Correios"         | "João Silva" | "Maria Souza"  | "joao@example.com" | "Rua 1, 123" | "Apt 2, Bloco B" |
            | "Transportadora X" | "Ana Lima"   | "Pedro Santos" | "ana@example.com"  | "Av. 2, 456" | "Casa 3"         |

    @ViewData
    Scenario: Visualizar dados do cliente do pedido
        Given que estou na tela de expedição
        When visualizo os dados do cliente do pedido "Pedido123"
        Then devo ver os dados do cliente "João Silva" com endereço "Rua 1, 123"

    @ViewOrder
    Scenario: Visualizar amarelinha
        Given que estou na tela de expedição
        When visualizo a amarelinha do pedido "Pedido123"
        Then devo ver a confirmação do pedido impressa

    @FinalizeShipping
    Scenario: Finalizar expedição do pedido
        Given que estou na tela de expedição
        When finalizo a expedição do pedido "Pedido123" com opção de envio "Expedida" e observações "Entregar pela manhã"
        Then o pedido "Pedido123" deve estar marcado como "Expedida" com observações "Entregar pela manhã"

    @DeleteOrder
    Scenario: Excluir pedido
        Given que estou na tela de expedição
        When excluo o pedido "Pedido123"
        Then o pedido "Pedido123" não deve mais aparecer na lista de pedidos

    @PrintLabel
    Scenario: Imprimir etiqueta
        Given que estou na tela de expedição
        When imprimo a etiqueta do pedido "Pedido123"
        Then a etiqueta deve ser gerada e exibida para impressão

    @CheckTracking
    Scenario: Consultar código de rastreamento
        Given que estou na tela de expedição
        When consulto o código de rastreamento do pedido "Pedido123"
        Then devo ver o código de rastreamento "ABC123456"

    @SendTracking
    Scenario: Enviar código de rastreamento via email
        Given que estou na tela de expedição
        When envio o código de rastreamento do pedido "Pedido123" para o email "joao@example.com"
        Then o email deve ser enviado com o código de rastreamento "ABC123456"
