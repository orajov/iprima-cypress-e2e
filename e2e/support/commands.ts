import { ComponentsPage } from "../page/components";

declare global {
  namespace Cypress {
    interface Chainable {

      login(username?: string, password?: string, profile?: string): void

      logout(): void

      selectMenu(option: string): void

      waitForResponse(url: string, timeout?: number): void
    }
  }
}

export{};

const componentsPage = new ComponentsPage();

Cypress.Commands.add('login', (username: string = 'thatswhatudobaby@gmail.com', password: string = Cypress.env('CYPRESS_PASSWORD'), profile: string = 'testak') => {
  cy.visit('/');
  componentsPage.buttonText('Rozumím a přijímám').click();
  cy.selectMenu('Přihlášení');

  componentsPage.inputText('E-mail').type(username);
  componentsPage.inputText('Heslo').type(password);
  componentsPage.buttonText('Přihlásit se').click();

  cy.waitForResponse('https://auth.iprima.cz/oauth2/authorize?*');

  componentsPage.buttonText(profile, 20000).should('be.visible').click();
  componentsPage.avatar().should('be.visible');
  cy.url().should('eq', Cypress.config('baseUrl'));
});

Cypress.Commands.add('logout', () => {
  componentsPage.avatar().should('be.visible').click();
  componentsPage.userMenuOption('Odhlásit se').click();
  componentsPage.avatar().should('not.be.visible');
});

Cypress.Commands.add('selectMenu', (option: string) => {
  cy.url().then( (url) => {
    componentsPage.menuOption(option).click();
    cy.url().should('not.eq', url);
  });
});

Cypress.Commands.add('waitForResponse', (url: string, timeout: number = 10000) => {
  cy.intercept(url).as('response').then( () => {
      cy.log('Waiting for response ' + url);
      cy.wait('@response', {timeout: timeout});
  });
});

