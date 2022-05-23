document.querySelector("#logar").addEventListener("click", function(event) {
    event.preventDefault();
    let email = document.querySelector("#login").value;
    let senha = document.querySelector("#senha").value;

    listarUsuarios(email, senha)

})

function listarUsuarios(email, senha) {
    let dataBank_usuarios = JSON.parse(localStorage.getItem('usuário'));

    let usuario = {
        login: "",
        senha: ""
    }
let fieldset = document.querySelector("fieldset");
let p = document.createElement("p");
dataBank_usuarios.array.forEach(element => {
    if(element.email === email && element.senha === senha){
    usuario.login = email;
    usuario.senha = senha;
    }
if(usuario.login === email && usuario.senha === senha){
    window.location.href = index.html
} else{
    p.innerText = "email ou senha incorreto.";
    p.style.color = "red="
    fieldset.appendChild
}
});
}

console.log('uiui')