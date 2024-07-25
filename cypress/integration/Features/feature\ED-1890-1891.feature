@functional
Feature: Gerenciamento de dados do cliente durante o pagamento

        # Background comum para todos os cenários
        Background:
                Given que eu estou logado como um usuário atendente
                And eu estou na tela de atendimento em andamento

        # Esquema de Cenário para clientes com dados cadastrados
        @functional
        @registration_data
        Scenario Outline: Exibir And permitir alteração dos dados do cliente com dados cadastrados
                Given que o cliente tem os seguintes dados cadastrados:
                        | nome   | cpf   | rg   | data_de_nascimento |
                        | <nome> | <cpf> | <rg> | <data_nascimento>  |
                Given eu envio link de pagamento ao cliente
                Then os campos de nome, cpf, rg And data de nascimento devem ser preenchidos com os dados cadastrados
                Given o cliente altera os dados para:
                        | nome        | cpf        | rg        | data_de_nascimento |
                        | <novo_nome> | <novo_cpf> | <novo_rg> | <nova_data>        |
                And confirma o pagamento
                Then os dados alterados devem ser apresentados no atendimento em andamento
                And os dados alterados devem ser salvos no cadastro do cliente

                Examples:
                        | nome       | cpf         | rg       | data_nascimento | novo_nome | novo_cpf    | novo_rg  | nova_data  |
                        | João Silva | 12345678901 | 12345678 | 01/01/1980      | João S.   | 10987654321 | 87654321 | 02/02/1982 |

        # Esquema de Cenário para clientes sem dados cadastrados
        @functional
        @sem_dados_cadastrados
        Scenario Outline: Permitir preenchimento dos dados do cliente sem dados cadastrados
                Given que o cliente não tem dados cadastrados
                Given eu envio link de pagamento ao cliente
                Then os campos de nome, cpf, rg And data de nascimento devem estar em branco
                Given o cliente preenche os campos com:
                        | nome   | cpf   | rg   | data_de_nascimento |
                        | <nome> | <cpf> | <rg> | <data_nascimento>  |
                And confirma o pagamento
                Then os dados preenchidos devem ser apresentados no atendimento em andamento
                And os dados preenchidos devem ser salvos no cadastro do cliente

                Examples:
                        | nome                                | cpf         | rg          | data_nascimento |
                        | BEATRIZ DE FATIMA PEREIRA MAGALHAES | 62820966187 | 62820966187 | 1977-05-12      |
                        | Jose Djalma Ferreira Mendes         | 08239097510 | 6850748     | 1990-01-10      |

                # Cenário para validação dos tipos de dados
                @functional
                @validacao_tipos
                Cenário: Validar tipos de dados aceitos nos campos de pagamento
                Given que eu estou na tela de pagamento
                Given eu tento inserir caracteres não numéricos no campo CPF
                Then o campo CPF deve aceitar somente números
                Given eu tento inserir caracteres não numéricos no campo RG
                Then o campo RG deve aceitar somente números
                Given eu tento inserir caracteres especiais no campo Nome
                Then o campo Nome deve aceitar somente letras And números
                Given eu tento inserir caracteres não numéricos no campo Data de Nascimento
                Then o campo Data de Nascimento deve aceitar somente números

        # Esquema de Cenário para clientes estrangeiros
        @functional
        @estrangeiros
        Scenario Outline: Exibir labels em inglês para clientes estrangeiros
                Given que o cliente é estrangeiro
                Given eu envio link de pagamento ao cliente
                Then as labels dos campos devem ser apresentadas em inglês
                And os campos devem ser:
                        | label_name | label_cpf | label_rg  | label_birthdate |
                        | Full Name  | ID Number | RG Number | Date of Birth   |

                Examples:
                        | nome       | cpf         | rg       | data_nascimento |
                        | John Doe   | 98765432101 | 87654321 | 01/01/1985      |
                        | Jane Smith | 12345098765 | 12345098 | 12/12/1990      |


@functional
@cpf_validation
Feature: Validação do campo CPF

        # Background comum para todos os cenários
        Background:
                Given que eu estou logado como um usuário atendente
                And eu estou na tela de pagamento

                # Cenário para validar o campo CPF
                @functional
                @validacao
                Cenário: Validar o campo CPF
                Given que eu estou na tela de pagamento
                Given eu tento inserir caracteres não numéricos no campo CPF
                Then o campo CPF deve aceitar somente números
                Given eu insiro um CPF com menos de 11 dígitos
                Then eu devo ver uma mensagem de erro "CPF inválido"
                Given eu insiro um CPF com mais de 11 dígitos
                Then eu devo ver uma mensagem de erro "CPF inválido"
                Given eu insiro um CPF com 11 dígitos inválido "<cpf_invalido>"
                Then eu devo ver uma mensagem de erro "CPF inválido"
                Given eu insiro um CPF válido "<cpf_valido>"
                Then o campo CPF deve aceitar o valor inserido sem apresentar erros

                Examples:
                        | cpf_invalido | cpf_valido  |
                        | 123456789065 | 08239097510 |
                        | 123456789012 | 08239097600 |
                        | 082687547590 | 09717961654 |
