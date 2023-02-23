class Deferred {
    constructor() {
      this.callbacks = [];
      this.resolved = false;
      this.result = null;
    }
    then(callback) {
      this.callbacks.push(callback);
      return this;
    }
    resolve(result) {
      this.result = result;
      this.resolved = true;
      let res = this.result;
      for (let i = 0; i < this.callbacks.length; i++) {
        const callback = this.callbacks[i];
        res = callback(res);
      }
    }
  }

const d = new Deferred();
d.then(function (res) {
    console.log("1 ", res);
    return "a";
});
d.then(function (res) {
    console.log("2 ", res);
    return "b";
});
d.then(function (res) {
    console.log("3 ", res);
    return "c";
});
d.resolve('hello');