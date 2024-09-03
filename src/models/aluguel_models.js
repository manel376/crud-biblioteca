let proxId = 1;

const model = (body, id = proxId++) => {
    if(
       
        body.matricula != undefined &&
        body.dataAluguel != undefined &&
        body.matricula != "" &&
        body.dataAluguel != ""&&
        body.datadevolucao != undefined &&
        body.datadevolucao != ""&&
        body.curso != undefined &&
        body.curso != ""
    ) {
        return {
            id : livro ,
            id : estudante,
            matricula: body.matricula,
            dataAluguel: body.dataAluguel,
            curso: body.curso,
            datadevolucao: body.datadevolucao,
        }
    }
}

module.exports = model