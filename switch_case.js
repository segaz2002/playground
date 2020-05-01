// Rewrite our grader using switch case

// CHANLLENGE -> Write a function student grades students score
// INPUT: A score from range 0 to 100 as 
// EXPECTED OUTPUT: A grading character from A - D
// HINT:
// 100 - 90 > A
// 89 - 81 > B
// 80 - 71 > C
// 70 - 61 > D
// 60 - 51 > E
//   < 51 > F

function paymentOption(option_code) {
  var range;
  switch (option_code) {
    case 'PP':
      range = 'Paypal'
      break;
    case 'B':
      grade = '89 - 81'
      break;
    case 'C':
      range = '80 - 71'
      break;
    case 'D':
      grade = '70 - 61'
      break;
    case 'E':
      range = '60 - 51'
      break;
    default:
      grade = '< 51'
      break;
  }
  return range;
}

function scoreDict(grade) {
  var range;
  switch (grade) {
    case 'A':
      range = '100 - 90'
      break;
    case 'B':
      grade = '89 - 81'
      break;
    case 'C':
      range = '80 - 71'
      break;
    case 'D':
      grade = '70 - 61'
      break;
    case 'E':
      range = '60 - 51'
      break;
    default:
      grade = '< 51'
      break;
  }
  return range;
}
console.log(scoreDict('A'));
// console.log(grader(100))