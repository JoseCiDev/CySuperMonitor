# language: pt
Feature: Distribuição de Receitas para Cluster Pediátrico

    Como gestora do atendimento,
    Quero que o sistema distribua receitas de pacientes com menos de 12 anos para o cluster pediátrico,
    Para garantir que esses pacientes recebam o atendimento adequado e a equipe seja notificada visualmente.

    Background:
        Given que estou na tela "Supermonitor → Receitas → Importar receitas"
        And o sistema está configurado com as regras de distribuição de receitas

    @critic @pediatricCluster @inferiorAgeTwelveYears
    Scenario Outline: Distribuição automática para cluster pediátrico (idade < 12 anos)
        Given que o paciente "<paciente>" possui "<idade>" anos
        And o prescritor tem a especialidade "<especialidade>"
        When o usuário importar a receita para o paciente
        Then o sistema deve direcionar a receita automaticamente para o cluster pediátrico (6)
        And exibir o alerta visual de paciente pediátrico com o ícone "KIDS"

        Examples:
            | codigoPaciente | paciente                              | idade  | especialidadePrescritor | nomePrescritor                      | nrcrmPrescritor |
            | 802446         | LUISA ALVES CORREA LIMA VERDE MARQUES | 1 ano  | dentista                | JOYCE RAQUEL SOBRINHO GOMES PIMENTA | 8570            |
            | 605959         | VALENTINA FORTTI PINA SCHMIDT         | 2 anos | veterinario             | DEISI CRISTIANI ALVES               | 6501            |
            | 566228         | LIVIA DE LIMA M RODRIGUES             | 3 anos | esteticista             | FERNANDA CARDOSO                    | 63              |
            | 432929         | MATHEUS TEIXEIRA DECIMO               | 4 anos | biomedico               | BRUNA NUNES DE OLIVAL COTRIM        | 27191           |
            | 274429         | CARLA MARINHO QUINTELLA WEHRS         | 6 anos | nutricionista           | VALENTINA MIGLIORINI DE MOURA       | 16829           |
            | 743162         | MATHEUS CUNHA DE FIGUEIREDO           | 7 anos | pediatra                | SIMONE PIRES                        | 87574           |

    @moderado @regras_gerais @idade_maior_ou_igual_12
    Scenario Outline: Distribuição conforme regras gerais (idade >= 12 anos)
        Given que o paciente "<paciente>" possui "<idade>" anos
        And o prescritor tem a especialidade "<especialidade>"
        When o usuário importar a receita para o paciente
        Then o sistema deve alocar a receita para a atendente que possui o menor número de receitas dentro do cluster que está configurado relação com o prescritor.

        Examples:
            | codigoPaciente | paciente               | idade              | especialidadePrescritor | nomePrescritor                    | nrcrmPrescritor |
            | 58502          | EDILENE ARGOLLO VIEIRA | 12 anos e 109 dias | educação fisica         | FLAVIO BRAGA GOUVEIA AMORIM LOPES | 171219          |

    @critico @pediatra @distribuicao_atendente
    Scenario: Distribuição para atendente do cluster pediátrico (prescritor pediatra)
        Given que o paciente "Gabriel Alves" possui "10" anos
        And o prescritor tem a especialidade "pediatra"
        When o usuário importar a receita para o paciente
        Then o sistema deve direcionar a receita para o cluster pediátrico (6)
        And atribuir ao atendente cadastrado no cluster
        And manter o mesmo atendente mesmo que o limite de receitas seja excedido

    @critico @nao_pediatra @distribuicao_menor_receita
    Scenario: Distribuição para atendente do cluster pediátrico com menor número de receitas (prescritor não pediatra)
        Given que o paciente "Sofia Pereira" possui "9" anos
        And o prescritor tem a especialidade "nutricionista"
        When o usuário importar a receita para o paciente
        Then o sistema deve direcionar a receita para o cluster pediátrico (6)
        And atribuir ao atendente do cluster pediátrico com o menor número de receitas

    @critico @alerta_visual
    Scenario: Exibição de alerta visual para paciente pediátrico
        Given que o paciente "Leonardo Lima" possui "8" anos
        And o sistema identificou que a idade do paciente é inferior a 12 anos
        When o usuário preencher os dados do paciente
        Then o sistema deve exibir um alerta visual claro com o ícone "KIDS"
        And destacar o nome do paciente com uma cor diferenciada

    @critico @regra_preferencia_atendente
    Scenario: Preferência de atendente dentro do cluster pediátrico
        Given que o paciente "Gabriela Souza" possui "11" anos
        And o prescritor tem a especialidade "cardiologista"
        When o usuário importar a receita para o paciente
        Then o sistema deve priorizar o atendente já atribuído ao paciente no cluster pediátrico
        And caso não exista um atendente atribuído, distribuir para o atendente com menos receitas no cluster






# Voce é um desenvolvedor de testes automatizados cypress com javascript e typescript e desenvolve scripts para execução e1m ambiente local e CI bitbucket pipelines, voce realiza testes manuais também. Voce usa gherkin e cucumber na declaração dos testes.
# Você sempre aplica as melhores abordagens possíveis, segue principios S.O.L.I.D. e evita a repetição de código.
# Quero exemplos de cenários usando todos os recursos do cucumber para que eu tenha uma visualizacao de tudo e um cenário completo.

