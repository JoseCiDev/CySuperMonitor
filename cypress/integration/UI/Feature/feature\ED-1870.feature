
Feature: Apresentar endereço e forma de pagamento na tela de atendimento

Background:
  Given que eu estou logado como um usuário atendente

@paySuccessfully
Scenario Outline: Preencher endereço e pagar com sucesso
  Given que eu estou na tela de atendimento
  And eu seleciono a forma de pagamento <formaPagamento> e envio link de pagamento ao cliente
  When o cliente preenche o endereço com "<endereco>"
  And confirma o pagamento
  Then o pagamento deve ser realizado com sucesso
  And o endereço "<endereco>" deve ser apresentado no atendimento em andamento
  And a forma de pagamento "<formaPagamento>" deve ser apresentada na tela de atendimento em andamento

  Examples:
    | formaPagamento | endereco             |
    | credito            | Rua A, 123, Cidade X |
    | pix                | Rua B, 456, Cidade Y |
    | indefinido-credito | Rua C, 789, Cidade Z |
    | indefinido-pix     | Rua C, 789, Cidade Z |

@changeAddress
Scenario Outline: Preencher endereço, pagamento retorna tente novamente, preencher outro endereço e pagar com sucesso
  Given que eu estou na tela de atendimento
  And eu seleciono a forma de pagamento <formaPagamento>
  When eu preencho o endereço com "<enderecoInicial>"
  And eu confirmo o pagamento
  And o pagamento retorna "tente novamente"
  When eu preencho o endereço com "<enderecoFinal>"
  And eu confirmo o pagamento novamente
  Then o pagamento deve ser realizado com sucesso
  And o endereço "<enderecoFinal>" deve ser apresentado na tela de atendimento em andamento
  And a forma de pagamento "<formaPagamento>" deve ser apresentada na tela de atendimento em andamento

  Examples:
    | formaPagamento | enderecoInicial     | enderecoFinal       |
    | credito            | Rua A, 123, Cidade X | Rua D, 101, Cidade W |
    | pix                | Rua B, 456, Cidade Y | Rua E, 202, Cidade V |
    | indefinido-credito | Rua C, 789, Cidade Z |
    | indefinido-pix     | Rua C, 789, Cidade Z |


Feature: Reabertura de atendimento e alteração do endereço

Background:
  Given que eu estou logado como um usuário atendente

@reabertura
Scenario Outline: Reabrir atendimento e verificar forma de pagamento e endereço
  Given que eu estou na tela de atendimento encerrado
  And eu selecionei a forma de pagamento <formaPagamento>
  And o endereço preenchido foi "<endereco>"
  When eu reabro o atendimento
  Then a forma de pagamento "<formaPagamento>" deve ser apresentada na tela de atendimento em andamento
  And o endereço "<endereco>" deve ser apresentado na tela de atendimento em andamento

  Examples:
    | formaPagamento | endereco             |
    | credito            | Rua A, 123, Cidade X |
    | pix                | Rua B, 456, Cidade Y |
    | indefinido         | Rua C, 789, Cidade Z |


Feature: Gerenciamento de endereços

Background:
  Given que eu estou logado como um usuário atendente

@registeredAddress
Scenario Outline: Clientes com endereço cadastrado
  Given que o cliente tem um endereço cadastrado "<enderecoCadastrado>"
  And eu envio link de pagamento ao cliente
  When o cliente seleciona o endereço cadastrado
  And confirma o pagamento
  Then o pagamento deve ser realizado com sucesso
  And o endereço "<enderecoCadastrado>" deve ser apresentado no atendimento em andamento
  And a forma de pagamento "<formaPagamento>" deve ser apresentada na tela de atendimento em andamento

  Examples:
    | formaPagamento | enderecoCadastrado  |
    | credito            | Rua G, 789, Cidade K |
    | pix                | Rua H, 321, Cidade L |
    | indefinido-credito | Rua I, 654, Cidade M |
    | indefinido-pix     | Rua J, 987, Cidade N |


@addressNotRegistered
Scenario Outline: Clientes sem endereço cadastrado
  Given que o cliente não tem um endereço cadastrado
  And eu envio link de pagamento ao cliente
  When o cliente preenche o endereço com "<endereco>"
  And confirma o pagamento
  Then o pagamento deve ser realizado com sucesso
  And o endereço "<endereco>" deve ser apresentado no atendimento em andamento
  And a forma de pagamento "<formaPagamento>" deve ser apresentada na tela de atendimento em andamento

  Examples:
    | formaPagamento | endereco             |
    | credito            | Rua A, 123, Cidade X |
    | pix                | Rua B, 456, Cidade Y |
    | indefinido-credito | Rua C, 789, Cidade Z |
    | indefinido-pix     | Rua C, 789, Cidade Z |

@editAddress
Scenario Outline: Alterar endereço deixando campos em branco
  Given que eu estou na tela de atendimento em andamento
  And eu selecionei a forma de pagamento <formaPagamento>
  When eu altero o endereço para "<novoEndereco>" com complemento "<complemento>"
  And eu confirmo a alteração
  Then o novo endereço "<novoEndereco>" deve ser apresentado na tela de atendimento em andamento
  And o complemento deve estar em branco

  Examples:
    | formaPagamento | novoEndereco         | complemento |
    | credito            | Rua D, 101, Cidade W  |             |
    | pix                | Rua E, 202, Cidade V  |             |
    | indefinido-credito | Rua F, 303, Cidade U  |             |
    | indefinido-pix     | Rua G, 404, Cidade T  |             |
