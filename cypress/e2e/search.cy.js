describe('Search elements',()=>{
    beforeEach(()=>{
        cy.visit('products');
    })
    it('Search for elements with multiple results', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        })
    }) 
    it('Search for elements with no results', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();
        })
    }) 
})