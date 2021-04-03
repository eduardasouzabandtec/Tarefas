const getData = _ =>{
    axios.get(url)
    .then(function (response) {
        main(response.request.responseText)
    })
    .catch( _ => {
      notFound();
    });
    
}