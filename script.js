"use strict";

//Задание 1
let outp;

function isNumberInRange (Numb){
  let  chekNumb = (Numb > 0 && Numb < 10) ? 'True' : 'false';
    return chekNumb;
}

outp = isNumberInRange (+prompt('Задания №1.Введите число от 1 до 9'));
alert(outp);

// Задания 2

let even;
function isEven(c){
  if( c % 2 == 0){
    return(true);
  }else{
    return(false);
  }  
}

even = isEven(+prompt('Задания 2. Введите четное число'));
alert(even);

// Задвние 3. 

let value = +prompt('Задание 3. Введите значения value.', '');
  switch (value){
    case 0:
      alert( 0 );
      break;
    case 1:
      alert( 1 );
      break;
    case 2 :
    case 3 :
      alert( '2,3' ); 
      break     
  }

  //Заданик 4. 
  
  let a = +prompt('Заданик №4. Введите значения a для сравнения');;
  let b = +prompt('Заданик №4. Введите значения b для сравнения');
  function min(a, b){
    if(a < b){
      return a + ' ' + 'Меньше';;
    }
    else if(a > b){
      return b + ' ' + 'Меньше';
    }else{
      return 'Ошибка. Введены несравневыемы значения';
    }
  }

  let result = min(a, b);
  alert(result);





