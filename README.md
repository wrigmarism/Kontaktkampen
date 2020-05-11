# Kontaktkampen
En tipspromenad med frågor om företagen som ställer ut under Kontaktdagarna 2020. 
Som användare ska man kunna logga in och se vilka företag som ställer ut, svara på frågor om företagem, och på så vis vara med och tävla om olika priser (ex den som först svarat på alla frågor).

KRAVSPECIFIKATION

Funktionella krav:
* Logga in / registrera användare
* Se lista med företag
* Se info om enskilda företag och kunna svara på företagsfråga
(* Adminsida för att lägga till/ta bort/redigera företag och ev användare)
(* Se eventuella kontaktsamtal)

Icke-funktionella krav:
* Logga in via Mina sidor-API:n

Databas:
* company(cid, name, code, img) - id-nummer, företagsnamn, kod för att låsa upp fråga, adress till logga
* lock(uid, cid) - användar-id, företags-id (korstabell för upplåsta frågor)
* trophy(uid, cid, timestamp) - användar-id, företags-id, tidsstämpel för att kunna veta vem som svarat först (korstabell för rätta svar)
* user(uid, name, mail, pwd, salt) - användar-id, namn, email-adress, lösenord, salt
