const express = require("express")
const router = express.Router()
const livro_routers = require("../controllers/livro_routers.js")

router.get("/", (req, res) => {
    res.json(livro_routers.index())
})

router.get("/:id", (req, res) => {
    res.json(livro_routers.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = livro_routers.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = livro_routers.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    livro_routers.destroy(req.params.id)
    res.json()
})

module.exports = router