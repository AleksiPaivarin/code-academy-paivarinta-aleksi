// A


const fs = require("fs");

let originalFile = "hello.txt";
let copiedFile = "copyOfHello.txt";

fs.readFile(originalFile, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(copiedFile, data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success!");
      }
    });
  }
});


// B


const fs = require("fs");

// **** READ ****
function readFile(file) {
  function myFunction(resolve, reject) {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        // .. -> call reject with the err object
        reject(err);
      } else {
        // .. -> call resolve with the the content of data
        resolve(data);
      }
    });
  }
  let promise = new Promise(myFunction);
  return promise;
}

readFile("hello.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// **** WRITE ****

function writeFile(file, content) {
  function myFunction(resolve, reject) {
    fs.writeFile(file, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  }
  let promise = new Promise(myFunction);
  return promise;
}

writeFile("hello.txt", "Hello World")
  .then(() => console.log("success"))
  .catch((err) => console.log(err));

// C


const fs = require("fs");
function readFile(file) {
  function myFunction(resolve, reject) {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        // .. -> call reject with the err object
        reject(err);
      } else {
        // .. -> call resolve with the the content of data
        resolve(data);
      }
    });
  }
  let promise = new Promise(myFunction);
  return promise;
}
function writeFile(file, content) {
  function myFunction(resolve, reject) {
    fs.writeFile(file, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  }
  let promise = new Promise(myFunction);
  return promise;
}

// Read + Write
readFile("hello.txt")
  .then((data) => writeFile("copy.txt", data))
  .then(() => console.log("success"))
  .catch((err) => console.log(err));