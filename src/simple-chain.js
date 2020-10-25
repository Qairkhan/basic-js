const chainMaker = {
  arr: [],

  getLength() {
    throw "Not implemented";
  },

  addLink(value) {
    value == null ? this.arr.push("null") : this.arr.push(value.toString());
    return this;
  },

  removeLink(position) {
    if (this.arr[position - 1] === undefined) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    const res = `( ${this.arr.join(" )~~( ")} )`;
    this.arr = [];
    return res;
  },
};

module.exports = chainMaker;
