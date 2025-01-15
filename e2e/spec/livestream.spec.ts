import { LivestreamModel } from "../models/livestream.model";
import { ComponentsPage } from "../page/components";
import { getTestData, getTranslation } from "../support/utils";

describe('User log in and checks out that livestream is working', () => {

    beforeEach( () => {
        cy.login();
    });

    const componentsPage = new ComponentsPage();    // načtení třídy s lokátory
    const data: LivestreamModel = getTestData();    // případně načtení dat
    const text = getTranslation();  // případně načtení jazykovách mutací

    it('Check that livestream is working', () => {
        cy.selectMenu('Živě');  // v menu zvolíme přepneme na živé vysílání

        componentsPage.videoLoading().should('exist');  // čekání na načítání přehrávače
        componentsPage.videoLoading(30000).should('not.exist'); // čekání na zmizení načítání přehrávače
        cy.wait(1000);  // necháme video sekundu přehrávat
        componentsPage.video().then( (video) => {
            expect(video[0].paused).to.be.false;    // zkontrolujeme, že video není stopnuté
            expect(video[0].currentTime).to.be.greaterThan(0);  // zkontrolujeme, že video běží
        });
    });

    afterEach( () => {
        cy.logout();
    });
});