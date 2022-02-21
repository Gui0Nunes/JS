
function valida(formulario) {
    var nome = formulario.nome.value;
    var email = formulario.email.value;
    var cpf = formulario.cpf.value;
    var telefone = formulario.telefone.value;

    if(nome.length  < 3) {
       //Caso o campo não for validado, ativa um alerta com a mensagem abaixo.
       alert("Por favor, informar o seu nome com mais de 3 caracteres.");
        //Ativa um focus no campo.
        formulario.nome.focus();
        //o formulario não é enviado.
        return false;
    }
    if(email.length  < 8) {
        //Caso o campo não for validado, ativa um alerta com a mensagem abaixo.
        alert("Por favor, informar um e-mail válido.");
        //Ativa um focus no campo.
        formulario.email.focus();
        
        //o formulario não é enviado.
        return false;
    }
    if(cpf.length  < 11 ) {
        //Caso o campo não for validado, ativa um alerta com a mensagem abaixo.
        alert("Por favor, informar um CPF válido.");
       
        //Ativa um focus no campo.
        formulario.cpf.focus();
        //o formulario não é enviado.

        return false;
    }
    if(telefone.length  < 14 ) {
        //Caso o campo não for validado, ativa um alerta com a mensagem abaixo.
        alert("Por favor, informar um Telefone válido.");
        //Ativa um focus no campo.
        formulario.telefone.focus();
        //o formulario não é enviado.
        return false;
    }
    
    

}


//----------------------------------------------------------------------------


//mascara telefone  
function mask(o, f) {
	setTimeout(function() {
	  var v = mphone(o.value);
	  if (v != o.value) {
		o.value = v;
	  }
	}, 1);
  }
  
  function mphone(v) {
	var r = v.replace(/\D/g, "");
	r = r.replace(/^0/, "");
	if (r.length > 10) {
	  r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
	} else if (r.length > 5) {
	  r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
	} else if (r.length > 2) {
	  r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
	} else {
	  r = r.replace(/^(\d*)/, "($1");
	}
	return r;
  }

 
