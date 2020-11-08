# Kontaktkampen
En tipspromenad med frågor om företagen som ställer ut under Kontaktdagarna 2020. 
Som användare ska man kunna logga in och se vilka företag som ställer ut, svara på frågor om företagen, och på så vis vara med och tävla om olika priser (ex den som först svarat på alla frågor).

KRAVSPECIFIKATION

Funktionella krav:
* Logga in / registrera användare
* Se lista med företag
* Se info om enskilda företag och kunna svara på företagsfråga
* (Adminsida för att lägga till/ta bort/redigera företag och ev användare)
* (Se eventuella kontaktsamtal)

Icke-funktionella krav:
* Logga in via Mina sidor-API:n

Databas:
* user(uid, name, mail, pwd, salt) - användar-id, namn, email-adress, lösenord, salt
* company(cid, name, code, img, question, {alternativa svar}, correctAnswer) - id-nummer, företagsnamn, låskod, företagsfråga, de olika alternativen, korrekta svaret som kan jämföras med
* lock(uid, cid) - användar-id, företags-id (korstabell för upplåsta frågor)
* trophy(uid, cid, time) - användar-id, företags-id, tidsstämpel för att kunna veta vem som svarat först (korstabell för rätta svar)



SAKER VI BEHÖVER INNAN LANSERING
* Saker de måste ge oss
- Företags namn, bilder, frågor mm.

* Funktioner som vi behöver veta:
- mängden frågor
- infosida (startsidan? med info om tävlingen)
- Vill de ha loggor?
- Ska det gå att ändra svar på frågorna? (ja/nej/kanske?)
- Ska frågorna låsas upp eller vara upplåsta?
- Ska sidan vara datoranpassad pga nytt upplägg?
