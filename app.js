const express = require('express');
const app = express();
const port = 3000;

const postRouter = require("./routers/posts");
const checkTime = require("./middlewares/checkTime");

// STATIC
app.use(express.static('public'));

// attivazione body parser per formato json per tutte le rotte
app.use(express.json());

//middleware con registrazione GLOBALE (prima delle rotte)
app.use(checkTime);

// REGISTRA ROUTER con prefisso /posts
app.use("/posts", postRouter);

// HOME
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.listen(port, () => {
    console.log(`test app listening on port: ${port}`)
});