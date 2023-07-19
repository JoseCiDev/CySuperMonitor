import { ELEMENTS } from './elements';
const el = ELEMENTS;
import { Receita } from '../index';
import { faker } from '@faker-js/faker';


enum CanalRecebimento {
    Selecione = '',
    Whatsapp = '1',
    Email = '2',
    InjetaveisWhatsapp = '4',
    EasyHealth = '5',
    MedX = '6',
    Visitacao = '7',
    BalcaoPessoalmente = '8',
    WhatsappClinicaPrescritor = '9',
    EmailClinicaPrescritor = '10',
    InjetaveisEmail = '11',
    InjetaveisEasyHealth = '12',
}

enum Parametro {
    Nome,
    Cdcli,
    Cpf,
    TelCel,
}

enum Opcao {
    Cancel,
    Ok,
}

enum TipoReceita {
    PossuiReceita = '1',
    NaoPossuiReceita = '2',
    Repeticao = '3',
}

enum Cluster {
    Selecione = '',
    cluster1 = '1',
    cluster2 = '2',
    cluster3 = '3',
    cluster4 = '4',
    cluster5 = '5',
    cluster6 = 'Pediátrico',
    cluster7 = 'Prescritores',
    cluster8 = 'Atendimento injetáveis',
    cluster12 = 'Consultoria técnica Injetáveis',
    cluster14 = 'Recepção',
}


export class ImportarReceita extends Receita {
    imgreceita: string;
    imgpdfreceita: string;

    constructor(
        imgreceita: string,
        imgpdfreceita: string,
        imagem: string,
        prescritor: string,
        paciente: string,
        dataRecebimento: Date,
        canalRecebimento: string,
        atendenteResponsavel: string,
        observacao: string,
        varejo: string,
        medicamentoControlado: string,
        urgente: string,
        clienteAlerta: string,
        possuiReceita: string,
        naoPossuiReceita: string,
        repeticao: string,
    ) {
        super(
            imagem,
            prescritor,
            paciente,
            dataRecebimento,
            canalRecebimento,
            atendenteResponsavel,
            observacao,
            varejo,
            medicamentoControlado,
            urgente,
            clienteAlerta,
            possuiReceita,
            naoPossuiReceita,
            repeticao,
        );
        this.imagem = imgreceita;
        this.imagem = imgpdfreceita;
        this.prescritor = prescritor;
        this.paciente = paciente;
        this.dataRecebimento = dataRecebimento;
        this.canalRecebimento = canalRecebimento;
        this.atendenteResponsavel = atendenteResponsavel;
        this.observacao = observacao;
        this.varejo = varejo;
        this.medicamentoControlado = medicamentoControlado;
        this.urgente = urgente;
        this.clienteAlerta = clienteAlerta;
        this.possuiReceita = possuiReceita;
        this.naoPossuiReceita = naoPossuiReceita;
        this.repeticao = repeticao;
    }


    ambiente_selecionado = Cypress.env('enviroment').HOMOLOG_ACESS


    subMenuImportacaoReceita() {
        cy.get(el.importar_receitas)
            .should('be.visible')
            .contains('Importar receitas')
            .click()
        cy.url().should('contain', this.ambiente_selecionado.BASEURL + 'receita/importar');
    }

    acessarTelaRegistroReceita() {
        cy.get(el.abrir_modal_registrar_receita)
            .should('be.visible')
            .and('have.id', 'receita_register')
            .click();
    }

    inserirImagemJpeg() {
        cy.fixture('img/ReceitaJpeg(1).jpeg', 'base64')
            .then((conteudo_arquivo) => {
                const nome = 'ReceitaJpeg(1).jpeg';
                const mimeType = 'image/jpeg';

                const blob = Cypress.Blob.base64StringToBlob(conteudo_arquivo, mimeType);
                const file = new File([blob], nome, { type: mimeType });

                cy.get(el.importar_imagem)
                    .then(($input) => {
                        const event = new Event('change', { bubbles: true });
                        Object.defineProperty($input[0], 'files', {
                            value: [file],
                            writable: false,
                        });
                        $input[0].dispatchEvent(event);
                    });
            });
    }

    inserirImagemPdf() {
        cy.fixture('ReceitaPdf(1).pdf', 'base64')
            .then((conteudo_arquivo) => {
                const nome = 'ReceitaPdf(1).pdf';
                const mimeType = 'image/pdf';

                const blob = Cypress.Blob.base64StringToBlob(conteudo_arquivo, mimeType);
                const file = new File([blob], nome, { type: mimeType });

                cy.get(el.importar_pdf)
                    .then(($input) => {
                        const event = new Event('change', { bubbles: true });
                        Object.defineProperty($input[0], 'files', {
                            value: [file],
                            writable: false,
                        });
                        $input[0].dispatchEvent(event);
                    });
            });

    }

