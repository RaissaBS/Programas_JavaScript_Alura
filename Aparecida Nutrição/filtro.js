var compoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var paciente = document.querySelectorAll(".paciente");
    for(var i = 0; i < pacientes.length ; i++){
        var paciente = paciente[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        if(nome != this.value){
            paciente.classList.add("invisivel");
        }else{
            paciente.classList.remove("invisivel");
        
        }
    }

});