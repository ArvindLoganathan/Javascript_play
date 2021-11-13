# Javascript_play

scope:
global - at root with var ..includes var varibale declared in blocked scope(hoisted). 
script - let and const in root declarion(global declaration i.e not inside fun).  blocked scope and local scope can make use of it i.e available to use. class definition also will inside script.memoery saving it is not attched to window like var at root declaration.
block - inside block{} (let and const are introduced mainly to use inside blocked scope because picked by Garbage Collector(GC) after block executed).
local  - scope inside function(to maintain this value as window ) .. each function call execution will create new Execution context and put into callstack above ananoumous(Global execution context). funtion can have blocked scope variable inside it. it also hold var, fun and root level let and const  that are avilable inside function

each function vl have block(if available when line reaches only vl be visible),local,script,global scope

var at root vl added to window.
let and const vl added to script.

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

1)arrow function doesnt have own this property it find this from  global object that is accessible.Inside object its undefined i.e point to window 
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

Bind - will only assign this to particular function and give a new function.To call it we need to call again.
f1.bind(b)(4,5);

Call - will call the function with assigned this(scope) mentioned in first argument and with other argument need for function. 

f1.bind(b,4,5);

Apply - will call the function with assigned this(scope) mentioned in first argument and with other argument passed as array to the function for argument. 

f1.bind(b,[4,5]);

-------------------------

prototype Chaining:

object.create - creates a new object with the specified ([[Prototype]] its optional).(deep copy)
object.assign -  Object.assign assigns the properties directly on the specified object if already exist overwrite or create new property.(shallow copy)
object.create(null) - rerturn null object wityth no __proto__

eg:
1).let a = function(b) {
    this.b = b;
    this.call = function(){
        return this.b;
    }
};


2)a.prototype.print = function() {   console.log(this.b); };

b and call are created as property to object. evry time new object is create two propeerty will be present. so best property to add function to prototype.
print fn will be present in __proto__ to save space i.e common space.

3)let b = function(){
    a.call(this,5); //inhert super class property
    this.name="arvi"
}

4)b.prototype =  Object.create(a.prototype) // to inherte the superclass function.

5)b.prototype.constructor =  b; // to set back the constructor of b to itslf becasue it will be removed due to setting prototype in above line.dont add above (line 4) prototype setting it will be replaced by parent class prototype.

6)b.prototype.printf = function() {
    console.log(this.b);
}; // adding new proototype for subclass should be done after (line 4) prototype assignment as it will replace the prototype property of sub class

-------------------------

object literal:
let a = { walk1(){ return "1"; }};
let b = {  walk2(){ return "2";  }};

Object.setPrototypeOf(b,a) // es5 method to copy prototype similar to above methods, b is object and a's prototype is assigned to b


