// Solution 2:
// Each row from top to bottom are 3, 5, 7
const S1Data = [
  [1,2,3],
  [4,5,6,7,8],
  [9,10,11,12,13,14,15]
]

const TaskItemS1 = (player, rowIndex, colIndex) =>{
   const selectedRow = S1Data[rowIndex - 1];

   if(!selectedRow) { return; }

   const selectedCol = selectedRow[colIndex - 1];
   
   if(!selectedCol){ return; }

   selectedRow.splice(colIndex - 1,1); // take 

   if(!selectedRow.length) {
     S1Data.splice(rowIndex - 1,1);
   }

   if(!S1Data.length){
     console.log(`${player} is lose`)
   }  
}


// TaskItem('player1',1,1)
// TaskItem('player2',1,1)
// TaskItem('player1',1,1)
// TaskItem('player2',1,1)
// TaskItem('player1',1,1)
// TaskItem('player2',1,1)
// TaskItem('player1',1,1)
// TaskItem('player2',1,1)

// TaskItem('player1',1,1)
// TaskItem('player2',1,1)

// TaskItem('player1',1,1)
// TaskItem('player2',1,1)

// TaskItem('player1',1,1)
// TaskItem('player2',1,1)

// TaskItem('player1',1,1)
// TaskItem('player2',1,1)

// TaskItem('player1',1,1)
// TaskItem('player2',1,1)


// Solution 2:
// Each row from top to bottom are 3, 5, 7
const S2Data = [3,5,7];
const TaskItemS2 = (player, rowIndex ) =>{
  let itemsCount = S2Data[rowIndex - 1];
  if(!itemsCount) { 
    return; 
  }
  S2Data[rowIndex - 1] = (itemsCount - 1) <= 0? 0 : itemsCount - 1

  if(S2Data.reduce((p,c)=>(p+c)) === 0){
    console.log(`${player} is lose`)
  }
}

// TaskItemS2('P1',1)
// TaskItemS2('P2',1)
// TaskItemS2('P1',1)
// TaskItemS2('P2',1)

// TaskItemS2('P1',2)
// TaskItemS2('P2',2)
// TaskItemS2('P1',2)
// TaskItemS2('P2',2)
// TaskItemS2('P1',2)

// TaskItemS2('P1',3)
// TaskItemS2('P2',3)
// TaskItemS2('P1',3)
// TaskItemS2('P2',3)
// TaskItemS2('P1',3)
// TaskItemS2('P2',3)
// TaskItemS2('P1',3)


