let ul = document.getElementById("pokemons");
let url = 'https://randomuser.me/api/?results=10';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
fetch(url)

    .then((resp) => resp.json())

    .then(function (data) {
        let poke = data.results;

        return poke.map(function (pokemon) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = pokemon.picture.medium;
            span.innerHTML = `${pokemon.name.first} ${pokemon.name.last}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })

    .catch(function (error) {
        console.log(error);
    });