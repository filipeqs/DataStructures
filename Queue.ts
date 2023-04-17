function queue() {
  class Node {
    value: string;
    next: Node | null;

    constructor(value: string) {
      this.value = value;
      this.next = null;
    }
  }

  class Queue {
    first: Node | null;
    last: Node | null;
    size: number;

    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    enqueue(value: string) {
      const node = new Node(value);

      if (this.size === 0) {
        this.first = node;
        this.last = node;
      } else {
        this.last!.next = node;
        this.last = node;
      }

      this.size++;

      return this.size;
    }

    dequeue() {
      if (this.size === 0) return null;

      const nodeToReturn = this.first;
      this.first = this.first!.next;

      if (!this.first) this.last = null;

      this.size--;

      return nodeToReturn!.value;
    }
  }
}
