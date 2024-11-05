let total;
limpar();

function adicionar (){
    //recuperar os valores, produtos escolhido e quantidade
    //calcular o preço por produto
    //adicionar o produto no carrinho
    //atualizar o valor total do carrinho
    
    let quantidade = document.getElementById('quantidade').value;
    if(quantidade > 0 && quantidade <=100){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let preco = quantidade * valorProduto;
    total = total + preco;
    let campoTotal = document.getElementById ('valor-total');
    campoTotal.textContent = `R$${total}`;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
        document.getElementById('quantidade').value = '';
    }else{
        alert ('Verifique a quantidade');
        document.getElementById('quantidade').value = '';
    }
}

function limpar (){
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    campoTotal = document.getElementById ('valor-total').textContent = 'R$0';
}