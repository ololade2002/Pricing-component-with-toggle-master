let checkBox = document.querySelector('#toggle');
let Monthly = document.querySelectorAll('.price-monthly');
let Annually = document.querySelectorAll('.price-annually');

checkBox.addEventListener('change',function() {
    if(checkBox.checked) {
        Annually.forEach(price => price.style.display = 'none');
        Monthly.forEach(price => price.style.display = 'flex');
    } else {
        Annually.forEach(price => price.style.display = 'flex');
        Monthly.forEach(price => price.style.display = 'none');
    }
});