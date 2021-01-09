function warnTheSheep(queue) {
    // console.log(queue);

    let counter = 0;
  
    for(let i = queue.length-1; i >= 0; i--){
  
      counter++
  
    //   console.log(counter)
    if (queue[i]==='wolf') {
        return 'Pls go away and stop eating my sheep!'
        
    } else if(queue[i]==='wolf'){
        return `Oi! sheep number ${counter-1}! you are about eaten by wolf`
    }
}
    
    
}


// console.log(warnTheSheep([1,2,3,4,5,6]));
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 5! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");




// }
//     if (queue[queue.length -1] === 'wolf') {
//         return 'Pls go away and stop eating my sheep';
//         } else {
//          let index = queue.findIndex( (x) => x == 'wolf' );
//          return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
//         }