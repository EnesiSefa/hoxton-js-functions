// Description
// You're building a nightclub security robot that doesn't admit anyone under the age of 18. Write the functions that would be responsible for that. The robot also possesses the insane power of adding up numbers and checking if a number is even. Look at that versatility!

// You will find all the functions created and what they should return inside the challenge template. You just need to fill in the code inside.






/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */
// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)

function add(a,b) {
    return a + b
 
     
    // write your code here
  }
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(number = 0) {
          return number % 2 === 0

    // write your code here
  }
  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name = "") {
    let message = `Hello ${name}!`
    console.log(message)
    return message
    
    // write your code here
  }
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age) {
      return age >= 18

    // write your code here
  }
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(age) {
      let yearsLeft = 18 - age
    if(yearsLeft <= 0){
        return (` You are already an adult `)
    }else{
        return (` you have ${yearsLeft} years left `)
    }
    
        
// write your code here
  }
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit() {
    
    
    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
  }
  