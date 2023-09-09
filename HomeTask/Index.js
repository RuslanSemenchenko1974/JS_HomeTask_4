/**
 * Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
 */
let arr = [0,1,2,3,4,5,6,7,8,9,10]

for (let index = 0; index < arr.length; index++) {
    if (arr[index]%2===0 && arr[index]!==0) {console.log(`${arr[index]} - четное число`);}
    else if (arr[index]===0) {console.log(`${arr[index]} - это ноль`);}
    else {console.log(`${arr[index]} - нечетное число`);}
    
}

/* 
Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
*/

const arr2 = [1, 2, 3, 4, 5, 6, 7];
arr2.splice(3,2)
console.log(arr2);

/* 
Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/

const Arr2 = Array.from({length:5}, (_) => Math.floor(Math.random() * 10))
console.log(Arr2);

console.log(`Сумма Элементов : ${Arr2.reduce((F,el) => F+el)}`);
console.log(`Минимальное число : ${Math.min.apply(Math, Arr2)}`);

let perem = Arr2.indexOf(3);
if (perem===-1){console.log('Числа 3 в Массиве нет');}
else {console.log(`Число 3 под индексом ${perem}`);}

/**
 * *Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
 */

perem = '';
for (let index = 0; index < 20; index++) {
    perem = perem+'*';
    console.log(perem);    
}