Obligatory assignment 3 in Web Applications at OsloMet.

Web application done in React and .NET Core 2.1. Is supposed to be the FAQ page for MovieTime and MovieTime2.

Har valgt å gjøre oppgaven i React WebApi.

For å kjøre løsningen er det viktig å ha installert node.js og core 2.1 (hadde ikke tilgang på Core 2.0) på pcen. 
Har testet på en annen pc med ny installasjon av Visual Studio og dette var det jeg måtte gjøre:
	1. Installere Node.js
	2. Løsning kjører i Core 2.1, så dette måtte være installert. Dette var allerede OK. 
	3. Åpne prosjektet i Visual Studio
	4. Gå til Tools > NuGet Packet Manager > Package Manager Console
	5. I konsollvinduet skrive "Update-Database" for å lage ny lokal DB fra migrasjon/init
	6. Da skal prosjektet kjøres med FAQs fra databasen og en tom Spørsmåls-tabell

Har valgt å ikke lage noe søke-funksjon til siden da jeg ikke synes dette passer inn.
Hadde oppgaven vært å implementere en komplett Customer Support Modul med kategorier, funksjonalitet for mange spørsmål og svar ville jeg gjort det.
Men siden oppgaven er å lage FAQ burde det bare inneholde de viktigste spørsmålene kundene kan ha, og ikke en stor tung side.
