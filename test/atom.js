// НЕИЗМЕНЕНЯЕМОСТЬ ДАННЫХ
let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
};

// React & Redux 49 стран.
// функция изменяет базовый объект
function rateColor(color, rating) {
    color.rating = rating;
    return color
}
console.log(rateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 5


// React & Redux 49 стран.
// функция неизменяет базовый объект
/*
Именно так неизменяемые данные ведут себя в приложении. Вместо изменения
исходных структур данных создаются измененные копии этих структур, исполь-
зуемые взамен оригинала.
*/
const rateColors = (color, rating) => ({...color, rating});
console.log(rateColors(color_lawn, 6).rating); // 6
console.log(color_lawn.rating); // 5


// Создать функцию, которая будет добавлять цвета к массиву, используя Array.push:
let list = [
    {title: "Rad Red"},
    {title: "Lawn"},
    {title: "Party Pink"}
];
// функция изменяет базовый массив цветов
var addColor = function (title, colors) {
    colors.push({title: title});
    return colors;
};
console.log(addColor("Glam Green", list).length); // 4
console.log(list.length); // 4

// React & Redux 49 стран.
// функция не изменяет базовый массив цветов, а делает копию с вновь добавленн цветом
//const addColors = (title, array) => array.concat({title}); // старая версия JS
// новая версия js, использован ... (оператор распространения → стр. 34 React & Redux)
const addColors = (title, list) => [...list, {title}];
console.log(addColors("Glam Green", list).length); // 5
console.log(list.length); // 4