    inserirPrescritor(dados_prescritor: string[]) {
        const dados_aleatorios_prescritor: string = faker.helpers.arrayElement(dados_prescritor);

        cy.get(el.prescritor)
            .should('have.id', 'modalMedicoRec')
            .type(dados_aleatorios_prescritor)
            .then(() => {
                cy.get(el.sugestao_autocomplete)
                    .as('suggestion');
                cy.get('@suggestion')
                    .then(($elemento) => {
                        cy.wrap($elemento)
                            .invoke('attr', 'style', 'display: block')
                            .should('be.visible')
                            .eq(0)
                            .click({ force: true });
                    });
            })
            .contains(dados_aleatorios_prescritor);
    }

    SugestaoRelacaoPrescritorAtendenteCluster(opcao: Opcao) {
        const actions: { [key in Opcao]: () => void } = {
            [Opcao.Cancel]: () => {
                cy.get(el.cancel_relacao_prescritor_atendente)
                    .should('be.visible')
                    .and('have.class', 'btn btn-secondary pull-left')
                    .contains('Cancelar')
                    .click()
            },
            [Opcao.Ok]: () => {
                cy.get(el.ok_relacao_prescritor_atendente)
                    .should('be.visible')
                    .and('have.class', 'btn btn-primary')
                    .contains('OK')
                    .click()
            },
        };

        if (opcao in actions) {
            actions[opcao]();
        } else {
            // Code for invalid or unknown options
            console.log('Invalid option');
            // Other actions related to invalid options
        }
    }

    selecionarParametroBuscaPaciente(elemento: Parametro) {
        const ids: Record<Parametro, string> = {
            [Parametro.Nome]: 't1_154c',
            [Parametro.Cdcli]: 't2_154c',
            [Parametro.Cpf]: 't3_154c',
            [Parametro.TelCel]: 't4_154c',
        };
        const id = ids[elemento];
        cy.get(el.parametro_busca_paciente)
            .should('be.visible')
            .and('have.id', id)
            .check()
            .should('be.checked');
    }

    inserirPaciente(dados_paciente: string[]) {
        const dados_aleatorios_paciente: string = faker.helpers.arrayElement(dados_paciente);

        cy.get(el.paciente)
            .should('be.visible')
            .and('have.id', 'modalPacienteRec')
            .type(dados_aleatorios_paciente)
            .then(() => {
                cy.get(el.sugestoes_autocomplete)
                    .as('suggestions')
                cy.get('@suggestions')
                cy.wait(3000)
                    .find('.autocomplete-suggestion')
                    .contains(dados_aleatorios_paciente)
                    .then(($suggestions) => {
                        cy.wrap($suggestions[0])
                            .scrollIntoView()
                            .click();
                    });
            });
    }

    inserirCanalRecebimento(opcao: CanalRecebimento) {
        const selecionarOpcao = (opcao: CanalRecebimento) => {
            cy.get<HTMLSelectElement>(el.canal_recebimento)
                .should('be.visible')
                .and('have.id', 'modalCanalContato')
                .select(opcao)
                .should('have.value', opcao)
                .find('option:selected')
                .should('be.selected');
        }

        const opcoes: Record<CanalRecebimento, () => void> = {
            [CanalRecebimento.Whatsapp]: () => selecionarOpcao(CanalRecebimento.Whatsapp),
            [CanalRecebimento.Email]: () => selecionarOpcao(CanalRecebimento.Email),
            [CanalRecebimento.InjetaveisWhatsapp]: () => selecionarOpcao(CanalRecebimento.InjetaveisWhatsapp),
            [CanalRecebimento.EasyHealth]: () => selecionarOpcao(CanalRecebimento.EasyHealth),
            [CanalRecebimento.MedX]: () => selecionarOpcao(CanalRecebimento.MedX),
            [CanalRecebimento.Visitacao]: () => selecionarOpcao(CanalRecebimento.Visitacao),
            [CanalRecebimento.BalcaoPessoalmente]: () => selecionarOpcao(CanalRecebimento.BalcaoPessoalmente),
            [CanalRecebimento.WhatsappClinicaPrescritor]: () => selecionarOpcao(CanalRecebimento.WhatsappClinicaPrescritor),
            [CanalRecebimento.EmailClinicaPrescritor]: () => selecionarOpcao(CanalRecebimento.EmailClinicaPrescritor),
            [CanalRecebimento.InjetaveisEmail]: () => selecionarOpcao(CanalRecebimento.InjetaveisEmail),
            [CanalRecebimento.InjetaveisEasyHealth]: () => selecionarOpcao(CanalRecebimento.InjetaveisEasyHealth),
            [CanalRecebimento.Selecione]: () => {
                console.log('Opção selecionada: Selecione');
            },
        };
        opcoes[opcao]();
    }

