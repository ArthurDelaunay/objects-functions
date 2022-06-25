// gestion de l'aléatoire entre min et max inclus
const random = (min, max) => {
    if (max > min){
        const gap = max - min + 1
        return Math.floor(Math.random()*(gap)) + min
    }
    else {
        const memory = min
        min = max
        max = memory
        const gap = max - min + 1
        return Math.floor(Math.random()*(gap)) + min
    }
}

// gestion du nombre de fois on veut un nombre aléatoire
const numberOfTimes = (number, min, max) => {
    for (let i = 0; i < number; i += 1){
        return random(min, max)
    }
}

//
// changer num pour le nombre de lancer que vous voulez
// changer min et max pour changer la plage de votre nombre aléatoire souhaité
const  num = 10
const min = 0
const max = 10
// ne rien toucher en dehors de min, max et num !
//

if (min !== max) {
const result = []
    for (let i = 0; i < num; i += 1){
        result.push(numberOfTimes(num, min, max))
    }
    console.log(`Voici le résultat de vos ${num} nombres aléatoires entre ${min} et ${max} : ${result}`)
}
else {
    console.log(`Veuillez choisir des chiffres différents l'un de l'autre pour votre aléatoire`)
}