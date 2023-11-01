
let n = 2 * names.length;
names[n] = "Tina";
console.log("After adding 'Tina' using myarray[n]:");
names.forEach((name, index) => {
    console.log(`names[${index}] = ${name}, typeof: ${typeof name}`);
});