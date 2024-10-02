const btnConverter = document.getElementsByClassName("btn_converter")[0];
const inputReal = document.getElementsByClassName('input_real');
const valueCourrent = document.getElementsByClassName('value_current');
const valueName = document.getElementsByClassName('value_name')[1];
const selectCurrency = document.getElementById('select_current');
const dolar = 5.50;
const euro = 5.90;
const btc = 340940

const corvertValues = () => {
    const reais = inputReal[0].value;


    if (selectCurrency.value === '€ Euro') {
        valueCourrent[1].innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
            reais / euro,
        );

    }

    if (selectCurrency.value === 'US$ Dólar americano') {
        valueCourrent[1].innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
            reais / dolar,
        );

    }

    if (selectCurrency.value === 'Bitcoin') {
        valueCourrent[1].innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "BTC", maximumFractionDigits: 8 }).format(
            reais / btc,
        );


    }

    valueCourrent[0].innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
        reais,
    );


};

const changeCurrency = () => {
    const currencyImg = document.getElementById('currency_img');
    if (selectCurrency.value === '€ Euro') {
        valueName.innerHTML = 'Euro';
        currencyImg.src = './assets/imgs/euro.svg';

    }

    if (selectCurrency.value === 'US$ Dólar americano') {
        valueName.innerHTML = 'Dólar americano';
        currencyImg.src = './assets/imgs/estados-unidos.svg'

    }

    if (selectCurrency.value === 'Bitcoin') {
        valueName.innerHTML = 'Bitcoin';
        currencyImg.src = './assets/imgs/btc.png'

    }

    corvertValues()

};

btnConverter.addEventListener('click', corvertValues);
selectCurrency.addEventListener('change', changeCurrency)