/// <reference types="cypress" />
const { faker } = require("@faker-js/faker");

context(' - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/minha-conta/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.login(
            'pedro01teste@teste.com', 
            'teste@123')
        cy.get('.page-title').should('exist')

        cy.procurarProduto1('')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.procurarProduto2('')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.procurarProduto3('')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.procurarProduto4('')
        cy.get('.actions > .clearfix > .pull-right').should('exist')
        cy.get('.checkout-button').click()

        cy.adicionarDados(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.location.streetAddress(),
            faker.location.secondaryAddress(),
            faker.location.city(),
            '13221510',
            '11954739281'
        )
        cy.get('#place_order').click()
        cy.wait(5000)
        cy.get('.woocommerce-order-details__title').should('exist')

    });

});
