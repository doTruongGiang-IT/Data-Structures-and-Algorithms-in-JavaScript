let Priority_Queue = function() {
    this.collection = [];

    this.print = function() {
        console.log(this.collection);
    };

    this.enqueue = function(value) {
        if(this.isEmpty()) {
            this.collection.push(value);
        }else {
            let added = false;
            for(let i = 0; i < this.collection.length; i++) {
                if(value[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, value);
                    added = true;
                    break;
                };
            };
            if(!added) {
                this.collection.push(value);
            };
        };
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

let myPriorityQueue = new Priority_Queue();

myPriorityQueue.enqueue(["do truong giang", 2]);
myPriorityQueue.enqueue(["duong bac dong", 3]);
myPriorityQueue.enqueue(["bui trung hau", 1]);
myPriorityQueue.print();
console.log("Peek after enqueue 3 element: " + myPriorityQueue.front());
myPriorityQueue.dequeue();
console.log("Peek after dequeue 1 element: " + myPriorityQueue.front());
myPriorityQueue.enqueue(["luu duc hoa", 4]);
myPriorityQueue.print();
console.log("New peek: " + myPriorityQueue.front());
console.log("Is this queue empty: " + myPriorityQueue.isEmpty());