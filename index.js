function superbowlWin(record) {
let winYear = record.find(record => record.result === "W");
if (winYear) {
        return winYear.year;
    }
}

// function superbowlWin(array) {
//     let winningYear = array.find((array) => array.result === "W").year;
//     if (winningYear) {
//       return winningYear;
//     }
//   }
//   superbowlWin(record);

//----------EXAMPLE ONE
// const inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5}
//   ];
  
//   const result = inventory.find( ({ name }) => name === 'cherries' );
  
//   console.log(result) // { name: 'cherries', quantity: 5 }

//----------EXAMPLE TWO
// const trees = [
//     { name: "birch", count: 4 },
//     { name: "maple", count: 5 },
//     { name: "oak", count: 2 }
//   ];
  
//   const result = trees.find(tree => tree.name === "oak");
  
//   // { name: "oak", count, 2 }