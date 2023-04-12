class ListNode {
  val: string;
  next: ListNode | null;
  prev: ListNode | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLikedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: string) {
    const newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;

      return this;
    }
  }

  pop() {
    if (!this.head) return undefined;

    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const prev = this.tail!.prev;
      this.tail = prev;
      this.tail!.next = null;
      poppedNode!.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head!.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val: string) {
    const newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const prevHead = this.head;
      this.head = newNode;
      newNode.next = prevHead;
      prevHead.prev = newNode;
    }

    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null;

    const half = Math.floor(this.length / 2);

    let positon = 0;
    let currentNode = this.head;

    if (index <= half) {
      while (positon !== index) {
        currentNode = currentNode!.next;
        positon++;
      }

      return currentNode;
    } else {
      positon = this.length - 1;
      currentNode = this.tail;

      while (positon !== index) {
        currentNode = currentNode!.prev;
        positon--;
      }

      return currentNode;
    }
  }

  set(index: number, val: string) {
    const node = this.get(index);

    if (!node) return false;

    node.val = val;

    return true;
  }

  insert(index: number, val: string) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const prevNode = this.get(index - 1);
    const nextNode = prevNode!.next;
    const newNode = new ListNode(val);

    prevNode!.next = newNode;
    newNode.prev = prevNode;

    nextNode!.prev = newNode;
    newNode.next = nextNode;

    this.length++;

    return true;
  }
}

const list = new DoublyLikedList();
list.push('Hi');
list.push('There');
