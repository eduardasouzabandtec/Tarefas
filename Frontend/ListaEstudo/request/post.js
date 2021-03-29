const post = body => {
    let request = new XMLHttpRequest() 
    request.open("POST", url, true);
    request.setRequestHeader("Content-type","application/json");
    request.send(JSON.stringify(body));
    divlista.innerHTML = ""
    main(get(url))
}