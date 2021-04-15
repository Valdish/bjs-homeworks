function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
    
    let sumCredit = amount - contribution;
    let P = percent / 12 / 100; //1/12 от процентной ставки

    let indate = new Date;
    let totalMonth = (date.getFullYear() - indate.getFullYear()) * 12 + (date.getMonth() - indate.getMonth()); // высщитывание кол-ва месяцев для оплаты ипотеки

    let payMonth = sumCredit * (P + P / (((1 + P) ** totalMonth) - 1));
    console.log(payMonth);

    let totalAmount = payMonth * totalMonth;
    console.log(totalAmount); 

    
    return Number(totalAmount.toFixed(2));
    //return `Общая стоимость ипотеки: ${Number(totalAmount.toFixed(2))}, Первоначальный взнос: ${contribution}, Сумма основного долга: ${sumCredit}, Сумма за пользование кредитом: ${Number(totalAmount.toFixed(2)) - sumCredit}`;
}

function getGreeting(name) {
    let greeting = '';

    if(name > '') {
        greeting = `Привет, мир! Меня зовут ${name}.`;
    } else {
        greeting = 'Привет, мир! Меня зовут Аноним.'
    }
    
    console.log(greeting);
    return greeting;
}