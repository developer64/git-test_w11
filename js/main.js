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


// //Задача№1:Число Фибоначи

// function fibonachi(count) {
//     let fib = [];
//     for(let i=0; i<count; i++) {
//         if(i==0) fib[i] = 1;
//         else if(i==1) fib[i] = 2;
//         else fib[i] = fib[i-2] + fib[i-1];
//     }
//     return fib;
// }
// let f = fibonachi(6);
// console.log(f)

// Задача№2:Вычислить факториал числа

// function factorial(n) {
//     let fact = 1;
//     if(n==0) return fact;
//     for(let i=1; i<=n; i++) {
//         fact*= i;
//     }
//     return fact;
// }
// let a = factorial(0)
// console.log(a)
// let b = factorial(3)
// console.log(b)
// let c = factorial(8)
// console.log(c)


// Задача№3

// let addAndMul = function(num) {
//     num += ""; //Добавить пустую строку
//     let add = 0, mul = 1;
//     for(let i = 0; i<num.length; i++) {
//         add += +num[i]; // +num[] превращаем строку в число и суммируем
//         mul *= num[i]; //+ можно не указывать, будет работать без него!Почему?
//     }
//     return {
//         "Сумма": add,
//         "Произведение": mul
//     }  
// }
// console.log(addAndMul("795")) //Число можно вводить как в ковычках "", так и без
// console.log(addAndMul(795)) //Число можно вводить как в ковычках "", так и без


//Задача№4 Число пепервернуть в обратную сторону z.b. 3486

// function reverse(number) {
//     number += "";
//     let reverseNumber = ""; //Записывать сюда результат
//     for( let i=number.length-1; i>=0; i--) { //length-1 это длина поледнего индекса, 4длина, отчет с 0.
//         reverseNumber += number[i]
//     } 
//     return + reverseNumber
// }
// console.log(reverse(3486))


//Задача№5 Посчитать количество четных и нечетных чисел.

// function reverse(number) {
//     number += "";
//     let chet = 0, nechet = 0;
//     for(let i = 0; i<number.length; i++) {
//         if(number[i] % 2 == 0) chet++;
//         else nechet++;
//     }
//     return {
//         "Четные цифры": chet,
//         "Нечетные цифры": nechet,
//     }
// }
// console.log(reverse(3486954))

// Задача№6 Угадать случайное число от 0 до 100 за 10 попыток

function randomNumber() {
    let number = Math.floor(Math.random() * 100);
    for(let count=1;count<=10; count++) {
        let result = +prompt(`Попытка №${count}, Введите числа:`)
        if(result == number) {
            return alert(`Вы угадали число! Попытка: ${count}, Число: ${number}`)
        } else if(result < number) {
            alert(`Ваше число ${result} меньше загаданного!`)
        
        } else if(result > number) {
            alert(`Ваше число ${result} больше загаданного!`)
        }        
    }
    return alert(`Вы не угадали число! Число: ${number}`)
}
randomNumber()








