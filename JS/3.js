let fb
for (fb = 1; fb <= 100; fb++) {
    (fb % 15 == 0) ?
    console.log("FizzBuzz"): (fb % 5 == 0) ?
        console.log('Buzz') :
        (fb % 3 == 0) ?
        console.log('Fizz') :
        console.log(fb);
}
