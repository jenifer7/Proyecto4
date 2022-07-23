let ul = document.getElementById("container");
let url = 'https://pokeapi.co/api/v2/pokemon/';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

for (let i = 0; i < 6; i++) {
    let pokesR = Math.floor(Math.random() * 248 + 1);

    let allpoke = url + pokesR;
    obtener(allpoke);
    console.log(url + pokesR);
}

function obtener(url) {
    fetch(url)

        .then((resp) => resp.json())

        .then(function (data) {
            let poke = data;
            console.log(poke);

            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = poke.sprites.front_shiny;
            span.innerHTML = `${poke.forms[0].name}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })

        .catch(function (error) {
            console.log(error);
        });
}