const {PrimasClient} = require("@prisma/client");
const { PrismaClient } = require("@prisma/client/extension");
const prisma = new PrismaClient();

async function main(){
    const usuario = await  prisma.usuario.create({
        data:{
         nome:"joão",
         email:"joãodelas@gmail.com",
         senha:"123",
         tipo:"cliente",
        }
    });
  
   console.log("Novo Usuario" + usuario);

    const usuarios = await prisma.usuario.findMany();
    console.log("Usuarios: ")
    console.log(usuarios)

}

main();