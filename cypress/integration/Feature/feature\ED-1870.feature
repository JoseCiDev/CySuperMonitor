@functional
Feature: Apresentar endereço e forma de pagamento na tela de atendimento

# Background comum para todos os cenários
Background:
  Given que eu estou logado como um usuário atendente

# Esquema de Cenário para diferentes formas de pagamento
@functional
@paymentMethod
Scenario Outline: Preencher endereço e pagar com sucesso
  Given que eu estou na tela de atendimento
  And eu seleciono a forma de pagamento <forma_de_pagamento> e envio link de pagamento ao cliente
  When o cliente preenche o endereço com "<endereco>"
  And confirma o pagamento
  Then o pagamento deve ser realizado com sucesso
  And o endereço "<endereco>" deve ser apresentado no atendimento em andamento
  And a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela de atendimento em andamento

  Examples:
    | forma_de_pagamento | endereco             |
    | credito            | Rua A, 123, Cidade X |
    | pix                | Rua B, 456, Cidade Y |
    | indefinido-credito | Rua C, 789, Cidade Z |
    | indefinido-pix     | Rua C, 789, Cidade Z |
# ---------------------------------
@functional
@paymentMethod
Scenario Outline: Preencher endereço, pagamento retorna tente novamente, preencher outro endereço e pagar com sucesso
  Given que eu estou na tela de atendimento
  And eu seleciono a forma de pagamento <forma_de_pagamento>
  When eu preencho o endereço com "<endereco_inicial>"
  And eu confirmo o pagamento
  And o pagamento retorna "tente novamente"
  When eu preencho o endereço com "<endereco_final>"
  And eu confirmo o pagamento novamente
  Then o pagamento deve ser realizado com sucesso
  And o endereço "<endereco_final>" deve ser apresentado na tela de atendimento em andamento
  And a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela de atendimento em andamento

  Examples:
    | forma_de_pagamento | endereco_inicial     | endereco_final       |
    | credito            | Rua A, 123, Cidade X | Rua D, 101, Cidade W |
    | pix                | Rua B, 456, Cidade Y | Rua E, 202, Cidade V |
    | indefinido-credito | Rua C, 789, Cidade Z |
    | indefinido-pix     | Rua C, 789, Cidade Z |

# ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

@functional
Feature: Reabertura de atendimento e alteração do endereço

# Background comum para todos os cenários
Background:
  Given que eu estou logado como um usuário atendente

# Esquema de Cenário para reabertura de atendimento
@functional
@reabertura
Scenario Outline: Reabrir atendimento e verificar forma de pagamento e endereço
  Given que eu estou na tela de atendimento encerrado
  And eu selecionei a forma de pagamento <forma_de_pagamento>
  And o endereço preenchido foi "<endereco>"
  When eu reabro o atendimento
  Then a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela de atendimento em andamento
  And o endereço "<endereco>" deve ser apresentado na tela de atendimento em andamento

  Examples:
    | forma_de_pagamento | endereco             |
    | credito            | Rua A, 123, Cidade X |
    | pix                | Rua B, 456, Cidade Y |
    | indefinido         | Rua C, 789, Cidade Z |

# ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#



@functional
Feature: Gerenciamento de endereços

# Background comum para todos os cenários
Background:
  Given que eu estou logado como um usuário atendente

# Esquema de Cenário para clientes com endereço cadastrado
@functional
@endereco_cadastrado
Scenario Outline: Clientes com endereço cadastrado
  Given que o cliente tem um endereço cadastrado "<endereco_cadastrado>"
  And eu envio link de pagamento ao cliente
  When o cliente seleciona o endereço cadastrado
  And confirma o pagamento
  Then o pagamento deve ser realizado com sucesso
  And o endereço "<endereco_cadastrado>" deve ser apresentado no atendimento em andamento
  And a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela de atendimento em andamento

  Examples:
    | forma_de_pagamento | endereco_cadastrado  |
    | credito            | Rua G, 789, Cidade K |
    | pix                | Rua H, 321, Cidade L |
    | indefinido-credito | Rua I, 654, Cidade M |
    | indefinido-pix     | Rua J, 987, Cidade N |
# ---------------------------------
# Esquema de Cenário para clientes sem endereço cadastrado
@functional
@endereco_nao_cadastrado
Scenario Outline: Clientes sem endereço cadastrado
  Given que o cliente não tem um endereço cadastrado
  And eu envio link de pagamento ao cliente
  When o cliente preenche o endereço com "<endereco>"
  And confirma o pagamento
  Then o pagamento deve ser realizado com sucesso
  And o endereço "<endereco>" deve ser apresentado no atendimento em andamento
  And a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela de atendimento em andamento

  Examples:
    | forma_de_pagamento | endereco             |
    | credito            | Rua A, 123, Cidade X |
    | pix                | Rua B, 456, Cidade Y |
    | indefinido-credito | Rua C, 789, Cidade Z |
    | indefinido-pix     | Rua C, 789, Cidade Z |
# ---------------------------------
# Esquema de Cenário para alteração do endereço
@functional
@alteracao_endereco
Scenario Outline: Alterar endereço deixando campos em branco
  Given que eu estou na tela de atendimento em andamento
  And eu selecionei a forma de pagamento <forma_de_pagamento>
  When eu altero o endereço para "<novo_endereco>" com complemento "<complemento>"
  And eu confirmo a alteração
  Then o novo endereço "<novo_endereco>" deve ser apresentado na tela de atendimento em andamento
  And o complemento deve estar em branco

  Examples:
    | forma_de_pagamento | novo_endereco         | complemento |
    | credito            | Rua D, 101, Cidade W  |             |
    | pix                | Rua E, 202, Cidade V  |             |
    | indefinido-credito | Rua F, 303, Cidade U  |             |
    | indefinido-pix     | Rua G, 404, Cidade T  |             |
# ---------------------------------