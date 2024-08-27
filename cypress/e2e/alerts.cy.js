describe('Alerts', ()=>{

    it ('JS Alert', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();
        
        cy.on('window:alert',(t) =>{
            expect(t).to.contains('I am a JS Alert')
    })
})
})

//Ok and Cancel Buttons
    it.only ('JS Confirm Alert', ()=>{
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:alert',(t) =>{
        expect(t).to.continue('I am JS confirm')
    })
})

// //Authenticated Alert

// it('Authenticated Alert', ()=>{
//     cy.visit('http://admin:admin@the-internet.herokuapp.com/javascript_alerts')
//     cy.get("div[class='example'] h3")
// })
//     })