import './commands';

const resolution = Cypress.env('CYPRESS_RESOLUTION');   // změna rozlišení skrze ENV
const baseUrl = Cypress.env('CYPRESS_URL');   // změna prostředí skrze ENV

before(() => {
    if(resolution) cy.viewport(resolution);
    if(baseUrl) Cypress.config('baseUrl', baseUrl);
});

Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('crossorigin')) {  // výjimka kvůli problému s crossorigin script error v aplikaci
        return false;
    }
    return true;
});