/// <reference types="cypress" />

import { elements as el } from '../../../elements';
import { faker } from '@faker-js/faker';
import { dataParameters } from '../../../DataParameters/dataParameters';


const environment = Cypress.env('ENVIRONMENT');
const dataEnvironment = Cypress.env(environment);


export const {
    settingsMenu,
    subMenuClustersGroups,
    relations,
    containerFilters,
    containerProfile,
    searchFilters,
    search,
    manageRelationship,
    selectCluster,
    containerSelectPrescriber,
    selectPrescriber,
    addAttendantClusterPrescriberRelationship,
    containerMessageRelationship,
    createdRelationshipAttendant,
    prescriberRelationshipCreated,
    removeSelectedRelationship,
    SearchPrescriberManageRelationship,
    searchPrescriberRelationshipManage,
    selectPrescriberFound,
} = el.Settings;



describe('Tela configuração de relações entre Atendentes, Clusters e Prescritores.', function () {

    beforeEach(function () {

    })

    it('Deve criar relações entre atendente selecionada, cluster e prescriber', function () {
        cy.login(dataEnvironment.USER_ADMIN, dataEnvironment.PASSWORD, el.Login.messageErrorLogin,dataEnvironment.BASE_URL_PRODUCTION)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
        cy.configureRelationshipAtendenteClusterPrescriber('json/relationshipAtendantAlexssandraCluster4Prescribers.json');
    })
})
