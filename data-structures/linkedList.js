class LinkedListNode {
   constructor(value, next = null) {
      this.value = value;
      this.next = next;
   }

   toString() {
      return `${this.value}`;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
   }

   toString() {
      this.toArray.map(node => node.toString()).toString();
   }

   toArray() {
      const nodes = [];
      let currentNode = this.head;

      while (currentNode) {
         nodes.push(currentNode);
         currentNode = currentNode.next;
      }
      return nodes;
   }

   append(value) {
      const newNode = new LinkedListNode(value);

      if (!this.head || !this.tail) {
         this.head = newNode;
         this.tail = newNode;
         return this;
      }

      this.tail.next = newNode;
      this.tail = newNode;

      return this;
   }

   prepend(value) {
      const newNode = new LinkedListNode(value);
   }
}

const list = new LinkedList();
list.append('1');
list.append('2');
list.append('3');
list.toArray();
console.log(list);