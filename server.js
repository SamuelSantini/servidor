import express from 'express'; 

const app = express();
app.use(express.json());

let alunos = [
    {id: 1, nome: 'João', idade: 20}, 
    {id: 2, nome: 'Maria', idade: 21},
     {id: 3, nome: 'Pedro', idade: 22}
    ];


    let turmas = [
        {id: 1, nome: 'adalberto', idade: 130}, 
        {id: 2, nome: 'vania', idade: 55},
         {id: 3, nome: 'senno', idade: -33}
        ];




app.get('/alunos', (req, res) => {
    res.send(alunos);
});

app.post('/alunos', (req, res) => {
    const aluno = req.body;
    alunos.push(aluno);
    res.send(alunos);
});

app.delete('/alunos/:id', (req, res) => {
    const id = Number(req.params.id);
    alunos = alunos.filter(aluno => aluno.id !== id);
    res.send(alunos);
});


app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});