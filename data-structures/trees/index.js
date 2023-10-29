class Node {
   constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {
   constructor() {
      this.root = null;
   }

   insert(data) {
      const node = new Node(data);

      if (!this.root) {
         this.root = node;
      } else {
         this.insertNode(this.root, node);
      }
   }

   insertNode(node, newNode) {
      if (newNode.data < node.data) {
         if (node.left === null) {
            node.left = newNode;
         } else {
            this.insertNode(node.left, newNode);
         }
      } else {
         if (node.right === null) {
            node.right = newNode;
         } else {
            this.insertNode(node.right, newNode);
         }
      }
   }

   inOrderTraverse(node, callback) {
      if (node !== null) {
         this.inOrderTraverse(node.left, callback);
         callback(node.data);
         this.inOrderTraverse(node.right, callback);
      }
   }

   preOrderTraverse(node, callback) {
      if (node !== null) {
         callback(node.data);
         this.preOrderTraverse(node.left, callback);
         this.preOrderTraverse(node.right, callback);
      }
   }

   postOrderTraverse(node, callback) {
      if (node !== null) {
         this.postOrderTraverse(node.left, callback);
         this.postOrderTraverse(node.right, callback);
         callback(node.data);
      }
   }

   traverse(callback) {
      this.inOrderTraverse(this.root, callback);
   }

   delete(node, data) {
   }

}

const BST = new BinarySearchTree();

/*
       6
    4      8
 1    -   7   -
*/

BST.insert(6);
BST.insert(4);
BST.insert(8);
BST.insert(7);
BST.insert(1);

console.log(BST);
BST.traverse((data) => console.log(data));


