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

const input = document.getElementById('input') as HTMLInputElement
input.addEventListener('input', (event)=>{
    // console.log('Digitei');
    const i = event.currentTarget as HTMLInputElement
    console.log(i.value)
    // console.log(event.currentTarget);
})