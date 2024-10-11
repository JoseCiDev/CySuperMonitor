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
            | tela                                   | entrada              | usuarioExcluido      |
            | Importação de Receitas                 | "Charlise Pereira"   | "Charlise Pereira"   |
            | Gerenciamento de Receitas              | "Francieli Kellner " | "Francieli Kellner " |
            | GERENCIAR DTS                          | "Carolina Andrade"   | "Carolina Andrade"   |
            | SAC RELATÓRIO SINTÉTICO GERAL          | "Sabrina Santos "    | "Sabrina Santos "    |
            | SAC Relatório DETALHADO                | "Miriam Luz"         | "Miriam Luz"         |
            | EQUÍVOCOS REGISTRADOS NAS CONFERÊNCIAS | "Marjorin Delfino"   | "Marjorin Delfino"   |
            | LABORATÓRIO RELATÓRIO SINTÉTICO        | "Samira  Pinheiro"   | "Samira  Pinheiro"   |
            | GERENCIAMENTO DE EQUÍVOCOS             | "Vanessa  Garcia "   | "Vanessa  Garcia "   |

    @ordenacao
    Scenario Outline: Verificar a quebra de ordenação alfabética por preposições e entradas específicas
        Given que estou na tela de Importação de Receitas
        When eu insiro o texto "<entrada>" no campo de autocomplete
        Then a lista de usuários não deve quebrar a ordenação alfabética

        Examples:
            | entrada |
            | ama     |
            | ana     |
            | and     |
            | bia     |
            | bru     |
            | cam     |
            | car     |
            | dai     |
            | dan     |
            | fer     |
            | fra     |
            | gab     |
            | jes     |
            | jul     |
            | luc     |
            | mar     |
            | nat     |
            | sab     |
            | van     |
            | viv     |


    @ordenacao
    Scenario: Verificar a quebra de ordenação alfabética por letras maiúsculas
        Given que estou na tela de Gerenciamento de Receitas
        When eu insiro o texto "bru" no campo de autocomplete
        Then a lista de usuários deve ser apresentada em ordem alfabética, ignorando maiúsculas e minúsculas


    @acentos
    Scenario Outline: Autocomplete de nomes com acentos e caracteres especiais
        When o usuário começa a digitar "<nomeInserido>" no campo de autocomplete
        Then a lista de usuários deve ser apresentada em ordem alfabética

        Examples:
            | nomeInserido | nomeSugerido         |
            | ren          | Renan Guzmán         |
            | natália      | Natália Lopes        |
            | valéria      | Valéria Cabral       |
            | cláudia      | Cláudia Cláudia      |
            | joão         | João Victor da Silva |

    @apostrofos
    Scenario: Autocomplete de nomes com apóstrofos
        When o usuário começa a digitar "Gra" no campo de autocomplete
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
            | nomeInserido |
            | Camila J     |
