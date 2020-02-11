function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
 
    if (a == null || typeof(a) != "object" ||
        b == null || typeof(b) != "object")
    {
        return false;
    }
 
    let propInA = 0, propInB = 0;
    for (let prop in a) {
        propInA += 1;
    }
    for (let prop in b) {
        propInB += 1;
        if (!(prop in a) || !deepEqual(a[prop], b[prop])) {
            return false;        
        }
    }        
    return propInA == propInB;
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));