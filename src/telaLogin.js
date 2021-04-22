let containerPrincipal = document.querySelector('.container-login');
let center = document.querySelector('.center-container')
let logarNova = document.getElementById('logarNovamente');

document.querySelector('.btFechar').addEventListener('click', () => {
    close()
})

function logarNoSistema(){
    let input = document.getElementsByTagName('input');
    if(input[2].value == 'adm' && input[3].value == 123){         
        document.querySelector('.fa-linux').style.color="green"
        input[2].value="";input[3].value="";
        open('../index.html', '_blank', 'width=1360, height=720,');
        document.querySelector('.containerPrincipal').style.display="none";
        document.querySelector('.sistemaIniciado').style.display="block";
        
        
    }else{
        document.querySelector('.fa-linux').style.color="#8B1A1A"
        alert("Senha não conferi !")
    }
}

logarNova.addEventListener('dblclick', () => {  
    open('../index.html', '_blank', 'width=1200, height=600,').close()  
    window.location.reload()
})