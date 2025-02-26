const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    let mensagem = 'API respondendo';
    res.json({ mensagem });
});

app.post('/desconto', (req, res) => {
    const { preco } = req.body;
    let desconto = 0;
    if(preco >= 1000){
        desconto = preco * 0.08;
    }
    let precoFinal = preco - desconto;
    res.json({ desconto, precoFinal });
});

app.post('/salariofamilia', (req, res) => {
    const { salario, filhos } = req.body;
    let salarioFamilia = 0;
    if(salario < 2000){
        salarioFamilia = filhos * 45;
    }
    let salarioFinal = salario + salarioFamilia;
    res.json({ salario, salarioFamilia, salarioFinal });
});

app.post('/calcularINSS', (req, res) => {
    let { salario } = req.body;
    let inss = 0;
    if (salario <= 1212) {
        inss = salario * 0.075;
    } else if (salario <= 2427.35) {
        inss = salario * 0.09;
    } else if (salario <= 3641.03) {
        inss = salario * 0.12;
    } else if (salario <= 7087.22) {
        inss = salario * 0.14;
    } else {
        inss = 7087.22 * 0.14;
    }
    salario -= inss;
    res.json({ salario, inss });
});

app.post('/calcularTriangulo', (req, res) => {
    const {a,b,c} = req.body;
    let tipo = ''

    if (a + b <= c || a + c <= b || b + c <= a) {
        tipo = 'Não é um triângulo'
    } else {
        if (a == b && b == c) {
            tipo = "Triângulo Equilátero";
        } else if (a != b && b != c && a != c) {
            tipo = "Triângulo Escaleno";
        } else {
            tipo = "Triângulo Isósceles";
        }
    }
    res.json({ tipo })
});

app.post('/triangulosvetor', (req, res) => {
    const {l} = req.body;
    let tipo = 'não é um triângulo';
    if(l[0] + l[1] > l[2] && l[0] + l[2] > l[1] && l[1] + l[2] > l[0]){
        if(l[0] == l[1] && l[1] == l[2])
            tipo = 'equilátero';
        else if(l[0] != l[1] && l[1] != l[2] && l[0] != l[2])
            tipo = 'escaleno';
        else
            tipo = 'isósceles';
    }
    res.json({ tipo });
});

app.post('/calcularPreco', (req, res) => {
    const { nome, preco } = req.body;
    let aumento = 0;
    if (preco < 1000) {
        aumento = preco * 0.05;
    } else {
        aumento = preco * 0.07;
    }
    aumento += preco;
    res.json({ nome, aumento });
});

app.post('/encontrarMaior', (req, res) => {
    const { numeros } = req.body;
    let maior = Math.max(...numeros);
    res.json({ maior});
});

app.post('/ordenarNumeros', (req, res) => {
    const { numeros } = req.body;
    let crescente = numeros.sort((a, b) => a - b);
    res.json({ crescente });
});

app.post('/maiorEMenor', (req, res) => {
    const { num1, num2 } = req.body;
        let maior = Math.max(num1, num2);
        let menor = Math.min(num1, num2);
    res.json({ maior, menor });
});

app.post('/calcularReajuste', (req, res) => {
        let { salario } = req.body;
        let aumento = 0;
        
        if (salario >= 1500 && salario < 1750) {
            aumento = salario * 0.15;
        } else if (salario >= 1750 && salario < 2000) {
            aumento = salario * 0.12;
        } else if (salario >= 2000 && salario < 3000) {
            aumento = salario * 0.09;
        } else if (salario >= 3000) {
            aumento = salario * 0.06;
        }

        salario += aumento;
        res.json({ salario });
});

app.post('/calcularMedia', (req, res) => {
    const { nota1, nota2, nota3 } = req.body;
    let media = (nota1 + nota2 + nota3) / 3;
    let situacao = media >= 6 ? 'Aprovado' : (media >= 4 ? 'Recuperação' : 'Reprovado');
    res.json({ media, situacao });
});

app.post('/calcularDesconto', (req, res) => {
    let { produto, preco } = req.body;
    let desconto = 0;

    if (produto.toLowerCase() === 'camisa') {
        desconto = 0.20;
    } else if (produto.toLowerCase() === 'bermuda') {
        desconto = 0.10;
    } else if (produto.toLowerCase() === 'calça') {
        desconto = 0.15;
    }

    preco = preco - preco * desconto;
    res.json({ produto, preco });
});

app.listen(4000, () => {
    console.log('API rodando em http://localhost:4000')
});
