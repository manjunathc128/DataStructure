// simple queue
// Double Ended Queue
// priority Queue

class SimpleQueue{  // simple queue
    constructor(capacity){
        this.capacity =  capacity
        this.arr = new Array(capacity)
        this.size = 0
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
}