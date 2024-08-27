describe('Table', ()=>{
  it('Table', ()=>{
    cy.visit('https://testautomationpractice.blogspot.com/')

    //Check value anywhere in table
    cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')
    //Check value in specific row and column
    cy.get('table[name=BookTable] > tbody > tr:nth-child(2)> td:nth-child(3)').contains('Selenium').should('be.visible')
    /// Check the header at position 3
    cy.get('table[name=BookTable] > tbody > tr:nth-child(1)> th:nth-child(3)').contains('Subject').should('be.visible')
    //Check 'Amod' is in Author column and 'Master in Java' is Bookname
    cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($e,index)=>{
        const text = $e.text()
        if(text.includes('Amod'))
        {
            cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index).then(function(bname)
            {
                const bookname=bname.text()
                expect(bookname).to.equal("Master In Java")

            })
        }})
})
})
