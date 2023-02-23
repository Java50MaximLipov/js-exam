// console.log(a);
// var a = 10;
// var a = 100;
// var a = 1000;
// console.log(a);
//  keyword `var` defines variable common in all parts of JS

// function f(a) {
//     console.log(a, this.a);
// }
// let b = 20;
// setTimeout(f.bind({ a: "Hello" }, b), 1000);
// f.call({ a: "World" }, b);
// f.bind({ a: "Hello" }, b);

// function getId() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(100), 1000);
//     })
// }
// function getUserName() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("user123"), 500);
//     })
// }
//  1. scenario - we should get id and only after that we get username
// async function f1() {
//     const id = await getId();
//     console.log(id);
//     const username = await getUserName();
//     console.log(username);
// }
// f1();

// getId().then(id => {
//     console.log(id)
//     return getUserName()
// }).then(username => console.log(username));

//  2. scenario - simultanious performing getId and getUserName (parallel)
// const promiseId = getId();
// const promiseUser = getUserName();
// Promise.all([promiseId, promiseUser]).then(idUser => console.log(`id: ${idUser[0]}, username: ${idUser[1]}.`));

//  3. scenario - there will be considered only one result from promise moving in resolved order
// const promiseId = getId();
// const promiseUser = getUserName();
// Promise.race([promiseId, promiseUser]).then(res => console.log(res, typeof res));



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


// const promise = new Promise((resolve) => {
//     resolve('hello');
//   });
  
//   promise
//     .then((res) => {
//       console.log("1 ", res);
//       return "a";
//     })
//     .then((res) => {
//       console.log("2 ", res);
//       return "b";
//     })
//     .then((res) => {
//       console.log("3 ", res);
//       return "c";
//     });
  