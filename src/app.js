import express from 'express'

const app = express()

// indicar para o express ler body com json
app.use(express.json())

// mock
const tarefas = [
    {
        id: 1,
        titulo: 'Arrumar a casa',
        description: 'Fazer tal coisa',
        cor: '#000000',
        status: 'fazendo',
        selecionada: 'N'
    },
    {
        id: 2,
        titulo: 'Arrumar a casa',
        description: 'Fazer tal coisa',
        cor: '#000000',
        status: 'não iniciado',
        selecionada: 'N'
    },
    {
        id: 3,
        titulo: 'Arrumar a casa',
        description: 'Fazer tal coisa',
        cor: '#000000',
        status: 'concluido',
        selecionada: 'S'
    },
    {
        id: 4,
        titulo: 'Arrumar a casa',
        description: 'Fazer tal coisa',
        cor: '#000000',
        status: 'fazendo',
        selecionada: 'N'
    }
]

// Retorna o objeto por id
function buscarTarefasPorId(id) {
    return tarefas.filter(tarefa => tarefa.id == id)
}

// Pegar a posição ou index do elemento no array por id
function buscarIndexTarefas(id) {
    return tarefas.findIndex(tarefa => tarefa.id == id)
}

// criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.get('/tarefas', (req, res) => {
    res.status(200).send(tarefas)
})

app.get('/tarefas/:id', (req, res) => {
    res.json(buscarTarefasPorId(req.params.id))
})

app.post('/tarefas', (req, res) => {
    tarefas.push(req.body)
    res.status(200).send('Tarefa cadastrada com sucesso!')
})

app.delete('/tarefas/:id',(req, res) => {
    let index = buscarIndexTarefas(req.params.id)
    tarefas.splice(index, 1)
    res.send(`Tarefa ${req.params.id} exluida com sucesso!`)
})

app.put('/tarefas/:id',(req, res) => {
    let index = buscarIndexTarefas(req.params.id)
    tarefas[index].tarefa = req.body.tarefa
    tarefas[index].titulo = req.body.titulo
    res.json(tarefas)
})

export default app
