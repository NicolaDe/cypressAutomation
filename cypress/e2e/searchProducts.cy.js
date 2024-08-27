describe('Clothes Search', () => {

    //     it('Zara 1st TestCase', ()=>{
    //         cy.visit('https://www.zara.com/ie/en/search')
    //         cy.get('.search-products-form__input').type('jumpsuit')
    //         cy.get('.product:visible').should('have.length',52)
    //         //Timed out retrying after 4000ms: cy.type() failed because this element: is being covered by another element:
    // })

    // it('Dunnes 1st TestCase', ()=>{
    //     cy.visit('https://www.dunnesstores.com/')
    //     //no class tag for searchbar
    //     //The response we received from your web server was:403: Forbidden
    //     cy.get('#keywords').type('dress')
    //     cy.get('.product:visible').should('have.length',110)

    // })

    describe('Log in', () => {
        it('open log in page', () => {
            cy.visit('https://ds.wellnessliving.com/')
            cy.get('.css-menu-hamburger-icon').click()
            cy.get('.css-btn-sign-in-icon').click()
            cy.get('#template-passport-login').type('joli@qa.com')
        })
    })


})

