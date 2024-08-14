import {
    elements as el,
    faker,

} from '../import';


const environment = Cypress.env('ENVIRONMENT');
const dataEnvironment = Cypress.env(environment);


describe('LOG?.', function () {

    beforeEach(function () {

    })

    it('Deve retornar um log', function () {
        cy.log('teste')

        cy.login(dataEnvironment.USER_ADMIN, dataEnvironment.PASSWORD, el.Login.messageErrorLogin, dataEnvironment.BASE_URL)
            .then((result) => {
                assert.exists(result.success, result.error)
            })
    });

})