    inserirDataRecebimento() {
        const data_atual: Date = new Date();
        // Obtém os componentes individuais da data e hora
        const ano: number = data_atual.getFullYear();
        const mes: string = String(data_atual.getMonth() + 1).padStart(2, '0'); // O mês começa em 0, por isso é necessário adicionar 1
        const dia: string = String(data_atual.getDate()).padStart(2, '0');
        const hora: string = String(data_atual.getHours()).padStart(2, '0');
        const minutos: string = String(data_atual.getMinutes()).padStart(2, '0');
        const segundos: string = String(data_atual.getSeconds()).padStart(2, '0');
        // Formata a data e hora no formato desejado
        const DATA_FORMATADA: string = `${ano}-${mes}-${dia}`;
        const HORA_FORMATADA: string = `${hora}:${minutos}:${segundos}`;

        cy.get(el.data_recebimento)
            .should('be.visible')
            .and('have.id', 'modalDataRec')
            .type(`${DATA_FORMATADA}T${HORA_FORMATADA}`);
    }

    inserirCluster(opcao: Cluster) {
        const selecionarCluster = (opcao: Cluster) => {

            cy.get<HTMLSelectElement>(el.cluster)
                .should('be.visible')
                .and('have.id', 'modalCluster')
                .select(opcao)
                .should('have.value', opcao)
                .find('option:selected')
                .should('be.selected');
        };

        const opcoes: Record<Cluster, () => void> = {
            [Cluster.cluster1]: () => selecionarCluster(Cluster.cluster1),
            [Cluster.cluster2]: () => selecionarCluster(Cluster.cluster2),
            [Cluster.cluster3]: () => selecionarCluster(Cluster.cluster3),
            [Cluster.cluster4]: () => selecionarCluster(Cluster.cluster4),
            [Cluster.cluster5]: () => selecionarCluster(Cluster.cluster5),
            [Cluster.cluster6]: () => selecionarCluster(Cluster.cluster6),
            [Cluster.cluster7]: () => selecionarCluster(Cluster.cluster7),
            [Cluster.cluster8]: () => selecionarCluster(Cluster.cluster8),
            [Cluster.cluster12]: () => selecionarCluster(Cluster.cluster12),
            [Cluster.cluster14]: () => selecionarCluster(Cluster.cluster14),
            [Cluster.Selecione]: () => {
                console.log('Opção selecionada: Selecione');
            },
        };
        opcoes[opcao]();
    }


    inserirJuntoCom(orcamento_juntocom: string) {
        cy.get(el.juntocom)
            .should('exist')
            .type(orcamento_juntocom)
            .should('have.value', orcamento_juntocom);
        cy.get(el.autocomplete_juntocom)
            .contains(el.autocomplete_juntocom, orcamento_juntocom)
            .click();
    }

    aguardarEClicarOk() {
        return cy.get('button[data-bb-handler="ok"]', { timeout: 0 })
            .should('be.visible')
            .click();
    }


    selecionarTipoReceita(tipo: TipoReceita) {
        cy.get(el.tipo_receita)
            .should('be.visible')
            .check()
            .should('be.checked');
    }

    ObservacaoInterna(conteudo: number) {
        const texto_aleatorio: string = faker.lorem.paragraph(conteudo);

        cy.get('#modal-receitas > div.modal-dialog > div > div.modal-body > div:nth-child(9) > div > div > div > div > div.note-editable')
            .should('exist')
            .type(texto_aleatorio)
            .should('have.text', texto_aleatorio);
    }

    registrarReceita() {
        cy.get(el.salvar_receita)
            .should('be.visible')
            .click()
    }




    registrarReceitajpegPrescritorPotencialDComRelação() {
        this.ambiente_selecionado = Cypress.env('enviroment').HOMOLOG_ACESS
        cy.visit(this.ambiente_selecionado.BASEURL + 'receita/importar', {
            method: 'GET'
        });

        const receita = new Receita(
            this.imagem,
            this.prescritor,
            this.paciente,
            this.dataRecebimento,
            this.canalRecebimento,
            this.atendenteResponsavel,
            this.observacao,
            this.varejo,
            this.medicamentoControlado,
            this.urgente,
            this.clienteAlerta,
            this.possuiReceita,
            this.naoPossuiReceita,
            this.repeticao
        );

        // receita.menuReceitas()

        // this.subMenuImportacaoReceita()

        this.acessarTelaRegistroReceita()

        this.inserirImagemJpeg()

        const dados_prescritor = ['5032-SC'];
        this.inserirPrescritor(dados_prescritor);

        this.SugestaoRelacaoPrescritorAtendenteCluster(Opcao.Ok)

        this.selecionarParametroBuscaPaciente(Parametro.Cdcli)

        const dados_paciente = ['618484'];
        this.inserirPaciente(dados_paciente);

        this.inserirCanalRecebimento(CanalRecebimento.Whatsapp);

        this.inserirDataRecebimento()

        this.inserirCluster(Cluster.cluster1)

        this.selecionarTipoReceita(TipoReceita.PossuiReceita)

        this.registrarReceita()
    }
}
