let y=20;
var z=20;
{
const a=20;
let b=20;
var c=20;

const f1= () => {
    let d=20;
    console.log(this,d)
}

function f2(){
    const e=20;
    let f=20;
    var g=20;
    console.log(this,e,f,g,)
}

console.log(a,b,c);
f1();
f2();
}
{
    const a=20;
    let b=20;
    var c=50;
    var d=50;
}