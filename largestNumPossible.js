function formLargestNumber(arr) {
    //write your implementation here
    const str = arr.map((num) => num+"").sort((a,b) => (b+a)-(a+b)).join("");
    return str[0] == "0" ? "0" : str;
    
  }
  const input = [3, 30, 34, 5, 9];
  formLargestNumber(input);