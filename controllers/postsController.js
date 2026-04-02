// Importo i dati (array dei post)
const postData = require("../data/data");


// INDEX ---> GET /posts
exports.index = (req, res) => {

  // creo oggetto per la formattazione completa della risposta
  const fullPostList = {
    postIndex: postData.length,
    postList: postData
  }

  res.json(fullPostList);
  // res.json(postData);
};


// SHOW ---> GET /posts/:id
exports.show = (req, res) => {

  // ⚠️ FIX: id deve essere number
  const id = parseInt(req.params.id);

  res.send(`Mostra post ${id}`);
};


// STORE ---> POST /posts
exports.store = (req, res) => {
  res.send("Crea nuovo post");
};


// UPDATE ---> PUT /posts/:id
exports.update = (req, res) => {

  // FIX: id number
  const id = parseInt(req.params.id);

  res.send(`Modifica del post ${id}`);
};


// DESTROY ---> DELETE /posts/:id
exports.destroy = (req, res) => {

  // FIX: id number
  const id = parseInt(req.params.id);

  res.send(`Cancella post ${id}`);
};