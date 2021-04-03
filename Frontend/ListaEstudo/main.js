
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
btnError.addEventListener("click",deleteTask);
xModal.addEventListener("click",cancelDelete);
xAdd.addEventListener("click",cancelAdd);
inputTitle.addEventListener("keyup",validaInput);
textDiscription.addEventListener("keyup",validaTextArea);


const cadastraTarefas = _ => {
    sendData(
        {
            "titulo": inputTitle.value,
            "descricao": textDiscription.value
        }
    );
}


function efeitoBlur(status, modal){
    if(status){
        divConteiner.style.filter = "blur(5px)";
        btnOpenModal.style.filter = "blur(5px)";
        divBlock(modal)
    }else{
        divNone(divConteiner,true);
        divNone(btnOpenModal,true);
        divNone(modal);
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
    efeitoBlur(true, divModal);
}

function openModalDelete(){
    efeitoBlur(true,modalErro);
}

function closeModal() {
    cadastraTarefas();
    efeitoBlur(false, divModal);
    getData();
}

function deleteTask(){
    deleteData(idDelete);
    efeitoBlur(false, modalErro);
    console.log("Id", idDelete);
    
}

function cancelDelete(){
    efeitoBlur(false, modalErro);
}

function cancelAdd(){
    efeitoBlur(false,divModal);
}

function validaInput() {
    if (inputTitle.value.length <= 25) {
        inputTitle.style.color = "white";
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
        textDiscription.style.color = "white";
        return true;
    }else{
        divBlock(errorText)
        errorText.innerHTML = "A Descrição deve ter menos que 52 caracteres"
        textDiscription.style.color = "red";
        return false;
    }
}

function main(dados) {
    // se nada aparecer
    if(dados.length <= 2){
        text();
    }else{
        divlista.innerHTML = ""
         createToDo(dados);
    }
}

function createToDo(dados){

    divlista.innerHTML = JSON.parse(dados).map(lista => {
        return `<div class="swiper-container">
        <div class="swiper-wrapper">
          <div id="${lista.id}" class="swiper-slide ${lista.status ? "lista-feito" : "lista"}">
          <h2 id="${lista.id}">${lista.titulo}</h2>
          <label id="${lista.id}" class="name" for="">${lista.descricao}</label></div>
        </div>
      </div>`
    }).join("")

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
      });
      swipper()
}
loader();
getDelay();

