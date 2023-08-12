alert('Üdvözöljük a webáruházunkban!');
var type = prompt('Adja meg a választott könyv címét!');
var quantity = prompt('Adja meg a darab számot!');
var types = {
    Tyúk : 300,
    Liba :400,
    Kutya: 500,
    Cica: 1000,
}
var price = types [type];


var total = quantity * price;

alert('Fizetendő: '+ total + ' Ft');



var types = {
    Tyúk : 300,
    Liba :400,
    Kutya: 500,
    Cica: 1000,
}