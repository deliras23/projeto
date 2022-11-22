function ing() {
    //entrada 
    let ingresso = document.form.ingresso.value;
    
    //processamento
    if (ingresso == "meia") {
        valor = 16;        
    }
    else if (ingresso == "inteira"){
        valor = 32;
    }   
    

    //saída
    document.getElementById("total").value = valor
}

function add(valor,marcado) {
    //entrada
    total = document.getElementById('total').value;
    
    //processamento
    if (marcado){
      total = Number(total) + Number(valor);
    }
    else{
      total = Number(total) - Number(valor);
      
    }
    
    //saída
    document.getElementById('total').value = total;
}

function concluir() {
  alert("Sua compra foi concluída, verifique seu e-mail")
}

function mascara_telefone(obj) {
  if (obj.value.length == 0) {
    obj.value += "("
  }
  if (obj.value.length == 3) {
    obj.value += ")"
  }
  if (obj.value.length == 9) {
    obj.value += "-"
  }
  
}
//function cadastrar() {
//  alert("Seu cadastro foi concluído, volte a tela inicial")
//}

//pse né amigo, chegou até aqui é pq tu tem paciência

function cadastrar(form){
  if(form.email.value == "") {
      alert("O Campo email é obrigatório")
      form.email.focus();
      return false;
  } 
  else if(form.senha.value == "") {
      alert("O Campo senha é obrigatório")
      form.senha.focus();
      return false;
  } 
  else if(form.nome.value == "") {
      alert("O Campo nome é obrigatório")
      form.nome.focus();
      return false;
  } 
  else if(form.tel.value == "") {
      alert("O Campo Telefone é obrigatório")
      form.tel.focus();
      return false;
  } 
  else if(form.endereco.value == "") {
      alert("O Campo Endereço é obrigatório")
      form.endereco.focus();
      return false;
  } 
  else if(form.senha.value != form.senha2.value){
      alert("As senhas não coincidem");
      return false;
  }

}

function senhas(){
  senha1 = document.form.senha.value;
  senha2 = document.form.senha2.value;


  if(senha1 != senha2) {
      document.getElementById("msg").style.display = "block";
  }
  else {
      document.getElementById("msg").style.display = "none";
  }
}