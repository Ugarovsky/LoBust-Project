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
 





    
    
   


