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

   _print() {
      console.log(`HEAD: ${this.head.value}`);
      let currentNode = this.head;
      while (currentNode.next) {
         console.log(currentNode.value);
         currentNode = currentNode.next;
      }
      console.log(currentNode.value);
      console.log(`TAIL: ${this.tail.value}`);
   }

   toString() {
      this.toArray.map(node => node.toString()).toString();
   }

   toArray() {
      const nodes = [];
      let currentNode = this.head;

      while (currentNode !== null) {
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
      const newNode = new LinkedListNode(value, this.head);

      if (!this.tail) {
         this.tail = newNode;
      }

      this.head = newNode;

      return this;
   }

   find(value) {
      let currentNode = this.head;

      if (!this.head) {
         return null;
      }

      while (currentNode !== null) {
         if (currentNode.value === value) {
            return currentNode;
         }
         currentNode = currentNode.next;
      }
   }

   #deleteFirst() {
      if (!this.head) {
         return null;
      }
      this.head = this.head.next;
   }

   delete(value) {
      if (!this.head) {
         return null;
      }

      let deletedNode = null;
      let currentNode = this.head;

      while (this.head && this.head.value === value) {
         deletedNode = this.head;
         this.head = this.head.next;
      }

      if (currentNode !== null) {
         while (currentNode.next) {
            if (currentNode.next.value === value) {
               deletedNode = currentNode.next;
               currentNode.next = currentNode.next.next;
            } else {
               currentNode = currentNode.next;
            }
         }
      }

      if (this.tail.value === value) {
         this.tail = currentNode;
      }

      return deletedNode;
   }
}

const list = new LinkedList();

list
   .append('2')
   .append('3')
   .append('4')
   .append('4')
   .prepend('1')
   .prepend('1')
   .append('5');

console.log(list._print());
// console.log(list.toArray());

console.log(list.delete('4'));
console.log(list.delete('4'));

console.log(list._print());
// console.log(list.toArray());