# Explicação dos Cenários:
# Registrar entrada e saída sem DT ou equívoco:

# Este cenário verifica que a operação é permitida uma vez, e que tentar registrar novamente deve ser bloqueado.
# Registrar entrada e saída após apontamento de equívoco:

# Demonstra que, quando um equívoco é registrado, o sistema permite uma nova operação de entrada e saída, mas bloqueia após esta correção.
# Registrar entrada e saída após apontamento de DT:

# Similar ao cenário de equívoco, mas trata de DTs, permitindo apenas uma nova operação de entrada e saída para cada DT registrada.
# Registrar múltiplas entradas e saídas com DT sem bloqueio:

# Verifica que enquanto o técnico está usando DT, o sistema continua permitindo operações, mas uma vez que tenta uma operação normal, o sistema bloqueia.
# Bloqueio de operação por setor e técnico:

# Usa Scenario Outline para testar que o bloqueio de operação é condicionado por setor e técnico. Se outro técnico tentar no mesmo setor, será bloqueado, mas quando a ficha se move para outro setor, é permitido.
# Realizar entrada e saída por outro técnico após mudança de setor:

# Garante que, após a ficha ser movida para outro setor, qualquer técnico pode interagir com a ficha, independente de operações anteriores.
# Registro final após resolver todas as DTs:

# Valida que o sistema permite resolver múltiplas DTs, mas após resolver todas, qualquer operação adicional será bloqueada, marcando a finalização.
Feature: Registro de entrada e saída de fichas com tratamento de DTs e equívocos

    Background:
        Given que o técnico está utilizando o APP para registrar a entrada e saída de fichas
        And que o técnico está no mesmo setor

    @registroRequisicao
    Scenario: Registrar entrada e saída de ficha sem DT ou equívoco
        Given que o técnico registra a entrada da ficha
        When o técnico tenta registrar a saída da ficha
        Then o sistema deve permitir o registro da saída
        When o técnico tenta registrar a entrada da mesma ficha novamente
        Then o sistema deve bloquear o registro e exibir a mensagem "Já foi registrado entrada e saída para este usuário e setor"

    @tratamentoEquivoco
    Scenario: Registrar entrada e saída após apontamento de equívoco
        Given que o técnico registrou a entrada e saída da ficha
        And um equívoco foi registrado pela farmacêutica para a mesma ficha
        When o técnico tenta registrar a entrada da ficha novamente
        Then o sistema deve permitir o registro de entrada
        When o técnico tenta registrar a saída após corrigir o equívoco
        Then o sistema deve permitir o registro de saída
        When o técnico tenta registrar a entrada uma segunda vez
        Then o sistema deve bloquear o registro e exibir a mensagem "Uma leitura após o equivoco já foi realizada para esta ficha usuário e setor"

    @tratamentoDT
    Scenario: Registrar entrada e saída após apontamento de DT
        Given que o técnico registrou a entrada da ficha sem DT ou equívoco
        When uma DT é registrada para a mesma ficha
        Then o sistema deve permitir o registro de entrada e saída novamente
        When o técnico tenta registrar a entrada uma segunda vez após a DT
        Then o sistema deve bloquear o registro e exibir a mensagem "Uma leitura após dúvida técnica já foi realizada para esta ficha usuário e setor"

    @infiniteDT
    Scenario: Registrar múltiplas entradas e saídas com DT sem bloqueio
        Given que uma DT foi registrada na ficha e o técnico já realizou a entrada e saída da ficha com DT
        When o técnico tenta registrar uma nova entrada e saída usando DT
        Then o sistema deve permitir o registro de entrada e saída
        When o técnico tenta registrar a entrada e saída novamente sem usar DT
        Then o sistema deve bloquear o registro e exibir a mensagem "Uma leitura após dúvida técnica já foi realizada para esta ficha usuário e setor"

    @bloqueioPorSetor
    Scenario Outline: Bloqueio de operação é por setor e técnico
        Given que um equívoco foi registrado no setor "<setorAtual>"
        When o técnico "<tecnicoId>" tenta registrar a entrada e saída na ficha
        Then o sistema deve permitir a operação
        When outro técnico "<outroTecnicoId>" no mesmo setor tenta registrar a entrada e saída na ficha
        Then o sistema deve permitir o registro para "<outroTecnicoId>"
        When a ficha é movida para o setor seguinte "<setorSeguinte>"
        Then qualquer técnico deve poder registrar entrada e saída normalmente

        Examples:
            | setorAtual                     | tecnicoId | outroTecnicoId | setorSeguinte                   |
            | Liquidos externos - Manipulado | 1000      | 999990         | Liquidos externos - Pesagem     |
            | Liquidos externos - Envase     | 789       | 321            | Liquidos externos - Finalização |

    @tratarEquivocoDT
    Scenario: Realizar entrada e saída por outro técnico após mudança de setor
        Given que um equívoco foi apontado no setor "Liquidos externos - Envase"
        And o técnico "1000" realizou a entrada e saída
        When o técnico "999990" tenta registrar a entrada e saída na ficha após mudança de setor para "Liquidos externos - Finalização"
        Then o sistema deve permitir a operação sem bloqueio

    @finalizacaoDT
    Scenario: Registro final após resolver todas as DTs
        Given que múltiplas DTs foram registradas na mesma ficha
        And o técnico realizou entrada e saída várias vezes usando DTs
        When o técnico tenta registrar uma entrada e saída normal (sem DT)
        Then o sistema deve permitir a entrada e saída normal (sem DT)
        But bloquear a próxima entrada e saída normal normal (sem DT)

