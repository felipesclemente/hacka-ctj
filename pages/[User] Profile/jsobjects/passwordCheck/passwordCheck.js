export default {
  Button2onClick () {
    var fieldValue1 = input_confirma_senha.text; 
    var fieldValue2 = input_senha.text; 

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