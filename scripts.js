const btnConverter = document.getElementsByClassName("btn_converter")[0];
const inputReal = document.getElementsByClassName('input_real');
const valueCourrent = document.getElementsByClassName('value_current');
const valueName = document.getElementsByClassName('value_name')[1];
const selectCurrency = document.getElementById('select_current');

const corvertValues = async () => {
    const reais = inputReal[0].value;

    const moedas = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(res => res.json());

    const dolar = moedas.USDBRL.bid;
    const euro = moedas.EURBRL.bid;
    const btc = moedas.BTCBRL.bid;

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