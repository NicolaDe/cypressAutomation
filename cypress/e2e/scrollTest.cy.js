describe('ScrollTest', ()=>{
    it('Scroll Test', ()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/')
        cy.scrollTo('bottom')
        //cy.wait(2000)
        //cy.scrollTo("top")
       // cy.scrollTo(500,300)
    })

})