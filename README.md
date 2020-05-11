# Kontaktkampen
En tipspromenad med frågor om företagen som ställer ut under Kontaktdagarna 2020. 
Som användare ska man kunna logga in och se vilka företag som ställer ut, svara på frågor om företagen, och på så vis vara med och tävla om olika priser (ex den som först svarat på alla frågor).

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
* user(uid, name, mail, pwd, salt) - användar-id, namn, email-adress, lösenord, salt
* company(cid, name, code, img) - id-nummer, företagsnamn, kod för att låsa upp fråga, adress till logga
* question(qid, cid, qst, corr, ans1, ans2, ans3) - fråge-id, företags-id, fråga, rätt svar, tre alternativ)
* lock(uid, cid) - användar-id, företags-id (korstabell för upplåsta frågor)
* trophy(uid, cid, timestamp) - användar-id, företags-id, tidsstämpel för att kunna veta vem som svarat först (korstabell för rätta svar)