# Tenho que testar uma demanda de distribuicao de receitas para atendente e cluster dependendo da situacao.
# Quando o usuario do sistema importa receita ele informa o prescritor e paciente, nesse momento o sistema valida algumas regras de distribuicao de receitas.

# Objetivo e Contexto:  Quando uma receita for importada para um paciente com idade inferior a 12 anos, verificar a possibilidade do sistema direcionar automaticamente ao cluster Pediátrico (independente da especialidade do prescritor). Atualmente a regra de distribuição automática para o cluster pediátrico, considera somente a especialidade do prescritor cadastrado, se o paciente é criança mas o prescritor não tem a especialidade pediatra, o sistema faz o direcionamento conforme as regras gerais.

# Regra de distribuição:

# O sistema deverá distribuir automaticamente as receitas importadas de crianças com menos de 12 anos para o cluster dedicado ao atendimento pediátrico.

# Verificar no cadastro do paciente a data de nascimento

# Idade inferior a 12 anos?

# Não - Segue as regras de distribuição existente de acordo com a classificação do prescritor/relação cluster x atendente, etc.

# Sim - Deverá aplicar uma regra de distribuição automática e direcionar para o cluster pediátrico (6), independente da classificação prescritor e da especialidade. Ex.: Se a receita é de um prescritor com especialidade diferente de pediatra, mas tem 10 anos, deverá sobrepor a especialidade do prescritor e classificação, e direcionar para o cluster 6

# Critérios de Aceitação:

# Distribuição Automática para Cluster Pediátrico

# Quando o sistema identificar a idade do paciente como inferior a 12 anos,

# Então o sistema deverá distribuir automaticamente a receita para o cluster dedicado ao atendimento pediátrico (cluster 6).

# bust in silhouette História do usuário
# Como gestora do atendimento, gostaria de solicitar uma melhoria no sistema de importação de receitas. Quando uma receita for importada para um paciente com idade inferior a 12 anos, é fundamental que essa informação seja identificada e destacada diretamente na tela de importação.

# Além disso, essas receitas devem ser automaticamente direcionadas ao cluster Pediátrico (independente da especialidade do prescritor), que é dedicado a esse tipo de tratativa. Minha sugestão é que o sistema identifique automaticamente a idade do paciente e exiba um alerta visual claro, destacando que se trata de um paciente pediátrico. Esse alerta pode ser feito com ícones, cores diferenciadas ou mensagens, chamando a atenção da equipe para a necessidade de seguir os protocolos específicos de atendimento infantil.

# round pushpin Caminho (rota da tela, sistema)
# Supermonitor → Receitas → Importar receitas

# pushpin  Comportamento/Regras
# Quando usuário preencher os dados do paciente, sistema deverá verificar a idade do paciente via banco de dados, e se a idade for inferior a 12 anos, deve sinalizar visualmente na tela.

# A. Identificar idade do paciente, se for menor que 12 anos exibir uma sinalização na tela de registro.

# Descrição campo

# Tipo (formato)

# Observações

# KIDS

# Imagem/Ícone

# Adicionar ícone ao lado do nome paciente

# O sistema deverá distribuir automaticamente as receitas importadas de crianças com menos de 12 anos para o cluster dedicado ao atendimento pediátrico.

# Verificar no cadastro do paciente a data de nascimento

# Idade inferior a 12 anos?

# Não - Segue as regras de distribuição existente de acordo com a classificação do prescritor/relação cluster x atendente, etc.

# Sim - Deverá aplicar uma regra de distribuição automática e direcionar para o cluster pediátrico (6), independente da classificação prescritor e da especialidade. Ex.: Se a receita é de um prescritor com especialidade diferente de pediatra, mas tem 10 anos, deverá sobrepor a especialidade do prescritor e classificação, e direcionar para o cluster 6

# warning  Setor e processo afetado
# Todos os módulos que permitem a visualização da receita e do atendimento são impactados, já que essas informações precisam ser refletidas para todos os envolvidos.

# Módulo Receitas

# Módulo BackOffice

# Módulo Atendimentos

# Sinalizar na amarelinha

# Módulo Inclusão

# Módulo Conferências

# Check Mark Critério de aceitação
# Identificação e Sinalização de Pacientes com Menos de 12 Anos

# Se a idade for inferior a 12 anos, o sistema deverá exibir uma sinalização visual clara na tela de registro de receita.

# Distribuição Automática para Cluster Pediátrico

# Quando o sistema identificar a idade do paciente como inferior a 12 anos,

# Então o sistema deverá distribuir automaticamente a receita para o cluster dedicado ao atendimento pediátrico (cluster 6).

# Se prescritor for especialidade pediatra deve ser direcionado para atendente da lista, independente do limite cadastrado e quando ultrapassar, continua com a mesma atendente dentro do mesmo cluster

# Se prescritor não for pediatra e paciente menor que 12 anos, deve ser direcionado para atendente do cluster pediatrico com menor nro de receita

# crie todos os cenários possiveis conforme as informacoes passadas e demais cenários que sao pertinentes as informacoes mas nao foram requisitados, tudo em arquivo feature unico usando scenario outline e tags
