export const Messages = {
    validation: {
        REQUIRE_FIELD: 'Este campo é obrigatório.',
        VALID_VALUE: 'Por favor, forneça um número válido.',
        IMPORT_IMAGE: 'Por favor, faça a importação de uma imagem de receita.',
        RELATE_PRESCRIBER: 'Por favor, relacione um médico a esta receita.',
        RELATE_PATIENT: 'Por favor, relacione um patient a esta receita.',
        RELATE_ATTENDANT: 'Por favor, relacione um atendente responsável a esta receita.',
        CHOOSE_CHANNEL: 'Por favor, escolha um canal de contato.',
        DEFINE_DATE: 'Por favor, defina uma data de recebimento da receita.',
        DEFINE_TYPE: 'Por favor, defina qual o tipo da receita.',
        CHOOSE_CLUSTER: 'Por favor, escolha um cluster.',
    },
    return: {
        failure: {
            INVALID_USER: 'Usuário inválido: {text}',
            ENV_NOT_FOUND: 'Ambiente \'{environment}\' não encontrado no file cypress.env.json',
            CLUSTER_NOT_REGISTERED: 'Cluster que procura não está cadastrado.',
            CLUSTER_OR_PRESCRIBER_NOT_SELECTED: 'Erro: Cluster ou prescriber não selecionado, mas mensagem "{successMessage}" apresentada.'
        },
        success: {
        }
    }
};