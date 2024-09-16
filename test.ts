// const isBd: boolean = false
// let age: number = 40
// const userName: string = 'Vlad'


// const createError = () => {
//     throw new Error('Some Error mes')
// } 


// function logBdMsg(isBd: boolean, userName: string, age: number, someValue?: any): string {
//     if (isBd) {
//         const mes = `Поздравляю, ${userName}, вам ${age + 1} лет`
//         console.log(mes);
//         return mes
//     } else if(!isBd) {
//         return 'Error'
//     } else {
//         return createError()
//     }
// }
// const result = logBdMsg(isBd, userName, age)
// console.log(result);


// const jsonData = '{"title": "Hello World"}'

// const titleObj: {title: string} = JSON.parse(jsonData)

// console.log(titleObj.title);


///////////////////////////////////////////////////////

// const currRate: string = "1.05";

// const fetchCurr = (response: string): number => {
//     const data: number = JSON.parse(response)
//     return data
// };

// function transferEurToUsd(available: boolean, amouth: number, commission: number): void {
//     if (available) {
//         let res = fetchCurr(currRate) * amouth * commission
//         console.log(res);
        
//     } else {
//         console.log("сейчас обмен недоступен");
//     }
// }
// transferEurToUsd(true, 500, 1.05)

////////////////////////////////////////////////////////////////

// type TAnimal = 'cat' | 'dog'

// let animal: TAnimal = "cat"

// function getAnimalVoice(someAnimal: TAnimal) {
//     switch(someAnimal) {
//         case "cat":
//         return 'may'
//             case 'dog':
//             return 'gav'
//         default:
//             const nextAnimal: never = someAnimal
//             return nextAnimal
//     }
// }

// let result = getAnimalVoice("dog")
// console.log(result);


// Новое занятие // Новое занятие // Новое занятие // Новое занятие // Новое занятие

// const tupleArray: number[] = [2, 3]
// const tupleArray: Array<number> = [2, 3]

// const tupleArray2: number[][] = [[1, 2, 3], [1, 2, 3]]

// const tupleArray3: string[] = ['2', '2']

// const itemByIndex = tupleArray3[0]
// itemByIndex.toUpperCase()
// const result = tupleArray3.map((el) => {
//     return 2
// })

// const obj = {
//     name: 'Vlad',
//     age: 22,
//     job: true
// }
// const result2 = Object.entries(obj) // [['name', 'Vlad'], ['age', 22], ['job' , true]]


// const tupleArray4: (boolean | number)[] = [true, 40]


// const tupleArray5: [boolean, number, string, ...string[] ] = [true, 40, 'some str']
// tupleArray5.push('next str')
// tupleArray5[3] = 'new value'


// const tupleArray6:[...boolean[], number, string] = [true, false, true, false, 40, 'str']


// // function getPerson() {
// //     const res: [string, number] = ['Vlad', 22]
// //     return res
// // }
// // const person = getPerson()

// function getPerson(): [string, number] {
//     return ['Vlad', 22]
// }
// const person = getPerson()


// let user: [string, number?, boolean?];// ? - необязательный параметр

// user = ['str']
// user = ['str', 32]
// user = ['str', 32, false]
// // user[3] = false // er

// type Person = [name: string, age: number]

// let vlad: Person = ['Vlad', 22]
// let vlad2 = ['Vlad', 22]

// let v1 = vlad[0]
// let v2 = vlad[1]

// const [name, age] = vlad

// function getUserName2(user: (string | number)[] ) {
//     user.forEach(element => {
//         if (typeof element === 'string') {
//             element.toUpperCase()
//         } else {
//             element.toFixed()
//         }
//     })
// }

// function getUserName([name, age]: Person ) {
//     name.toUpperCase()
//     age.toFixed()
//     return name
// }
// getUserName(vlad)

////////////////////////////////////

type TAnimal = {
    name: string;
    voice: string;
    wool: boolean;
};

interface IAnimal {
    name: string;
    voice: string;
    wool: boolean;
}

type TCat = {
    climb: boolean;
} & TAnimal        // IAnimal

interface IDog extends TAnimal, IAnimal {
    friendly: boolean;
}

const cat: TCat = {
    name: 'Murzik',
    voice: 'may',
    wool: false,
    climb: true
};

const dog: IDog = {
    name: 'Rex',
    voice: 'gav',
    wool: true,
    friendly: true
};

function isCat(pet: TCat | IDog): pet is TCat {
    return (pet as TCat).climb !== undefined
}

function isDog(pet: TCat | IDog): pet is IDog {
    return (pet as IDog).friendly !== undefined
}

function playWithPet(pet: TCat | IDog) {
    if (isCat(pet)) {
        pet.climb
        console.log('играем с котом');
    } else  if (isDog(pet)){
        pet.friendly
        console.log('играем с собакой');
    } else {
        let a: never
    }
}
playWithPet(cat)
playWithPet(dog)


const box = document.querySelector('.box') as HTMLElement
const input = document.querySelector('input') as HTMLInputElement
const a = document.querySelector('a') as HTMLAnchorElement

const listA = document.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>
listA.forEach((el) => {
    
})