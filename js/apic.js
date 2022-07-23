let ul = document.getElementById("pokemons");
let url = 'https://pokeapi.co/api/v2/pokemon?limit=8';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
fetch(url)

    .then((resp) => resp.json())

    .then(function (data) {
        let poke = data;
        console.log(poke);

        return poke.map(function (pokemon) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = pokemon.sprites.back_shiny;
            span.innerHTML = `${pokemon.name}`;
            append(li, img);
            append(li, span);
            append(ul, li);
            console.log(pokemon);
        })
    })

    .catch(function (error) {
        console.log(error);
    });