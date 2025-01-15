
# Cypress e2e demonstration
## Spuštění
1. git clone https://github.com/orajov/iprima-cypress-e2e.git
2. Nastavení ENV ve vašem zařízení či cypress.config.ts; **CYPRESS_PASSWORD** = Silneheslo123
3. npm install
4. npm run test:e2e
### Nepovinné ENV
**CYPRESS_HOST**: string (url) - změna prostředí pomocí nastavení jiné url

**CYPRESS_RESOLUTION**: string (ipad-2,ipad-mini,iphone-3,iphone-4,iphone-5,iphone-6,iphone-6+,iphone-7,iphone-8,iphone-x,iphone-xr,iphone-se2,macbook-11,macbook-13,macbook-15,macbook-16,samsung-note9,samsung-s10)

**CYPRESS_LANGUAGE**: string (cs,en,es,pl) - v případě dodání locales můžeme nastavovat jazyk, nejsou však součástí projektu

## Vysvětlení
- Report testování se mimo konzoli vygeneruje ve složce e2e/report/video ve formě videa a e2e/report/screenshoots ve formě snímku v případě pádu testu.
- Záměrně byly ponechány i prázdné soubory a nevyužité funkce pro představu struktury projektu, kdybychom pracovali s daty, jejich interface a jazykovými mutacemi.
- Identifikátory byly použity pro vyhledávání textu v komponentě. Jedná se o řešení pro práci s jazykovými mutacemi, kdy pomocí pomocí funkce getTranslation načteme do pole locales a poté doplňujeme jednotlivé texty do funkcí. Výhodou je také univerzální použití identifikátorů a krátší kód. Pokud nevyužijeme toto řešení, používáme standardní best practise (data-test, id).
- Komentáře byly cíleně napsané podrobně vysvětlujícím způsobem pro zadavatele úkolu.
