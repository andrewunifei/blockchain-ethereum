var modal = document.getElementById("myModal");

// Abrir o modal
$(document).on('click', '.myBtn', function(e){
    e.preventDefault;
    modal.style.display = 'block';
  
    let nome =  $(this).attr('data-nome');
    let valor = $(this).attr('data-valor');
  
    $('#novo-nome').attr('data-nome', nome);
    $('#novo-valor').attr('data-valor', valor);
});
  
// Atualizar
$(document).on('click', '#modal-atualizar', function(e){
    e.preventDefault;
    var novo_nome = $('#novo-nome');
    var novo_valor = $('#novo-valor');
    modal.style.display = 'none';
  
    var id_nome = $('#novo-nome').attr('data-nome');
    var id_valor = $('#novo-valor').attr('data-valor');
  
    $('#' + id_nome).html(novo_nome.val());
    $('#' + id_valor).html(novo_valor.val());
    
    $('#novo-nome').removeAttr('data-nome');
    $('#novo-valor').removeAttr('data-valor');

		document.getElementById('novo-nome').value='';
		document.getElementById('novo-valor').value='';
});
  
// Fechar o modal
var span = document.getElementsByClassName('closed')[0];
  
span.onclick = function() {
  modal.style.display = 'none';
}

  