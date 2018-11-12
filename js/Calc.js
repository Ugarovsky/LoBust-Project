function calc(youleague,youdivision,wantleague,wantdivision){
if(+youleague > +wantleague){
unvalidate();
    return false;
}
if(+youleague == +wantleague && +youdivision <= +wantdivision){
unvalidate();
    return false;
}
var suma=0;
for(+youleague; +youleague < +wantleague; +youleague++){   
if(youdivision == 0){
youdivision = 5;
}
    for(+youdivision;+youdivision >= 1; +youdivision--){
    suma += (+youleague*100);
    }
       
}
if(+youleague == +wantleague){
youdivision = 5;
    for(+youdivision; +youdivision > +wantdivision; +youdivision--){
    suma += (+youleague*100);
    }
}
validate(suma);
}
 

function unvalidate(){
     swal("Пожалуйста, проверьте введенные данные", "И попробуйте сново!");
            league.style.border = "1px solid red";
            division.style.border ="1px solid red";
            leaguewant.style.border = "1px solid red";
            divisionwant.style.border ="1px solid red";
            return false;

}

function validate(suma){
     league.style.border = 0;
            division.style.border =0;
            leaguewant.style.border = 0;
            divisionwant.style.border = 0;
    swal("Cумма вашего заказа составляет: " + suma + " Рублей.(без учета Доп.Услуг) Хотите продолжить и отправить заявку?", {
  buttons: ["Нет, спасибо", "Да, продолжить"],
});
}



    
    
   


