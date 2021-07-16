let Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    };

    this.pop = function() {
        if(this.count === 0) {
            return undefined;
        }else {
            this.count --;
            let result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        };
    };

    this.peek = function() {
        return this.storage[this.count - 1];
    };

    this.size = function() {
        return this.count;
    };
};

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log("Peek after push 3 element: " + myStack.peek());
myStack.pop();
console.log("Peek after pop 1 element: " + myStack.peek());
myStack.push("do truong giang");
console.log("New peek: " + myStack.peek());
