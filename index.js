var dwarves = ['Dopey',  'Grumpy', 'Bashful'];
function dwarfRollCall(dwarves) {
   for(var i = 0; i < dwarves.length; i++){
    dwarves[i] = (i+1 + '. ' + dwarves [i] + ' ');
      }
  return (dwarves.join(''));
}
 console.log (dwarfRollCall(dwarves));

 
    var planeteerCalls = ['earth', ' wind', 'fire'];
 function summonCaptainPlanet(planeteerCalls){
  var capital = [];
   for (var i=  0; i < planeteerCalls.length; i++){
     planeteerCalls[i] = console.log(planeteerCalls[i].toUpperCase() + '!');
         }
   return planeteerCalls;
}
(summonCaptainPlanet(planeteerCalls));


var longCalls = ["earth", "wind", "fire", "water", "heart"];
function longPlaneteerCalls(longCalls) {
  var result;
  for (var i = 0; i < longCalls.length; i++){
    if ( longCalls[i].length > 4){
     result = true;
      console.log(result);
    }
    else {
      result = false;
      console.log (result);
    }
  }
   
  return ( result);
}

 longCalls.some (longPlaneteerCalls);
 
 

/*
var cheese  = ['cheddar', 'gouda', 'camembert'];
  function itsCheese(foods){
  return (['span','cheddar','das'].includes(foods));
      }
  console.log (cheese.find(itsCheese));
    
  function findTheCheese (foods) {
   var output;
  if(cheese.find(itsCheese) === 'cheddar'){
    output = 'cheddar';
    console.log (output);
   }
*/
<<<<<<< HEAD
/*var cheese  = ['cheddar', 'gouda', 'camembert']; 
=======
var cheese  = ['cheddar', 'gouda', 'camembert']; 
>>>>>>> 054dfae3423a02dfa4adf82393e295e78b565e12
  function findTheCheese (foods) {
   foods = ['ant','cheddar','das'];
  function itsCheese(foods){
  return (['sub','cheddar','malt'].includes(foods));
      }
  cheese.find(itsCheese);
<<<<<<< HEAD
  
  if(cheese.find(itsCheese) === 'cheddar'){
    return ('cheddar') ;
  }
=======
 var output;
 
 if(cheese.find(itsCheese) === 'cheddar'){
    return ('cheddar') ;
  
 }

>>>>>>> 054dfae3423a02dfa4adf82393e295e78b565e12
  return ("no cheese!");
}
//findTheCheese(foods);
findTheCheese(['mouse','cow','pig']);
<<<<<<< HEAD
*/
function findTheCheese(foods){
  var cheese = ["camembert", "cheddar","gouda"];
  for (var i = 0; i<foods.length; i++){
    for (var j = i; j < cheese.length;j++){
      if (foods[i] === cheese[j]){
        return cheese[j];
      }
    }
  }
  return "no cheese!";
}
console.log(findTheCheese('ant','cheddar','das'));
