/*
* ЧИСТЫЕ ФУНКЦИИ
* Чистой функцией называют функцию, которая возвращает значение, вычисляемое
* на основе ее аргументов.
* Чистые функции получают как минимум один аргумент и всегда возвращают значение или другую функцию.
* Эти функции не имеют побочных эффектов, не устанавливают значений глобальных переменных и не
* изменяют ничего, что относится к состоянию приложения. Они рассматривают свои аргументы в
* качестве неизменяемых данных.
* (стр 50, React & Redux)
* */

const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
};
const selfEducate = person =>
    ({
        ...person,
        canRead: true,
        canWrite: true
    });
console.log(selfEducate(frederick));
console.log(frederick);
// {name: "Frederick Douglass", canRead: true, canWrite: true}
// {name: "Frederick Douglass", canRead: false, canWrite: false}