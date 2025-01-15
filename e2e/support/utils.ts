export function getTestData(specName: string = Cypress.spec.name)  {    // funkce pro načítání dat
    const testName: string = specName.replace('.spec.ts', '').replace('E','').toLocaleLowerCase();
    const testData: any=[] = require(`../data/${testName}.json`);

    return testData;
}

export function getTranslation() {  // funkce pro načítání jazykových mutací
    // const language: string = Cypress.env('CYPRESS_LANGUAGE');
    // const translation = require(`@/locales/${language}`);

    // if(!translation) {
    //     throw new Error(`Translation not found for language ${language}`);
    // } else {
    //     return translation;
    // }
}

export function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function generateRandomString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}