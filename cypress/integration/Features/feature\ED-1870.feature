    # Tags para categorização dos cenários
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
            Quando cliente preenche o endereço com "<endereco>"
            E confirma o pagamento
            Então o pagamento deve ser realizado com sucesso
            E o endereço "<endereco>" deve ser apresentado na <tela>
            E a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela <tela>

            Exemplos:
            | forma_de_pagamento | endereco             | tela                     |
            | credito            | Rua A, 123, Cidade X | atendimento em andamento |
            | credito            | Rua A, 123, Cidade X | atendimento encerrado    |
            | pix                | Rua B, 456, Cidade Y | atendimento em andamento |
            | pix                | Rua B, 456, Cidade Y | atendimento encerrado    |
            | indefinido-credito | Rua C, 789, Cidade Z | atendimento em andamento |
            | indefinido-credito | Rua C, 789, Cidade Z | atendimento encerrado    |
            | indefinido-pix     | Rua C, 789, Cidade Z | atendimento em andamento |
            | indefinido-pix     | Rua C, 789, Cidade Z | atendimento encerrado    |

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
            E o endereço "<endereco_final>" deve ser apresentado na tela de atendimento encerrado
            E a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela de atendimento em andamento
            E a forma de pagamento "<forma_de_pagamento>" deve ser apresentada na tela de atendimento encerrado

            Exemplos:
            | forma_de_pagamento | endereco_inicial     | endereco_final       |
            | credito            | Rua A, 123, Cidade X | Rua D, 101, Cidade W |
            | pix                | Rua B, 456, Cidade Y | Rua E, 202, Cidade V |
            | indefinido         | Rua C, 789, Cidade Z | Rua F, 303, Cidade U |
