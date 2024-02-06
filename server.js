import app from './src/app.js'

const PORT = 5000

// escutar a porta 5000
app.listen(PORT, () => {
    console.log(`Servidor ligado no endereço http://localhost:${PORT}`)
})
