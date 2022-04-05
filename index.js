const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
/* Starter code. */
// const titleCased = () => {
//   return tutorials
// }

/* IT WORKS!!! */
const titleCased = () => {
    // Callback
    function callback(element) {
      // Split string into array of separate strings. 
      element = element.split(' ')
      // Loop through array.
      for (let i = 0; i < element.length; i++) {
          element[i] = element[i].charAt(0).toUpperCase() + element[i].slice(1)
      }
      return element.join(' ')        
  }
  // Map function
  return tutorials.map(callback)
  // return tutorials
}

/* WORKS IN DEV TOOLS BUT NOT WITH NPM TEST. */
// function titleCased(tutorials) {
//   // Callback
//   function callback(element) {
//       // Split string into array of separate strings. 
//       element = element.split(' ')
//       // Loop through array.
//       for (let i = 0; i < element.length; i++) {
//           element[i] = element[i].charAt(0).toUpperCase() + element[i].slice(1)
//       }
//       return element.join(' ')        
//   }

//   // Map function
//   return tutorials.map(callback)
// }

/* THIS WORKS. */
// function titleCased() {
//   const fixTutorials = tutorials.map(tSplit => {
//     const sentenceArr = tSplit.split(" ").map(sa => {
//       return sa.charAt(0).toUpperCase() + sa.slice(1)
//     }).join(" ")
//     return sentenceArr;
//   })
// return fixTutorials
// }