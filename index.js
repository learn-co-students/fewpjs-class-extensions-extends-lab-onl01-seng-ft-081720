class Polygon{
    constructor(array){
        this.array = array 

    }
    get perimeter(){
     return  this.array.reduce((acc,value) => acc + value,0)
    }
    get countsides(){
       this.array.map(e=> e.length)
    }
    
}

class Triangle extends Polygon{

}

class Square extends Polygon{
   get isvalid(){
      this.array.every((val,i,arr)=> val === arr[0])
   }
}