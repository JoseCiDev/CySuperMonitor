Feature: Gerenciar e Registrar Conferências e Equívocos
    # Scenario Outline: Registrar conferência por setor
    #     @registerConference
    #     Given o usuário está na tela de "<setor>"
    #     When o usuário registra uma conferência de "<tipoConferencia>"
    #     Then o sistema deve salvar a "<tipoConferencia>" com sucesso

    #     Examples:
    #         | setor       | tipoConferencia            |
    #         | backoffice  | conferência do backoffice  |
    #         | atendimento | conferência do atendimento |
    #         | inclusão    | conferência da inclusão    |
    #         | entrada     | conferência de entrada     |
    #         | saída       | conferência de saída       |

    # #341738 / 1000 <> 425984

    # Scenario Outline: Desfazer conferência por setor
    #     @undoConference
    #     Given o usuário está na tela de "<telaDesfazer>"
    #     And há uma "<tipoConferencia>" já registrada
    #     When o usuário desfaz a "<tipoConferencia>"
    #     Then a "<tipoConferencia>" deve ser desfeita com sucesso

    #     Examples:
    #         | telaDesfazer                     | tipoConferencia         |
    #         | conferência de saída finalizados | conferência de saída    |
    #         | entrada                          | conferência de entrada  |
    #         | inclusão                         | conferência da inclusão |

    # #341738 / 1000 <> 425984

    Scenario: Registrar equívoco com observações e imagens
        @recordError
        Given o usuário começa a registrar um equívoco durante uma conferência
        And seleciona o equívoco "Ativo selecionado equivocadamente no orçamento"
        When o usuário adiciona a observação "Orçamento selecionou ativo equivocadamente"
        And anexa o arquivo "ativoIncorreto.png"
        Then o sistema deve salvar o equívoco junto com a observação e a imagem

    # 165362 / 5

    Scenario: Validar caracteres especiais em observações
        @validateSpecialCharacters
        Given o usuário está editando uma observação para um equívoco
        When o usuário insere "Erro nos dados 💾 com @tags!"
        Then o sistema não deve aceitar os caracteres especiais e emojis
        And deve apresentar somente letras ao exibir a observação inserida

    #341763 / 1000

    # Scenario: Limitar caracteres em observações
    #     @validateCharacterLimit
    #     Given o usuário está editando uma observação para um equívoco
    #     When o usuário insere 260 caracteres no campo de observação
    #     Then o sistema deve exibir a mensagem "Máximo de 255 caracteres permitido"

    Scenario Outline: Registrar múltiplos equívocos
        @recordMultipleErrors
        Given o usuário está registrando equívocos durante "<etapaConferencia>"
        And seleciona múltiplos equívocos: "<equivocos>"
        When o usuário adiciona uma observação e uma imagem para cada equívoco
        Then o sistema deve exibir o total de "<quantidadeEquivocos>" equívocos registrados

        Examples:
            | etapaConferencia | equivocos                              | quantidadeEquivocos |
            | backoffice       | "Quantidade Inválida, Dados Faltantes" | 2                   |
            | inclusão         | "Etiqueta Errada"                      | 1                   |

    # Scenario: Limitar registro de equívocos por setor
    #     @sectorLimit
    #     Given o usuário já registrou equívocos no setor "<setor>"
    #     When o usuário tenta registrar novos equívocos
    #     Then o sistema deve exibir o botão de registro de equívocos desabilitado

    #     Examples:
    #         | setor                  |
    #         | backoffice             |
    #         | inclusão               |
    #         | conferência de entrada |
    #         | conferência de saída   |

    Scenario: Marcar pendências
        @markPending
        Given o usuário está na tela de Conferência de Entrada ou Conferência de Saída
        When o usuário clica no botão "Marcar Pendências"
        Then um modal deve ser aberto com as pendências possíveis de serem registradas
        And ao selecionar pendências e fechar, o sistema deve registrar as pendências selecionadas

    Scenario: Persistir equívocos entre etapas de conferência
        @persistErrors
        Given o usuário registrou equívocos na conferência de inclusão
        And esses equívocos estão visíveis na etapa de conferência de entrada
        When o usuário registra novos equívocos na conferência de entrada
        Then o sistema deve manter os equívocos antigos
        And salvar apenas os novos equívocos adicionados na conferência de entrada

    Scenario: Desfazer conferência exclui equívocos da etapa atual
        @undoConferenceErrors
        Given há equívocos registrados na conferência de saída atual
        When o usuário desfaz a conferência de saída
        Then o sistema deve excluir os equívocos da conferência atual
        And manter os equívocos registrados nas etapas anteriores

# @recordObservation @validationFieldText
# Scenario: Tentativa de inserir observação sem texto
#     Given o usuário está no modal de registro de equívocos
#     And o campo "Adicionar observação sobre o equívoco" está vazio
#     When o usuário clica no botão "Adicionar"
#     Then o sistema deve exibir a mensagem de erro "O campo de observação não pode estar vazio."
#     And a observação não deve ser adicionada à lista



#registrar conferencia com um usuario e tentar registrar com outro usuario sem recarregar a pagina
#e possivel desfazer a conferencia do backoffice e atendimento?