const express = require("express")
const router = express.Router()
const estudante_routers = require("../controllers/estudante_routers.js")

router.get("/", (req, res) => {
    res.json(estudante_routers.index())
})

router.get("/:id", (req, res) => {
    res.json(estudante_routers.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = estudante_routers.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = estudante_routers.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    estudante_routers.destroy(req.params.id)
    res.json()
})

module.exports = router