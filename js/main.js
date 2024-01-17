// let age = prompt("Напишите Ваш возраст?")
// if (age != null) {
//     alert("Мой возраст" + age)
// }else {
//     alert("Вы нажали отмена")

// }
// if(confirm ("Удалить Ваш аккаунт?")) {
//     alert("Удалено")
// }else {
//     alert("Отменено")
// }

// confirm ("Удалить Ваш аккаунт?") ? alert("Удалено") : alert("Отменено")

// let count = 0;
//     while(count < 10) {
//         console.log(count);
//         if(count == 4) {
//             break;
//         }
//         count++;
//     }

// let count = 19;
// do {
//     console.log(count);
//     count--;
// } while(count >= 7)

// for(let i=0; i<15;i+=2) {
//     console.log(i)
// }

// let arr = [5,7,9,1,0];
// arr.forEach(function(item, i, arry) {
//     console.log(`Элемент: ${item}
//     Индекс: ${i}
//     Удвоенный элекмент: ${item*2}`)
// })

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for(let item of arr) {
//     console.log(item*2)
// }

// let obj = {
//     "name": "Peter",
//     "age": 25,
//     "number": 889995678
// }

// for(let key in obj) {
//     console.log(`Ключ ${key}, Значение ${obj[key]}`)
// }

// let people = [
//     {id: 1, name: "Ivan"},
//     {id: 2, name: "Masha"},
//     {id: 3, name: "Alex"},
//     {id: 4, name: "Kate"},
// ]

// let a = people.filter(function(item) {
//     if(item.id<3) return item
// })

// console.log(a)

// let arr = [5,7,9,1,0];
// let newArr = arr.map(function(item) {
//     return item*3
// })
// console.log(newArr)

// let arr = []
// for(let i=30; i>0; i-=3) {
//     arr.push(i)
// }

// for(let i=30; i>0; i--) {
//     if(i%3==0) {
//         arr.push(i)
//     }
// }


// for(let i=0; i<20; i+=2) {
//     arr.push(i)
// }

// let arr = []
// for(let i=0; i<10; i++) {
//     arr.push(Math.pow(i,2))
// }

// let arr1 = [7,4,2,1,0,6,2,6,2,15,4,16]
// let count = 0;
// for(let i=0; i<arr1.length; i++) {
//     if(arr1[i]%2==0) {
//         count++;
//     }
// }
// console.log("Всего четных элементов: " +count)

// function printText(name, age) {
//     return "Hello My name is "+name+", Age: "+age
// }

// let name1 = "Pavel"
// let age1 = 19

// let res = (printText(name1, age1));
// //console.log(res);
// alert(res);


// let obj = {
//     name: "Ivan",
//     age: 18,
//     hello() {
//         console.log("Меня зовут "+ this.name)
//     }
// }
// console.log(obj.age);


// let arr = [1,5,2,25,16,14,49,3,1,7]
// arr.sort(function(a,b) {
//     // if(a==b) return 0
//     // if(a>b) return  1
//     // if(a<b) return -1
//     return a-b
// })
// console.log(arr)

// arr.sort()

//Задача№1
function fibonachi(count) {
    let fib = [];
    for(let i=0; i<count; i++) {
        if(i==0) fib[i] = 1;
        else if(i==1) fib[i] = 2;
        else fib[i] = fib[i-2] + fib[i-1];
    }
    return fib;
}
let f = fibonachi(10);
console.log(f)