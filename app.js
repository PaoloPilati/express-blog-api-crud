const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require("./routers/posts");

// STATIC
app.use(express.static('public'));

// REGISTRA ROUTER con prefisso /posts
app.use("/posts", postsRouter);

// HOME
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.listen(port, () => {
    console.log(`test app listening on port: ${port}`)
});