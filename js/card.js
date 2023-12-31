export class Card{

    criarCard = (imagemDoCard, tituloCard, textoCard, section, funcao) =>{
 
        const div = document.createElement('div');
        div.className = 'divCard';
        const imagem = document.createElement('img');
        imagem.src = imagemDoCard;
        const titulo = document.createElement('h2');
        titulo.innerText = tituloCard;
        const texto = document.createElement('p');
        texto.innerText = textoCard;

        const btn = document.createElement('button')
        btn.innerText = 'Marcar como favorito';
        btn.onclick = funcao;


        div.appendChild(imagem);
        div.appendChild(titulo);
        div.appendChild(texto);
        div.appendChild(btn);

        produtos.appendChild(div);

    }
}
