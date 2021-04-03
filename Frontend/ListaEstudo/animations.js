const loader = _ =>{
    divNone(btnOpenModal);
    divlista.innerHTML = `
    <div class="loader-center">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>`
}

const text = _=>{
    divlista.innerHTML = `
    <div class="text-animation">
        <label for="">Nenhuma tarefa, sabe o que isso significa?</label> 
        <h2 data-text="Procastinação">Procastinação</h2>
    </div>
    `
}

const notFound = _ =>{
    divlista.innerHTML = "";
    divNone(btnOpenModal);
    divlista.innerHTML = `
    <div class="not-found" id="not-found">
        <label clas="ops" for="">OPSSS!</label> 
        <label clas="ops" for="">temos um probleminha, voltamos logo</label> 
        <img src="assets/unicorn.png" alt="">
    </div>
    `
}