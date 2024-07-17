# language: pt


#=========####################==================RECEITAS====================####################==================#

# Importar Receitas
# Registrar receita
#Varejo
#paciente
#canal de recebimento
#atendente responsável
#data de recebimento
#cluster
#aviso de urgencia
#aviso de cliente alerta
#sinalização Prescrição
#repetição
#não possui receita
#possui receita
#observação em texto
#Prescrição
#imagem
#pdf
#jpg
#prescritor
#paciente
#canal de recebimento
#atendente responsável
#data de recebimento
#cluster
#aviso de urgencia
#aviso de cliente alerta
#aviso de medicamento controlado
#Sinalização Prescrição
#sinalização repetição
#sinalização não possui receita
#sinalização possui receita
#observação em texto


@importarReceitas
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


    @prescricao @pdf
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


    @prescricao @jpg
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


    @varejo @urgencia
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

    @prescricao @medicamentoControlado
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
# 425294
# 425296
# 425297
# 425299
# 425300
# 425301
# 425302
# 425298
# 425303

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Observação farmacêutica
#configurar senha de receita
#configurar carimbo da receita
#criar
#exluir

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

# Clonar Receitas
#Clonar receita de varejo
#clonar receita com observação farmacêutica
#clonar receita sem observação farmacêutica
#Clonar Receita prescrição
#clonar receita com observação farmacêutica
#clonar receita sem observação farmacêutica
#Cancelar clonagem da receita

Feature: Clonar Receitas
    Como um usuário do sistema
    Eu quero clonar receitas
    Para que eu possa gerenciar eficientemente as receitas de varejo e prescrição com ou sem observações farmacêuticas

    # Usando Background para definir pré-condições comuns
    Background:
        Given que o usuário está autenticado
        And está na página de receitas

    # Usando Esquema do Cenário para evitar repetição e cobrir múltiplas opções
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

    # Cenário específico para cancelamento da clonagem
    Scenario Outline: Cancelar clonagem da receita
        Given que o usuário iniciou o processo de clonagem de uma receita
        When o usuário clica no botão de cancelar clonagem
        Then o processo de clonagem é cancelado
        And nenhuma nova receita é criada

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Dúvidas Técnicas
#Criar
#enviar notificação para usuário destinatário
#Excluir
#enviar notificação para usuário remetente e destinatário
#Responder
#enviar notificação para usuário remetente
#Marcar como resolvido
#enviar notificação para usuário destinatário

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


# Editar Receitas
#Varejo
#paciente
#canal de recebimento
#atendente responsável
#cluster
#aviso de urgencia
#aviso de cliente alerta
#aviso de medicamento controlado
#Sinalização Prescrição
#sinalização repetição
#sinalização não possui receita
#sinalização possui receita
#observação em texto
#Prescrição com imagem da receita
#imagem
#pdf
#jpg
#prescritor
#paciente
#canal de recebimento
#atendente responsável
#data de recebimento
#cluster
#aviso de urgencia
#aviso de cliente alerta
#aviso de medicamento controlado
#Sinalização Prescrição
#sinalização repetição
#sinalização não possui receita
#sinalização possui receita
#observação em texto

@editarReceitas
Feature: Edição de Receitas
    Como um usuário do sistema de farmácia
    Eu quero editar informações de receitas
    Para que eu possa atualizar dados conforme necessário

    Background:
        Given que o usuário está autenticado no sistema
        And o usuário acessa a funcionalidade de edição de receitas

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


    @urgencia @alerta
    Scenario Outline: Editar avisos na receita
        When o usuário edita o "<aviso>" para "<status>"
        Then o "<aviso>" é atualizado para "<status>"

        Examples:
            | aviso                           | status     |
            | aviso de urgência               | Ativado    |
            | aviso de cliente alerta         | Desativado |
            | aviso de medicamento controlado | Ativado    |


    @sinalizacao
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

    @dadosCompletos
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

# Excluir receitas
#Varejo
#Prescrição

