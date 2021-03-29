
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
inputTitle.addEventListener("keyup",validaInput);
textDiscription.addEventListener("keyup",validaTextArea)

const cadastraTarefas = _ => {
    post(
        {
            "titulo": inputTitle.value,
            "descricao": textDiscription.value
        }
    );
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

function main(dados) {
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
main(get(url));

