// 3)Identify all of the variables, object property names, primitive values, and objects shown in the following code

function hello(greeting, name) {   // greeting & name are parameters of hello function
  return greeting + ' ' + name;   //hello function returns arguments what we are passing
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} }; //xyzzy function returns an object that object values are in numbers,array,and also an object
}

const howdy = hello('Hi', 'Grace'); // stored hello function call in const keyword and Hi & Grace are two arguments pass to the hello function
let foo = xyzzy(); // stored xyzzy function call in let keyword

// primitives : 1,2,3,4,5, " ", "Hi", "Grace"
// object : {a:1, b:2, c:[3,4,5], d:{}}, {}
// variables: howdy, foo
