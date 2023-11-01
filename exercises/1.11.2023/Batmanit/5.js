
function isPositiveInteger(value, onSuccess, onError) {
    value >= 0 ? onSuccess() : onError();
  }
  isPositiveInteger(
    6,
    function () {
      console.log("Value was positive");
    },
    function () {
      console.log("Error");
    }
  );