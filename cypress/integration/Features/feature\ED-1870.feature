    # Tags para categorização dos cenários
    @functional
    Funcionalidade: Apresentar endereço e forma de pagamento na tela de atendimento

    # Background comum para todos os cenários
    Background:
            Given que eu estou logado como um usuário atendente

            # Esquema de Cenário para diferentes formas de pagamento
            @functional
            @forma_pagamento
            Esquema do Cenário: Preencher endereço e pagar com sucesso
            Given que eu estou na tela de atendimento
            E eu seleciono a forma de pagamento <forma_de_pagamento> e envio link de pagamento ao cliente
            Quando cliente preenche o endereço com "<endereco>"
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

            @functional
            @forma_pagamento
            Esquema do Cenário: Preencher endereço, pagamento retorna tente novamente, preencher outro endereço e pagar com sucesso
            Given que eu estou na tela de atendimento
            E eu seleciono a forma de pagamento <forma_de_pagamento>
            Quando eu preencho o endereço com "<endereco_inicial>"
            E eu confirmo o pagamento
            E o pagamento retorna "tente novamente"
            Quando eu preencho o endereço com "<endereco_final>"
            E eu confirmo o pagamento novamente
            Então o pagamento deve ser realizado com sucesso
            E o endereço "<endereco_final>" deve ser apresentado na tela de atendimento em andamento
            E o endereço "<endereco_final>" deve ser apresentado na tela de atendimento encerrado
            E a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela de atendimento em andamento
            E a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela de atendimento encerrado

            Exemplos:
            | forma_de_pagamento | endereco_inicial     | endereco_final       |
            | credito            | Rua A, 123, Cidade X | Rua D, 101, Cidade W |
            | pix                | Rua B, 456, Cidade Y | Rua E, 202, Cidade V |
            | indefinido         | Rua C, 789, Cidade Z | Rua F, 303, Cidade U |

    # Tags para categorização dos cenários
    @functional
    Funcionalidade: Reabertura de atendimento e alteração do endereço

    # Background comum para todos os cenários
    Background:
            Given que eu estou logado como um usuário atendente

            # Esquema de Cenário para reabertura de atendimento
            @functional
            @reabertura
            Esquema do Cenário: Reabrir atendimento e verificar forma de pagamento e endereço
            Given que eu estou na tela de atendimento encerrado
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