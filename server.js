import express from 'express'

const app = express()

const users = []


app.post('/usuarios', (req, res) =>{
    console.log(req)
    res.send('Usuario criado com sucesso')
})


app.get('/usuarios', (req, res) => {
    res.send('ok, deu boa')
})


app.listen(3000)