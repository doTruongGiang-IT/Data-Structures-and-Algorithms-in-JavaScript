let Queue = function() {
    this.collection = [];

    this.print = function() {
        console.log(this.collection);
    };

    this.enqueue = function(value) {
        this.collection.push(value);
    };

    this.dequeue = function() {
        this.collection.shift();
    };

    this.front = function() {
        return this.collection[0];
    };

    this.size = function() {
        return this.collection.length;
    };

    this.isEmpty = function() {
        return this.collection.length === 0;
    };
}; 

let myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.print();
console.log("Peek after enqueue 3 element: " + myQueue.front());
myQueue.dequeue();
console.log("Peek after dequeue 1 element: " + myQueue.front());
myQueue.enqueue("do truong giang");
myQueue.print();
console.log("New peek: " + myQueue.front());
console.log("Is this queue empty: " + myQueue.isEmpty());