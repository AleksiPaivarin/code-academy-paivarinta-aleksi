
function isPositiveInteger(value, onSuccess, onError) {
    value >= 0 ? onSuccess() : onError();
  }
  function succes() {
    console.log("value was positive!");
  }
  function error() {
    console.log("value was not positive");
  }
  isPositiveInteger(5, success, error);