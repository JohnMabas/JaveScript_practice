let arr = [0, 1, 2, 3];

function err(arr, n) {
  try {
      if (arr[n] === undefined) {
        throw new Error("This an error");
      }
      console.log(arr[n]);
    
  } catch (error) {
    console.log(error.message);
  }
}

err(arr, 2)
