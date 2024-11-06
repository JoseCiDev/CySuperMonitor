
    #Visualização do orçamento e acesso à tela de pagamento para filial de medicamentos manipulados
    @paymentMethods @controlledMedication
    Scenario: Cliente acessa o link do orçamento e vai para a tela de pagamento (filial de medicamentos manipulados)
        Given o cliente recebeu o link do orçamento de medicamentos manipulados
        When o cliente visualiza o orçamento
        And clica no botão "Pagar"
        Then ele deve ver a tela de seleção de forma de pagamento com as opções "Cartão de Crédito" e "PIX"

    #Seleção de forma de pagamento - Cartão de Crédito
    @creditCard @controlledMedication
    Scenario: Cliente seleciona forma de pagamento Cartão de Crédito para filial de medicamentos manipulados
        Given o cliente está na tela de pagamento para filial de medicamentos manipulados
        When o cliente seleciona a opção "Cartão de Crédito"
        Then o sistema deve exibir os campos obrigatórios de dados pessoais e endereço
        And o cliente deve preencher telefone, email, nome completo, data de nascimento, CPF
        And o campo RG deve ser opcional
        And o cliente deve marcar o checkbox "Confirma o endereço informado para entrega"
        And o cliente deve preencher os dados do cartão: nome, CPF/CNPJ, número do cartão, validade, código de segurança e número de parcelas
        Then ele deve ver a tela de pagamento efetuado com sucesso após o pagamento

    #Atualização de informações de pagamento na tela de atendimento
    @paymentDetails @controlledMedication
    Scenario: Sistema exibe dados de pagamento e permite atualização para filial de medicamentos manipulados
        Given o cliente finalizou o pagamento com sucesso
        When o atendente acessa o pedido na tela de atendimento para filial de medicamentos manipulados
        Then ele deve ver o valor, forma de pagamento, dados do paciente e endereço fornecidos pelo cliente
        And o atendente pode clicar em "Atualizar informações de pagamento"
        Then a data e hora de "Atualizado em" devem permanecer a data do pagamento inicial, sem alterações

    #Exibição dos Dados do Pagamento na Tela de Atendimento para Medicamentos Manipulados
    @paymentDetails @controlledMedication
    Scenario: Exibir dados de pagamento na tela de atendimento para filial de medicamentos manipulados
        Given o cliente completou o pagamento com sucesso para um pedido de medicamentos manipulados
        When o atendente acessa a tela de atendimento para o pedido
        Then ele deve ver valor, forma de pagamento, nome do paciente, CPF, RG, data de nascimento, email e endereço fornecidos pelo cliente

    #Atualização das Informações de Pagamento na Tela de Atendimento para Medicamentos injetáveis
    @paymentDetails @injectableMedication
    Scenario: Atualizar informações de pagamento na tela de atendimento para Medicamentos injetáveis
        Given o cliente completou o pagamento de um orçamento para medicamentos injetáveis com sucesso
        When o atendente acessa a tela de atendimento e clica em "Atualizar informações de pagamento"
        Then a data e hora de "Atualizado em" deve refletir a data do pagamento inicial, sem alterações
        And a data de "Criado em" deve permanecer como a data da criação do link de pagamento

    #Tentativa de Pagar o Mesmo Link de Pagamento Mais de Uma Vez
    @payMoreThanOnce
    Scenario: Tentativa de pagar mais de uma vez com o mesmo link de pagamento
        Given o cliente acessou o link do orçamento e completou o pagamento com sucesso
        When o cliente tenta acessar o link e pagar novamente
        Then ele deve ver uma mensagem "Pagamento confirmado"
        And ele não deve conseguir prosseguir com o pagamento

    #Redirecionamento Automático para Tela de Pagamento com Forma Selecionada
    @creditCard @controlledMedication
    Scenario: Redirecionamento automático para a tela de pagamento com a forma de pagamento selecionada anteriormente
        Given o cliente acessou o link do orçamento pela primeira vez no selfcheckout para a filial de medicamentos manipulados
        And o cliente visualizou o orçamento e selecionou a forma de pagamento "Cartão de Crédito"
        And o cliente completou o processo até a tela de pagamento
        When o cliente acessa novamente o mesmo link de orçamento selfcheckout
        And clica em "Pagar"
        Then o cliente deve ser redirecionado diretamente para a tela de pagamento com a forma de pagamento "Cartão de Crédito" já selecionada
        And o cliente não deve ver a tela de seleção de forma de pagamento

    #Validação de Campos Obrigatórios para Pagamento com Cartão de Crédito
    @creditCard @requiredFields
    Scenario: Validação de campos obrigatórios no pagamento com cartão de crédito
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
    @creditCard @linkExpires @controlledMedication
    Scenario: Cliente decide não prosseguir com o pagamento após iniciar o preenchimento dos dados do cartão
        Given o cliente está na tela de pagamento para a filial de medicamentos manipulados
        And o cliente seleciona "Cartão de Crédito" como forma de pagamento
        And o cliente começa a preencher os dados do cartão (nome impresso, CPF/CNPJ, número do cartão, mês e ano de vencimento, código de segurança, número de parcelas)
        When o cliente decide não prosseguir com o pagamento e fecha a página antes de clicar em "Pagar"
        Then o link de pagamento deve expirar em 7 dias
        And o cliente deve ser redirecionado para a tela inicial de pagamento ao acessar o link novamente dentro de 7 dias


    ------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    #PIX
    #Expiração do QR Code para Pagamento com PIX após 15 Minutos
    @pix @linkExpires @controlledMedication
    Scenario: Expiração do QR Code para pagamento com PIX após 15 minutos
        Given o cliente selecionou a opção "PIX" para pagamento na filial de medicamentos manipulados
        And o cliente gerou o QR Code para pagamento
        When 15 minutos se passam sem que o pagamento seja concluído
        Then o QR Code deve expirar e o cliente deve ver a mensagem "O QR Code expirou, por favor gere um novo QR Code para prosseguir com o pagamento"
        And o botão "Gerar Novo QR Code" deve estar disponível
        When o cliente clica em "Gerar Novo QR Code"
        Then um novo QR Code deve ser gerado para que o cliente realize o pagamento

    #Seleção de forma de pagamento - PIX
    Scenario: Cliente seleciona forma de pagamento PIX para filial de medicamentos manipulados
        @pix @controlledMedication @controlledMedication
        Given o cliente está na tela de pagamento para filial de medicamentos manipulados
        When o cliente seleciona a opção "PIX"
        Then o sistema deve exibir os campos obrigatórios de dados pessoais
        And o cliente deve preencher telefone, email, nome completo, data de nascimento, CPF
        And o campo RG deve ser opcional
        And o cliente deve gerar o código QR para pagamento PIX
        Then ele deve ver a tela de pagamento efetuado com sucesso após o pagamento

    ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    #REJEICAO

    #Falha na Autenticação dos Dados do Cartão
    @rejection  @creditCard @declined
    Scenario: Falha na autenticação dos dados do cartão
        Given o cliente está na tela de pagamento
        And o cliente preenche todos os dados obrigatórios do cartão de crédito
        When o sistema detecta uma falha na autenticação dos dados do cartão
        Then o sistema deve exibir a mensagem "DECLINED: Falha ao obter os dados relevantes do cartão."
        And o pagamento deve ser recusado
        And não deve ser oferecida a opção de tentar novamente

    #Nenhuma Conta Corrente Disponível no Cartão
    @rejection  @creditCard @noCheckingAccountAvaibleOnCard
    Scenario: Nenhuma conta corrente disponível no cartão
        Given o cliente está na tela de pagamento
        And o cliente preenche todos os dados obrigatórios do cartão de crédito
        When o sistema detecta que nenhuma conta corrente está disponível no cartão
        Then o sistema deve exibir a mensagem "NO_CHECKING_ACCOUNT_AVAILABLE_ON_CARD: Nenhuma conta corrente disponível no cartão."
        And o pagamento deve ser recusado
        And o cliente deve ter a opção de tentar novamente

    #Nenhuma Conta Poupança Disponível no Cartão
    @rejection  @creditCard @noSavingsAccountAvaibleOnCard
    Scenario: Nenhuma conta poupança disponível no cartão
        Given o cliente está na tela de pagamento
        And o cliente preenche todos os dados obrigatórios do cartão de crédito
        When o sistema detecta que nenhuma conta poupança está disponível no cartão
        Then o sistema deve exibir a mensagem "NO_SAVINGS_ACCOUNT_AVAILABLE_ON_CARD: Nenhuma conta poupança disponível no cartão."
        And o pagamento deve ser recusado
        And o cliente deve ter a opção de tentar novamente

    #Cartão Bloqueado
    @rejection  @creditCard @blockCard
    Scenario: Cartão bloqueado
        Given o cliente está na tela de pagamento
        And o cliente preenche todos os dados obrigatórios do cartão de crédito
        When o sistema detecta que o cartão está bloqueado
        Then o sistema deve exibir a mensagem "BLOCK_CARD: O cartão está bloqueado e não pode ser usado."
        And o pagamento deve ser recusado
        And não deve ser oferecida a opção de tentar novamente


    #Montante Inválido
    @rejection  @creditCard @invalidAmount
    Scenario: Montante inválido
        Given o cliente está na tela de pagamento
        And o cliente preenche todos os dados obrigatórios do cartão de crédito
        When o sistema detecta um valor de transação inválido
        Then o sistema deve exibir a mensagem "INVALID_AMOUNT: Uma incompatibilidade de valor ocorreu durante a transação."
        And o pagamento deve ser recusado
        And não deve ser oferecida a opção de tentar novamente

    #Detalhes de Pagamento Não Suportados
    @rejection  @creditCard @paymentMethodNotSupported
    Scenario: Detalhes de pagamento não suportados
        Given o cliente está na tela de pagamento
        And o cliente preenche todos os dados obrigatórios do cartão de crédito
        When o sistema detecta que o método de pagamento não é suportado
        Then o sistema deve exibir a mensagem "ERROR: O método de pagamento usado não é suportado."
        And o pagamento deve ser recusado
        And não deve ser oferecida a opção de tentar novamente

    #CVC Recusado
    @rejection  @creditCard @cvcDeclined
    Scenario: CVC recusado
        Given o cliente está na tela de pagamento
        And o cliente preenche todos os dados obrigatórios do cartão de crédito, incluindo o CVC
        When o sistema detecta que o CVC está incorreto
        Then o sistema deve exibir a mensagem "CVC_DECLINED: O CVC especificado é inválido."
        And o pagamento deve ser recusado
        And o cliente deve ter a opção de tentar novamente

    #Cenário 7: Rejeição por Cartão Expirado
    @rejection  @creditCard @cardExpired @injectableMedication
    Scenario: Tentativa de pagamento rejeitada por cartão expirado
        Given o cliente está na tela de pagamento para filial de medicamentos injetáveis com opção de Cartão de Crédito
        When o cliente preenche os dados do cartão com uma data de validade expirada e clica em "Pagar"
        Then ele deve ver a mensagem "Pagamento rejeitado: cartão expirado"
        And o botão "Tentar novamente" deve estar disponível
        When o cliente clica em "Tentar novamente"
        Then ele deve ser redirecionado para a tela de pagamento para corrigir a data de validade do cartão

    #Suspeita de Fraude
    @rejection  @creditCard @issuerSuspectedFraud
    Scenario: Suspeita de fraude
        Given o cliente está na tela de pagamento
        And o cliente preenche todos os dados obrigatórios do cartão de crédito
        When o sistema detecta uma suspeita de fraude reportada pelo emissor
        Then o sistema deve exibir a mensagem "ISSUER_SUSPECTED_FRAUD: O emissor relatou a transação como suspeita de fraude."
        And o pagamento deve ser recusado
        And não deve ser oferecida a opção de tentar novamente

    #Saldo Insuficiente
    @rejection  @creditCard @notEnoughBalance
    Scenario: Saldo insuficiente
        Given o cliente está na tela de pagamento
        And o cliente preenche todos os dados obrigatórios do cartão de crédito
        When o sistema detecta saldo insuficiente no cartão
        Then o sistema deve exibir a mensagem "NOT_ENOUGH_BALANCE: O cartão não tem saldo suficiente."
        And o pagamento deve ser recusado
        And o cliente deve ter a opção de tentar novamente




    #Rejeição de pagamento por saldo insuficiente
    @rejection  @creditCard @insufficientBalance @controlledMedication
    Scenario: Tentativa de pagamento rejeitada por saldo insuficiente no cartão de crédito
        Given o cliente está na tela de pagamento para filial de medicamentos manipulados com opção de Cartão de Crédito
        When o cliente preenche os dados do cartão e clica em "Pagar"
        Then ele deve ver a mensagem "Pagamento rejeitado: saldo insuficiente"
        And o botão "Tentar novamente" deve estar disponível
        When o cliente clica em "Tentar novamente"
        Then ele deve ser direcionado de volta à tela de pagamento para corrigir as informações

    #Rejeição por Erro de Segurança (Anti-Fraude)
    @rejection  @creditCard @antiFraud @controlledMedication
    Scenario: Tentativa de pagamento rejeitada por erro de segurança (anti-fraude)
        Given o cliente está na tela de pagamento para filial de medicamentos manipulados com opção de Cartão de Crédito
        When o cliente preenche todos os dados do cartão e clica em "Pagar"
        Then ele deve ver a mensagem "Pagamento rejeitado: erro de segurança detectado"
        And o botão "Tentar novamente" deve estar disponível
        When o cliente clica em "Tentar novamente"
        Then ele deve ser redirecionado para a tela de pagamento para tentar novamente

    #Rejeição por Cartão Bloqueado
    @rejection  @creditCard @cardBlocked @controlledMedication
    Scenario: Tentativa de pagamento rejeitada por cartão bloqueado
        Given o cliente está na tela de pagamento para filial de medicamentos manipulados com opção de Cartão de Crédito
        When o cliente preenche os dados do cartão bloqueado e clica em "Pagar"
        Then ele deve ver a mensagem "Pagamento rejeitado: cartão bloqueado"
        And o botão "Tentar novamente" deve estar disponível
        When o cliente clica em "Tentar novamente"
        Then ele deve ser redirecionado para a tela de pagamento para tentar com outro cartão

    #Rejeição por Limite Excedido
    @rejection  @creditCard @limitExceeded @injectableMedication
    Scenario: Tentativa de pagamento rejeitada por limite excedido
        Given o cliente está na tela de pagamento para filial de medicamentos injetáveis com opção de Cartão de Crédito
        When o cliente preenche os dados do cartão e clica em "Pagar"
        Then ele deve ver a mensagem "Pagamento rejeitado: limite de crédito excedido"
        And o botão "Tentar novamente" deve estar disponível
        When o cliente clica em "Tentar novamente"
        Then ele deve ser redirecionado para a tela de pagamento para tentar com outro cartão ou valor

    #Rejeição por Tentativas Excessivas
    @rejection  @creditCard @excessiveAttempts @injectableMedication
    Scenario: Tentativa de pagamento rejeitada por tentativas excessivas
        Given o cliente está na tela de pagamento para filial de medicamentos injetáveis com opção de Cartão de Crédito
        When o cliente tenta pagar várias vezes em sequência
        Then ele deve ver a mensagem "Pagamento rejeitado: tentativas excessivas"
        And deve ser solicitado que o cliente entre em contato com o suporte para resolver o problema

    #Cartão Não Aceito pelo Estabelecimento
    @rejection  @creditCard @cardNotAcceptedTheEstablishment @controlledMedication
    Scenario: Tentativa de pagamento rejeitada por cartão não aceito pelo estabelecimento
        Given o cliente está na tela de pagamento para filial de medicamentos manipulados com opção de Cartão de Crédito
        When o cliente preenche os dados do cartão e clica em "Pagar"
        And o cartão não é aceito pelo estabelecimento
        Then ele deve ver a mensagem "Pagamento rejeitado: cartão não aceito pelo estabelecimento"
        And o cliente deve ser orientado a tentar com outro cartão ou método de pagamento

    #Rejeição por Falha de Autenticação (Reconhecimento Facial)
    @rejection  @creditCard @authenticationFailed @controlledMedication
    Scenario: Tentativa de pagamento rejeitada por falha de autenticação (reconhecimento facial)
        Given o cliente está na tela de pagamento para filial de medicamentos manipulados com opção de Cartão de Crédito
        When o cliente tenta autenticar o pagamento com reconhecimento facial
        And a autenticação falha
        Then ele deve ver a mensagem "Pagamento rejeitado: falha de autenticação"
        And o botão "Tentar novamente" deve estar disponível para realizar outra tentativa de autenticação

    #Tentativa de Pagamento com Outro Cartão Após Rejeição
    @rejection  @creditCard  @newCardAfterRejection
    Scenario: Tentativa de pagamento com outro cartão após rejeição anterior
        Given o cliente teve uma tentativa de pagamento rejeitada anteriormente
        And o cliente está na tela de pagamento
        When o cliente altera os dados para um cartão diferente e clica em "Pagar"
        Then o cliente deve ver a tela de "Pagamento efetuado com sucesso" se o pagamento for aceito
        And o cliente deve ver uma mensagem de rejeição específica se houver algum problema com o novo cartão

    #Pagamento com Cartão de Crédito - Informações Inválidas
    @rejection  @creditCard  @invalidInformation
    Scenario: Pagamento rejeitado por informações inválidas do cartão
        Given o cliente está na tela de pagamento e já preencheu os dados pessoais e de endereço obrigatórios
        And o cliente seleciona "Cartão de Crédito" como forma de pagamento
        When o cliente preenche os dados do cartão com informações incorretas e clica em "Pagar"
        Then o cliente deve ver a mensagem "Pagamento rejeitado: informações do cartão inválidas"
        And o botão "Tentar novamente" deve estar disponível
        When o cliente clica em "Tentar novamente"
        Then o cliente deve ser redirecionado para a tela de pagamento para corrigir as informações do cartão

------------------------------------------------------------------------------------------------------------------------------------------------------------------------