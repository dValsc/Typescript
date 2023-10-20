// criando interface usuário
interface Usuario{
    nome: string;
    idade: number;
    cidade: string;
    interesses: string[];
    seguidores: number;
}

// criando objeto de usuário
let usuario1: Usuario = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    interesses: ["Esportes", "Música", "Tecnologia"],
    seguidores: 500
}

let usuario2: Usuario = {
    nome: "Maria",
  idade: 25,
  cidade: "Rio de Janeiro",
  interesses: ["Viagens", "Cinema", "Fotografia"],
  seguidores: 800
}

// retornar usuários

function listarUsuario(usuario : Usuario){
    return `${usuario.nome} ${usuario.interesses}`;
}

console.log(listarUsuario(usuario1))
console.log(listarUsuario(usuario2))