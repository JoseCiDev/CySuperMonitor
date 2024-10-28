Feature: Gestão de Laudos de Análise de Peso Médio no Laboratório
    Como técnico de laboratório
    Quero capturar e registrar os laudos de peso médio de forma digital
    Para manter um histórico acessível e facilitar a análise e controle de qualidade

    Background:
        Given que o técnico está logado no aplicativo do laboratório

    # Cenários para o processo de captura e registro de laudos

    @pesoMedio @capturaDeLaudo @foto
    Scenario: Capturar imagem do laudo para requisição aprovada
        Given que o técnico acessa uma requisição com laudo aprovado
        And o APP exibe o botão para capturar imagem da amarelinha
        When o técnico captura a imagem do laudo de peso médio
        Then o laudo de peso médio é registrado na requisição
        And não deve ser permitido registrar uma novo apontamento para o laudo aprovado

    @pesoMedio @capturaDeLaudo @reprovado
    Scenario: Registrar novo laudo após reprovação e correção de requisição
        Given que o laudo de peso médio para uma requisição está como reprovado
        And o técnico acessa a requisição com o status reprovado
        When o técnico registra a imagem do laudo de peso médio
        Then o laudo registrado é vinculado à requisição em questão
        And todos os laudos de peso médio associados à requisição devem ser armazenados
        And deve ser permitido registrar um equivoco após a captura

    @pesoMedio @correcao @reavaliacao
    Scenario: Habilitar novo registro após correção de requisição reprovada
        Given que uma requisição foi reprovada no laudo de peso médio
        And um equivoco foi apontado no laudo reprovado
        When o técnico acessa a requisição novamente para uma nova análise de peso
        Then o APP permite a captura de uma nova imagem do laudo

    # Cenários de relatório no módulo de relatórios

    @relatorio @historicoDeLaudos @quantitativo
    Scenario: Exibir histórico de laudos de peso médio no relatório do APP
        Given que o técnico acessa o módulo de relatórios do APP
        When o técnico seleciona a aba de laudos de peso médio
        Then o APP exibe a quantidade de requisições aprovadas e reprovadas no dia
        And o gráfico quantitativo mostra a comparação entre requisições aprovadas e reprovadas
        And o relatório diário mostra as requisições relacionadas ao próprio técnico logado

    # Cenários para disponibilidade de botões conforme o setor do técnico

    @interface @setorPesoMedio @botao
    Scenario: Exibir botão de captura de laudo somente para setor "Peso Médio"
        Given que o técnico está logado no APP em um setor diferente de "Peso médio"
        When o técnico acessa uma requisição
        Then o botão para capturar imagem do laudo de peso médio não deve estar disponível

    @interface @setorPesoMedio @fluxoDeAprovacao
    Scenario: Processo completo de escolha da ficha, captura de imagem e aprovação
        Given que o técnico acessa o setor "Peso médio" no APP
        And o técnico seleciona a ficha da requisição para análise de peso médio
        When o técnico captura a imagem do laudo
        And seleciona a opção "Aprovado" ou "Reprovado" para o laudo
        Then a requisição deve ser atualizada com o status da análise
        And o registro da imagem fica vinculado conforme o status final da requisição

    # Cenário para ações permitidas conforme a aprovação/reprovação

    @pesoMedio @analiseAprovacao
    Scenario Outline: Ações permitidas para laudos aprovados e reprovados
        Given que o técnico acessa a requisição com laudo <statusLaudo>
        When o técnico tenta <acao>
        Then <resultadoEsperado>

        Examples:
            | statusLaudo | acao                 | resultadoEsperado                                                 |
            | aprovado    | capturar nova imagem | "O código de barras "<codigoBarrasFicha>" já foi aprovado antes"  |
            | reprovado   | capturar nova imagem | "O código de barras "<codigoBarrasFicha>" já foi reprovado antes" |
            | reprovado   | registrar equivoco   | "Equivocos atribuidos para ficha "<numeroFicha>" com sucesso"     |
            | aprovado    | registrar equivoco   | "Equivocos atribuidos a "<numeroFicha>" com sucesso"              |


#se a ficha esta aprovada posso apontar um equivoco nela?
