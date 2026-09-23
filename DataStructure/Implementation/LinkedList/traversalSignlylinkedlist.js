class Node {
    constructor(value){
        this.data = value;
        this.next = null
    }
}

// iterative approach of traversing singly linked list 
function traverseList(HeadNode){
    if(!HeadNode){
        return
    }
    while (HeadNode) {

        console.log(HeadNode.data)
        if(HeadNode.next){
            console.log(` ${'->'} `)
        }
        HeadNode = HeadNode.next
    }

}

// recursive approach of traversing singly linked list 
function traverseListRecursive(HeadNode){
    if(HeadNode == null){
        return
    }
    process.stdout.write(HeadNode.data.toString()) //print inline
    if(HeadNode.next){
        process.stdout.write(' -> ')
    }
    traverseListRecursive(HeadNode.next)
}


const Head = new Node(10)
Head.next = new Node(20);
Head.next.next = new Node(30);

// traverseList(Head);
traverseListRecursive(Head)