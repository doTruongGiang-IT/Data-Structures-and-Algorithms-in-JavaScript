let breadthFirstSearch = function(graph, root) {
    let nodeLen = {};
    for(let i = 0; i < graph.length; i++) {
        nodeLen[i] = Infinity;
    };
    nodeLen[root] = 0;
    let queue = [root];
    let current;
    while(queue.length !== 0) {
        current = queue.shift();
        let currentConnected = graph[current];
        let neighborIndex = [];
        let index = currentConnected.indexOf(1);
        while(index !== -1) {
            neighborIndex.push(index);
            index = currentConnected.indexOf(1, index + 1);
        };
        for(let j = 0; j < neighborIndex.length; j++) {
            if(nodeLen[neighborIndex[j]] === Infinity) {
                nodeLen[neighborIndex[j]] = nodeLen[current] + 1;
                queue.push(neighborIndex[j]);
            };
        };
    };
    return nodeLen;
};

let graph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];

console.log(breadthFirstSearch(graph, 1));