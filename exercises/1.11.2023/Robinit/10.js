
console.log("Using for loop:");
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}




console.log("Using for of:");
for(let name of names) {
    console.log(name);
}




console.log("Using forEach:");
names.forEach(name => {
    console.log(name);
});