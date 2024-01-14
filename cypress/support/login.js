Cypress.Commands.add('login', (user, password)=>{
    cy.fixture('logins').then((login =>{
        cy.get(login.loginLink).click();
        cy.get(login.email).type(user);
        cy.get(login.password).type(password);
        cy.get(login.loginButton).click();
        cy.get(login.incorrectLoginBanner).should('contain', 'Your email or password is incorrect!')
    }))  
    })
