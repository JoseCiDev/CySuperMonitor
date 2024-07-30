@funcional
Funcionalidade: Apresentar endereço e forma de pagamento na tela de atendimento

# Background comum para todos os cenários
Background:
  Dado que eu estou logado como um usuário atendente

# Esquema de Cenário para diferentes formas de pagamento
@funcional
@forma_pagamento
Esquema do Cenário: Preencher endereço e pagar com sucesso
  Dado que eu estou na tela de atendimento
  E eu seleciono a forma de pagamento <forma_de_pagamento> e envio link de pagamento ao cliente
  Quando o cliente preenche o endereço com "<endereco>"
  E confirma o pagamento
  Então o pagamento deve ser realizado com sucesso
  E o endereço "<endereco>" deve ser apresentado no atendimento em andamento
  E a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela de atendimento em andamento

  Exemplos:
    | forma_de_pagamento | endereco             |
    | credito            | Rua A, 123, Cidade X |
    | pix                | Rua B, 456, Cidade Y |
    | indefinido-credito | Rua C, 789, Cidade Z |
    | indefinido-pix     | Rua C, 789, Cidade Z |
# ---------------------------------
@funcional
@forma_pagamento
Esquema do Cenário: Preencher endereço, pagamento retorna tente novamente, preencher outro endereço e pagar com sucesso
  Dado que eu estou na tela de atendimento
  E eu seleciono a forma de pagamento <forma_de_pagamento>
  Quando eu preencho o endereço com "<endereco_inicial>"
  E eu confirmo o pagamento
  E o pagamento retorna "tente novamente"
  Quando eu preencho o endereço com "<endereco_final>"
  E eu confirmo o pagamento novamente
  Então o pagamento deve ser realizado com sucesso
  E o endereço "<endereco_final>" deve ser apresentado na tela de atendimento em andamento
  E a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela de atendimento em andamento

  Exemplos:
    | forma_de_pagamento | endereco_inicial     | endereco_final       |
    | credito            | Rua A, 123, Cidade X | Rua D, 101, Cidade W |
    | pix                | Rua B, 456, Cidade Y | Rua E, 202, Cidade V |
    | indefinido-credito | Rua C, 789, Cidade Z |
    | indefinido-pix     | Rua C, 789, Cidade Z |

# ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#

@funcional
Funcionalidade: Reabertura de atendimento e alteração do endereço

# Background comum para todos os cenários
Background:
  Dado que eu estou logado como um usuário atendente

# Esquema de Cenário para reabertura de atendimento
@funcional
@reabertura
Esquema do Cenário: Reabrir atendimento e verificar forma de pagamento e endereço
  Dado que eu estou na tela de atendimento encerrado
  E eu selecionei a forma de pagamento <forma_de_pagamento>
  E o endereço preenchido foi "<endereco>"
  Quando eu reabro o atendimento
  Então a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela de atendimento em andamento
  E o endereço "<endereco>" deve ser apresentado na tela de atendimento em andamento

  Exemplos:
    | forma_de_pagamento | endereco             |
    | credito            | Rua A, 123, Cidade X |
    | pix                | Rua B, 456, Cidade Y |
    | indefinido         | Rua C, 789, Cidade Z |

# ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#



@funcional
Funcionalidade: Gerenciamento de endereços

# Background comum para todos os cenários
Background:
  Dado que eu estou logado como um usuário atendente

# Esquema de Cenário para clientes com endereço cadastrado
@funcional
@endereco_cadastrado
Esquema do Cenário: Clientes com endereço cadastrado
  Dado que o cliente tem um endereço cadastrado "<endereco_cadastrado>"
  E eu envio link de pagamento ao cliente
  Quando o cliente seleciona o endereço cadastrado
  E confirma o pagamento
  Então o pagamento deve ser realizado com sucesso
  E o endereço "<endereco_cadastrado>" deve ser apresentado no atendimento em andamento
  E a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela de atendimento em andamento

  Exemplos:
    | forma_de_pagamento | endereco_cadastrado  |
    | credito            | Rua G, 789, Cidade K |
    | pix                | Rua H, 321, Cidade L |
    | indefinido-credito | Rua I, 654, Cidade M |
    | indefinido-pix     | Rua J, 987, Cidade N |
# ---------------------------------
# Esquema de Cenário para clientes sem endereço cadastrado
@funcional
@endereco_nao_cadastrado
Esquema do Cenário: Clientes sem endereço cadastrado
  Dado que o cliente não tem um endereço cadastrado
  E eu envio link de pagamento ao cliente
  Quando o cliente preenche o endereço com "<endereco>"
  E confirma o pagamento
  Então o pagamento deve ser realizado com sucesso
  E o endereço "<endereco>" deve ser apresentado no atendimento em andamento
  E a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela de atendimento em andamento

  Exemplos:
    | forma_de_pagamento | endereco             |
    | credito            | Rua A, 123, Cidade X |
    | pix                | Rua B, 456, Cidade Y |
    | indefinido-credito | Rua C, 789, Cidade Z |
    | indefinido-pix     | Rua C, 789, Cidade Z |
# ---------------------------------
# Esquema de Cenário para alteração do endereço
@funcional
@alteracao_endereco
Esquema do Cenário: Alterar endereço deixando campos em branco
  Dado que eu estou na tela de atendimento em andamento
  E eu selecionei a forma de pagamento <forma_de_pagamento>
  Quando eu altero o endereço para "<novo_endereco>" com complemento "<complemento>"
  E eu confirmo a alteração
  Então o novo endereço "<novo_endereco>" deve ser apresentado na tela de atendimento em andamento
  E o complemento deve estar em branco

  Exemplos:
    | forma_de_pagamento | novo_endereco         | complemento |
    | credito            | Rua D, 101, Cidade W  |             |
    | pix                | Rua E, 202, Cidade V  |             |
    | indefinido-credito | Rua F, 303, Cidade U  |             |
    | indefinido-pix     | Rua G, 404, Cidade T  |             |
# ---------------------------------