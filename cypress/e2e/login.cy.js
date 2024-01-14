describe('login',()=>{
    beforeEach(()=>{
        cy.visit('products');
    })
    it('Login with incorrect email',()=>{
        cy.login('mimail@mail.com','contraseña')
        cy.fixture('logins').then((login =>{
            cy.get(login.incorrectLoginBanner).should('contain', 'Your email or password is incorrect!')
        }))     
    })
})