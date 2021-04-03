const getDelay = _ =>{
    axios.get(`${url}/delay`)
    .then(function (response) {
        divlista.innerHTML = "";
        divBlock(btnOpenModal);
        main(response.request.responseText)
    })
    .catch( _ => {
      notFound();
    });
    
}