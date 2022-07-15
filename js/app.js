const defaultPrice = 1299;
let isPromoCodeUse = false;
const ramDefault = document.getElementById('ram-default');
const ram16Gb = document.getElementById('ram-16gb');
const ssdDefault = document.getElementById('ssd-default');
const ssd512Gb = document.getElementById('ssd-512gb');
const ssd1Tb = document.getElementById('ssd-1tb');
const shippingDefault = document.getElementById('shipping-default');
const shippingFast = document.getElementById('shipping-fast');
const totalCost = document.getElementById('total-cost');
const promoSubmit = document.getElementById('promo-submit');
const totalPromoCost = document.getElementById('total-promo-cost');

// update final price via Promo code
function updatePromoCodePrice() {
    const promoCode = document.getElementById('promo-code');
    const promoCodeValue = promoCode.value.toLowerCase();
    if (promoCodeValue == 'stevekaku'.toLocaleLowerCase() && isPromoCodeUse == false) {
        let discountPrice = parseFloat(totalPromoCost.innerText);
        discountPrice = discountPrice - (discountPrice * (20 / 100));
        totalPromoCost.innerText = discountPrice;
        promoCode.value = '';
        isPromoCodeUse = true;
    }
    else
        return;
}

// update total price
function updateTotalPrice() {
    isPromoCodeUse = false;
    let sumOfTotalPrice = defaultPrice;
    for (const category of arguments) {
        const categoryPrice = parseFloat(document.getElementById(category + '-cost').innerText);
        sumOfTotalPrice += categoryPrice;
    }
    totalCost.innerText = sumOfTotalPrice;
    totalPromoCost.innerText = sumOfTotalPrice;
}

// add extra price
function updatePrices(priceCategory, price) {
    const extraPrice = document.getElementById(priceCategory + '-cost');
    extraPrice.innerText = price;
    updateTotalPrice('mem', 'ssd', 'delivery');
}

// Events
ramDefault.addEventListener('click', function () {
    updatePrices('mem', 0);
})
ram16Gb.addEventListener('click', function () {
    updatePrices('mem', 180);
})
ssdDefault.addEventListener('click', function () {
    updatePrices('ssd', 0);
})
ssd512Gb.addEventListener('click', function () {
    updatePrices('ssd', 100);
})
ssd1Tb.addEventListener('click', function () {
    updatePrices('ssd', 180);
})
shippingDefault.addEventListener('click', function () {
    updatePrices('delivery', 0);
})
shippingFast.addEventListener('click', function () {
    updatePrices('delivery', 20);
})
promoSubmit.addEventListener('click', function () {
    updatePromoCodePrice();
})