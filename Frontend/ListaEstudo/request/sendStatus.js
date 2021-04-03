const sendStatus = id =>{
    axios.put(`${url}/atualiza/${id}`)
    .then( _ => {
        divlista.innerHTML = ""
        getData()
    })
    .catch( _ => {
        notFound();
    });
    
}