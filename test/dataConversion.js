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