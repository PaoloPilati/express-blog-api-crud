const express = require('express');
const app = express();
const port = 3000;
const postRouter = require("./routers/posts");

// STATIC
app.use(express.static('public'));

// attivazione body parser per formato json per tutte le rotte
app.use(express.json())

// REGISTRA ROUTER con prefisso /posts
app.use("/posts", postRouter);

// HOME
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.listen(port, () => {
    console.log(`test app listening on port: ${port}`)
});