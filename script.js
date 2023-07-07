fetch('copypastas.json')
    .then(response => console.log(response.json()))
    .then(data => {

        console.log("ici" + data);

        data.elements.forEach(element => {
            console.log(element);

            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h2>${element.titre}</h2>
                <p>${element.mini_description}</p>
                <button>Copier le CP complet</button>
            `;
            document.getElementById('card-container').appendChild(card);

            let button = card.querySelector('button');
            button.addEventListener('click', () => {
                let cp = element.mini_description;
                navigator.clipboard.writeText(cp);
            })
        });

    })
    .catch(error => {
        console.log('Une erreur s\'est produite lors du chargement du fichier JSON :', error);
    })