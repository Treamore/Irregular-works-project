class IrregularVerb  {
  constructor (verb, pastTense, pastParticiple, translation){
    this.verb=verb;
    this.pastTense=pastTense;
    this.pastParticiple=pastParticiple;
    this.translation=translation;
  }
}
const arrayOfIrregularVerbs=[];

arrayOfIrregularVerbs.push(new IrregularVerb('be','was, were','been','Быть'));
arrayOfIrregularVerbs.push(new IrregularVerb('arise','arose','arisen', 'Возникать'));
arrayOfIrregularVerbs.push(new IrregularVerb('awake','awoke','awoke', 'Просыпаться'));
arrayOfIrregularVerbs.push(new IrregularVerb('bear','bore','born','Вынашивать, носить'));
arrayOfIrregularVerbs.push(new IrregularVerb('beat','beat','beaten','Кусать'));
arrayOfIrregularVerbs.push(new IrregularVerb('become','became','become','Становиться'));
arrayOfIrregularVerbs.push(new IrregularVerb('begin','began','begun','Начинать'));

function randomInteger(max){ //randomiser to find element in array
  let random=Math.random()*(max);
  return Math.floor(random);
}

function showWord(){ //show word in first string
  let currentShownWord=document.getElementById('rusWord');
  currentShownWord.innerHTML=arrayOfIrregularVerbs[arrID].translation;  
}

function checkVerb(){ //check verb for correct
  let currentCheckingForm=document.getElementById('verb');
  if (currentCheckingForm.value===arrayOfIrregularVerbs[arrID].verb){
    verbCorrectness=true;
  }
  else {verbCorrectness=false;}
  currentCheckingForm.value='';
  return verbCorrectness;
}

function checkPastTense(){ //check pastTense for correct
  let currentCheckingForm=document.getElementById('pastTense');
  if (currentCheckingForm.value===arrayOfIrregularVerbs[arrID].pastTense){
    pastTenseCorrectness=true;
  }
  else {pastTenseCorrectness=false;}
  currentCheckingForm.value='';
  return pastTenseCorrectness;
}

function checkPastParticiple(){ //check pastParticiple for correct
  let currentCheckingForm=document.getElementById('pastParticiple');
  if (currentCheckingForm.value===arrayOfIrregularVerbs[arrID].pastParticiple){
    pastParticipleCorrectness=true;
  }
  else {pastParticipleCorrectness=false;}
  currentCheckingForm.value='';
  return pastParticipleCorrectness;
}

function reduceMassLength(){ //delete used word form array
  if (arrID!==arrayOfIrregularVerbs.length-1){
    arrayOfIrregularVerbs[arrID]=arrayOfIrregularVerbs[arrayOfIrregularVerbs.length-1];
  }
  delete arrayOfIrregularVerbs[arrayOfIrregularVerbs.length-1];
  arrayOfIrregularVerbs.length -=1;
  arrID=randomInteger(arrayOfIrregularVerbs.length);
}

function questionsCounter(){
  let receivedQuestions=document.getElementById("wordsCounter");
  receivedQuestions.innerHTML=`Question ${questionNumber} out of ${startingLengthOfArray}`;
  questionNumber+=1;
}

function correctnessTesting(verb, pastTense, pastParticiple){// checking spelling
  if (verb && pastTense && pastParticiple){
    correctAnswersNumber+=1;
  }
}

function testResults(){
alert(`You answer right on ${correctAnswersNumber} questions out of ${startingLengthOfArray}. Your score is ${100/startingLengthOfArray*correctAnswersNumber}%`);
}

function checkFullForm(){ //correction check of form
  correctnessTesting(checkVerb(),checkPastTense(),checkPastParticiple());

  if (arrayOfIrregularVerbs.length>1)
  {
  reduceMassLength();
  showWord();
  questionsCounter();
  progressBarChange();
}
  else {
    testResults();
  }
}

function cleanPlaceholder(){
  let placeholderValue=this.placeholder;
  this.placeholder='';
  this.addEventListener('blur',()=>this.placeholder=placeholderValue);
}

function progressBarChange(){
  let progressBar=document.getElementById("progressBar");
  progressBar.style.width=`${100/startingLengthOfArray*(questionNumber-1)}%`
}

function sayHi(){ //useless function
  console.log("Hi");
}


let pastParticipleCorrectness;
let pastTenseCorrectness;
let verbCorrectness;
const startingLengthOfArray=arrayOfIrregularVerbs.length;
let arrID=randomInteger(arrayOfIrregularVerbs.length);
let questionNumber=1;
let correctAnswersNumber=0;


showWord();
questionsCounter();
progressBarChange();

document.getElementById("verb").addEventListener('focus', cleanPlaceholder);
document.getElementById("pastTense").addEventListener('focus', cleanPlaceholder);
document.getElementById("pastParticiple").addEventListener('focus', cleanPlaceholder);
let checkButton=document.getElementById("checkButton");
checkButton.addEventListener('click', checkFullForm);
