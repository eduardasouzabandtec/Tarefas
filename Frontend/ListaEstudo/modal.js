
const modalCadastrar = _ =>{

    divModal.innerHTML = ` 
    <div class="modal-header">
        <h2>Adicionar tarefas</h2>
    </div>

    <div class="modal-body">
        <label for="">Titulo</label>
        <input type="text" name="" id="titulo" class="input-title" placeholder="Vamos aprender o que ? ">
        <i id="erro-titulo" class="error"></i>
        <label for="">Descrição</label>
        <textarea name="" id="text-description" cols="30" rows="10" class="text-description" placeholder="Descreva o que vamos aprender"></textarea>
        <i id="erro-discription" class="error"></i>
    
    </div>

    <div class="modal-footer">
        <button id="btn-close" class="btn-close" type="submit">Concluir</button>
    </div>`
    return tese();
   
}
    
    function closeModal() {
        cadastraTarefas();
        efeitoBlur(false);
        main(get(url))
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
