# Javascript_play

scope:
global - at root with var ..includes var varibale declared in blocked scope(hoisted). 
script - let and const in root declarion(global declaration i.e not inside fun).  blocked scope and local scope can make use of it i.e available to use. class definition also will inside script.
block - inside block{} (let and const are introduced mainly to use inside blocked scope because picked by Garbage Collector(GC) after block executed).
local  - scope inside function .. each function call execution will create new Execution context and put into callstack above ananoumous(Global execution context). funtion can have blocked scope variable inside it.

Important point:
let and const has scrict scope in global declared varibale, attached to Sript Scope

fun(){
    {
        {
            it will 2 blocked scope on local of fun.
        }
    }
}

-------------------------

Hoisting:
1).(All variable , function and classes) declaration are hoisted to it scope either global or local.
2).only var will throw undefined when its accessed before initilizing. let and const and function will throw refrence error. becasue it stay in temporal dead zone.
3).variable declarations are processed before any code is executed.
3)why it used ? - programer friendly go call fun before reaching it.
4).undeclared variables do not hoist wait until code reached(put into window obj).
5).function argument will be of local scope.

1).this inside function refers window 

2)element which doesnt have any let or cosnt or var will be atteched to global object it wont hoisted.

-------------------------

This:

1)arrow function doesnt have own this property it find this from  global object that is accessible.Inside object its undefined
2).normal fucntion in global will have window inside object will have object as this.



-------------------------

Object:

1)object literals 
var a = {} or new Object();
2).constructor
function vehicle(name,maker,engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}
let car  = new vehicle('GT','BMW','1998cc');

3).using create 
const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    }
};
const me = Object.create(coder);

4).es6 classes:
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker =  maker;
    this.engine = engine;
  }
}
  
let car1 = new Vehicle('GT', 'BMW', '1998cc');

-------------------------

bind,call,apply:

eg:
let b = {name:"arvnd"};

function f1(x,y){
    console.log(this.name)
}

Bind - will only assign this to particular functiona and give a new function.To call it we need to call again.
f1.bind(b)(4,5);

Call - will call the function with assigned this(scope) mentioned in first argument and with other argument need for function. 

f1.bind(b,4,5);

Apply - will call the function with assigned this(scope) mentioned in first argument and with other argument passed as array to the function for argument. 

f1.bind(b,[4,5]);

-------------------------