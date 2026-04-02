// Importo i dati (array dei post)
const postData = require("../data/postdata");


// INDEX ---> GET /posts
function index(req, res) {
    //inizialmente il menu filtrato corrisponde all'originale
    let filteredPostList = postData;
    //Se la richiesta contiene un filtro, allora filtriamo il menu
    if (req.query.id) {
        filteredPostList = postData.filter(
            post => post.id.includes(req.query.id)
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
  res.send("Crea nuovo post");
}


// UPDATE ---> PUT /posts/:id
function update(req, res) {
  const id = parseInt(req.params.id);
  res.send(`Modifica del post ${id}`);
}

// MODIFY ---> PUT /posts/:id
function modify (req, res) {
  const id = parseInt(req.params.id);
  res.send(`Modifica del post ${id}`);
}


// DESTROY ---> DELETE /posts/:id
function destroy(req, res) {
  const id = parseInt(req.params.id);
  res.send(`Cancella post ${id}`);
}

// EXPORT funzioni controller
module.exports = { index, show, store, update, modify, destroy };