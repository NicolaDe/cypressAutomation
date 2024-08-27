describe('upload File', () => {
    it('Test upload', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/upload-file-demo')
        cy.get('#file').selectFile('test.doc.docx')
        //cy.get().should('contain', ''
    })

})