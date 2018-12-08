// РЕКУРСИЯ


const countDown = (val, fn) => {
    fn(val);
    return (val > 0) ? countDown(val - 1, fn) : val;
};

countDown(10, val => console.log(val));

/*
* Функция countDown может быть изменена для выполнения обратного отсчета с задержкой.
* Эта модифицированная версия функции countdown может использоваться для создания
* таймера с обратным отсчетом:
* */

const countDown2 = (val, fn, delay = 1000) => {
    fn(val);
    return (val > 0) ? setTimeout(()=>countDown2(val - 1,fn), delay) : val;
};

countDown2(1000, val => console.log(val+' сек'));