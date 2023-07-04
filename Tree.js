class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    buildTree(value) {
        let newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(newNode, this.root)
        }
    }

    insertNode(newNode, root) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(newNode, root.left)
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(newNode, root.right)
            }
        }
    }
    find(root, value) {
        if (root === null) {
            return false;
        } else if (root.value === value) {
            return true;
        } else if (root.value > value) {
            return this.find(root.left, value)
        } else {
            return this.find(root.right, value)
        }
    }

    inOrder() {
        if (this.root === null) {
            return null
        } else {
            let result = [];
            function traverseOrder(node) {
                node.left && traverseOrder(node.left);
                result.push(node.value)
                console.log(node.value)
                node.right && traverseOrder(node.right);
            }
            traverseOrder(this.root)
            return result;
        }
    }

    preOrder() {
        if (this.root === null) {
            return null
        } else {
            let result = [];
            function traverseOrder(node) {
                result.push(node.value)
                node.left && traverseOrder(node.left);
                node.right && traverseOrder(node.right);

            }
            traverseOrder(this.root)
            console.log(result)
            return result;
        }
    }

    postOrder() {
        if (this.root === null) {
            return null
        } else {
            let result = [];
            function traverseOrder(node) {
                node.left && traverseOrder(node.left);
                node.right && traverseOrder(node.right);
                result.push(node.value)
                console.log(node.value)
            }
            traverseOrder(this.root)
            return result;
        }
    }


    levelOrder() {
        let queue = [];
        queue.push(this.root)
        while (queue.length) {
            let current = queue.shift();
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }

            console.log(current.value)
            return current.value
        }
    }

    minValue(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.minValue(root.left)
        }
    }
    maxValue(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.maxValue(root.right)
        }
    }

    deleteNode(value) {
        this.root = this.removeNode(this.root, value)
    }
    removeNode(root, value) {
        if (root === null) return null;
        if (root.value > value) {
            root.left = this.removeNode(root.left, value)
        } else if (root.value < value) {
            root.right = this.removeNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null;
            } else if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            root.value = this.minValue(root.right);
            root.right = this.removeNode(root.right, root.value);
        }
        return root;
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1) ? true : false;
    }
    findMinHeight(value = this.root) {
        if (value === null) {
            return -1;
        }
        let left = this.findMinHeight(value.left);
        let right = this.findMinHeight(value.right)
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    findMaxHeight(value = this.root) {
        if (value === null) {
            return -1;
        }
        let left = this.findMaxHeight(value.left);
        let right = this.findMaxHeight(value.right)
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }

    }

    findDepth(nodeVal, node = this.root, edgeCount = 0) {
        if (node === null) return;
        if (node.value === nodeVal) return edgeCount;
    
        if (node.value < nodeVal) {
          return this.findDepth(nodeVal, node.right, edgeCount + 1);
        } else {
          return this.findDepth(nodeVal, node.left, edgeCount + 1);
        }
      }
}

let bst = new Tree()
bst.buildTree(20)
bst.buildTree(10)
bst.buildTree(5)
bst.buildTree(8)
bst.buildTree(15)
bst.buildTree(25)
bst.buildTree(30)
bst.buildTree(22)
// bst.inOrder()
// bst.preOrder()
// bst.postOrder()
// console.log(bst.find(bst.root, 20))
// console.log(bst.minValue(bst.root))
// console.log(bst.maxValue(bst.root))
// bst.levelOrder()
// bst.deleteNode(20)
// console.log(bst)
// console.log(bst.findMinHeight())
// console.log(bst.findMaxHeight())
// console.log(bst.isBalanced())
console.log(bst.findDepth(10))



