// THIS TESTING

// var b=20;
// const x = (b) =>{
//     console.log(this)
// }
// x()

// function f2(){
//     const e=20;
//     let f=20;
//     var g=20;
//     this.a=20;
//     console.log(this,e,f,g,)
//     return this;
// }


// console.log(f2())

// let b = new f2();
// console.log(b)

// ex2
// const x = (a) =>{
//     console.log(this)
//    const y = (b) =>{
//     console.log(this)
//         return a+b;
//     }   
//     return y;
// }

// var c = x(2)(3);

// ex3
// let o = {
//     foo: function() {
//         let x=7;
//         console.log(this);
//         return this;
//     },
//     bar() {   
//         console.log(this);
//     }
// };

// o.foo(); // o
// o.bar(); // o

// let b=o.foo;
// b()



// let o = {
//     a: "arvi",
//     bar: function()  {  
//         // return (() => {
//             console.log(this.a)
//         // })();      
//         // console.log(this.a)
//     }
// };

// o.bar();


// let o = {
//     a:[0,1,2],
//     bar: function() {   //return this as object
//         // bar: () => {   //return this as window
//         // this.a.forEach(function(tag){
//             // console.log(this)
//         // },this)
//         this.a.forEach(function(element) {
//             console.log(this,element)
//         });
//     }
// };

// o.bar()

let b = {
    a: "arvi",
    bar: function()  {  
        // return (() => {
            console.log(this.a)
        // })();      
        // console.log(this.a)
    }
};
console.log(b)