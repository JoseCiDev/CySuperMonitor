    #Visualização do orçamento e acesso à tela de pagamento para filial de medicamentos manipulados
    Example: Cliente acessa o link do orçamento e vai para a tela de pagamento (filial de medicamentos manipulados)
        Given o cliente recebeu o link do orçamento de medicamentos manipulados
        When o cliente visualiza o orçamento
        And clica no botão "Pagar"
        Then ele deve ver a tela de seleção de forma de pagamento com as opções "Cartão de Crédito" e "PIX"


    #Seleção de forma de pagamento - PIX
    Example: Cliente seleciona forma de pagamento PIX para filial de medicamentos manipulados
        Given o cliente está na tela de pagamento para filial de medicamentos manipulados
        When o cliente seleciona a opção "PIX"
        Then o sistema deve exibir os campos obrigatórios de dados pessoais
        And o cliente deve preencher telefone, email, nome completo, data de nascimento, CPF
        And o campo RG deve ser opcional
        And o cliente deve gerar o código QR para pagamento PIX
        Then ele deve ver a tela de pagamento efetuado com sucesso após o pagamento


    Cenário 3: Seleção de forma de pagamento - Cartão de Crédito
    Example: Cliente seleciona forma de pagamento Cartão de Crédito para filial de medicamentos manipulados
        Given o cliente está na tela de pagamento para filial de medicamentos manipulados
        When o cliente seleciona a opção "Cartão de Crédito"
        Then o sistema deve exibir os campos obrigatórios de dados pessoais e endereço
        And o cliente deve preencher telefone, email, nome completo, data de nascimento, CPF
        And o campo RG deve ser opcional
        And o cliente deve marcar o checkbox "Confirma o endereço informado para entrega"
        And o cliente deve preencher os dados do cartão: nome, CPF/CNPJ, número do cartão, validade, código de segurança e número de parcelas
        Then ele deve ver a tela de pagamento efetuado com sucesso após o pagamento

    Cenário 4: Rejeição de pagamento por saldo insuficiente
    Example: Tentativa de pagamento rejeitada por saldo insuficiente no cartão de crédito
        Given o cliente está na tela de pagamento para filial de medicamentos manipulados com opção de Cartão de Crédito
        When o cliente preenche os dados do cartão e clica em "Pagar"
        Then ele deve ver a mensagem "Pagamento rejeitado: saldo insuficiente"
        And o botão "Tentar novamente" deve estar disponível
        When o cliente clica em "Tentar novamente"
        Then ele deve ser direcionado de volta à tela de pagamento para corrigir as informações

    Cenário 5: Atualização de informações de pagamento na tela de atendimento
    Example: Sistema exibe dados de pagamento e permite atualização para filial de medicamentos manipulados
        Given o cliente finalizou o pagamento com sucesso
        When o atendente acessa o pedido na tela de atendimento para filial de medicamentos manipulados
        Then ele deve ver o valor, forma de pagamento, dados do paciente e endereço fornecidos pelo cliente
        And o atendente pode clicar em "Atualizar informações de pagamento"
        Then a data e hora de "Atualizado em" devem permanecer a data do pagamento inicial, sem alterações

    Cenário 6: Rejeição por Erro de Segurança (Anti-Fraude)
    Example: Tentativa de pagamento rejeitada por erro de segurança (anti-fraude)
        Given o cliente está na tela de pagamento para filial de medicamentos manipulados com opção de Cartão de Crédito
        When o cliente preenche todos os dados do cartão e clica em "Pagar"
        Then ele deve ver a mensagem "Pagamento rejeitado: erro de segurança detectado"
        And o botão "Tentar novamente" deve estar disponível
        When o cliente clica em "Tentar novamente"
        Then ele deve ser redirecionado para a tela de pagamento para tentar novamente

    Cenário 7: Rejeição por Cartão Expirado
    Example: Tentativa de pagamento rejeitada por cartão expirado
        Given o cliente está na tela de pagamento para filial de medicamentos injetáveis com opção de Cartão de Crédito
        When o cliente preenche os dados do cartão com uma data de validade expirada e clica em "Pagar"
        Then ele deve ver a mensagem "Pagamento rejeitado: cartão expirado"
        And o botão "Tentar novamente" deve estar disponível
        When o cliente clica em "Tentar novamente"
        Then ele deve ser redirecionado para a tela de pagamento para corrigir a data de validade do cartão

    Cenário 8: Rejeição por Cartão Bloqueado
    Example: Tentativa de pagamento rejeitada por cartão bloqueado
        Given o cliente está na tela de pagamento para filial de medicamentos manipulados com opção de Cartão de Crédito
        When o cliente preenche os dados do cartão bloqueado e clica em "Pagar"
        Then ele deve ver a mensagem "Pagamento rejeitado: cartão bloqueado"
        And o botão "Tentar novamente" deve estar disponível
        When o cliente clica em "Tentar novamente"
        Then ele deve ser redirecionado para a tela de pagamento para tentar com outro cartão

    Cenário 9: Rejeição por Limite Excedido
    Example: Tentativa de pagamento rejeitada por limite excedido
        Given o cliente está na tela de pagamento para filial de medicamentos injetáveis com opção de Cartão de Crédito
        When o cliente preenche os dados do cartão e clica em "Pagar"
        Then ele deve ver a mensagem "Pagamento rejeitado: limite de crédito excedido"
        And o botão "Tentar novamente" deve estar disponível
        When o cliente clica em "Tentar novamente"
        Then ele deve ser redirecionado para a tela de pagamento para tentar com outro cartão ou valor

    Cenário 11: Rejeição por Tentativas Excessivas
    Example: Tentativa de pagamento rejeitada por tentativas excessivas
        Given o cliente está na tela de pagamento para filial de medicamentos injetáveis com opção de Cartão de Crédito
        When o cliente tenta pagar várias vezes em sequência
        Then ele deve ver a mensagem "Pagamento rejeitado: tentativas excessivas"
        And deve ser solicitado que o cliente entre em contato com o suporte para resolver o problema

    Cenário 12: Cartão Não Aceito pelo Estabelecimento
    Example: Tentativa de pagamento rejeitada por cartão não aceito pelo estabelecimento
        Given o cliente está na tela de pagamento para filial de medicamentos manipulados com opção de Cartão de Crédito
        When o cliente preenche os dados do cartão e clica em "Pagar"
        And o cartão não é aceito pelo estabelecimento
        Then ele deve ver a mensagem "Pagamento rejeitado: cartão não aceito pelo estabelecimento"
        And o cliente deve ser orientado a tentar com outro cartão ou método de pagamento

    Cenário 13: Rejeição por Falha de Autenticação (Reconhecimento Facial)
    Example: Tentativa de pagamento rejeitada por falha de autenticação (reconhecimento facial)
        Given o cliente está na tela de pagamento para filial de medicamentos manipulados com opção de Cartão de Crédito
        When o cliente tenta autenticar o pagamento com reconhecimento facial
        And a autenticação falha
        Then ele deve ver a mensagem "Pagamento rejeitado: falha de autenticação"
        And o botão "Tentar novamente" deve estar disponível para realizar outra tentativa de autenticação

    Cenário 14: Tentativa de Pagar o Mesmo Link de Pagamento Mais de Uma Vez
    Example: Tentativa de pagar mais de uma vez com o mesmo link de pagamento
        Given o cliente acessou o link do orçamento e completou o pagamento com sucesso
        When o cliente tenta acessar o link e pagar novamente
        Then ele deve ver uma mensagem "Pagamento confirmado"
        And ele não deve conseguir prosseguir com o pagamento

    Cenário 15: Exibição dos Dados do Pagamento na Tela de Atendimento para Medicamentos Manipulados
    Example: Exibir dados de pagamento na tela de atendimento para filial de medicamentos manipulados
        Given o cliente completou o pagamento com sucesso para um pedido de medicamentos manipulados
        When o atendente acessa a tela de atendimento para o pedido
        Then ele deve ver valor, forma de pagamento, nome do paciente, CPF, RG, data de nascimento, email e endereço fornecidos pelo cliente

    Cenário 16: Atualização das Informações de Pagamento na Tela de Atendimento para Medicamentos injetáveis
    Example: Atualizar informações de pagamento na tela de atendimento para Medicamentos injetáveis
        Given o cliente completou o pagamento de um orçamento para medicamentos injetáveis com sucesso
        When o atendente acessa a tela de atendimento e clica em "Atualizar informações de pagamento"
        Then a data e hora de "Atualizado em" deve refletir a data do pagamento inicial, sem alterações
        And a data de "Criado em" deve permanecer como a data da criação do link de pagamento

    Cenário 17: Expiração do QR Code para Pagamento com PIX após 15 Minutos
    Example: Expiração do QR Code para pagamento com PIX após 15 minutos
        Given o cliente selecionou a opção "PIX" para pagamento na filial de medicamentos manipulados
        And o cliente gerou o QR Code para pagamento
        When 15 minutos se passam sem que o pagamento seja concluído
        Then o QR Code deve expirar e o cliente deve ver a mensagem "O QR Code expirou, por favor gere um novo QR Code para prosseguir com o pagamento"
        And o botão "Gerar Novo QR Code" deve estar disponível
        When o cliente clica em "Gerar Novo QR Code"
        Then um novo QR Code deve ser gerado para que o cliente realize o pagamento

    Cenário 18: Redirecionamento Automático para Tela de Pagamento com Forma Selecionada
    Example: Redirecionamento automático para a tela de pagamento com a forma de pagamento selecionada anteriormente
        Given o cliente acessou o link do orçamento pela primeira vez no selfcheckout para a filial de medicamentos manipulados
        And o cliente visualizou o orçamento e selecionou a forma de pagamento "Cartão de Crédito"
        And o cliente completou o processo até a tela de pagamento
        When o cliente acessa novamente o mesmo link de orçamento selfcheckout
        And clica em "Pagar"
        Then o cliente deve ser redirecionado diretamente para a tela de pagamento com a forma de pagamento "Cartão de Crédito" já selecionada
        And o cliente não deve ver a tela de seleção de forma de pagamento

    Cenário 19: Pagamento com Cartão de Crédito - Informações Inválidas
    Example: Pagamento rejeitado por informações inválidas do cartão
        Given o cliente está na tela de pagamento e já preencheu os dados pessoais e de endereço obrigatórios
        And o cliente seleciona "Cartão de Crédito" como forma de pagamento
        When o cliente preenche os dados do cartão com informações incorretas e clica em "Pagar"
        Then o cliente deve ver a mensagem "Pagamento rejeitado: informações do cartão inválidas"
        And o botão "Tentar novamente" deve estar disponível
        When o cliente clica em "Tentar novamente"
        Then o cliente deve ser redirecionado para a tela de pagamento para corrigir as informações do cartão

    Cenário 20: Tentativa de Pagamento com Outro Cartão Após Rejeição
    Example: Tentativa de pagamento com outro cartão após rejeição anterior
        Given o cliente teve uma tentativa de pagamento rejeitada anteriormente
        And o cliente está na tela de pagamento
        When o cliente altera os dados para um cartão diferente e clica em "Pagar"
        Then o cliente deve ver a tela de "Pagamento efetuado com sucesso" se o pagamento for aceito
        And o cliente deve ver uma mensagem de rejeição específica se houver algum problema com o novo cartão

    #Validação de Campos Obrigatórios para Pagamento com Cartão de Crédito
    Example: Validação de campos obrigatórios no pagamento com cartão de crédito
        Given o cliente está na tela de pagamento e já preencheu os dados pessoais e de endereço obrigatórios
        And o cliente seleciona "Cartão de Crédito" como forma de pagamento
        When o cliente deixa um dos campos obrigatórios do cartão em branco:
            | Campo                   | Valor |
            | Nome impresso no cartão | ""    |
            | CPF/CNPJ                | ""    |
            | Número do cartão        | ""    |
            | Mês de vencimento       | ""    |
            | Ano de vencimento       | ""    |
            | Código de segurança     | ""    |
            | Número de parcelas      | ""    |
        And o cliente clica em "Pagar"
        Then o cliente deve ver uma mensagem de erro correspondente indicando que o campo obrigatório precisa ser preenchido

    #Cliente decide não prosseguir com o pagamento após iniciar o preenchimento dos dados do cartãos
    Example: Cliente decide não prosseguir com o pagamento após iniciar o preenchimento dos dados do cartão
        Given o cliente está na tela de pagamento para a filial de medicamentos manipulados
        And o cliente seleciona "Cartão de Crédito" como forma de pagamento
        And o cliente começa a preencher os dados do cartão (nome impresso, CPF/CNPJ, número do cartão, mês e ano de vencimento, código de segurança, número de parcelas)
        When o cliente decide não prosseguir com o pagamento e fecha a página antes de clicar em "Pagar"
        Then o sistema deve registrar a tentativa como "Incompleta"
        And o cliente deve ser redirecionado para a tela inicial de pagamento ao acessar o link novamente

    ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Cenário 30: Tentativa de Pagamento Interrompida pelo Cliente
    Example: Tentativa de pagamento interrompida pelo cliente
        Given o cliente está na tela de pagamento e iniciou uma tentativa de transação com cartão de crédito
        When o cliente cancela o pagamento na tela antes da conclusão
        Then o sistema deve registrar o status como "Cancelado"
        And o sistema deve exibir a mensagem "CANCELLED: A tentativa de pagamento foi interrompida antes do término da transação"



    Cenário 33: Cartão Selecionado Incorretamente Durante a Transação
    Example: Cartão selecionado incorretamente durante a transação
        Given o cliente está na tela de pagamento para a filial de medicamentos manipulados
        And o cliente inicia o pagamento com um cartão mas decide interromper o processo
        When o cliente troca para outro cartão e reinicia o pagamento
        Then o sistema deve registrar o status como "Cancelado"
        And o sistema deve exibir a mensagem "CANCELLED: O cliente trocou o cartão durante a transação e reiniciou o processo"

    Cenário 34: Transação Cancelada por Falha de Autenticação
    Example: Transação cancelada por falha de autenticação
        Given o cliente está na tela de pagamento para a filial de medicamentos manipulados
        And o cliente seleciona "Cartão de Crédito" como forma de pagamento
        When a segunda tentativa de autenticação falha durante o processo de pagamento
        Then o sistema deve registrar o status como "Cancelado"
        And o sistema deve exibir a mensagem "CANCELLED: A transação foi cancelada após falha de autenticação do cartão"

    Cenário 35: Cliente Não Finaliza o Pagamento e Transação é Cancelada
    Example: Transação cancelada por falta de finalização do cliente
        Given o cliente está na tela de pagamento e iniciou o processo de pagamento
        When o cliente não finaliza o pagamento dentro do tempo limite
        Then o sistema deve registrar o status como "Cancelado"
        And o sistema deve exibir a mensagem "CANCELLED: O cliente não finalizou o pagamento e a transação foi cancelada automaticamente"

    #Validação de Pagamento Único por Orçamento
    Example: Tentativa de pagamento duplicado para o mesmo orçamento
        Given o cliente acessa o link do orçamento selfcheckout para a filial de medicamentos manipulados
        And o cliente visualiza o orçamento e seleciona "Cartão de Crédito" como forma de pagamento
        And o cliente preenche todos os dados obrigatórios e conclui o pagamento com sucesso
        When o cliente tenta acessar o link do orçamento e clicar em pagar novamente
        Then o sistema deve exibir uma mensagem de erro indicando que o pagamento já foi realizado para este orçamento
        And o cliente não deve ser redirecionado para a tela de pagamento novamente

