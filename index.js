//How well do you know my friend about Pritam Kumar
var readlineSync = require('readline-sync')
let score = 0;
let qOne = readlineSync.question('may have your name please? ')
console.log(`Welcome Mr.${qOne}`);
function quiz(question, answer){
      var userQuestion = readlineSync.question(question);
      var score = 0;
     //var userAnswer =  answer;
     if(userQuestion == answer){
       score = score + 1;
       console.log(`wow! You are right. \n Score:: ${score}`);
      
     }else{
       score = score - 1;
       console.log(`ohh! you are worng MR.${qOne}.  \n Score:: ${score}`)
     }
}

//let questionOne = 'The real name of Pritam Kumar is? ';
//let answerOne = 'Shubham Kumar';
 var quizs = [{question: 'The real name of Pritam Kumar is?  ',answer: 'Shubham Kumar'
 },
 {
   question:'where does Shubham live in india ',
   answer: 'Ranchi'
 },
 {question: 'favourite food for Shubham ',
 answer: 'Dhosa'},
 {
   question: 'favourite tv series ',
   answer: 'game of throne'
 },{
   question: 'favourite cartoon ',
   answer: 'tom and jerry'
 }];

for(i=0; i<quizs.length; i++){
  var currentQ = quizs[i];
  quiz(currentQ.question, currentQ.answer)
  
}

 console.log(`your total score is ${score}`)