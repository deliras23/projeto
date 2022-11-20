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