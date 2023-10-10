// initialisation des variables
let placeholder = document.getElementById("tableau");
let id = 0;

// fonction pour afficher une blague
function afficher_blague() {
    // url de l'api
    const url = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart";

    // lancement de la requête et récupération de la réponse
    fetch( url )
    .then(function(response){
        console.log(response);
       return response.json();
    }
    )
    .then(
    data => {
        console.log(data);
        // création d'une nouvelle ligne du tableau
        let txt = `
            <tr id="ligne_${id}">
                <th scope="col">${data.setup}</th>
                <th scope="col">${data.delivery}</th>
                <th scope="col"><button onclick="Supprimer_un('ligne_${id}')" class="btn btn-danger">Delete</button></th>
            </tr>`;
        // affiche le tableau
        placeholder.innerHTML = txt + placeholder.innerHTML;
        id += 1;
    })
}
// supprime toutes les lignes du tableau
function Supprimer_tous(){
    placeholder.innerHTML = "";
}

// supprime une seule ligne spécifique
function Supprimer_un(ligne){
    document.getElementById(ligne).remove();

}
