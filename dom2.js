var like= document.getElementsByClassName('heart')
for (let i=0; i<like.length;i++){
    like[i].addEventListener('click',function(){
     like[i].classList.toggle('redd');
     }) 
    }

var items= document.querySelectorAll('.article');
const btn= document.querySelectorAll('.Remove');
for (let i=0; i<items.length;i++){
    btn[i].addEventListener('click', function(){
        items[i].remove();
        sum ();
        }
        ) 
    }
      

var quantities = Array.from (document.getElementsByClassName('quantity'));
var btnde= Array.from (document.getElementsByClassName('value-button-'));
var btnin= Array.from (document.getElementsByClassName('value-buttonp'));

for (let i=0;i<btnde.length;i++){
  btnde[i].addEventListener('click',function(){
    var value = parseInt(quantities[i].value, 10);
    var valuejs = isNaN(value) ? 0 : value;
    valuejs < 1 ? valuejs = 1 : '';
    valuejs--;
    quantities[i].value = valuejs;
    sum ()
  });
}

for (let i=0;i<btnin.length;i++){
    btnin[i].addEventListener('click',function(){
        var valuejs = parseInt((quantities[i]).value, 10);
        var value2 = isNaN(valuejs) ? 0 : valuejs;
        value2 ++;
        quantities[i].value = value2;
        sum ()
    });
  }
  
  function sum (){
    var quantities = Array.from (document.getElementsByClassName('quantity'));
    var prices = Array.from (document.getElementsByClassName('price'));
    let total =0;
    for (let i =0; i<prices.length;i++){
        total += parseInt(quantities[i].value)*parseInt(prices[i].innerHTML)
    }
    return (document.getElementById('total').innerHTML= total)

  }

