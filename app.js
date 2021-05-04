const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/produtos', (req, res) => {
  //res.send('Listando produtos')
  res.json({message:"Listando Produtos"});
})
app.post('/produtos', function (req, res) {
    console.log(req.body);
    let produto = req.body;
    produto.id = 1;
    res.status(201).json(produto);
    //res.send('Criando produtos com nome '+req.body.nome);
});

app.put('/produtos/:id', (req,res) => {
  let produto = { 
    id: 1,
    nome: "Produto X",
    preco: 20.0
  };
  if(req.params.id == 1){
    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    res.json(produto);
  }
  else {
    res.status(404).send("Produto não encontrado");
  }
});

app.get('/produtos/:id', (req,res) => {
  res.send('Buscar o produto '+req.params.id);
});

app.delete('/produtos/:id', (req,res) => {
  res.send('Remover o produto '+req.params.id);
});

app.listen(port, () => {
  console.log(`Executando app em http://localhost:${port}`)
})