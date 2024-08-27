describe('Automation using Cypress || Fixtures', () => {


    let data //Initialized the variable data

    before(()=>{
        //Open the website
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
        cy.fixture('login').then((value) =>{
            data=value
        })
    })

    //Start the test case
    it('Login into the application using fixture data', ()=>{

        cy.get('input[name="email"]').type(data.email) //Enter the email
        cy.get('input[name="password"]').type(data.password) //Enter the password
        cy.get('input[type="submit"]').click(); //Click submit
    })
    //End the test case


}

)