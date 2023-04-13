function stack() {
  class Node {
    value: string;
    next: Node | null;
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Stack {
    size: number;
    first: Node | null;
    last: Node | null;

    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    push(value: string) {
      const node = new Node(value);

      if (this.size === 0) {
        this.first = node;
        this.last = node;
      } else {
        node.next = this.first;
        this.first = node;
      }

      this.size++;
      return this.size;
    }

    pop() {
      if (this.size === 0) return null;

      const nodeToRemove = this.first;

      this.first = nodeToRemove!.next;
      this.size--;
      if (this.size === 0) this.last = null;

      return nodeToRemove;
    }
  }
}
