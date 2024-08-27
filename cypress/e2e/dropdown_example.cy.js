describe('Country Dropdown', () => {

    it('Should select Ireland from the Dropdown', () => {
        cy.visit('https://www.orangehrm.com/en/30-day-free-trial')
        cy.get('#Form_getForm_Country').select('Ireland', { force: true }).should('have.value', 'Ireland')
    })


    it('Should type Iraq in Dropdown', () => {
        cy.visit('http://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Iraq').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Iraq')
    })

    it('Should find Delhi University from Wiki', () => {
        cy.visit('http://www.wikipedia.org')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('University').click()
    })


    it.only('Dynamic Dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('.inputs ui-autocomplete-input').type('united states')
        cy.get('#autocomplete').type('us')
        cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {

            if ($el.text() == 'Cyprus') {
                $el.trigger('click')
            }
        })

        cy.get('#autocomplete').should('have.value', 'Cyprus')

    })
})
