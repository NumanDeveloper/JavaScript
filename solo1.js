var count = 0;

for (let i = 0; i <= 6; i++) {
    console.log(`i: ${i}`);
    if (i == 3) {
        i = 5;
        continue;
    }
    console.log(`count: ${count}`);
    count++;
}

console.log(`Final count: ${count}`)