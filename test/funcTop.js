/*
 * Функции верхнего порядка (стр. 59 REACT & REDUX)
 * Они способны манипулировать другими функциями и могут получать функции
 * в качестве аргументов, или возвращать функции, или делать и то и другое.
 * Все следующие функции: Array.map, Array.filter и Array.reduce — считаются функциями высшего порядка
 */

const invokeIf = (condition, fnTrue, fnFalse) =>
    (condition) ? fnTrue() : fnFalse();
const showWelcome = () =>
    console.log("Welcome!!!");
const showUnauthorized = () =>
    console.log("Unauthorized!!!");
invokeIf(true, showWelcome, showUnauthorized) // "Welcome"
invokeIf(false, showWelcome, showUnauthorized) // "Unauthorized"
