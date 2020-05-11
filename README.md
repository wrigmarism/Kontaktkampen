# Kontaktkampen
En tipspromenad med frågor om företagen som ställer ut under Kontaktdagarna 2020. Som användare 

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
* trophy(uid, cid) - användar-id, företags-id (korstabell för rätta svar)
* user(uid, name, mail, pwd, salt) - användar-id, namn, email-adress, lösenord, salt
