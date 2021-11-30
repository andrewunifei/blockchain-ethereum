$(document).on('click', '#registrar', function(e) {
    let attrNames = [];
    let records = [];
    let tableName;
    
    let n = $('#tabela tr').length - 1;
    tableName = document.getElementById('nome-tabela').innerText;
    if(n != 0 && tableName != '') { 
        e.preventDefault;
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
    App.showData();
});