@excluirReceitas
Feature: Excluir Receitas
    Como um usuário do sistema de farmácia
    Eu quero excluir receitas individualmente
    Para que eu possa gerenciar as receitas de forma eficiente

    Background:
        Given que o usuário está autenticado no sistema
        And o usuário acessa a funcionalidade de gerenciamento de receitas

    @varejo
    Scenario Outline: Excluir uma receita de varejo
        Given que o usuário tem acesso à lista de receitas de varejo
        When o usuário seleciona uma receita de varejo para exclusão
        And o usuário confirma a exclusão da receita
        Then a receita é excluída com sucesso
        And uma mensagem de confirmação "Receita "<numeroReceita>" removida com sucesso!" é exibida

        Examples:
            | numeroReceita |
            | 425304        |


    @prescricao
    Scenario Outline: Excluir uma prescrição
        Given que o usuário tem acesso à lista de prescrições
        When o usuário seleciona uma prescrição para exclusão
        And o usuário confirma a exclusão da prescrição
        Then a prescrição é excluída com sucesso
        And uma mensagem de confirmação "Prescrição excluída com sucesso" é exibida

        Examples:
            | numeroReceita |
            | 425300        |


    @cancelamento
    Scenario: Cancelar a exclusão de uma receita
        Given que o usuário seleciona uma receita para exclusão
        When o usuário decide cancelar a exclusão
        Then a ação de exclusão é cancelada
        And a receita permanece na lista de receitas

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Vincular receita
#Varejo
# vincular/desvincular pela tela importar receitas pelo botão vincular
# vincular/desvincular pela tela importar receitas editando receita
# vincular/desvincular pela tela gerenciar receitas pelo botão vincular
# vincular/desvincular pela tela gerenciar receitas editando receita
# vincular/desvincular pela tela atendimento em andamento
# vincular/desvincular pela tela atendimento encerrado
#Prescrição
# vincular/desvincular pela tela importar receitas pelo botão vincular
# vincular/desvincular pela tela importar receitas editando receita
# vincular/desvincular pela tela gerenciar receitas pelo botão vincular
# vincular/desvincular pela tela gerenciar receitas editando receita
# vincular/desvincular pela tela atendimento em andamento
# vincular/desvincular pela tela atendimento encerrado

Feature: Vincular e Desvincular Receitas
    Como um usuário do sistema
    Quero vincular e desvincular receitas
    Para gerenciar orçamentos de maneira eficiente

    Background:
        Given que estou logado no sistema

    @Varejo @Vincular
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


    @Varejo @Desvincular
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


    @Prescricao @Vincular
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


    @Prescricao @Desvincular
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

#Data inicial (receb. da receita)
#Data final (receb. da receita)
#Cluster
#Canal recebimento
#numero Receita
#Paciente
#Prescritor
#numero Orçamento
#Orçamentista
#Atendente responsável
#Receita pendente
#Receita vinculada

Feature: Busca Avançada de Receitas
    Como um usuário do sistema
    Quero utilizar múltiplos parâmetros de busca para encontrar receitas
    Para facilitar a gestão de receitas e orçamentos

    Background: Usuário está autenticado e na página de busca de receitas
        Given que o usuário está logado no sistema
        And está na página de "Busca de Receitas"

    @BuscaAvancada
    Scenario: Buscar receitas por data, cluster e status
        Given o usuário define a "Data inicial" como "01/01/2023"
        And o usuário define a "Data final" como "31/01/2023"
        And o usuário seleciona o "Cluster" como "Sul"
        And o usuário marca a opção de "Receita pendente"
        When o usuário clica em "Buscar"
        Then as receitas correspondentes aos critérios de busca são exibidas

    @BuscaCombinada
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

#=========####################==================BACKOFFICE====================####################==================#

#Buscar por orçamentos
#data entrada atendimento
#Data inicial (receb. da receita)
#Data final (receb. da receita)
#Cluster
#Canal recebimento
#numero Receita
#Paciente
#Prescritor
#numero Orçamento
#Atendente responsável
#amarelinha urgente
#duvida técnica

#data recebimento receita
#Data inicial (receb. da receita)
#Data final (receb. da receita)
#Cluster
#Canal recebimento
#numero Receita
#Paciente
#Prescritor
#numero Orçamento
#Atendente responsável
#amarelinha urgente
#duvida técnica

#Marcar uso

