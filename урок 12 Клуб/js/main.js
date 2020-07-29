

var name = prompt("введіть ваше імя");
var city = prompt("Введіть місто");
var age = parseInt (prompt("Введіть ваш вік"));

var validate = true;



if(!name || !city || !age ||
    (typeof name != "string" || typeof city !="string"  || age !="number" ))
  { 
 validate !=validate

    
    if(typeof name != "string") alert("Дані в поле імя введені не вірно");
    if(typeof city != "string") alert("Дані в поле місто введені не вірно");
    if(typeof age != "number") alert("Дані в поле вік введені не вірно, введіть число");
    
  
   if(!name) alert( "Не введено імя" );
    if(!city) alert( "не ввеедо місто");
    if(!age) alert("не введено вік" );
  } 

if(name && city && age && validate)

        {if ((age>=21) && (age<45)) alert(  '  Ласкаво просимо в клуб в місті  ' + city +'  танці, коктелі до ранку')
              else  if (age<18) alert("Управління поліції  " + city + " особа до 18 років намагалась потрапити у заклад")
                        else if ((age>=18) && (age<21)) alert( "Недостатній вік для входу в клуб")
else alert( "Ви застарі для цього клубу")
}
