import { Router } from 'express'
const endpoints = Router()

endpoints.get('/nivel2/ping', (req, resp) => {
    resp.send('pong nivel2')
})

endpoints.get('/nivel2/tabuada/:numero', (req, resp) => {
    let numero = parseInt(req.params.numero)
    let array_number = []

    for (let i = 0; i <= 10; i++) {
        let calc = i * numero
        array_number.push(calc)
    }

    resp.send({
        tabuada: array_number
    })
})

endpoints.post('/nivel2/analiseNotas', (req, resp) => { 
    let vetor_number = req.body.notas
    let resultado = []

    let maior = 0
    let menor = 0
    let soma = 0

    for (let i = 0; i <= vetor_number.length; i++) {
        if (i == 0) {
            maior = vetor_number[i]
            menor = vetor_number[i]
        } else {
            if (vetor_number[i] > maior) {
                maior = vetor_number[i]
            }

            if (vetor_number[i] < menor) {
                menor = vetor_number[i]
            }
        }
    }

    for (let numero of vetor_number) {
        soma += numero
    }

    let media = soma / vetor_number.length
    let situacao = media >= 6 ? 'Aprovado' : 'Reprovado'

    if (soma >= 0) {
        resultado.push({    
            media: media,
                situacao: situacao,
                maior: maior,
                menor: menor
            }
        )
    } else {
        let erro = 'Nota Invalida'
        resultado.push({
            error: erro
        })
    }
    
    resp.send(resultado)
})

export default endpoints