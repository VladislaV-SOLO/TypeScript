"use strict";
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
// Новое занятие // Новое занятие // Новое занятие // Новое занятие // Новое занятие // Новое занятие
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
// type TAnimal = {
//     name: string;
//     voice: string;
//     wool: boolean;
// };
// interface IAnimal {
//     name: string;
//     voice: string;
//     wool: boolean;
// }
// type TCat = {
//     climb: boolean;
// } & TAnimal        // IAnimal
// interface IDog extends TAnimal, IAnimal {
//     friendly: boolean;
// }
// const cat: TCat = {
//     name: 'Murzik',
//     voice: 'may',
//     wool: false,
//     climb: true
// };
// const dog: IDog = {
//     name: 'Rex',
//     voice: 'gav',
//     wool: true,
//     friendly: true
// };
// function isCat(pet: TCat | IDog): pet is TCat {
//     return (pet as TCat).climb !== undefined
// }
// function isDog(pet: TCat | IDog): pet is IDog {
//     return (pet as IDog).friendly !== undefined
// }
// function playWithPet(pet: TCat | IDog) {
//     if (isCat(pet)) {
//         pet.climb
//         console.log('играем с котом');
//     } else  if (isDog(pet)){
//         pet.friendly
//         console.log('играем с собакой');
//     } else {
//         let a: never
//     }
// }
// playWithPet(cat)
// playWithPet(dog)
// const box = document.querySelector('.box') as HTMLElement
// const input = document.querySelector('input') as HTMLInputElement
// const a = document.querySelector('a') as HTMLAnchorElement
// const listA = document.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>
// listA.forEach((el) => {
// })
// Новое занятие // Новое занятие // Новое занятие // Новое занятие // Новое занятие // Новое занятие
// ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА 
// Дан объект 
// interface IFormData {
//     email: string;
//     title: string;
//     text: string;
//     checkbox: boolean;
// }
// const formData: IFormData = {
//     email: "",
//     title: "",
//     text: "",  // texteria
//     checkbox: false, // checkbox
//   };
// const form = document.querySelector('form') as HTMLFormElement
// const email = document.querySelector('#email') as HTMLInputElement
// const title = document.querySelector('#title') as HTMLInputElement
// const text = document.querySelector('#text') as HTMLTextAreaElement
// const checkbox = document.querySelector('#checkbox') as HTMLInputElement
//   // в html имеется форма с соответствующими полями для заполнения email(input), title(input), text(textarea), checkbox(input with type) + кнопка для submit
//   // Получая элементы со страницы - необходимо явно утвердить им соответствующие типы
//   // Последовательность действий:
//   // 1) При нажатие на submit,
//   // 2)  данные из 4х полей со страницы переходят в соответсвующие свойства объекта formData
//   // 3) Вызывается функция validateFormData с получаемым объектом (formData), которая возвращает true/false
//   // 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом 
//   form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     formData.email = email.value ?? ''
//     formData.title = title.value ?? ''
//     formData.text = text.value ?? ''
//     formData.checkbox = checkbox.checked ?? false
//     if(validateFormData(formData)) {
//         checkFormData(formData)
//     }
//   })
//   // Необходимо типизировать функцию
//   function validateFormData(data: IFormData): boolean {
//     const arrValues = Object.values(data) as IFormData[keyof IFormData][]// возвращает массив из значений: мэйл, титл, текст, чект
//     const isValid = arrValues.every((value) => value)
//     // Если каждое из свойств объекта data правдиво...
//     if (isValid) {
//       return true;
//     } else {
//       console.log("Please, complete all fields");
//       return false;
//     }
//   }
//   // Необходимо типизировать функцию
//   function checkFormData(data: IFormData): void {
//     const { email } = data;
//     const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"] as const;
//     const isNotValid = emails.some((value) => value === email)
//     // Если email совпадает хотя бы с одним из массива
//     if (isNotValid) {
//       console.log("This email is already exist");
//     } else {
//       console.log("Posting data...");
//     }
//   }
// Деструктуризация типов // Деструктуризация типов // Деструктуризация типов // Деструктуризация типов
// interface IuserDataForLog {
//     isBirthday: boolean,
//     userName: string,
//     age: number,
//     extraKey: string,
//     message: {
//         text: string
//     } ,
//     cars: ['BMW', 'Volvo']
// }
// const userDataForLog: IuserDataForLog = {
//     isBirthday: true,
//     userName: 'Vlad',
//     age: 22,
//     extraKey: 'some text',
//     message: {
//         text: 'error'
//     } ,
//     cars: ['BMW', 'Volvo']
// };
// type TLogUser = (data: IuserDataForLog) => void
// const copyLogUser: TLogUser = logUser
// copyLogUser(userDataForLog)
// const copyLogUser2: TLogUser = function (data) {
// console.log(data);
// }
// function logUser({
//     isBirthday,
//      userName, 
//      age, 
//      extraKey, 
//      message: {text}, 
//      cars: [car1, car2]
//     } : IuserDataForLog) {
//     console.log(isBirthday);
//     console.log(userName);
//     console.log(age);
//     console.log(extraKey);
//     console.log(text);
//     console.log(car1);
//     console.log(car2);
// }
// logUser(userDataForLog)
// /////////////////////////////////////////////
// type TServer = {
//     protocol: 'http' | 'https';
//     port: 3000 | 3001;
//     log: (msg: string) => void
// }
// const server: TServer = {
//     protocol: 'http', // 'https'
//     port: 3000,
//     log(msg) {
//         console.log(msg)
//     }
// }
// ///////////////////////////////////////////////
// type TStartServer = (protocol: TServer['protocol'], server: TServer['port'], log: TServer['log']) => string;
// type TStartServer2 = (protocol: 'http' | 'https', server: number, log: (msg: string) => void) => string;
// const startServer = (protocol: 'http' | 'https', server: number, log: (msg: string) => void): string => {
//     log(`Server started on ${protocol}, server: ${server}`);
//     return 'Start server'
// }
// const startServer2: TStartServer = (protocol, server, log) => {
//     log(`Server started on ${protocol}, server: ${server}`);
//     return 'Start server'
// }
// startServer(server.protocol, server.port, server.log)
///////////////////////////////////////////////////////////////
// type TSyles = {
//     [K: string]: string | number
// }
// interface IStyles {
//     [K: string]: string | number
// }
// const styles: IStyles = {
//     position: 'relative',
//     top: '0',
//     left: '0',
//     right: '2px'
// }
///////////////////////////////////////////////////////////////
// interface ICompany {
//     name: string;
//     price: number;
// }
// type TKeys = 'name' | 'price'
// type TKeys2 = keyof ICompany
// const keys: TKeys = 'name' // 'price
// const companyData: ICompany = {
//     name: 'Google',
//     price: 1000
// }
// function getCompanyData(obj: ICompany, key: keyof ICompany) {
//     console.log(obj[key])
// }
// getCompanyData(companyData, 'name')
///////////////////////////////////////////////////////////////
const PI = 3.14;
const clonePI = 3.14;
const dataFromBd = {
    water: 200,
    el: 350,
    price: 'local'
};
function checkData(data) {
    const dataFromUser = {
        water: 200,
        el: 350
    };
    return dataFromUser.water === data.water && dataFromUser.el === data.el;
}
checkData(dataFromBd);
///////////////////////////////////////////////////////////////
const totalData = {
    cookers: 'empty',
    hats: 89,
    date: new Date(),
    deficit: false,
    dishwashers: 'empty',
    jackets: 'empty',
    mixers: 62,
    pants: 37,
    paper: 'empty',
    scissors: 44,
    socks: 71
};
function printReport(data) {
    // если есть empty => выводим смс что "Нужны следующие элементы одежды..."
    // если empty нет => выводим смс "Всё в наличии"
}
printReport(totalData);
