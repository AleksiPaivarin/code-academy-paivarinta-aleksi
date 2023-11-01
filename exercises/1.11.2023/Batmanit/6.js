
function isPositiveInteger(value, onSuccess, onError) {
    value >= 0 ? onSuccess() : onError();
  }
  isPositiveInteger(
    -1,
    () => console.log("Value was positive"),
    () => console.log("Value was not positive")
  );