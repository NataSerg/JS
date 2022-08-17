function renderCurrency(currencies) {
    var htmlStr = '';
    for (var item in currencies) {
        var currency = currencies[item];
        htmlStr += `<tr>
                    <td>${+item + 1}</td>
                    <td>${currency.txt}</td>
                    <td>${currency.rate}</td>
                    <td>${currency.cc}</td>                    
        </tr>`
    }
    document.querySelector('.currencies-table tbody').innerHTML = htmlStr;
}

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20220815&json').then(res => res.json()).then(function (data) {
    var currencies = [];
    for (var currency of data) {
        var newCurrency = {
            txt: currency.txt,
            rate: currency.rate,
            cc: currency.cc
        };
        currencies.push(newCurrency);
    }
    renderCurrency (currencies)
})