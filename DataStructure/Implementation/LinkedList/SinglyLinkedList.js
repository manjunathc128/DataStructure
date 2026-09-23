class Node{
    constructor(value){
        this.data = value;
        this.next = null
    }
}

class SinglyLinkedList{

    head = null;
    tail = null;

    constructor(headValue, tailValue){
        if(headValue && tailValue){
            this.head = new Node(headValue)
            this.tail = new Node(tailValue)
            this.head.next = this.tail
        }
        else if (headValue) 
            this.head = new Node(headValue)
        else if (tailValue)  
            this.tail = new Node(tailValue)

    }
    // Insertion at the end 
    addAtEnd(val){
        let newTail = new Node(val)
        this.tail.next = newTail
        this.tail = newTail
    }
    // Insertion at the begining 
    addAtBegining(val){
        let newHead = new Node(val)
        newHead.next = this.head
        this.head = newHead
    }

    // given head , position and val insert at given position 

    insertAtGivenPos(head, val, pos){
        // position is 1 based
        let cur = head
        if (pos < 1){
            return
        }
        if (pos === 1){
            let newNode = new Node(val)
            newNode.next = cur
            this.head = newNode
            return
        }

        for(let i = 1; i < pos-1 ; i++){
            if(!cur.next){
                return
            }
            cur = cur.next

        }
        let newNode = new Node(val)
        if(cur.next === null){
            cur.next = newNode
        }
        newNode.next = cur.next
        cur.next = newNode
    }

//---------------- Deletion ----------------------------

    // given an head of a linked list  delet at the begining of the liked list 

    removeAtBegining(){
        if(!this.head){
            return
        }
        if(!this.head?.next){
            this.head = null
            return 
        }
        let temp = this.head
        this.head = temp.next
        temp = null
        return this.head
    }

    // given head remove the last node of linked list

    removeAtEnd(){
        if(!this.head){
            return
        }
        if(!this.head?.next){
            this.head = null
            return 
        }

        let secondlast = this.head
        while(secondlast.next.next){
            secondlast = secondlast.next
        }

        delete secondlast.next
        secondlast.next = null
        this.tail = secondlast
    }

// -------------Printing---------------------------

    printLinkedList(head){
        if(!head){
            return 
        }
        process.stdout.write(head.data.toString())
        if(head.next){
            process.stdout.write(' -> ')
        }
        this.printLinkedList(head.next)
    }

}


const firstlinkedlist =  new SinglyLinkedList(10, 20)

firstlinkedlist.addAtBegining(30)
firstlinkedlist.addAtBegining(40)
firstlinkedlist.addAtEnd(50)
firstlinkedlist.addAtEnd(60)

// firstlinkedlist.insertAtGivenPos(firstlinkedlist.head, 1000, 0)

// console.log(firstlinkedlist.removeAtBegining())
firstlinkedlist.removeAtEnd()

firstlinkedlist.printLinkedList(firstlinkedlist.head)