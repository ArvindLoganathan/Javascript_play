// let f1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve(100),0)
// });


// let f2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject(200),0)
// });


// f1.then((a)=>
// console.log(a)
// ).catch((e)=>
// console.log(e));

// f2.then((a)=>
// console.log(a)
// ).catch((e)=>
// console.log(e));

// Promise.all([f1,f2]).then((a)=>
// console.log(a)).catch((e)=>
// console.log(e));

let f1 = ()=> new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(100),100)
});


let f2 =()=> new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(200),10)
});

Promise.race([f1(),f2()]).then((a)=>
console.log(a)).catch((e)=>
console.log(e));

