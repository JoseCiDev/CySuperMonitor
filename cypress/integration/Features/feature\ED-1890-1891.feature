    @funcional
    Funcionalidade: Gerenciamento de dados do cliente durante o pagamento

    # Background comum para todos os cenários
    Background:
            Dado que eu estou logado como um usuário atendente
            E eu estou na tela de atendimento em andamento

            # Esquema de Cenário para clientes com dados cadastrados
            @funcional
            @dados_cadastrados
            Esquema do Cenário: Exibir e permitir alteração dos dados do cliente com dados cadastrados
            Dado que o cliente tem os seguintes dados cadastrados:
            | nome   | cpf   | rg   | data_de_nascimento |
            | <nome> | <cpf> | <rg> | <data_nascimento>  |
            Quando eu envio link de pagamento ao cliente
            Então os campos de nome, cpf, rg e data de nascimento devem ser preenchidos com os dados cadastrados
            Quando o cliente altera os dados para:
            | nome        | cpf        | rg        | data_de_nascimento |
            | <novo_nome> | <novo_cpf> | <novo_rg> | <nova_data>        |
            E confirma o pagamento
            Então os dados alterados devem ser apresentados no atendimento em andamento
            E os dados alterados devem ser salvos no cadastro do cliente

            Exemplos:
            | nome       | cpf         | rg       | data_nascimento | novo_nome | novo_cpf    | novo_rg  | nova_data  |
            | João Silva | 12345678901 | 12345678 | 01/01/1980      | João S.   | 10987654321 | 87654321 | 02/02/1982 |

            # Esquema de Cenário para clientes sem dados cadastrados
            @funcional
            @sem_dados_cadastrados
            Esquema do Cenário: Permitir preenchimento dos dados do cliente sem dados cadastrados
            Dado que o cliente não tem dados cadastrados
            Quando eu envio link de pagamento ao cliente
            Então os campos de nome, cpf, rg e data de nascimento devem estar em branco
            Quando o cliente preenche os campos com:
            | nome   | cpf   | rg   | data_de_nascimento |
            | <nome> | <cpf> | <rg> | <data_nascimento>  |
            E confirma o pagamento
            Então os dados preenchidos devem ser apresentados no atendimento em andamento
            E os dados preenchidos devem ser salvos no cadastro do cliente

            Exemplos:
            | nome         | cpf         | rg       | data_nascimento |
            | Maria Souza  | 12345678902 | 12345679 | 03/03/1990      |
            | Pedro Santos | 10987654322 | 87654322 | 04/04/1992      |

            # Cenário para validação dos tipos de dados
            @funcional
            @validacao_tipos
            Cenário: Validar tipos de dados aceitos nos campos de pagamento
            Dado que eu estou na tela de pagamento
            Quando eu tento inserir caracteres não numéricos no campo CPF
            Então o campo CPF deve aceitar somente números
            Quando eu tento inserir caracteres não numéricos no campo RG
            Então o campo RG deve aceitar somente números
            Quando eu tento inserir caracteres especiais no campo Nome
            Então o campo Nome deve aceitar somente letras e números
            Quando eu tento inserir caracteres não numéricos no campo Data de Nascimento
            Então o campo Data de Nascimento deve aceitar somente números

            # Esquema de Cenário para clientes estrangeiros
            @funcional
            @estrangeiros
            Esquema do Cenário: Exibir labels em inglês para clientes estrangeiros
            Dado que o cliente é estrangeiro
            Quando eu envio link de pagamento ao cliente
            Então as labels dos campos devem ser apresentadas em inglês
            E os campos devem ser:
            | label_name | label_cpf | label_rg  | label_birthdate |
            | Full Name  | ID Number | RG Number | Date of Birth   |

            Exemplos:
            | nome       | cpf         | rg       | data_nascimento |
            | John Doe   | 98765432101 | 87654321 | 01/01/1985      |
            | Jane Smith | 12345098765 | 12345098 | 12/12/1990      |

    
    @funcional
    @validacao_cpf
    Funcionalidade: Validação do campo CPF

    # Background comum para todos os cenários
    Background:
            Dado que eu estou logado como um usuário atendente
            E eu estou na tela de pagamento

            # Cenário para validar o campo CPF
            @funcional
            @validacao
            Cenário: Validar o campo CPF
            Dado que eu estou na tela de pagamento
            Quando eu tento inserir caracteres não numéricos no campo CPF
            Então o campo CPF deve aceitar somente números
            Quando eu insiro um CPF com menos de 11 dígitos
            Então eu devo ver uma mensagem de erro "CPF inválido"
            Quando eu insiro um CPF com mais de 11 dígitos
            Então eu devo ver uma mensagem de erro "CPF inválido"
            Quando eu insiro um CPF com 11 dígitos inválido "<cpf_invalido>"
            Então eu devo ver uma mensagem de erro "CPF inválido"
            Quando eu insiro um CPF válido "<cpf_valido>"
            Então o campo CPF deve aceitar o valor inserido sem apresentar erros

            Exemplos:
            | cpf_invalido | cpf_valido  |
            | 1234567890   | 12345678901 |
            | 123456789012 | 10987654321 |
            | 11111111111  | 98765432109 |
