//INPUT NOME DA TABELA, NOME ATRIBUTO E VALOR ATRIBUTO
var valor = $("#tabela-input");
var nome_atributo = $("#nome-atributo-input");
var valor_atributo = $('#valor-atributo-input');

$(document).on('click', '#add-tabela', function(e) {
    e.preventDefault;
    var nome = document.getElementById("add-tabela").value;
    if(nome == 'Adicionar'){
        if(valor.val() != '') {
            $("#nome-tabela").html(valor.val());
            $('#tabela-input').prop('disabled', true);
            $('#add-tabela').attr('value', 'Editar');
            let texto = document.getElementById('nome-tabela');
            texto.style.visibility = 'visible';
        } else {
            alert("O nome da tabela não pode ser nulo.")
        }
    } 
    else {
        $('#tabela-input').prop('disabled', false);
        $('#add-tabela').attr('value', 'Adicionar');
    }
});

var count = -1;
var id_nome_atributo;
var id_valor_atributo;
var id_linha;

$(document).on('click', '#add', function(e) {
    if(nome_atributo.val() != '' && valor_atributo.val() != ''){
      e.preventDefault;
      count++;
      id_nome_atributo = 'nome-atributo-' + count;
      id_valor_atributo = 'valor-atributo-' + count;
      id_linha = 'id-linha-' + count;

      $('#tabela').append(`
        <tr id=${id_linha} class="linhas">
            <td id=${id_nome_atributo}>${nome_atributo.val()}</td>
            <td id=${id_valor_atributo}>${valor_atributo.val()}</td>
            <td class="text-center">
                <button
                    data-nome=${id_nome_atributo} 
                    data-valor=${id_valor_atributo}
                    class='btn btn-info btn-xs myBtn' 
                    href="#">
                    Editar
                </button> 
                <button 
                    href="#"
                    data-linha=${id_linha}
                    class="btn btn-danger btn-xs del-btn">
                    Deletar
                </button>
            </td>
        </tr>`
      );

      document.getElementById('nome-atributo-input').value='';
      document.getElementById('valor-atributo-input').value='';
    }
    else{
      alert("O atributo não admite valores nulos.")
    }

});

$(document).on('click', '.del-btn', function(e){
    e.preventDefault;
    let linha = $(this).attr('data-linha');
    $('#' + linha).remove();
});

$(document).on('click', '#registrar', function(e) {
    var n = $('#tabela tr').length - 1;
    var tableName = document.getElementById('nome-tabela').innerText;
    if(n != 0 && tableName != '') {
        count = -1;
    }
});