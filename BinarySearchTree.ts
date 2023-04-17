function bts() {
  class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    root: Node | null;

    constructor() {
      this.root = null;
    }

    insert(value: number) {
      const node = new Node(value);

      if (!this.root) {
        this.root = node;
        return this;
      }

      let current: Node = this.root;
      while (true) {
        if (value < current!.value) {
          if (!current!.left) {
            current!.left = node;
            return this;
          }
          current = current!.left;
        } else {
          if (!current!.right) {
            current!.right = node;
            return this;
          }
          current = current!.right;
        }
      }
    }

    search(value: number) {
      if (!this.root) return undefined;

      let current: Node = this.root;
      let found = false;

      while (!found) {
        if (value === current.value) found = true;
        else if (value < current!.value) {
          if (!current.left) return undefined;
          current = current!.left;
        } else {
          if (!current.right) return undefined;
          current = current!.right;
        }

        if (!current) return undefined;
      }

      return current;
    }
  }

  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(13);
  tree.insert(11);
  tree.insert(2);
  tree.insert(16);
  tree.insert(7);
}
