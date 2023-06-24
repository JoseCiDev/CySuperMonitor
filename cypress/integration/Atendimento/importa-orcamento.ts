//console.log(objFromFile);

/// <reference types="cypress" />

//const { is } = require("cypress/types/bluebird");


describe('Carregando orcamentos supermonitor', () => {

    //it é o caso de teste
    //.skip é para pular o teste
    it('Carregando orcamentos', () => {
        //cy.readFile le o local do arquivo
        cy.readFile('./cypress/integration/files/dados.txt', 'utf-8').then((data) => {
            // let linhas declarando a variavel linhas
            //data.split esta concatenando o arquivo
            let linhas = data.split(/\r?\n/);
            linhas.forEach(function (linha, key) {
                let values = linha.split(",");
                let cdfil = values[0].trim();
                let nrorc = values[1].trim();

                //cy.visit acessa o endereco para testes
                cy.visit('http://sm-hkm.local/');
                // cy.get - busca um elemento
                // .type - insere um texto
                cy.get('[class="form-control"][type="text"][name="username"][placeholder="usuário"]').type('');
                cy.get('[class="form-control"][type="password"][name="password"][placeholder="senha"]').type('');
                cy.get('[class="btn btn-primary block full-width m-b"]').click();
                cy.get('.busca-atendimentos > :nth-child(2) > input').click();
                cy.get('#username-link').click();
                cy.get('.dropdown-menu > :nth-child(3) > a').click();
                cy.get(':nth-child(1) > .col-sm-10 > .form-control').type(nrorc)
                cy.get(':nth-child(3) > .col-sm-10 > .form-control').type(cdfil)
                cy.get('.align-content-right > .btn').click();
                
                /*cy.get('.table').then($body =>{
                    if($body.find('td').length === 0){
                        return;
                    }
                })  */
                
                
             
                

                
                
                
            })
        });
    });
});
