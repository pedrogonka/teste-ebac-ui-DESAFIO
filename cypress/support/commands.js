Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('procurarProduto1', () => {
    cy.visit('/produtos/')
    cy.get('.image-hover').eq(5).click()
    cy.get('.button-variable-item-32').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('procurarProduto2', () => {
    cy.visit('/produtos/')
    cy.get('.image-hover').eq(2).click()
    cy.get('.button-variable-item-32').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('procurarProduto3', () => {
    cy.visit('/produtos/')
    cy.get('.image-hover').eq(3).click()
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('procurarProduto4', () => {
    cy.visit('/produtos/')
    cy.get('.image-hover').eq(6).click()
    cy.get('.button-variable-item-XL').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
})

Cypress.Commands.add('adicionarDados', (nome, sobrenome, endereço, numero, cidade, cep, celular) => {
    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#billing_address_1').clear().type(endereço)
    cy.get('#billing_address_2').clear().type(numero)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').clear().type(celular)
    cy.get('#terms').click()
})





