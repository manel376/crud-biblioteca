let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome !=undefined&&
        body.nome !=""&&
        body.matricula != undefined &&
        body.ano != undefined &&
        body.matricula != "" &&
        body.ano != ""&&
        body.curso != undefined &&
        body.curso != ""
    ) {
        return {
            id,
            nome: body.nome,
            matricula: body.matricula,
            ano: body.ano,
            curso: body.curso,
        }
    }
}

module.exports = model