# Velkommen til jubileumskurs

# Getting started

Vi skal lage en applikasjonen som holder styr på enkeltinvidets ølsamling. (untapped (https://untappd.com/))
En bruker skal kunne legge inn nye øl, samt se en oversikt over øl som er lagt inn.

##  Setup


##  Steg 1: Legge inn en ny øl
Her skal dere lage et view som lar brukeren legge inn øl med navn, type, land, produsent og prosent.

a) __Øl-snitt__: Naviger frem til `NewBrew`. Her skal dere legge til felt for hvert ølattributt (navn, type etc)
i render funksjonen. I tillegg skal dere ha en lagre knapp som skal legge til øl i ølsamlinga.

Note: For land har vi laget det ferdige komponentet "CountrySelect". Bruk `Touchable` for knapper i React Native.

b) __Oppdater ølsamlinga__: Lagre-knappen gjør nå ingenting, I `NewBrewComponent` får vi inn en funksjon `setNewBrew` i props som gjør at vi kan oppdatere ølsamlinga vår.
Sørg for at ølknappen kaller `setNewBrew` funksjonen med ølattributene.

*Noe kult med android navigation bar

## Steg 2: Ølsamling

Steg 2: Se øloversikt
Steg 3: Navigere mellom oversikt og skjema
Steg 4: Ta bilde(?) av øl
