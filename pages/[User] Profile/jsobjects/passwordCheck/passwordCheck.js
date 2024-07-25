export default {
  Button2onClick () {
    var fieldValue1 = Input2Copy.text; 
    var fieldValue2 = Input2.text; 

    // Function to check if values are equal
    function areFieldsEqual() {
      if (fieldValue1 === fieldValue2) {
        return "Values are equal";
      } else {
        return "Values are not equal";
      }
    }

    // Call the function and return the result
    var result = areFieldsEqual();
    return result;
  }
}
