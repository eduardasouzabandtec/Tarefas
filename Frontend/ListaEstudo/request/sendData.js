const sendData = body =>{
    axios.post(url, body)
      .then(_ => {
        divlista.innerHTML = ""
        getData()
      })
      .catch( _ => {
        notFound();
      });
      
}