# Lista de exercicios da Aula 1 e Aula 2
- Exemplo 1

- Exemplo 2

- 1 Desenvolva um endpoint que calcule desconto de INSS de um funcionário, se o salário for menor ou igual a 1212,00 reais será de 7,5%, se estiver entre 1212,01 e 2427,35 será de 9%, se estiver entre 2427,36 e 3641,03 o desconto é 12%, se estiver entre 3641,04 e 7087,22 será de 14% e se for maior do que 7087,22 o teto que é o máximo cobrado 14% de 7087,22. Mostre o desconto e o valor do salário final.

- 2 Desenvolva um endpoint que leia os valores de três lados de um triângulo (a, b e c) e se os três lados forem diferentes escreva ESCALENO se os três lados forem iguais EQUILÁTERO e se apenas dois lados forem iguais ISÓSCELES.

- 3 Desenvolva um endpoint que leia o nome e o preço de uma mercadoria. Se o preço for menor do que 1000 terá um aumento de 5% no preço da mercadoria, senão o aumento será de 7%. Mostrar o nome da mercadoria e o seu novo preço.

- 4 Desenvolva um endpoint que leia 6 números inteiros e exiba na tela ao final, o maior número que foi digitado pelo usuáriou.

- 5 Escreva um endpoint que leia 5 números inteiros em qualquer ordem e exiba na tela ao final, os cinco números em ordem crescente.

- 6 Escreva um endpoint que leia dois números inteiros e determine qual é o maior e o menor.

- 7 Desenvolva um algortimo que faça o cálculo do reajuste salarial do funcionário, baseado nos seguintes parâmetros:

15% de aumento : 1.500,00 <= salario Atual < 1.750,00
12% de aumento : 1.750,00 <= salario Atual < 2.000,00
9% de aumento : 2.000,00 <= salario Atual < 3.000,00
6% de aumento : salario Atual >= 3.000,00
8 Crie um endpoint que calcule a média de 3 notas do aluno e informe sua situação: (nota maior ou igual a 6 : aprovado), (nota inferior a 6 e maior ou igual a 4 : recuperação), (nota menor que 4 : reprovado).

- 9 Uma loja está fazendo uma promoção e precisa de ajuda no momento da venda, para liberar os descontos. Baseado na peça, calcule o desconto e exiba o valor final da venda. (camisa - 20% de desconto, bermuda - 10% de desconto, calça - 15% de desconto).

# Tecnologias

- NodeJS
- VsCode
- Insomnia

# Como testar

- Clone o repositório
- Abra o projeto no VsCode
- Em um terminal cmd ou bash digite npm install para instalar as dependências
- Após a instalação das dependências, digite npm start ou npx nodemon para iniciar o servidor
- Abra o Insomnia, importe o arquivo insomnia.json e teste os endpoints
