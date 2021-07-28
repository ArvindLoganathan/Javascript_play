let f1 = ()=> new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(100),0)
});


let f2 =()=> new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(200),0)
});

async function main(){
    try{
    // let a=await f1();
    // console.log(a)
    // let b=await f2();
    // console.log(b)

    let b=await Promise.all([f2(),f1()]);
    console.log(b)
    return b;
    }
    catch(e){
        console.log(e)
        return "1";

    }
}


let b =main()
// console.log(b.then((a)=> a)); //always async return promises
b.then((a)=> console.log(a));