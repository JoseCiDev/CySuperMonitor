Feature: Gestão e apresentação de observações nos orçamentos
    Para garantir que as observações sejam corretamente inseridas, salvas e exibidas ao cliente
    Como um usuário do sistema
    Eu quero que as observações sejam apresentadas corretamente no selfcheckout para cada orçamento

    Background: Usuário autenticado e com orçamentos existentes
        Given que o usuário está autenticado no sistema
        And existem orçamentos disponíveis para envio ao cliente

    Scenario: Inserir uma observação personalizada e salvar
        When o usuário acessa um orçamento existente
        And o usuário insere a observação "Medicamento controlado"
        And o usuário salva a observação no orçamento
        Then a observação "Medicamento controlado" deve ser exibida ao cliente no selfcheckout no orçamento correspondente

    Scenario: Inserir observação em um orçamento e verificar a exibição correta no template
        When o usuário insere a observação "Protocolos, orçados conforme nosso portfólio."
        And o usuário salva a observação
        Then a observação "Protocolos, orçados conforme nosso portfólio." deve ser exibida no selfcheckout como observação do orçamento.

    Scenario: Selecionar uma observação pré-cadastrada e salvar
        When o usuário acessa um orçamento existente
        And o usuário seleciona a observação pré-cadastrada "MINOXIDIL"
        And o usuário salva a observação no orçamento
        Then o conteúdo do template de observação "MINOXIDIL" deve ser exibida ao cliente no selfcheckout no orçamento correspondente

    Scenario Outline: Selecionar uma observação pré-cadastrada e adicionar texto personalizado
        When o usuário acessa um orçamento existente
        And o usuário seleciona a observação pré-cadastrada "<observacaoBase>"
        And o usuário adiciona o texto "<textoPersonalizado>"
        And o usuário salva a observação no orçamento
        Then o conteúdo do template de observação "<observacaoBase>", mais o texto "<textoPersonalizado>" deve ser exibido ao cliente no selfcheckout no orçamento correspondente

        Examples:
            | observacaoBase                      | textoPersonalizado             |
            | MUDANÇA PARA NOSSO PADRÃO VITAMINAS | ou consultaremos o prescritor  |
            | PROTOCOLO DE SEGURANÇA              | ou conforme instruções médicas |

    Scenario Outline: Inserir múltiplas observações em orçamentos separados e validar a exibição correta
        When o usuário insere a observação "<observacaoA>" no "Orçamento A"
        And o usuário insere a observação "<observacaoB>" no "Orçamento B"
        And o usuário envia o link SelfCheckout para o cliente
        Then o "Orçamento A" deve exibir apenas a observação "<observacaoA>"
        And o "Orçamento B" deve exibir apenas a observação "<observacaoB>"

        Examples:
            | observacaoA                                   | observacaoB                                                          |
            | Protocolos, orçados conforme nosso portfólio. | Metilfolato 2,5mg/2mL, Validade: 12/2024.                            |
            | Orçados 10 unidades cada.                     | Orçamento realizado considerando quantidades solicitadas em ampolas. |

    Scenario Outline: Validar exibição correta das observações ao juntar orçamentos
        Given que o orçamento "Orçamento A" possui a observação "<observacaoA>"
        And o orçamento "Orçamento B" possui a observação "<observacaoB>"
        When o usuário junta os "Orçamentos A e B"
        And o usuário acessa o selfcheckout
        Then o cliente deve ver a observação "<observacaoA>" no "Orçamento A"
        And o cliente deve ver a observação "<observacaoB>" no "Orçamento B"
        And as observações não devem ser duplicadas ou trocadas entre os orçamentos

        Examples:
            | observacaoA                  | observacaoB                                               |
            | Orçados 10 unidades cada.    | Orçamento realizado considerando quantidades solicitadas. |
            | Testosterona Propionato 50mg | Protocolo Emagrecimento e ganho de massa magra            |

    Scenario: Juntar orçamentos e verificar a exibição correta das observações
        When o usuário insere a observação "Vitamina B12 50mg + Procaina 1%/ 2ml. EM FALTA, previsão 13/ 08. Após aberto, validade de 90 dias." no "Orçamento A"
        And o usuário insere a observação "Ativo orçado conforme nosso portfólio:
        Testosterona Propionato 50mg, orçado Testosterona Propionato (5%) 50mg / 1mL - Veículo Oleoso, Uso Exclusivo IM. Medicamento controlado:
        Sua receita contém medicamento controlado: TESTOSTERONA PROPIONATO 50MG/1ML. Estamos aceitando receituários de controle especial com assinatura digital.
        De acordo com a permissão da Anvisa, aceitamos receitas eletrônicas, com assinatura eletrônica e certificado digital pelo ICP-Brasil.
        Você tem a opção de encaminhar, via Correios, a receita original de controle especial, mas antes solicito que me encaminhe foto da receita, para verificação."
        no "Orçamento B"
        And os "Orçamentos A e B" estão juntos
        Then o "Orçamento A" deve exibir a observação "Vitamina B12 50mg + Procaina 1%/ 2ml. EM FALTA, previsão 13/ 08. Após aberto, validade de 90 dias."
        And o "Orçamento B" deve exibir a observação "Ativo orçado conforme nosso portfólio:
        Testosterona Propionato 50mg, orçado Testosterona Propionato (5%) 50mg / 1mL - Veículo Oleoso, Uso Exclusivo IM.
        Medicamento controlado:
        Sua receita contém medicamento controlado: TESTOSTERONA PROPIONATO 50MG/1ML. Estamos aceitando receituários de controle especial com assinatura digital."
        And não deve exibir observações de orçamentos que não foram incluídos

    Scenario: Verificar comportamento ao juntar orçamentos onde um deles não tem observação
        Given que o "Orçamento A" não possui observação
        And o "Orçamento B" possui a observação "Protocolos,
        orçados seguindo nosso portfólio endovenoso, seguindo histórico de pedidos da clinica.
        O protocolo para perda de gordura e ganho de massa magra, passou por uma alteração em sua nomenclatura e agora se chama:
        Protocolo Emagrecimento e ganho de massa magra, Posologia e ativos se mantem os mesmos."
        When o usuário junta os "Orçamentos A e B"
        And o usuário acessa o selfcheckout
        Then o cliente deve ver a observação "Protocolos,
        orçados seguindo nosso portfólio endovenoso, seguindo histórico de pedidos da clinica.
        O protocolo para perda de gordura e ganho de massa magra, passou por uma alteração em sua nomenclatura e agora se chama:
        Protocolo Emagrecimento e ganho de massa magra, Posologia e ativos se mantem os mesmos." no "Orçamento B"
        And o cliente não deve ver nenhuma observação no "Orçamento A"

    Scenario: Verificar a junção de orçamentos sem observações
        When o usuário não insere nenhuma observação no "Orçamento C"
        And salva a observação
        And o usuário não insere nenhuma observação no "Orçamento D"
        And salva a observação
        And o usuário envia o template Selfcheckout para o cliente
        Then não deve exibir nenhuma observação

    Scenario: Tentar salvar uma observação vazia
        When o usuário acessa um orçamento existente
        And o usuário não insere nenhuma observação
        And o usuário tenta salvar a observação
        Then o sistema deve permitir salvar o orçamento sem observação
        And o selfcheckout não deve exibir nenhuma observação ao cliente no orçamento correspondente

    Scenario Outline: Validar que uma observação não se propaga para outro orçamento
        Given que o "Orçamento A" possui a observação "<observacaoA>"
        And o "Orçamento B" não possui observação
        When o usuário acessa o selfcheckout
        Then o cliente deve ver a observação "<observacaoA>" apenas no "Orçamento A"
        And o cliente não deve ver nenhuma observação no "Orçamento B"

        Examples:
            | observacaoA                                                                    |
            | Orçado o nosso protocolo endovenoso, seguindo histórico de pedidos da clinica. |
            | Protocolos, ativos descritos no orçamento acima.                               |

    Scenario Outline: Validar comportamento com junção de orçamentos com observações duplicadas
        Given que o "Orçamento A" possui a observação "<observacao>"
        And o "Orçamento B" possui a mesma observação "<observacao>"
        When o usuário junta os "Orçamentos A e B"
        And o usuário acessa o selfcheckout
        Then o cliente deve ver a observação "<observacao>" no "Orçamento A"
        And o cliente deve ver a mesma observação "<observacao>" no "Orçamento B"
        And as observações não devem ser duplicadas ou exibidas fora do contexto correto

        Examples:
            | observacao                                       |
            | Protocolos, ativos descritos no orçamento acima. |
            | Entregar em 5 dias úteis                         |