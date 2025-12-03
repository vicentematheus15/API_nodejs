import express from 'express'

const app = express()

const users = []


app.post('/usuarios', (req, res) =>{
    
    res.send('Usuario criado com sucesso')
})


app.get('/usuarios', (req, res) => {
    res.send('ok, deu bom')
})


app.listen(3000)