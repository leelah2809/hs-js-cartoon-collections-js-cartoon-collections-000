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
     planeteerCalls[i] = (planeteerCalls[i].toUpperCase() + '!');
         }
   return planeteerCalls;
}
console.log(summonCaptainPlanet(planeteerCalls));


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
 
 else{
   output = "no cheese!";
    console.log (output);
 }
 
 return output;
}

findTheCheese(['ant','cheddar','das']);
findTheCheese(['ant','cow','das']);
