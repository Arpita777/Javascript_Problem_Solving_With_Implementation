// Question: https://leetcode.com/problems/rotting-oranges/description/

class queue{
    constructor(){
        this.arr = [];
        this.front = -1;
        this.rear = -1;
    }
    isEmpty(){
        return this.front === -1 && this.rear === -1
    }
    push(item){
        this.rear++;
        this.arr[this.rear] = item;
        if(this.front === -1) {
            this.front = this.rear;
        }
    }
    pop(){
      if(this.front === -1 && this.rear === -1){
        return null;
      }
      let poppedItem = this.arr[this.front];
      if(this.front === this.rear){
        this.front = -1;
        this.rear = -1;
      }
      else{
        this.front++;
      }
      return poppedItem;
    }
    getSize(){
        if(this.front === -1 && this.rear === -1){
            return 0;
        }
        else{
            return this.rear - this.front +1;
        }
    }
}

var check = function(grid,x,y){
    let row = grid.length;
    let col = grid[0].length;
    return(x>=0 && x< row && y>=0 && y<col && grid[x][y]===1);
}

var doesHaveFreshOrange = function(grid, row, col){
      for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
          if(grid[i][j] === 1){
            return true;
          }
        }
      }
      return false;
}

var orangesRotting = function(grid) {
    const q = new queue();
    let row = grid.length;
    let col = grid[0].length;
    let maxTime = 0;
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(grid[i][j] === 2){
               const ob = {
                timeFrame: maxTime,
                x: i,
                y: j
               }
               q.push(ob);
            }
        }
    }
    while(!q.isEmpty()){
        let popped = q.pop();
        const {timeFrame, x, y} = popped;
        maxTime = Math.max(maxTime,timeFrame)
        if(check(grid,x-1,y)){
            grid[x-1][y] = 2;
            q.push({timeFrame: timeFrame+1,x:x-1,y});
        }
        if(check(grid,x+1,y)){
            grid[x+1][y] = 2;
            q.push({timeFrame: timeFrame+1,x:x+1,y});
        }
        if(check(grid,x,y-1)){
            grid[x][y-1] = 2;
            q.push({timeFrame: timeFrame+1,x:x,y: y-1});
        }
        if(check(grid,x,y+1)){
            grid[x][y+1] = 2;
            q.push({timeFrame: timeFrame+1,x,y:y+1});
        }
    }
    if(doesHaveFreshOrange(grid,row,col)){
        return -1
    }
    else{
        // let element = q.arr[q.arr.length-1];
        // return element.timeFrame+1;
        return maxTime;
    }
};