#Sinalizar controle pessoal
#enviado para orçamento parcial
#indormado cliente sobre DT

#Gerar link de continuidade do atendimento com link SelfCheckout
#Enviar copy
#Enviar link

Feature: Gerenciamento de Orçamentos no Backoffice

    Background: Usuário está autenticado e no sistema backoffice
        Given que o usuário está logado no sistema backoffice

    @BuscarOrcamentos
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


    @MarcarUso
    Scenario: Marcar orçamento como em uso
        Given o usuário seleciona o orçamento "14068/1010"
        When o usuário marca o orçamento como "Em uso"
        Then o sistema atualiza o status do orçamento para "Em uso"

    @ControlePessoal
    Scenario Outline: Sinalizar ações no controle pessoal
        Given o usuário está visualizando o orçamento "<NumeroOrcamento>"
        When o usuário sinaliza "<Acao>"
        Then o sistema registra a ação e apresenta na controle pessoal

        Examples:
            | NumeroOrcamento | Acao                           |
            | 14068/1010      | enviado para orçamento parcial |
            | 14093/1010      | informado cliente sobre DT     |

    @GerarEnviarLink
    Scenario: Gerar e enviar link de continuidade do atendimento
        Given o usuário está iniciando o atendimento do orçamento "14068/1010"
        When o usuário gera um link de continuidade do atendimento
        And o usuário envia o link de continuidade, "Copy" e "Link" para o cliente
        Then o cliente recebe o link para continuar o atendimento e visualizar seu orçamento no SelfCheckout

    @RegistraConferenciaBackoffice
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

#=========####################==================ATENDIMENTO====================####################==================#

# Atendimento em Andamento

#Configura tempo de tratamento para as fórmulas

#Vincula receita
#desvincula receita
#visualiza receita
#insere observacao farmaceutica
#envia duvidas tecnicas
#envia e-mail do orçamento
#remove vinculo com receita

#Envia link continuidade selfcheckout
#Envia copy
#Envia link

#Configurar contato do cliente
#idioma
#telefone

#Visualizar dados do cliente

#Visualiza observacoes entre paciente e medico

#Encerra atendimento selecionando motivo

#Registra conferencia Backoffice
#apontando equivocos
#nao apontando equivocos

#Registra conferencia atendente
#apontando equivocos
#nao apontando equivocos

#Confirmar Atendimento
#forma de pagamento
#tempo de repeticao
#canal de fechamento do orçamento
#enviar email de rastreamento
#Liberar pedido para INCLUSÃO:
#Liberar pedido para CAIXA:
#Observações Caixa / Balcão:
#Deseja Nota Detalhada:
#Pago/nao pago
#endereço de entrega
#Observações Expedição:
#Forma de Envio
#Junto com:(numero de outro orçamento que será juntado)
#Junto com (numero de orçamento da CLINICA HIGASHI):
#Data de Prometido para entrega ao cliente
#Aroma Sachê / Shake
#Aroma / Sachê / Shake / Solução Oral / Caps. Sublingual
#Observações Gerais
#Possui Receita:sim/nao/repeticao
#pedido urgente


#Enviar link de avialiação NPS



