class Queue {

    constructor(){
        this.storage = {}
        this.head = 0
        this.tail = 0
    }
    // add element at end of queue (enqueue)
    addEnd(value){     
        this.storage[this.tail] = value
        this.tail++
    }
    // remove element ar begining of queue
    // (dequeue)
    removeFirst(){
        if(this.isEmpty()) return undefined
        let result = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return result
    }

    removeEnd(){
        if(this.isEmpty()) return undefined

        this.tail--
        let result = this.storage[this.tail]
        delete this.storage[this.tail]
        return result
    }

    addFirst(value){
        this.head--
        this.storage[this.head] = value
    }


    peek(){
        return this.storage[this.head]
    }


    size(){
        return this.tail - this.head
    }

    isEmpty(){
        return this.size() === 0
    }
}

// A data structure that allows you to add and remove elements from both ends with O(1) 
// efficiency is called a Deque (pronounced "deck", short for Double-Ended Queue).
// example  { '-1': 'Task A', '-2': 'Task B' , '0': 'Task C'}