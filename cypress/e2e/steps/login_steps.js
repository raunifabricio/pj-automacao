/// <reference types="Cypress" />
import LoginPage from "../pages/login_page";
const loginPage = new LoginPage()

Given(/^eu acesse a pagina home da aplicacao$/, () => {
	loginPage.accessHomePage()
});

When(/^eu inserir meu email "([^"]*)" e minha "([^"]*)"$/, (email, password) => {
	console.log(email,password);

	loginPage.accessLoginPage()

	loginPage.fillLoginInfo(email, password)
	
});

And(/^clicar no botao entrar$/, () => {
	loginPage.submitLogin()
});

Then(/^tenho meu acesso "([^"]*)"$/, (message) => {
	console.log(message);
	cy.contains('Dashboard')
});


