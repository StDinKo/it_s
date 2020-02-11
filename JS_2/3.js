var arr = ["a","b","c"];
function reverseArrayInPlace (arg){
let a = arg.length - 1;
let b = arg.length;
for (a; a >=0; a-=1){
    arg.push(arg[a]);
    };
arg.splice(0,b);
return arg;
};


function reverseArray (arg){
let a = arg.length - 1;
let arr1 = [];
for (a; a >=0; a-=1){
    arr1.push(arg[a]);
    };
return arr1;
};

console.log(reverseArray(["A","B", "C"]));
reverseArrayInPlace(arr);
console.log(arr);
