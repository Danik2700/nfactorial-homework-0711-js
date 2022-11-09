

//1 ex
//   function checkAge(age) {
//     return (age > 18) ?  true :  confirm ('Родители разрешили?');
//   }
  

// 2 ex
  
// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
 
//     alert( pow(x, n) );
  
// ex 3

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );


//4 ex


// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b)=> a-b);
// alert( arr );

//5 ex

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name)

// alert( names ); 

// ex 6

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 29 };
  
  let arr = [ vasya, petya, masha ];
  
  alert( getAverageAge(arr) );