Feature: Atendimento em Andamento

    Background: Usuário atendente está autenticado e no sistema
        Given que o atendente está logado no sistema

    @ConfiguraTempoTratamento
    Scenario: Configurar tempo de tratamento para as fórmulas
        Given o atendente seleciona a opção tempo de tratamento para as fórmulas "Fórmula X"
        When o atendente configura o tempo de tratamento para "30 dias"
        Then o sistema atualiza o tempo de tratamento da fórmula para "30 dias"
        And uma mensagem de confirmação é exibida

    @VinculaReceita
    Scenario: Vincular uma receita ao orçamento
        Given o atendente está visualizando o orçamento "14068/1010"
        When o atendente vincula a receita "425296"
        Then o sistema vincula a receita "425296" ao orçamento "14068/1010"
        And uma mensagem de confirmação é exibida

    @DesvinculaReceita
    Scenario: Desvincular uma receita do orçamento
        Given o atendente está visualizando o orçamento "14068/1010" com a receita "425296" vinculada
        When o atendente desvincula a receita "425296"
        Then o sistema remove o vínculo da receita "425296" do orçamento "14068/1010"
        And uma mensagem de confirmação é exibida

    @VisualizaReceita
    Scenario: Visualizar detalhes da receita vinculada
        Given o atendente está visualizando o orçamento "14068/1010" com a receita "425296" vinculada
        When o atendente seleciona para visualizar a receita "425296"
        Then o sistema exibe os detalhes da receita "425296"

    @InsereObservacaoFarmaceutica
    Scenario: Inserir observação farmacêutica na receita
        Given o atendente está visualizando a receita "425296"
        When o atendente insere uma observação farmacêutica "Verificar dosagem"
        Then o sistema salva a observação "Verificar dosagem" na receita "425296"

    @EnviaDuvidasTecnicas
    Scenario: Enviar dúvidas técnicas sobre a receita
        Given o atendente está visualizando a receita "425296"
        When o atendente envia uma dúvida técnica "Confirmação de dosagem"
        Then o sistema registra e envia a dúvida técnica "Confirmação de dosagem" para o destinatário

    @EnviaEmailOrcamento
    Scenario: Enviar e-mail do orçamento para o cliente
        Given o atendente está visualizando o orçamento "14068/1010"
        When o atendente envia o orçamento por e-mail para o cliente "cliente@example.com"
        Then o sistema envia o orçamento "14068/1010" para "cliente@example.com"
        And o atendente visualiza mensagem informando sucesso no envio

    @EnviaLinkContinuidadeSelfCheckout
    Scenario: Enviar link de continuidade self-checkout para o cliente
        Given o atendente está finalizando o atendimento do orçamento "14068/1010"
        When o atendente gera e envia o link de continuidade self-checkout para o cliente
        Then o cliente recebe o link de continuidade self-checkout

    @EnviaCopy
    Scenario: Enviar copy do orçamento para o cliente
        Given o atendente está visualizando o orçamento "14068/1010"
        When o atendente envia um copy do orçamento para o cliente
        Then o cliente recebe o copy do orçamento

    @EnviaLink
    Scenario: Enviar link do orçamento para o cliente
        Given o atendente está visualizando o orçamento "14068/1010"
        When o atendente envia o link do orçamento para o cliente
        Then o cliente recebe o link do orçamento

    @ConfigurarContatoCliente
    Scenario: Configurar contato do cliente com idioma e telefone
        Given o atendente seleciona o orçamento e acessar tela de configurar contato "Cliente X"
        When o atendente configura o idioma "Português" e o telefone "11999999999"
        Then o sistema atualiza o idioma e o telefone do cliente "Cliente X"
        And uma mensagem de confirmação é exibida

    @VisualizarDadosCliente
    Scenario: Visualizar dados do cliente
        Given o atendente seleciona o orçamento cliente "Cliente X"
        When o atendente solicita visualizar os dados
        Then o sistema exibe os dados do cliente "Cliente X"

    @Adiciona/ExcluiObservacoesFarmaceuticas
    Scenario: Visualizar observações entre paciente e médico
        Given o atendente seleciona o cliente "Cliente X"
        When o atendente visualiza as observações entre paciente e médico
        Then o sistema exibe as observações entre paciente e médico para "Cliente X"

    @EncerraAtendimento
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


    @ConfirmarAtendimento
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


    @EnviarLinkNPS
    Scenario: Enviar link de avaliação NPS
        Given o atendimento "ATD456" foi concluído
        When o atendente envia o link de avaliação NPS para "cliente@example.com"
        Then o cliente "cliente@example.com" recebe o link de avaliação NPS


            # ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

            #=========####################==================INCLUSÃO====================####################==================#

            #Buscar por oerçamento
            #Data inicial (prometido para)
            #Data final (prometido para)
            #Forma de envio
            #Paciente/Cliente
            #amarelinha urgente
            #filial
            #campanha externa

            #Registra conferencia

            #Realiza inclusão

            #Marca uso

            # language: pt

            Funcionalidade: Gerenciamento de Orçamentos
            Como um usuário do sistema de inclusão
            Eu quero realizar a inclusão de orçamentos, marcar uso, registrar conferências
            Para que eu possa gerenciar eficientemente os orçamentos dos clientes

            @busca_orcamento
            Esquema do Cenário: Buscar por orçamento com filtros específicos
            Dado que o usuário acessa a funcionalidade de busca por orçamento
            Quando o usuário define os seguintes filtros de busca:
            | DataInicial   | DataFinal   | FormaEnvio   | PacienteCliente   | Filial   | CampanhaExterna   |
            | <DataInicial> | <DataFinal> | <FormaEnvio> | <PacienteCliente> | <Filial> | <CampanhaExterna> |
            Então o sistema exibe os orçamentos que correspondem aos critérios de busca

            Exemplos:
            | DataInicial | DataFinal  | FormaEnvio                      | PacienteCliente | Filial | CampanhaExterna |
            | 01/01/2023  | 31/01/2023 | Correios - Sedex SC             | João Silva      | 4      | Sim             |
            | 15/02/2023  | 15/03/2023 | Correios - Sedex 10             | Maria Oliveira  | 5      | Não             |
            | 01/04/2023  | 30/04/2023 | Balcão SMART                    | Carlos Pereira  | 1000   | Sim             |
            | 01/05/2023  | 31/05/2023 | Funcionário - Retirada Recepção | Ana Costa       | 1020   | Não             |


        @marca_uso
        Cenário: Marcar uso no orçamento
        Dado que o usuário acessa a funcionalidade de marcação de uso em um orçamento
        Quando o usuário marca o uso no orçamento "28477/5"
        Então o sistema registra o uso no orçamento "28477/5"
        And uma mensagem de confirmação é exibida

        @registro_conferencia
        Cenário Outline: Registrar conferência com e sem equívocos
        Dado que o usuário acessa a funcionalidade de registro de conferência
        Quando o usuário realiza o registro de conferência com "<Equívoco>"
        Então o sistema "<Ação>" na conferência
        And uma mensagem de confirmação é exibida

            Exemplos:
            | Equívoco      | Ação                         |
            | Com equívocos | registra os equívocos        |
            | Sem equívocos | não registra nenhum equívoco |


            @realiza_inclusao
            Cenário Outline: Realizar inclusão de orçamento com diferentes situações
            Dado que o usuário acessa a funcionalidade de inclusão de orçamento
            Quando o usuário inclui um orçamento com a situação "<Situação>"
            Então uma mensagem de confirmação com sucesso é exibida

            Exemplos:
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

            #=========####################==================CONFERENCIA DE ENTRADA====================####################==================#

            #Registro de conferencia
            #Buscar por orçamento
            #Data inicial (prometido para)
            #Data final (prometido para)
            #Forma de envio
            #Paciente/Cliente
            #amarelinha urgente
            #filial
            #campanha externa

            #Retornar para inclusão

            #Registra conferencia com equivoco/sem equivoco

            #Envia orçamento para pendencia
            #  Aguardando autorização repet/validação receita
            #  Aguardando Imagem da Receita
            #  Contato/retorno cliente
            #  Dúvida interna conf. entrada
            #  Dúvida técnica com prescritor
            #  Dúvida/confirmação com atendente
            #  E-mail de Cancelamento ou Alterações
            #  Pendência de lote (verificando estoque/previsão)
            #  Verificando com laboratório
            #  Voltou para o laboratório para correção (Ex Ativo, base, volume, entre outros)

            #Retira pendencia

            Funcionalidade: Gerenciamento de Conferência de Entrada
            Como um usuário da conferência de entrada
            Eu quero buscar por orçamentos, registrar conferências, enviar orçamentos para pendência e remover pendências
            Para garantir que nada errado seja enviado para produção no laboratório

            @busca_orcamento
            Cenário Outline: Buscar por orçamento com filtros específicos
            Dado que o usuário acessa a funcionalidade de busca por orçamento
            Quando o usuário define os seguintes filtros de busca:
            | DataInicial   | DataFinal   | FormaEnvio   | PacienteCliente   | AmarelinhaUrgente   | Filial   | CampanhaExterna   |
            | <DataInicial> | <DataFinal> | <FormaEnvio> | <PacienteCliente> | <AmarelinhaUrgente> | <Filial> | <CampanhaExterna> |
            Então o sistema exibe os orçamentos que correspondem aos critérios de busca

            Exemplos:
            | DataInicial | DataFinal  | FormaEnvio          | PacienteCliente | AmarelinhaUrgente | Filial | CampanhaExterna |
            | 01/01/2023  | 31/01/2023 | Correios - Sedex SC | João Silva      | Não               | 4      | Sim             |
            | 15/02/2023  | 15/03/2023 | Correios - Sedex 10 | Maria Oliveira  | Sim               | 5      | Não             |

            @registro_conferencia
            Cenário Outline: Registrar conferência com e sem equívocos
            Dado que o usuário acessa a funcionalidade de registro de conferência
            Quando o usuário registra a conferência do orçamento "28477/5" com "<Equívoco>"
            Então o sistema "<Ação>" na conferência

            Exemplos:
            | Equívoco      | Ação                                                     |
            | Com equívocos | marca o orçamento como pendente com detalhes do equívoco |
            | Sem equívocos | aprova o orçamento para a próxima etapa                  |

            @envia_pendencia
            Cenário Outline: Enviar orçamento para pendência
            Dado que o usuário acessa a funcionalidade de enviar orçamento para pendência
            Quando o usuário envia o orçamento "41239/5" para pendência devido a "<Motivo>"
            Então o sistema registra a pendência com o motivo "<Motivo>"

            Exemplos:
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

        @retira_pendencia
        Cenário: Retirar orçamento da pendência
        Dado que o usuário acessa a funcionalidade de retirar orçamento da pendência
        Quando o usuário retira o orçamento "41239/5" da pendência
        Então o sistema atualiza o status do orçamento "41239/5" e o redireciona para Conferência de saída
        And  uma mensagem de confirmação com sucesso é exibida

        @retornar_inclusao
        Cenário: Retornar orçamento para inclusão
        Dado que o usuário identifica um erro crítico no orçamento "41159/5" durante a conferência
        Quando o usuário decide retornar o orçamento "41159/5" para inclusão
        Então o sistema redireciona o orçamento "28477/5" para Inclusão
        And  uma mensagem de confirmação com sucesso é exibida

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#=========####################==================CONFERENCIA DE SAIDA====================####################==================#

