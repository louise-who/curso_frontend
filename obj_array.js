//desafio objeto aula 11

const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
      rua: 'Rua central',
      numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
  }
  //resolvendo por ponto
  console.log("1.a: " + user.nome);
  console.log("1.b: " + user.endereco.rua);
  console.log("1.c: " + user.projetos[1]);

  //resolvendo por colchetes
  console.log("2.a: " + user['nome']);
  console.log("2.b: " + user['endereco']['rua']);
  console.log("2.c: " + user['projetos']['1']);

  //criando variavel

let var_rua = user['endereco']['rua']

console.log(var_rua);

  //desafio array aula 11

  const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]


// parte 1
students.forEach((estudante) => { //estudante é o argumento para iterar na função
console.log(estudante["name"])
});

// parte 2
students.forEach((estudante) => {
if (estudante["age"] > 20) console.log(estudante["name"])
});

// parte 3
let arr_scholarship = [] //criando a nova array
students.forEach((estudante) => {
  const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
  ]

// parte 1
students.forEach((estudante) => {
  console.log(estudante["name"])
});

// parte 2
students.forEach((estudante) => {
  if (estudante["age"] > 20) console.log(estudante["name"])
});

// parte 3
let arr_scholarship = []

students.forEach((estudante) => {
  if (estudante["scholarship"]==true) arr_scholarship.push(estudante)
});

console.log(arr_scholarship)