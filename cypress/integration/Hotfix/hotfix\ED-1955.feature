# language: pt
@autocomplete @usuarios
Feature: Verificar o comportamento dos campos de autocomplete em diversas telas do sistema

    Background:
        Given que o sistema possui usuários ativos e excluídos
        And que há nomes de usuários com letras maiúsculas, minúsculas, e preposições

    @importacaoReceitas
    Scenario Outline: Verificar que usuários excluídos não são exibidos na tela de <tela>
        Given que estou na tela de "<tela>"
        When eu insiro o texto "<entrada>" no campo de autocomplete
        Then o usuário "<usuarioExcluido>" não deve ser exibido na lista

        Examples:
            | tela                                   | entrada                       | usuarioExcluido               |
            | Importação de Receitas                 | "Julia H Hanemann"            | "Julia H Hanemann"            |
            | Gerenciamento de Receitas              | "Bianca Regina Cristovao "    | "Bianca Regina Cristovao "    |
            | GERENCIAR DTS                          | "Thiago Silveira Bittencourt" | "Thiago Silveira Bittencourt" |
            | SAC RELATÓRIO SINTÉTICO GERAL          | "Julia H Hanemann "           | "Julia H Hanemann "           |
            | SAC Relatório DETALHADO                | "Bianca Regina Cristovao"     | "Bianca Regina Cristovao"     |
            | EQUÍVOCOS REGISTRADOS NAS CONFERÊNCIAS | "Thiago Silveira Bittencourt" | "Thiago Silveira Bittencourt" |
            | LABORATÓRIO RELATÓRIO SINTÉTICO        | "Julia H Hanemann"            | "Julia H Hanemann"            |
            | GERENCIAMENTO DE EQUÍVOCOS             | "Julia H Hanemann"            | "Julia H Hanemann"            |

    @ordenacao
    Scenario Outline: Verificar a quebra de ordenação alfabética por preposições e entradas específicas
        Given que estou na tela de Importação de Receitas
        When eu insiro o texto "<entrada>" no campo de autocomplete
        Then a lista de usuários não deve quebrar a ordenação alfabética

        Examples:
            | entrada |
            | ama     |
            | ana     |
            | gab     |
            | kar     |
            | mar     |

    @ordenacao
    Scenario: Verificar a quebra de ordenação alfabética por letras maiúsculas
        Given que estou na tela de Gerenciamento de Receitas
        When eu insiro o texto "elle" no campo de autocomplete
        Then a lista de usuários deve ser apresentada em ordem alfabética, ignorando maiúsculas e minúsculas


    @acentos
    Scenario Outline: Autocomplete de nomes com acentos e caracteres especiais
        When o usuário começa a digitar "<nomeInserido>" no campo de autocomplete
        Then a lista de usuários deve ser apresentada em ordem alfabética

        Examples:
            | nomeInserido | nomeSugerido     |
            | jes          | Jéssica H Helena |

    @apostrofos
    Scenario: Autocomplete de nomes com apóstrofos
        When o usuário começa a digitar "Ana" no campo de autocomplete
        Then a lista de usuários deve ser apresentada em ordem alfabética

    @espacos_brancos
    Scenario Outline: Autocomplete ignorando espaços em branco
        Given que o usuário digita "<nomeInserido>" no campo de autocomplete com espaços
        Then a lista de usuários deve ser apresentada em ordem alfabética

        Examples:
            | nomeInserido |
            | "Ana "       |

    @prefixos_sufixos
    Scenario Outline: Autocomplete para nomes com prefixos ou sufixos
        When o usuário começa a digitar "<nomeInserido>" no campo de autocomplete
        Then a lista de usuários deve ser apresentada em ordem alfabética

        Examples:
            | nomeInserido | nomeSugerido |
            | Luana        | Luana Jr.    |