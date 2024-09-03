let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.titulo !=undefined&&
        body.titulo !=""&&
        body.autor != undefined &&
        body.ano != undefined &&
        body.autor != "" &&
        body.ano != ""&&
        body.genero != undefined &&
        body.genero != ""
    ) {
        return {
            id,
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano,
            genero: body.genero,
        }
    }
}

module.exports = model