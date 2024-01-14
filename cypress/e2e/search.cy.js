describe('Search elements',()=>{
    beforeEach(()=>{
        cy.visit('products');
    })
    it('Search for elements with multiple results', ()=>{
        cy.search('dress')
    }) 
    it('Search for elements with no results', ()=>{
        cy.search('qwerty')
    }) 
})