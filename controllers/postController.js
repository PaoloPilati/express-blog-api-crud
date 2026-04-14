// Importo i dati (array dei post)
const postData = require("../data/postdata");


// INDEX ---> GET /posts
function index(req, res) {
    //inizialmente il menu filtrato corrisponde all'originale
    let filteredPostList = postData;
    //Se la richiesta contiene un filtro, allora filtriamo la lista
    if (req.query.tags) {
        filteredPostList = postData.filter(
            post => post.tags.includes(req.query.tags)
        );
    }

    // creo oggetto da mostrare
    const fullPostList = {
        postIndex: filteredPostList.length,
        postList: filteredPostList
    };

  res.json(fullPostList);
  // res.json(postData);
}


// SHOW ---> GET /posts/:id
function show(req, res) {
  const id = parseInt(req.params.id);
  // Cerco il post
  const postFound = postData.find(post => post.id === id);
  // Se non esiste ---> 404
  if (!postFound) {
    return res.status(404).json({
      error: "Post non trovato"
    });
  }
  // Se esiste ---> lo restituisce
  res.json(postFound);
}


// STORE ---> POST /posts
function store(req, res) {
  //Creaiamo id incrementando l'ultimo numero id nell'array di uno
  const newId = postData[postData.length -1].id + 1;

  //nuovo oggetto post
  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags
  }
  
  //Aggiungiamo un nuovo post alla lista
  postData.push(newPost);

  //CHECK
  console.log(req.body)
  //Restituisco stato
  res.status(201)
  //Restituisco nuovo post
  res.json(newPost);
}


// UPDATE ---> PUT /posts/:id
function update(req, res) {
  //recuperiamo l'id dall'URRL e lo trasformiamo in numero
  const id = parseInt(req.params.id);

  //cerchiamo la pizza tramite id
  const postToUpdate = postData.find(post => post.id === id);
  if (!postToUpdate) {
    res.status(404)
      return res.json({
        status: 404,
        error: "Not Found"
        message: "Post non trovato"
      })
    }
  
  // Aggiorniamo il post
  postToUpdate.title = req.body.title;
  postToUpdate.content = req.body.content;
  postToUpdate.image = req.body.image;
  postToUpdate.tags = req.body.tags;

  //CHECK
  console.log(postData)


    

  //res.send(`Modifica integrale del post ${id}`);
}

// MODIFY ---> PUT /posts/:id
function modify (req, res) {
  //recuperiamo l'id dall'URRL e lo trasformiamo in numero
  const id = parseInt(req.params.id);

  //cerchiamo la pizza tramite id
  const postToEdit = postData.find(post => post.id === id);
  if (!postToEdit) {
    res.status(404)
      return res.json({
        status: 404,
        error: "Not Found"
        message: "Post non trovato"
      })
    }
  
  // Aggiorniamo il post
  const postSent = req.body;
  postSent.title ? post.title = postSent.title : post.title = post.title;
  postSent.content ? post.content = postSent.content : post.content = post.content;
  postSent.image ? post.image = postSent.image : post.image = post.image;
  postSent.tags ? post.tags = postSent.tags : post.tags = post.tags;


  //if (postSent.name ==! undefined) {post.name = postSent.name} else {post.name = post.name}
  
  //res.send(`Modifica parziale del post ${id}`);
}


// DESTROY ---> DELETE /posts/:id
function destroy(req, res) {
  const id = parseInt(req.params.id);
  const postToDelete = postData.find(post => post.id === id);
    if (!postToDelete) {
      res.status(404)
      return res.json({
        status: 404,
        error: "Not Found"
        message: "Post non trovato"
      })
    }
    postData.splice(postData.indexOf(postToDelete), 1)

    console.log(postData)

    // Restituiamo lo stato corretto ("eliminato correttamente")
    res.sendStatus(204)
  //res.send(`Cancella post ${id}`);
}

// EXPORT funzioni controller
module.exports = { index, show, store, update, modify, destroy };