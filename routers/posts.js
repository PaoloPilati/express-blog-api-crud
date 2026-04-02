const express = require("express");
const router = express.Router();
const postData = require("../data/data");



// INDEX ---> GET /posts
router.get("/", (req, res) => {
  //creo oggetto per la formattazione completa della risposta
  const fullPostList = {
    postIndex: postData.length,
    postList: postData
  }
  res.json(fullPostList);
});

// SHOW ---> GET /posts/:id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Mostra post ${id}`)
});

// STORE ---> POST /posts
router.post("/", (req, res) => {
  res.send("Crea nuovo post");
});

// MODIFY ---> PUT /posts/:id
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Modifica del post ${id}`);
});

//UPDATE ---> PUT

// DESTROY ---> DELETE /posts/:id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Cancella post ${id}`);
});

module.exports = router;