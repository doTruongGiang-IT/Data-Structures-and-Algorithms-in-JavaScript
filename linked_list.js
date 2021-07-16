let LinkedList = function() {
    this.length = 0;
    this.head = null;

    let Node = function(value) {
        this.value = value;
        this.next = null;
    };

    this.size = function() {
        return this.length;
    };

    this.head = function() {
        return this.head;
    };

    this.add = function(value) {
        let node = new Node(value);
        if(this.head === null) {
            this.head = node;
        }else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            };
            current.next = node;
        };
        this.length++;
    };

    this.remove = function(value) {
        let currentNode = this.head;
        let preNode;
        if(currentNode.value === value) {
            this.head = currentNode.next;
            currentNode.next = null;
            delete currentNode;
        }else {
            while(currentNode.value !== value) {
                preNode = currentNode;
                currentNode = currentNode.next;
            };
            preNode.next = currentNode.next;
        };
        this.length--;
    };

    this.isEmpty = function() {
        return this.length === 0;
    };

    this.indexOf = function(value) {
        let currentNode = this.head;
        let index = -1;
        while(currentNode) {
            index++;
            if(currentNode.value === value) {
                return index;
            };
            currentNode = currentNode.next;
        };
        return -1;
    };

    this.elementAt = function(index) {
        let currentNode = this.head;
        let count = 0;
        while(count <= index) {
            count++;
            currentNode = currentNode.next;
        };
        return currentNode.value;
    };

    this.addAt = function(index, value) {
        let node = new Node(value);
        let currentNode = this.head;
        let preNode;
        let currentIndex = 0;
        if(index > this.length) {
            return false;
        }else {
            while(currentIndex <= index) {
                currentIndex++;
                preNode = currentNode;
                currentNode = currentNode.next;
            };
            node.next = currentNode;
            preNode.next = node;
        };
        this.length++;
    };

    this.removeAt = function(index) {
        let currentNode = this.head;
        let preNode;
        let currentIndex = 0;
        if(index < 0 || index > this.length) {
            return false;
        }else {
            while(currentIndex <= index) {
                currentIndex++;
                preNode = currentNode;
                currentNode = currentNode.next;
            };
            preNode.next = currentNode.next;
        };
        this.length--;
        return currentNode.value;
    };
};

let linkedList = new LinkedList();
linkedList.add('kitten');
linkedList.add('puppy');
linkedList.add('dog');
linkedList.add('cat');
linkedList.add('tiger');
linkedList.add('fish');
console.log(linkedList.size());
console.log(linkedList.removeAt(3));
console.log(linkedList.elementAt(3));
console.log(linkedList.size());
