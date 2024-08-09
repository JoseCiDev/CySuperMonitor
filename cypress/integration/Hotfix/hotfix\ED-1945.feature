Feature: Gestão de observações em orçamentos e sua apresentação ao cliente
    Para garantir que cada orçamento apresente corretamente as observações inseridas
    Como um usuário do sistema
    Eu quero que cada observação seja apresentada corretamente no template do orçamento correspondente

    Background: Usuário autenticado e com acesso à criação de orçamentos
    Dado que o usuário está autenticado no sistema
    E o usuário está na página de criação de orçamentos

    Scenario: Inserir observação em um orçamento e verificar a exibição correta no template
    Quando o usuário cria um novo orçamento
    E o usuário insere uma observação "Protocolos, orçados conforme nosso portfólio."
    E o usuário gera o template do orçamento
    Então a observação "Protocolos, orçados conforme nosso portfólio." deve ser exibida no template do orçamento gerado

    Scenario: Inserir múltiplas observações em orçamentos separados e validar a exibição correta
    Quando o usuário cria o orçamento "Orçamento A"
    E o usuário insere a observação "Protocolos, orçados conforme nosso portfólio." no "Orçamento A"
    E o usuário cria o orçamento "Orçamento B"
    E o usuário insere a observação "Metilfolato 2,5mg/2mL, Validade: 12/2024." no "Orçamento B"
    E o usuário envia o link SelfCheckout para o cliente
    Então o "Orçamento A" deve exibir apenas a observação "Protocolos, orçados conforme nosso portfólio."
    E o "Orçamento B" deve exibir apenas a observação "Metilfolato 2,5mg/2mL, Validade: 12/2024."

    Scenario: Juntar orçamentos e verificar a exibição correta das observações
    Quando o usuário cria o orçamento "Orçamento A"
    E o usuário insere a observação "Vitamina B12 50mg + Procaina 1%/ 2ml. EM FALTA, previsão 13/ 08. Após aberto, validade de 90 dias." no "Orçamento A"
    E o usuário cria o orçamento "Orçamento B"
    E o usuário insere a observação "Ativo orçado conforme nosso portfólio:
    - Testosterona Propionato 50mg, orçado Testosterona Propionato (5%) 50mg / 1mL - Veículo Oleoso, Uso Exclusivo IM.
    Medicamento controlado:
    Sua receita contém medicamento controlado: TESTOSTERONA PROPIONATO 50MG/1ML. Estamos aceitando receituários de controle especial com assinatura digital.
    De acordo com a permissão da Anvisa, aceitamos receitas eletrônicas, com assinatura eletrônica e certificado digital pelo ICP-Brasil.
    Você tem a opção de encaminhar, via Correios, a receita original de controle especial, mas antes solicito que me encaminhe foto da receita, para verificação." no "Orçamento B"
    E os "Orçamentos A e B" estão juntos
    Então o "Orçamento A" deve exibir as observações "Vitamina B12 50mg + Procaina 1%/ 2ml. EM FALTA, previsão 13/ 08. Após aberto, validade de 90 dias." e o "Orçamento B" "Ativo orçado conforme nosso portfólio:
    - Testosterona Propionato 50mg, orçado Testosterona Propionato (5%) 50mg / 1mL - Veículo Oleoso, Uso Exclusivo IM.
    Medicamento controlado:
    Sua receita contém medicamento controlado: TESTOSTERONA PROPIONATO 50MG/1ML. Estamos aceitando receituários de controle especial com assinatura digital.
    De acordo com a permissão da Anvisa, aceitamos receitas eletrônicas, com assinatura eletrônica e certificado digital pelo ICP-Brasil.
    Você tem a opção de encaminhar, via Correios, a receita original de controle especial, mas antes solicito que me encaminhe foto da receita, para verificação."
    E não deve exibir observações de orçamentos que não foram incluídos

    Scenario: Verificar que uma observação de um orçamento não aparece em outro
    Quando o usuário cria o orçamento "Orçamento A"
    E o usuário insere a observação "Entregar em 5 dias úteis" no "Orçamento A"
    E o usuário cria o orçamento "Orçamento B"
    E o usuário não insere nenhuma observação no "Orçamento B"
    E o usuário envia o template Selfcheckout para o cliente
    Então a "Orçamento B" não deve exibir a observação "Entregar em 5 dias úteis"

    Scenario: Verificar a junção de orçamentos sem observações
    Quando o usuário cria o orçamento "Orçamento C"
    E o usuário não insere nenhuma observação no "Orçamento C"
    E o usuário cria o orçamento "Orçamento D"
    E o usuário não insere nenhuma observação no "Orçamento D"
    E o usuário envia o template Selfcheckout para o cliente
    Então não deve exibir nenhuma observação

    Scenario: Validar comportamento com observações duplicadas em orçamentos combinados
Quando o usuário cria o orçamento "Orçamento A"
E o usuário insere a observação "Entregar em 5 dias úteis" no "Orçamento A"
E o usuário cria o orçamento "Orçamento B"
E o usuário insere a mesma observação "Entregar em 5 dias úteis" no "Orçamento B"
E o usuário envia o template Selfcheckout para o cliente
Então o a observação "Entregar em 5 dias úteis" deve ser exibida no "Orçamento A" e "Orçamento B"
