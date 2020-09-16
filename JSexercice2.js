let user = {
    name: 'Axel',
    description: 'BLA BLA BLA',
    budget: 5,
}

function budget(user) {
    if (user.budget == undefined || user.budget == null) {
        user.description = 'Tu as oublié ton porte feuille'
    }
    else if (user.budget <= 0 && user.budget <= 5) {
        user.description = 'Il fallait travailler cet été'
    }
    else if(user.budget==5){
        user.description ='Tu as le droit à une bière'
    }
    else
    user.description ='Tu peux payer ta tournée'
}

budget(user)

console.log('Bravo, ', user.name, user.description, ' Voici le rappel de ton budget : ', user.budget)