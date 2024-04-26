function smallestMissingPositiveInteger(nums) {


    // Implement the function smallest_missing_positive_integer
    let newArray = A.sort(function(a, b){return a-b})
        let lowestNumber = 1
        for(i=0; i < newArray.length; i++) {
            if(lowestNumber > newArray[0]) {
                return lowestNumber
            }
            if(lowestNumber == newArray[i]) {
                lowestNumber = lowestNumber + 1
            }
            if(i = newArray.length - 1) {
                return lowestNumber
            }  
        }
  
  }
  
  module.exports = smallestMissingPositiveInteger;

