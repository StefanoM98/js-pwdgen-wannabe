// CREIAMO UNA PASSWORD SUPER SICURA

// CHIEDERE IL NOME ALL'UTENTE
const nameuser = prompt ("Qual è il tuo nome?")
console.log(nameuser);

// CHIEDIMO IL COGNOME AL'UTENTE
const surnameuser = prompt ("Qual è il tuo cognome?")
console.log(surnameuser);

// CHIEDIAMO ALL'UTENTE IL SUO COLORE PREFERITO
const favoritecolor = prompt ("Qual è il tuo colore preferito?")
console.log(favoritecolor);

// STAMPIAMO LA PASSWORD SUPER SICURA
const password = `La tua password super sicura è ${nameuser + surnameuser + favoritecolor + 21}`
console.log(password)