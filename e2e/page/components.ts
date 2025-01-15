const defaultTimeout: number = Cypress.config('defaultCommandTimeout');

export class ComponentsPage {

    inputText(text: string) {
        return cy.get(`input[placeholder="${text}"]`);
    }

    buttonText(text: string, timeout: number = defaultTimeout) {
        return cy.contains('button', text, {timeout: timeout});
    }

    linkText(text: string) {
        return cy.contains('a', text)
    }

    checkboxText(text: string) {
        return cy.contains('input[type="checkbox"]', text);
    }

    menu() {
        return cy.get('header').find('nav');    //  specifikujeme cestu k menu, abychom omylem nezachytili element na hlavní straně obsahující stejný text
    }

    menuOption(text: string) {
        return this.menu().contains('a', text);
    }

    avatar() {
        return this.menu().find('img[alt="Profil"]');
    }

    userMenu() {
        return cy.get('aside');    //  specifikujeme cestu k menu, abychom omylem nezachytili element na hlavní straně obsahující stejný text
    }

    userMenuOption(text: string) {
        return this.userMenu().contains('a', text);
    }

    video() {
        return cy.get('video');
    }

    videoLoading(timeout: number = defaultTimeout) {
        return cy.contains('Načítám...', {timeout: timeout});
    }

}