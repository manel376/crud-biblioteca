const express = require("express")
const aluguel_routers = require("./routes/aluguel.js")
const estudante_routers = require("./routes/estudante_routers.js")
const livro_routers = require("./routes/livro_routers.js")
const app = express()
const port = 5000

app.use(express.json())
// app.use(cep_endereco) // Middleware de uso global

app.use("/estudante_routers", estudante_routers)
app.use("/aluguel_routers", aluguel_routers)
app.use("/livro_routers",livro_routers)
app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})