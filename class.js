// let a = 10;
// var b = 10;
// class Person {
//     constructor (name) {
//       this.name=name;
//     }
  
//     greet() {
//       console.log('Hi! My name is' + this.name);
//       console.log('Hi! My this' + this);
//     }
//   }
  
//   var john = new Person('John Doe');
//   john.greet(); // Hi! My name is John Doe

// var target1 = {myProp: 2}, target2 = {myProp: 2};
// var obj1 = Object.create(target1, {myProp: {value: 1}});
// var obj2 = Object.assign(target2, {myProp: 1});

// console.dir(obj1)
// console.dir(obj2)

//-------------------------


// let a = function(b) {
//     this.b = b;
//     this.call = function(){
//         return this.b;
//     }
// };

// a.prototype  = {
//     walk(){
//         return "r";
//     }
// }

// let z  = new a(21)
// console.dir(z)


// a.prototype.print = function() {
//     console.log(this.b);
// };
// console.dir(z)


// let b = function(){
//     a.call(this,5);
//     this.name="arvi"
// }
// b.prototype =  Object.create(a.prototype)
// b.prototype.constructor =  b;

// b.prototype.printf = function() {
//     console.log(this.b);
// };

// let z  = new a(21)
// console.dir(new b())


//-------object liternal-------------

// let a = {
//     walk1(){
//         return "1";
//     }
// };

// let b = {
//     walk2(){
//         return "2";
//     }
// };

// Object.setPrototypeOf(b,a)
// console.dir(b)


function log(x) {
    console.log("at "+x);
  }
  function delay(t) {
    return new Promise(resolve => setTimeout(resolve, t));
  }
  async function example() {
    log(1);
    await delay(50);
    log(2);
    return "asy";
  }
  function example2() {
    log(3);
    return delay(50).then(function cont() {
      log(4);
      return "without";
    })
  }
  console.log(example())
  console.log(example2())
  console.log(log(1))
  console.log(log(1))
  console.log(log(1))
  console.log(log(1))
  console.log(log(1))
  console.log(log(1))
  console.log(log(1))
  console.log(log(1))
  console.log(log(1))


  