Feature: Gerenciar e Registrar Conferências e Equívocos
    Scenario Outline: Registrar conferência por setor
        @registerConference
        Given o usuário está na tela de "<setor>"
        When o usuário registra uma conferência de "<tipoConferencia>"
        Then o sistema deve salvar a "<tipoConferencia>" com sucesso

        Examples:
            | orcamentoFilial         | setor       | tipoConferencia            |
            | 341738 / 1000 <> 425984 | atendimento | conferência do backoffice  |
            |                         | atendimento | conferência do atendimento |
            |                         | inclusão    | conferência da inclusão    |
            |                         | entrada     | conferência de entrada     |
            |                         | saída       | conferência de saída       |

    Scenario Outline: Desfazer conferência por setor
        @undoConference
        Given o usuário está na tela de "<telaDesfazer>"
        And há uma "<tipoConferencia>" já registrada
        When o usuário desfaz a "<tipoConferencia>"
        Then a "<tipoConferencia>" deve ser desfeita com sucesso

        Examples:
            | telaDesfazer | tipoConferencia         |
            | inclusão     | conferência da inclusão |

    #165533 / 5
    #341885 / 1000

    Scenario: Registrar equívoco com observações e imagens
        @recordError
        Given o usuário começa a registrar um equívoco durante uma conferência
        And seleciona o equívoco "Ativo selecionado equivocadamente no orçamento"
        When o usuário adiciona a observação "Orçamento selecionou ativo equivocadamente"
        And anexa o arquivo "ativoIncorreto.png"
        Then o sistema deve salvar o equívoco junto com a observação e a imagem


    Scenario: Validar caracteres especiais em observações
        @validateSpecialCharacters
        Given o usuário está editando uma observação para um equívoco
        When o usuário insere "Erro nos dados 💾 com @tags!"
        Then o sistema não deve aceitar os caracteres especiais e emojis
        And deve apresentar somente letras ao exibir a observação inserida
    #341763 / 1000

    Scenario: Limitar caracteres em observações
        @validateCharacterLimit
        Given o usuário está editando uma observação para um equívoco
        When o usuário insere 260 caracteres no campo de observação
        Then o sistema deve aceitar no mínimo 255 caracteres no campo de observação

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

    Scenario: Limitar registro de equívocos por setor
        @sectorLimit
        Given o usuário já registrou equívocos no setor "<setor>"
        When o usuário tenta registrar novos equívocos
        Then o sistema deve exibir o botão de registro de equívocos desabilitado

        Examples:
            | setor                  |
            | backoffice             |
            | inclusão               |
            | conferência de entrada |
            | conferência de saída   |

    Scenario: Marcar pendências
        @markPending
        Given o usuário está na tela de <setor>
        When o usuário clica no botão "Marcar Pendências"
        Then um modal deve ser aberto com as pendências possíveis de serem registradas
        And ao selecionar pendências e fechar, o sistema deve registrar as pendências selecionadas
        And ao remover as pendências o orçamento deve seguir para o próximo passo do processo

        Examples:
            | setor                  |
            | conferência de entrada |
            | conferência de saída   |

    #166958 / 5

    Scenario: Persistir equívocos entre etapas de conferência
        @persistErrors
        Given o usuário registrou equívocos na inclusão
        And esses equívocos estão visíveis na etapa de conferência de entrada
        When o usuário registra novos equívocos na conferência de entrada
        Then o sistema deve manter os equívocos antigos
        And salvar apenas os novos equívocos adicionados na conferência de entrada

    Scenario: Desfazer conferência exclui equívocos da etapa atual
        @undoConferenceErrors
        Given há equívocos registrados na inclusão
        When o usuário desfaz a conferência da inclusão
        Then o sistema deve excluir os equívocos da conferência atual
        And manter os equívocos registrados nas etapas anteriores

    @recordObservation @validationFieldText
    Scenario: Tentativa de inserir observação sem texto
        Given o usuário está no modal de registro de equívocos
        And o campo "Adicionar observação sobre o equívoco" está vazio
        When o usuário clica no botão "Adicionar"
        Then o sistema deve exibir o botão adicionar desabilitado
        And não é possível realizar o click

    @multiUserValidation
    Scenario: Registro de conferência por um usuário e tentativa de registro por outro
        Given o usuário "Usuário A" registrou uma conferência no setor "<setor>"
        When o "Usuário B" tenta registrar outra conferência no mesmo setor sem recarregar a página
        Then o sistema deve impedir o registro pelo "Usuário B"
        And exibir uma mensagem informando que a conferência já foi registrada

        Examples:
            | setor                  |
            | backoffice             |
            | atendimento            |
            | conferência de entrada |
            | conferência de saída   |

    @recordObservation @removeAndReinsert
    Scenario Outline: Inserir, remover e reinserir observação e imagem
        Given o usuário está no modal de registro de equívocos
        When o usuário adiciona a observação "<observacao>"
        And o usuário anexa a imagem "<imagem>"
        Then o sistema deve salvar a observação "<observacao>" e a imagem "<imagem>"

        When o usuário remove a observação e a imagem adicionadas
        Then o sistema não deve exibir observação ou imagem anexada

        Examples:
            | observacao                           | imagem             |
            | Primeira observação sobre o equívoco | primeiraImagem.png |
            | Segunda observação sobre o equívoco  | segundaImagem.png  |
            | Terceira observação sobre o equívoco | terceiraImagem.png |

    @logGeneration @registerConference
    Scenario Outline: Registrar log detalhado para ações de conferência
        Given o usuário está na tela de "<setor>"
        When o usuário registra uma conferência de "<tipoConferencia>"
        Then o sistema deve salvar a "<tipoConferencia>" com sucesso
        And o log do pedido deve exibir:
            | Observação   | Quem Inseriu         | Data   | Horário |
            | <observacao> | <usuarioResponsavel> | <data> | <hora>  |

        Examples:
            | setor       | tipoConferencia            | observacao                                     | usuarioResponsavel | data       | hora  |
            | backoffice  | conferência do backoffice  | Conferência Realizada (Backoffice)             | João Silva         | 05/12/2024 | 15:30 |
            | atendimento | conferência do atendimento | Conferência Realizada (Atendimento)            | Maria Oliveira     | 05/12/2024 | 15:45 |
            | inclusão    | conferência da inclusão    | Inclusão Realizada (Inclusao)                  | Pedro Lima         | 05/12/2024 | 16:00 |
            | entrada     | conferência de entrada     | Conferência Realizada (Conferencia de Entrada) | Ana Santos         | 05/12/2024 | 16:15 |
            | saída       | conferência de saída       | Conferência Realizada (Conferencia de Saida)   | Lucas Costa        | 05/12/2024 | 16:30 |

    @logValidation @markPending
    Scenario Outline: Registrar log detalhado ao marcar pendências
        Given o usuário está na tela de "<setor>"
        When o usuário clica no botão "Marcar Pendências"
        Then o log do pedido deve exibir:
            | Observação   | Quem Inseriu         | Data   | Horário |
            | <observacao> | <usuarioResponsavel> | <data> | <hora>  |

        Examples:
            | setor                  | observacao                       | usuarioResponsavel | data       | hora  |
            | conferência de entrada | Pendências registradas (Entrada) | Ana Santos         | 05/12/2024 | 18:00 |
            | conferência de saída   | Pendências registradas (Saida)   | Lucas Costa        | 05/12/2024 | 18:15 |




#registrar conferencia com um usuario e tentar registrar com outro usuario sem recarregar a pagina
#e possivel desfazer a conferencia do backoffice e atendimento?Nao




faço insercao de imagem, obeservacao e registro, no passo posterior ao visualizar equivoco nao vejo a imagem