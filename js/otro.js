let ul = document.getElementById("pokemons");
//let url = 'https://pokeapi.co/api/v2/pokemon/7/';
let url = 'https://pokeapi.co/api/v2/pokemon/?limit=6';

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

        //return poke.map(function (pokemon) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = poke.sprites.back_shiny;
            span.innerHTML = `${poke.forms[0].name}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    //})

    .catch(function (error) {
        console.log(error);
    });