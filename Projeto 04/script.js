const button = document.querySelector('.btn');
const select = document.querySelector('#currency-select');


const dolar = 5.2;
const euro = 5.9;

const convertValues = () => {
    const real = document.querySelector('.Real').value;
    const currencyReal = document.querySelector('.currency-real');
    const currencyDolar = document.querySelector('.currency-dolar');

    currencyReal.innerHTML = new Intl.NumberFormat('pt-BR', 
        {style: 'currency', currency: 'BRL'}
    ).format(real);

    if(select.value === 'US$ Dólar americano') {
        currencyDolar.innerHTML = new Intl.NumberFormat('en-US', 
        {style: 'currency', currency: 'USD'}
    ).format(real/dolar);
    } else {
        currencyDolar.innerHTML = new Intl.NumberFormat('de-DE', 
        {style: 'currency', currency: 'EUR'}
        ).format(real/euro);
    }
};

const changeCurrency = () => {
    const currencyName = document.querySelector('#currency-name');
    const currencyImg = document.querySelector('#currency-img');

    if(select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro';
        currencyImg.src = './assets/Design sem nome 1.png';
    } else {
        currencyName.innerHTML = 'Dólar americano';
        currencyImg.src = 'assets/estados-unidos (1) 1.png'
    }

}

button.addEventListener('click', convertValues);
select.addEventListener('change', changeCurrency);