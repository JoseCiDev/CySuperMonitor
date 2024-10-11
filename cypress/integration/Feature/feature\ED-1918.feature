Feature: Gestão de Status e Links de Pagamentos
    Para garantir que os status de pagamento sejam corretamente atualizados e os links de pagamento funcionem conforme esperado
    Como um usuário do sistema
    Eu quero que os status de pagamento sejam atualizados corretamente e os links de pagamento sejam ativados/desativados de acordo com as regras de negócios

    Background: Usuário autenticado
        Given que o usuário está autenticado no sistema

    Scenario Outline: Atualizar status de pagamento nas telas
        Given que o usuário está na tela "<tela>"
        When o usuário faz uma requisição para atualizar o status de pagamento
        And o sistema retorna o status "<statusGpe>" do GPE
        Then o status exibido deve ser "<statusPadronizado>"

        Examples:
            | tela                     | statusGpe            | statusPadronizado |
            | lista de atendimentos    | Pago                 | Pago              |
            | lista de atendimentos    | Aguardando pagamento | Aguardando        |
            | lista de atendimentos    | Cancelado            | Cancelado         |
            | lista de atendimentos    | Inativo              | Inativo           |
            | Atendimento em andamento | Pago                 | Pago              |
            | Atendimento em andamento | Aguardando pagamento | Aguardando        |
            | Atendimento em andamento | Cancelado            | Cancelado         |
            | Atendimento em andamento | Inativo              | Inativo           |
            | Busca de pagamentos      | Pago                 | Pago              |
            | Busca de pagamentos      | Aguardando pagamento | Aguardando        |
            | Busca de pagamentos      | Cancelado            | Cancelado         |
            | Busca de pagamentos      | Inativo              | Inativo           |


    Scenario: Gerar link de pagamento
        When o usuário gera um novo link de pagamento
        Then o link de pagamento deve ser criado com status "Ativo"
        And o formulário de pagamento deve estar disponível para o cliente

    Scenario: Inativar link de pagamento
        Given que o usuário gerou um link de pagamento ativo
        When o usuário desativa o link de pagamento
        Then o status do link de pagamento deve ser alterado para "Inativo"
        And o formulário de pagamento deve ser removido e a tela deve exibir "orçamento encerrado"

    Scenario: Reativar link de pagamento
        Given que o usuário inativou um link de pagamento
        And o link de pagamento está com status "Inativo"
        When o usuário reativa o link de pagamento
        Then o status do link de pagamento deve ser alterado para "Ativo"
        And o formulário de pagamento deve estar disponível novamente para o cliente

    Scenario: Não permitir inativar link de pagamento de orçamento pago
        Given que o link de pagamento que está associado a um orçamento foi pago
        And apresenta status "Pago"
        When o usuário tenta desativar o link de pagamento
        Then o sistema deve impedir a desativação e exibir uma mensagem de erro "Não é possível desativar um link de pagamento para um orçamento já pago."

    Scenario Outline: Sincronizar status do orçamento
        Given que o orçamento vinculado ao link de pagamento está com status "<statusInicial>"
        When o usuário "<acao>" o link de pagamento
        Then o status do orçamento deve ser atualizado para "<statusAtualizado>"

        Examples:
            | statusInicial | acao    | statusAtualizado |
            | Em Andamento  | inativa | Em Andamento     |
            | Em Andamento  | ativa   | Em Andamento     |
            | Encerrado     | inativa | Encerrado        |
            | Encerrado     | ativa   | Encerrado        |

    Scenario: Garantir que o status do pagamento seja atualizado ao desativar/ativar link no GPE
        Given que o link de pagamento está com status "Ativo" no GPE
        When o link de pagamento é desativado no GPE
        Then o status do link de pagamento deve ser atualizado para "Inativo"
        And na tela que lista os atendimentos em andamento o status do link de pagamento deve ser atualizado para "Inativo"
        And na tela de atendimento em andamento o status do link de pagamento deve ser atualizado para "Inativo"

    Scenario: Impedir inativação de link de pagamento após pagamento concluído
        Given que o link de pagamento está associado a um orçamento com status "Pago"
        When o usuário tenta desativar o link de pagamento
        Then o sistema deve impedir a desativação
        And deve exibir uma mensagem de erro "Não é possível inativar o link de pagamento para um orçamento já pago."