// Import Express
const express = require("express");

// Import router
const router = express.Router();

// Import controller
const postsController = require("./../controllers/postController");

// FUNZIONI x OPERAZIONI CRUD

// INDEX ---> GET /posts
router.get("/", postsController.index);

// SHOW ---> GET /posts/:id
router.get("/:id", postsController.show);

// STORE ---> POST /posts
router.post("/", postsController.store);

// UPDATE ---> PUT /posts/:id
router.put("/:id", postsController.update);

// MODIFY ---> PUT /posts/:id
router.patch("/:id", postsController.update);

// DESTROY ---> DELETE /posts/:id
router.delete("/:id", postsController.destroy);



module.exports = router;