#Buscar por orçamento
#Data inicial (prometido para)
#Data final (prometido para)
#Forma de envio
#Paciente/Cliente
#amarelinha urgente
#filial
#campanha externa

#Retornar para conferencia de entrada

#Registra conferencia com equivoco/sem equivoco

#Envia orçamento para pendencia
# Aguardando autorização repet/validação receita
#  Aguardando Imagem da Receita
#  Contato/retorno cliente
#  Dúvida interna conf. entrada
#  Dúvida técnica com prescritor
#  Dúvida/confirmação com atendente
#  E-mail de Cancelamento ou Alterações
#  Pendência de lote (verificando estoque/previsão)
#  Verificando com laboratório

#Retira pendencia

Feature: Conferência de Saída
    Como um usuário de conferência de saída
    Quero conferir orçamentos de saída
    Para garantir que nada errado seja enviado para expedição

    Background:
        Given que estou logado no sistema

    @BuscarOrcamento
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

    @RegistrarConferencia
    Scenario Outline: Registrar conferência com/sem equívoco
        Given que estou na tela de conferência de saída
        When registro a conferência no orçamento "21991/5" com <equivoco>
        Then o registro deve ser salvo com <equivoco>
        And uma mensagem de confirmação é exibida

        Examples:
            | equivoco       |
            | "equívoco"     |
            | "sem equívoco" |

    @EnviarPendencia
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

    @RemoverPendencia
    Scenario: Remover pendência de saída
        Given que estou na tela de pendências de saída
        When removo a pendência do orçamento "27839/5" 
        Then o orçamento deve ser removido da lista de pendências de saída
        And uma mensagem de confirmação é exibida

    @RetornarConferenciaEntrada
    Scenario: Retornar orçamento para conferência de entrada
        Given que estou na tela de conferência de saída
        When retorno o orçamento para a conferência de entrada
        Then o orçamento deve estar marcado como "retornado para conferência de entrada"
