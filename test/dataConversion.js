/*
 * ПРЕОБРАЗОВАНИЕ ДАННЫХ ( стр.54  React & Redux )
 * этом подразделе мы рассмотрим вопросы преобразования данных из одного типа
 * в другой с помощью этих и некоторых других ключевых функций.
 */

// Рассмотрим массив, состоящий из названий гимназий:
const schools = [
    "Yorktown",
    "Washington & Lee",
    "Wakefield"
];

// Если нужна функция, создающая новый массив из названий гимназий,
// начинающихся на букву W, то можно воспользоваться методом Array.filter:

const wSchools = schools.filter(school => school[0] === "W");
console.log(wSchools);

/*
 * При решении задачи по удалению элемента из массива нужно пользоваться
 * функцией Array.filter, а не функцией Array.pop или Array.splice, так как Array.filter
 * не вносит в данные никаких изменений.
 */

const cutSchool = (cut, list) => list.filter(school => school !== cut);
console.log(cutSchool("Washington & Lee", schools).join(" * "));
// "Yorktown * Wakefield"
console.log(schools.join("\n"));
// Yorktown
// Washington & Lee
// Wakefield

/*
 * Вместо предиката метод Array.map получает в качестве своего аргумента функцию.
 * Эта функция будет вы зываться по одному разу для каждого элемента массива, и то,
 * что она возвращает, будет добавлено к новому массиву:
 */

const highSchools = schools.map(school => `${school} High School`);
console.log(highSchools.join("\n"));
// Yorktown High School
// Washington & Lee High School
// Wakefield High School
console.log(schools.join("\n"));
// Yorktown
// Washington & Lee
// Wakefield


/*
 * Функция map может создавать массив из объектов, значений, массивов, других функций, то есть
 * из любого имеющегося в JavaScript типа. Рассмотрим пример функции map, возвращающей
 * объект для каждой гимназии:
 */

const highSchools2 = schools.map(school => ({name: school}));
console.log(highSchools2);
// [
// { name: "Yorktown" },
// { name: "Washington & Lee" },
// { name: "Wakefield" }
// ]


/*
* Создать чистую функцию, изменяющую один объект в массиве объектов,
* для этого также может использоваться функция map.
* В следующем примере имя гимназии Stratford будет изменено на
* LPHP без внесения изменений в массив schools:
* */

let sch = [
    {name: "Yorktown"},
    {name: "Stratford"},
    {name: "Washington & Lee"},
    {name: "Wakefield"}
];

const editName = (oldName, name, arr) => arr.map(item => (item.name === oldName) ? {...item, name} : item);
let updatedSchools = editName(sch[1].name, 'LPHP', sch);
console.log(updatedSchools);
console.log(sch);

/*
   [ { name: 'Yorktown' },
  { name: 'LPHP' },
  { name: 'Washington & Lee' },
  { name: 'Wakefield' } ]
[ { name: 'Yorktown' },
  { name: 'Stratford' },
  { name: 'Washington & Lee' },
  { name: 'Wakefield' } ]
*/


/*
* Если нужно преобразовать массив в объект, можно воспользоваться методом Array.map в
* сочетании с Object.keys. Последний может использоваться для возвращения из
* объекта массива ключей. Предположим, что нужно преобразовать объект schools
* в массив schools:
* */

const schoo = {
    "Yorktown": 10,
    "Washington & Lee": 2,
    "Wakefield": 5
};

const schoolArray = Object.keys(schoo).map(key =>
    ({
        name: key,
        wins: schoo[key]
    })
);

console.log(schoolArray);
// [
// {
// name: "Yorktown",
// wins: 10
// },
// {
// name: "Washington & Lee",
// wins: 2
// },
// {
// name: "Wakefield",
// wins: 5
// }
// ]


/*
* Преобразовывать массивы в элементарные типы и другие объекты.
* Для преобразования массива в любое значение, включая число, строку,
* булево значение, объект или даже функцию, могут использоваться функции
* reduce и reduceRight.
* В массиве из чисел нужно найти самое большое число.
* Массив нужно преобразовать в число, для чего можно воспользоваться
* функцией reduce:
* */
const ages = [21, 18, 42, 40, 64, 63, 34];
const maxAge = ages.reduce((max, age) => {
    console.log(`${age} > ${max} = ${age > max}`);
    if (age > max) {
        return age
    } else {
        return max
    }
}, 0);
const max = ages.reduce(
    (max, value) => (value > max) ? value : max,
    0
)
console.log('maxAge', maxAge);
// 21 > 0 = true
// 18 > 21 = false
// 42 > 21 = true
// 40 > 42 = false
// 64 > 42 = true
// 63 > 64 = false
// 34 > 64 = false
// maxAge 64