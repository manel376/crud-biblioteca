const express = require("express")
const router = express.Router()
const aluguel_routers = require("../controllers/aluguel_routers.js")

router.get("/", (req, res) => {
    res.json(aluguel_routers.index())
})

router.get("/:id", (req, res) => {
    res.json(aluguel_routers.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = aluguel_routers.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = aluguel_routers.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    aluguel_routers.destroy(req.params.id)
    res.json()
})

module.exports = router