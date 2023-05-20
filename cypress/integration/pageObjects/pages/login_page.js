class loginPage {
	static visitLoginPage() {
       // cy.visit('/');
		cy.visit(baseUrl);
        // cy.get('a[title="Log in with kube:admin"]').click()
        //cy.url().should('include', 'login');
	}

	static fillUsername(username) {
		cy.get('#UserEmail').type(username);
	}

	static fillPassword(password) {
		cy.get('#UserPassword').type(password);
	}

	static submitLoginDetails() {
		cy.get('[type="submit"]').click();
		cy.wait(4000)
	}

	static checkLoginSuccess() {
		cy.get('[contain.text="Welcome to Arthur!"]').should('be.visible');
		//cy.contains('Welcome to Arthur!').should('be.visible');
		
		//cy.get('h1').should('contain.text', "Welcome to Arthur!");
		//h1[contains(text(),'Welcome to Arthur!')]
		//h1[normalize-space()='Welcome to Arthur!']

	}

	// static checkErrorMessage(error_message) {
	// 	cy.get('div.error-placeholder').should('contain.text', error_message);
	// }

	static loginWithValidCredentials(username, password) {
		cy.visit('/');
        cy.url().should('include', 'login')
		cy.get('#UserEmail').type(username);
		cy.get('#UserPassword').type(password);
		cy.get('[type="submit"]').click();
		cy.wait(4000)
	}
}

export default loginPage