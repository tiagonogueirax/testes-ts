import fs from 'fs'
import chalk from 'chalk'


import express from 'express'
const app = express()

app.listen(80, () => {
  console.log('Servidor rodando na porta 80')
});


function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
        console.log(chalk.green(texto))
    })
}

pegaArquivo('./arquivos/texto.md')

app.get('/', function(req, res) {
    res.send('ok')
});