$(document).on('click', '#registrar', function(e) {
    e.preventDefault;
    let attrNames = [];
    let records = [];
    let tableName;
    
    let n = $('#tabela tr').length - 1;
    tableName = document.getElementById('nome-tabela').innerText;

    if(n != 0 && tableName != '') { 
        let i;
        for(i = 0; i < n; i++) {
            let attr = document.getElementById('nome-atributo-' + i).innerText;
            let record = document.getElementById('valor-atributo-' + i).innerText;
            attrNames.push(attr);
            records.push(record);
        }

        let texto = document.getElementById('nome-tabela');
        texto.style.visibility = 'hidden';
        $('.linhas').remove();
        document.getElementById('nome-tabela').innerText='TABELA';
        document.getElementById('tabela-input').value='';
        $('#tabela-input').prop('disabled', false);
        $('#add-tabela').attr('value', 'Adicionar');
    }
    else {
        alert("Todos os campos devem ser preenchidos.")
    }

    App.injectData(tableName, n, attrNames, records);
});

$(document).on('click', '#consultar', function(e) {
    e.preventDefault;
    const tableName = $('#tabela-pesquisa').val();
    App.retrieveData(tableName)
    .then((obj) => {
        $('.conteudo-consulta').empty()

        for(let i = 0; i < obj["tableSize"]; i++){
            $('#tabela-consulta').append(
                `
                <tr class="conteudo-consulta" id=${id_linha} class="linhas">
                <td class="conteudo-consulta">${obj["data"][i][0]}</td>
                <td class="conteudo-consulta">${obj["data"][i][1]}</td>
                </tr>
                `
            )
        }
    })
});