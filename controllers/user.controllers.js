
const usersGet = (req, res) => {
  
  const id = req.params.id;

  const body = req.body;

  //filtrando la info por id
  const data = body.find( user => user.id == id )
  console.log(req)
    res.json({
      ok: true,
      messaje: 'GET API',
      data
    }) 
}

/*
const usersGet = (req, res) => {
  
  const id = req.query.id;

  const body = req.body;
  
  const data = id ? body.filter( user => user.id == id ) : body
  
    res.json({
      ok: true,
      messaje: 'GET API',
      data
    }) 
}
*/
const usersPost = (req, res) => {

  //const user = req.params.user;
  const id = req.params.id;//del req estamos jalando los parametros.

  const body = req.body;
  
    res.json({
      ok: true,
      messaje: 'POST API',
      body,
      id
    }) //me devuelva un json a esta ruta
}

const usersPut = (req, res) => {
    res.json({
      ok: true,
      messaje: 'PUT API'
    }) 
}

const usersDelete = (req, res) => {
    res.json({
      ok: true,
      messaje: 'DELETE API'
    }) 
}

const usersPatch = (req, res) => {
    res.json({
      ok: true,
      messaje: 'PATCH API'
    }) 
}

module.exports = {
    usersGet, 
    usersPost, 
    usersPut, 
    usersDelete,
    usersPatch
}