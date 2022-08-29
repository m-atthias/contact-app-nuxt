# contact-app

## Introduction
A contact app build in Nuxt (Vue.js) as part of the case for the Consumentenbond.

This project uses TailwindCSS for the UI and is connected to an external database.

The app should work from mobile viewports up to modern desktop viewports.

<a href="https://nuxt-contact-app.herokuapp.com/" target="_blank">Visit the app here</a>

## Tier specification

### Tier 1
- [x] Ik verwacht een header met logo, titel, en een inleidende tekst. 
- [x] Ik verwacht op de pagina een contact-naam te kunnen toevoegen.
- [x] ik verwacht in een aparte lijst het contact terug kunnen vinden en deze te kunnen verwijderen.

### Tier 2
- [x] Ik verwacht dat ik de lijst met contacten op een andere pagina/view te kunnen inzien
- [x] Ik verwacht dat de app via NuxtJS geserveerd kan worden
- [x] Ik verwacht dat ik de app via npm/nodejs kan starten.

### Tier
- [x] Ik verwacht dat een gebruiker 2 type contacten aan kan maken
- [x] Ik verwacht dat ik de contacten samen in een lijst terug vinden op volgorde dat de contacten ingevoerd zijn.
- [x] Ik verwachte e2e tests
- [x] Ik verwacht dat de data persistent wordt opgeslagen.

### Tier 4
- [x] Ik verwacht deze app online werkend te kunnen vinden
- [] Ik verwacht Filters om de contacten te filteren
- [] Ik verwacht een integratie met Docker
- [x] Ik verwacht dat de data 'persistent' opgeslagen wordt in een externe database
- [x] Ik verwacht het project in een git repository
- [] Ik verwacht een TDD werkwijze met tests
- [x] Ik verwacht een extraatje die ons omver 
blaast.
    - Vertalingen van de applicatie
## Noteworthy Dependencies
- Prisma - ORM
- Express - For the API middleware
- Multer - Since Express can't work with multiform parts when sending data, Multer will jump in and make this possible as a middleware
- FontAwesome - Icons
- Cypress - Test framework for E2E
- NuxtI18n - translations

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```