console.log('javascript carregando');

function validaCPF(cpf){
    return false
}

function validação() {
    console.log('iniciando a validação cpf');
    
    
    let cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf)

    let resultadoValidação = validaCPF(cpf);
    
    if (resultadoValidação) {
        document.getElementById('success').style.display = 'block'
    }
    else{
        document.getElementById('error').style.display = 'block'
    } 

}