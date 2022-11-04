function buscarProdutos(page) {
    let limit = select_limit.value;
    tabela_produtos.innerHTML = '';

    fetch(`http://localhost:3000/produtos?limit=${limit}&page=${page}`)
    .then(res => res.json())
    .then(dados => {
        dados.map(cadaProd => {
            tabela_produtos.innerHTML += `
            <tr>
                <td>${cadaProd.id}</td>
                <td>${cadaProd.nome}</td>
                <td>${cadaProd.categoria}</td>
                <td>${cadaProd.valor}</td>
                <td>${cadaProd.tamanho}</td>
            </tr>
            `
        })
    })
}

buscarProdutos(0);




