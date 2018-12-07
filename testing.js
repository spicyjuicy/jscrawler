let t1 = Date.now();
let myset = new Set();
for (let i = 0; i < 1000000; i++) {
    for (let j = 0; j < 3; j++) {
        myset.add(Math.floor(Math.random()*10000)/10000);
    }
}
let t2 = Date.now();
console.log(myset.size, (t2-t1)/1000);