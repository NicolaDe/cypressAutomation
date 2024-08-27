class Login{
    txtUsername="input[placeholder='Username']"
    txtPassword="input[placeholder='Password']"
    btnSubmit="button[type='submit']"
    lblmsg='oxs-topbar-header-breadcrumb > .oxd-text'
    forgotpassword='orangehrm-lgin-forgot > .oxd-text'

    setUsername()
    {
        cy.get(this.username).type(username);
        //cy.get("input[placeholder='Username']").type(username);
    }
    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }

    verifyLogin()
    {
        cy.get(this.lblmsg).should('have.text','Dashboard')
    }
    forgotpassword()
    {
        cy.get(this.forgotpassword).click()
    }
}
export default Login;