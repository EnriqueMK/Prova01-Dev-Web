import { Router } from 'express'
const endpoints = Router()

endpoints.get('/nivel1/ping', (req, resp) => {
    resp.send('pong nivel1')
})

endpoints.get('/nivel1/media/:aluno/:n1/:n2/:n3', (req, resp) => {
    let nota1 = parseFloat(req.params.n1)
    let nota2 = parseFloat(req.params.n2)
    let nota3 = parseFloat(req.params.n3)
    let array = []

    if (nota1 >= 0 && nota2 >= 0 && nota3 >= 0){
        let media = (nota1 + nota2 + nota3) / 3
        let situacao = media >= 6 ? 'Aprovado' : 'Reprovado'

        array.push({
            media: media,
            situacao: situacao
        })
    } else {
        let erro = 'Nota Invalida'
        array.push({
            error: erro
        })
    }

    resp.send(array)
})

endpoints.post('/nivel1/leituraLivro', (req, resp) => {
    let dados = req.body
    let livro = dados.livro
    let paginas = dados.paginas
    let tempoPagina = dados.tempoPorPagina

    let calc = (paginas * tempoPagina) / 60


    resp.send({
        livro: livro,
        tempoLeitura: calc        
    })
})


export default endpoints