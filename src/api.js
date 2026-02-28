import express from 'express'
import adicionarRotas from './router.js'

const api = express()
api.use(express.json())

adicionarRotas(api)

api.listen(5010, () => console.log('API subiu na porta 5010!'))