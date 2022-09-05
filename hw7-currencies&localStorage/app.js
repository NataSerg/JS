function getRates(date) {
    fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`).then(res => res.json()).then(data => {
        let htmlStr = data.map(currency => `<tr>
        <td>${currency.txt}</td>
        <td>${currency.rate}</td>
        </tr>`).join('');
        document.querySelector('.rates-table tbody').innerHTML = htmlStr;
    });
}

window.onload = function () {
    let currentDate = new Date().toJSON();
    currentDate = currentDate.split('T')[0];
    if (localStorage.getItem('currentDate')) {
        currentDate = localStorage.getItem('currentDate');
    }
    document.getElementById('select-date').value = currentDate;
    currentDate = currentDate.split('-').join('');
    getRates(currentDate);
    
}

document.getElementById('select-date').onchange = e => {
    let value = e.currentTarget.value;
    localStorage.setItem('currentDate', value);
    value = value.split('-').join('');
    getRates(value);
}