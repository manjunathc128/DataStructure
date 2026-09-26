class SimpleQueue{
    constructor(){
        this.arr = []   // dynamic array implmented using underlying array of language 
        this.size = 0   // total number of elements at given point of time in an array 
    }

    enqueue(value){
        // on dynamic size array we donot want rear pointer as we can simply push at the end of array 
        this.arr.push(value)
    }

    dequeue(){
        if(this.size === this.arr.length){
            console.log('the queue is empty')
            return
        }
        return delete this.arr[this.size++]  //  wasted space --limitation 
       // now after dequeue  array space didnot got reclaimed instead left empty solt 
       // circular array solves this 
        
    }

    getFront(){
        if(this.size === this.arr.length){
            console.log('the queue is empty')
            return
        }
        return this.arr[this.size]
    }

    getRear(){
        if(this.size === this.arr.length){
            console.log('the queue is empty')
            return
        }
        return this.arr[this.arr.length - 1]
    }

    isEmpty(){
        return this.size === this.arr.length;
    }

}

const q1 =  new SimpleQueue()

q1.enqueue(1)
q1.enqueue(2)
q1.dequeue()
q1.dequeue()

console.log(q1.size, q1.arr.length, q1.arr)
q1.dequeue()


// q1.enqueue(3)
// q1.enqueue(4)


// console.log(q1.getFront())