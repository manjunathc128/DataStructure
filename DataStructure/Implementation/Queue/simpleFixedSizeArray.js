// simple queue
// Double Ended Queue
// priority Queue


// O(n)  insertion and deletion at begining , O(1) at the end   
// when simple Array is used for simple queue enqueue is done at rare(end) and dequeue is done at start
// which require shifting indices 


// SimpleQueue implemented for fixed capacity array 

class SimpleQueue{  // simple queue
    constructor(capacity){
        this.capacity =  capacity       // max capacity of an array 
        this.arr = new Array(capacity)  // array created using predifined capacity 
        this.size = 0                   // at any point of time gives total number of elements on an array   
    }

    enqueue(x){
        if(this.size === this.capacity) {
            return 
        }
        this.arr[this.size++] = x
    }

    dequeue() {
        if(this.size === 0){
            return
        }
        for(i=1; i < this.size; i++){
            this.arr[i-1] = this.arr[i]
        }
        this.size--
    }

    getFront(){
        if (!this.arr[0] || this.size === 0){
            console.log('queue is empty ')
            return
        }

        return this.arr[0]
    }

    // when we have fixed size array with capacity the rear element will be the size (points to current index 
    // holding the last/rear element in queue)

    getRear(){
        if(this.size === 0){
            console.log('queue is empty')
            return 
        }
        return this.arr[this.size - 1]
    }

    isEmpty(){
        if(this.size === 0){
            return true
        }else{
            return false
        }
    }

    ifFull(){
        return this.size === this.capacity
    }
}

const q1 =  new SimpleQueue(5)
q1.enqueue(1)
q1.enqueue(2)
console.log(q1.getFront())
console.log(q1.getRear())