Feature: Gerenciamento de Observações Farmacêuticas na Receita

    Background:
        Given que o usuário está na tela de "Receitas"
        And tem a possibilidade de gerenciar observações

    @addObservation @teleAtendimento
    Scenario Outline: Adicionar observações na receita por diferentes perfis de tele atendimento
        Given que o usuário está logado como "<Perfil>"
        When o usuário adiciona uma nova observação "Dra. orienta seguir com Coenzima Q10 lipossomada."
        Then a observação deve ser salva corretamente na receita
        And a observação deve ser visível e destacada na lista de observações

        Examples:
            | Perfil                 |
            | atendente              |
            | farmaceutico           |
            | orçamentista           |
            | backoffice             |
            | inclusao               |
            | conferencia de entrada |
            | conferencia de saída   |
            | expedicao              |

    @addObservationFromEdit
    Scenario: Adicionar observação durante a edição da receita
        Given que o usuário está na tela de "Edição da Receita"
        When o usuário insere uma nova observação "Ajustar horário de administração para 8h e 20h"
        Then a observação deve ser salva
        And a observação deve estar visível quando o usuário visualizar a "Visualizar Receita"

    @editObservation
    Scenario: Editar observação existente
        Given que o usuário adicionou uma observação "Dra. orienta seguir com Coenzima Q10 lipossomada."
        When o usuário farmacêutico edita a observação para "Dra. recomenda manipular Coenzima Q10 lipossomada."
        Then a observação deve ser atualizada e visível na lista como "Dra. recomenda manipular Coenzima Q10 lipossomada."

    @deleteObservation @restrictPermissions
    Scenario: Excluir observação e manter histórico de exclusão
        Given que o usuário adicionou uma observação "Para prescrição do Dr."
        When o usuário que adicionou a observação tenta excluí - la
        Then a observação deve ser mostrada como excluída, de forma nublada
        And a data e hora da exclusão deve ser exibida
        And o nome do usuário que excluiu deve ser visível ao passar o mouse sobre o ícone de exclusão

    @viewDeletedObservation
    Scenario: Visualizar observações excluídas e manter histórico
        Given que há observações excluídas na lista
        When o usuário visualiza a lista de observações
        Then as observações excluídas devem ser mostradas de forma nublada
        And ao passar o mouse sobre o ícone "i", deve exibir a data e hora da exclusão

    @generatePDF
    Scenario: Gerar PDF de observações farmacêuticas selecionadas
        Given que o usuário adicionou observações farmacêuticas
        When o usuário seleciona as observações desejadas
        And confirma a geração do PDF
        Then o PDF deve incluir as observações selecionadas
        And a data de assinatura do farmacêutico deve ser registrada no PDF

    @noReload @liveUpdate
    Scenario: Adicionar nova observação sem recarregar a tela
        Given que o usuário está na tela de gerenciamento de observações
        When o usuário adiciona uma nova observação "Dra. orienta seguir com vitamina D3"
        Then a observação deve aparecer na lista imediatamente sem recarregar a tela

    @multiObservationHandling
    Scenario: Concatenar múltiplas observações na visualização
        Given que há três observações na receita
        When o usuário visualiza as observações
        Then todas as observações devem ser concatenadas na ordem em que foram adicionadas

    @accessControl @permissionValidation
    Scenario: Controlar quem pode excluir observações
        Given que o usuário logado é "farmaceutico"
        And uma observação foi adicionada por "atendente"
        When o usuário "farmaceutico" tenta excluir a observação
        Then a ação não é possivel porque o botão excluir não é apresentado

    @pdfExclusion
    Scenario: Garantir que observações excluídas não sejam incluídas no PDF
        Given que o usuário marcou observações para gerar PDF
        And algumas observações estão excluídas
        When o usuário gera o PDF
        Then as observações excluídas não devem ser incluídas no PDF gerado

    @scrollBehavior @uiValidation
    Scenario: Verificar comportamento de scroll para muitas informações
        Given que o usuário adicionou várias observações
        And o número de observações ultrapassa a altura da janela
        When o usuário tenta rolar pela lista de observações
        Then a aba de observações deve permitir scroll para visualização completa

    @finalReview @pdfSignature
    Scenario: Assinar e finalizar PDF com observações farmacêuticas
        Given que o usuário adicionou observações e gerou um PDF
        When o farmacêutico insere sua senha para assinatura
        Then o PDF final deve ser assinado e incluir todas as observações selecionadas
        And a data de assinatura deve ser exibida corretamente no documento

    @addObservationFromView @visualizeObservation
    Scenario: Adicionar observação em visualizar receita e verificar em edição da receita
        Given que o usuário está na tela de "Visualizar Receita"
        And está na aba "Informações Formula Certa"
        And está na seção "Observações Paciente e Médico"
        When o usuário adiciona uma nova observação "Paciente deve tomar o medicamento antes das refeições"
        Then a observação deve ser salva e visível na seção "Observações da Receita"
        When o usuário vai para a tela de "Edição da Receita"
        Then a observação inserida deve ser visível na lista de observações na edição da receita

    @addObservationFromAtendimento
    Scenario: Adicionar observações pela tela de atendimento
        Given que o usuário está na tela de "Atendimento"
        When o usuário adiciona uma nova observação "Ajustar dosagem conforme orientação médica"
        Then a observação deve ser salva e visível na tela de "Visualizar Receita" na seção de "Observações da Receita"
        And a observação deve ser destacada e identificável como uma nova adição na lista de observações
