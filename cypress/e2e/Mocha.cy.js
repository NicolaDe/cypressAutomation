before(function(){
    cy.log('----Before the very 1st TC------')
})
beforeEach(function(){
    cy.log('----Before each TC------')
})
afterEach(function(){
    cy.log('----After each TC------')
})
//describe.only('Test Suite 1', ()=>{
describe('Test Suite 1', ()=>{
    it('First Test Case', ()=>{
        cy.log('This is my first test case')
    })
    it('Second Test Case', ()=>{
        cy.log('This is my second test case')
    })
})
describe('Test Suite 2', ()=>{
    it('First Test Case', ()=>{
        cy.log('This is my first test case')
    })
    it('Second Test Case', ()=>{
        cy.log('This is my second test case')
    })
})