const deleteData = id => {
    axios.delete(`${url}/apagar/${id}`)
    .then( _ => {
        divlista.innerHTML = ""
        getData()
    })
    .catch( _ => {
        // criar um popup caso der errado
    });
}