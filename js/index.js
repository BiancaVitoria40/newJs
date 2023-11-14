import { Card } from "./card.js";
import { NavBar } from "./navBar.js";

const navBar = new NavBar();
const card = new Card();
navBar.crianavBar();
//card.criarCard();

const produto = [
    {
        nome: 'Pizza de queijo',
        texto: 'É uma deliciosa pizza',
        imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/ada34cd2101afafaba465aad112ee3c1_XL.jpg'
    },
    {
        nome: 'Pizza de frango com catupiry',
        texto: 'É uma pizza muito boa também',
        imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/ada34cd2101afafaba465aad112ee3c1_XL.jpg'
    }
]

const favoritos = [];

const section = document.createElement('section');

produto.forEach(produto => {
    card.criarCard(produto.imagem, produto.nome, produto.texto, section, ()=> addFavoritos(produto));
})

root.appendChild(section)

const addFavoritos = produto =>{
    produto.push(produto);
    divModal.innerText = favoritos.map(favorite => favorite.nome);
    console.log(produto);

}

