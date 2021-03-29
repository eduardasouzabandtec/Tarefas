const excluir = id => {
    let request = new XMLHttpRequest() 
    request.open("DELETE", `${url}/apagar/?id=${id}`);
    request.setRequestHeader("Content-type","application/json");
    request.send(JSON.stringify(id))
    divlista.innerHTML = ""
    main(get(url))
}