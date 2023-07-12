let dataToShow = 10 // Le nombre de tweets à afficher
let dataShowed = Object.values(bsd_tweets).slice(0, dataToShow) // Renvoie les 10 premiers tweets uniquement

let div = document.querySelector('.feed');

// Je fais Object.values parce que dans l'exemple de données que tu m'a envoyé on a affaire à un objet et pas un array, 
// mais du coup c'est la meilleure manière d'avoir toutes les valeures en tant qu'array
Object.values(dataShowed).forEach((tweet) => {
    addTweet(tweet);
});


// On a donc ici un code qui affiche les 10 premiers tweets uniquement

div.addEventListener("scroll", (event) => {
    // Lorsqu'on scroll, on check si on est tout en bas de la div:

    if (div.scrollTop >= (div.scrollHeight - div.offsetHeight - 50)) {
        // On récupère +10 tweets
        // e.g: Si on a récupéré 0 à 10, on récupère 11 à 20
        let newDataShowed = Object.values(bsd_tweets).slice(dataToShow, Math.min(dataToShow + 10, Object.keys(bsd_tweets).length));
        dataToShow += 10; // Mise à jour du nb de tweets affichés
        Object.values(newDataShowed).forEach((tweet) => {
            addTweet(tweet);
        })
    }
})

function addTweet(tweet) {
    const newTweet = document.createElement('div');
    newTweet.classList.add("tweet");
    newTweet.classList.add(tweet.type);

    newTweet.innerHTML += "<div class='username'><img src=\"profile/1357647179758923783-_oG11zmX.png\" width = \"100%\" class=\"pfp\"><span class=\"username_span\">Bungo Stray Dogs Daily Facts ✨<br><span class=\"at\">@BsdDailyFacts</span></span></div>"
    /*const newTweetContent = document.createTextNode(tweet.description);*/

    const  newTweetContent = document.createElement("div");
    newTweetContent.id = 'tweet';
    newTweetContent.innerHTML = tweet.description;
    document.body.appendChild(newTweetContent);


    const newTweetDate = document.createTextNode(tweet.date);
    newTweet.appendChild(newTweetContent);

    newTweet.innerHTML += tweet.media;
    newTweet.innerHTML += "<br>";
    newTweet.innerHTML += "<span class = \"date_time\">"+ tweet.date + "</span>";

    div.appendChild(newTweet);
}