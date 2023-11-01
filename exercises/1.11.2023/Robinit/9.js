
console.log("Before delete: ", names);
delete names[1];  // This will leave a hole in the array
console.log("After delete: ", names);
names.splice(1, 1);  // This will remove the item and shift the others
console.log("After splice: ", names);