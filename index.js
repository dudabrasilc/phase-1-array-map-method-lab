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

function titleCased() {
          return tutorials.map(function (element) {
          let separatedArray = element.split(" ");
          // console.log(separatedArray);
          let result = separatedArray.map((elem) => {
            // console.log(elem)
          return elem[0].toUpperCase() + elem.substring(1);
          }
          )
          return result.join(' ');
        }
      )
    }
  

console.log(titleCased())


// const robots = [
//   { name: "Johnny 5", modes: 5, isActivated: false },
//   { name: "C3PO", modes: 3, isActivated: false },
//   { name: "Sonny", modes: 2.5, isActivated: false },
//   { name: "Baymax", modes: 1.5, isActivated: false },
// ];

// const activateRobots = robots.map((element) => {
//   let newElement = {...element};
//   newElement.isActivated = "true";
//   // console.log(newElement)
//   newElement.modes = newElement.modes * 2;
//   // console.log(newElement)
//   return newElement;
// })

// console.log(activateRobots)
// console.log(robots)