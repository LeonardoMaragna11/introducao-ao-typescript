//      Dando Tipo para as variaveis
/*
    function soma(a: number, b:number){
        return a + b
    }
*/

//      Types e Interfaces

// interface IFelino extends IAnimal{
//     visaoNoturna:boolean,
// }

// interface IAnimal{
//     nome:string,
//     tipo:'terrestre' | 'aquatico',
//     executarRugido():void
// }

// const animal:IAnimal={
//     nome:'Elefante',
//     tipo:'terrestre',
//     executarRugido:()=>{console.log('Arrr');}
// }

// const felino: IFelino = {
//     nome:'Leão',
//     tipo:'terrestre',
//     visaoNoturna: false,
//     executarRugido:()=>{console.log('Miau')}
// } 

// type IAnimal={
//     nome:string,
//     tipo:'terrestre' | 'aquatico',
//     executarRugido():void
// }

// const input = document.getElementById('input') as HTMLInputElement
// input.addEventListener('input', (event)=>{
//     // console.log('Digitei');
//     // console.log(i.value)
//     // console.log(event.currentTarget);
//     const i = event.currentTarget as HTMLInputElement
// })

//     Generic types

// function preenchelista<T>(arr: any[], valor:T){
//     return arr.map(item => valor + item)
// }

// preenchelista([1,2,3,4,5], 6)

interface IUsuario {
    id: string
    email: string
    cargo ?: 'funcionário' | 'gerente' | 'coordenador' | 'supervisor'  
}


function redirecione(usuario:IUsuario){
    if(usuario.cargo){
        // Redirecionar(usuario.cargo)
    }

    // Redirecionar para a area do usuario
} 