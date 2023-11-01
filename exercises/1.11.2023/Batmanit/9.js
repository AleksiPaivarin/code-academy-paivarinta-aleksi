
function doIt() {
    let combined = "";
    for (key in arguments) {
      combined += arguments[key];
    }
    console.log(combined);
  }
  doIt("a"); // outputs a
  doIt("a", "b"); // outputs ab
  doIt("a", "b", "c"); // outputs abc