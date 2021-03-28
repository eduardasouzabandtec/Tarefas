const url = "http://localhost:8080";
const data = get(url);
const divlista = document.querySelector("#lista");
const divConteiner = document.querySelector("#conteiner");
const divModal = document.querySelector("#dv-modal");
const btnOpenModal = document.querySelector("#btn-Open");
const btnCloseModal = document.querySelector("#btn-close");
const inputTitle = document.querySelector("#titulo");
const textDiscription = document.querySelector("#text-description");
const errorText = document.querySelector("#erro-discription");
const errorInput = document.querySelector("#erro-titulo")
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
inputTitle.addEventListener("keyup",validaInput);
textDiscription.addEventListener("keyup",validaTextArea)
//procurar formas melhores de fazer o get e post
function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function post(url,body){
    let request = new XMLHttpRequest() 
    request.open("POST",url,true);
    request.setRequestHeader("Content-type","application/json");
    request.send(JSON.stringify(body));
    request.onload = ()=>{
        if(request.status == 201){
            reload();
        }
        console.log("status",request.status)
    }
    return request.responseText

}
function cadastraTarefas(){
    let titulo = inputTitle.value;
    let description = textDiscription.value;
    body ={
        "titulo": titulo,
        "descricao":description
    }
    post(url,body);
}
// não deixar assim
function reload(){
 window.location.reload();
}

function criaDiv(lista) {
    if (!lista.status) {
        divlista.innerHTML += `
    <div class="lista">
                <h2>${lista.titulo}</h2>
                <label class="name" for="">${lista.descricao}</label>
        </div>
    `
    }

}
function efeitoBlur(status){
    if(status){
        divConteiner.style.filter = "blur(5px)";
        btnOpenModal.style.filter = "blur(5px)";
        divBlock(divModal)
    }else{
        divNone(divConteiner,true);
        divNone(btnOpenModal,true);
        divNone(divModal);
    }
    
}
function divNone(div,isFilter){
    if(isFilter){
        div.style.filter = "none"
    }else{
        div.style.display = "none"
    }
}
function divBlock(div){
    div.style.display = "block"
}

function openModal() {
    efeitoBlur(true);
    console.log("click");
}

function closeModal() {
    cadastraTarefas();
    efeitoBlur(false);
}
function validaInput() {
    if (inputTitle.value.length <= 25) {
        inputTitle.style.color = "black";
        divNone(errorInput);
        return true;
    } else {
        errorInput.innerHTML = "O titulo deve ter menos que 25 caracteres";
        divBlock(errorInput);
        inputTitle.style.color = "red";
        return false;
    }
}
function validaTextArea(){
    if(textDiscription.value.length <=52){
       divNone(errorText);
        textDiscription.style.color = "black";
        return true;
    }else{
        divBlock(errorText)
        errorText.innerHTML = "A Descrição deve ter menos que 52 caracteres"
        textDiscription.style.color = "red";
        return false;
    }
}

function main(data) {
    lista = JSON.parse(data)
    lista.forEach(element => {
        let list = criaDiv(element)
    });
}
main(data);