describe('Login Suite', () => {

   it('RS 1st TestCase', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.get('.product:visible').should('have.length', 4)
      cy.get('.products').as('prd')
      cy.get('@prd').find('.product').should('have.length', 4)

//       //parent child chaining
//       cy.get('@prd').find('.product').eq(3).contains('ADD TO CART').click()
//       cy.log('Add to Cart button was clicked successfully')

//       //javascript loop - grap all elements and save in $el
//       cy.get('@prd').find('.product').each(($el, index, $list) => {  //$el contains 4 products with 'ca'
//          const textveg = $el.find('.product_name').text() 
//          cy.log(textveg)
//          //console.log(textveg)
//          if (textveg.includes('Peas')) {
//             cy.wrap($el).find('button').click()
//          }
//       })

//       cy.get('.brand.greenLogo').should('have.text', 'GREENKART')
//       cy.get('.brand').then(function (logo) {
//          cy.log(logo.text())
//       })
//    })

// })


//   it('RS 2nd TestCase', ()=>{
//    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
//    cy.get('.search-keyword').type('br')
//    cy.get('.product:visible').should('have.length',2)
//    cy.get('.products').as('prd')
//    cy.get('@prd').find('.product').should('have.length',2)
// })


      //Parent child chaining
      cy.get('@prd').find('.product').eq(1).contains('add to CarT', {matchCase: false}).click()
      //cy.log('Add to Cart button was clicked successfully')
       cy.get('@prd').find('.product').each(($el,index,$list) => {
        const textveg=$el.find('.product-name').text() // textveg contains  Cauliflower - 1kg
        cy.log(textveg)
        if(textveg.includes('Carrot'))     
        {
           cy.wrap($el).find('button').click() 
        }
        })
      cy.get('.brand.greenLogo').should('have.text','GREENKART') 
          
       cy.get('.brand').then(function(logo)
       {
        cy.log(logo.text())
       }) 
       })
   })