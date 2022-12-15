
/*Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения 
только собственных свойств. Данная функция не должна возвращать значение.
*/

let obj = {
    type: 'Car',
    name: 'Ford',
    model: 'Mustang',
    enginVolume: 5.2
}

Object.keys(obj).forEach(key => { console.log(key, obj[key]) });


/*Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у 
переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/

let obj2 = {
    type: 'Car',
    name: 'Ford',
    model: 'Mustang',
    enginVolume: 5.2
}
console.log('name' in obj2); 


/*Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.
*/

const obj3 = Object.create(null);

/*Задание 4.
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
План:
    Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
    Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
    У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
    Создайте экземпляры каждого прибора.
    Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

Общие требования:
        Имена функций, свойств и методов должны быть информативными
        Соблюдайте best practices:
                использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
                информативные имена (а не a, b);
                четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
                использование синтаксиса es6 (кроме функции-конструкторов) и так далее.
*/
//1. Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.

function ElectricalAppliance(name, power) {   
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  } 
  //2.Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
  ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.pluggedIn = true;
  }
  
  ElectricalAppliance.prototype.getPowerUsed = function() {
    return this.pluggedIn ? this.power : 0;
  }
  
  
  let lamp = new ElectricalAppliance('lamp', 1.5);
  let tv = new ElectricalAppliance('tv', 1000);
  let computer = new ElectricalAppliance ('computer', 3);
  
  console.log(lamp.getPowerUsed() + tv.getPowerUsed() + computer.getPowerUsed());
  
  lamp.plugIn();
  console.log(lamp.getPowerUsed() + tv.getPowerUsed() + computer.getPowerUsed());
  
  tv.plugIn();
  console.log(lamp.getPowerUsed() + tv.getPowerUsed() + computer.getPowerUsed());

  computer.plugIn();
  console.log(lamp.getPowerUsed() + tv.getPowerUsed() + computer.getPowerUsed());

/*Задание 5.
Переписать консольное приложение из предыдущего юнита на классы.
Общие требования:
    Имена классов, свойств и методов должны быть информативными;
    Соблюдать best practices;
    Использовать синтаксис ES6.
*/
class ElectricalAppliance
{
  constructor(name, voltage)                    // родительский класс
  {
    this.name = name;
    this.voltage = voltage;
    this.isPlugged = false;
  }
   
  plugIn()                                      // включен прибор
  {
    console.log(this.name + " is plugged!"); 
    this.isPlugged = true;
  }
  
  getPowerUsed()                                // если включен, то сколько он потребляет
  {
    return this.isPlugged ? this.voltage : 0;
  }
}

let lamp = new ElectricalAppliance('lamp', 2);
let tv = new ElectricalAppliance('tv', 1.5);
let computer = new ElectricalAppliance ('computer', 3.9);

console.log(lamp.getPowerUsed() + tv.getPowerUsed() + computer.getPowerUsed());

lamp.plugIn();
console.log(lamp.getPowerUsed() + tv.getPowerUsed() + computer.getPowerUsed());

tv.plugIn();
console.log(lamp.getPowerUsed() + tv.getPowerUsed() + computer.getPowerUsed());

computer.plugIn();
console.log(lamp.getPowerUsed() + tv.getPowerUsed() + computer.getPowerUsed());