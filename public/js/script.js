const quizData = [
	{
		question: "In which year India got independance?",
		a: "1950",
		b: "1947",
		c: "1942",
		d: "1948",
		correct: "b"
	},
	{
		question: "What is the most use programming language in 2021?",
		a: "java",
		b: "C",
		c: "Python",
		d: "Javascript",
		correct: "d"
	},
	{
		question: "World popular sport?",
		a: "Football",
		b: "Cricket",
		c: "Basketball",
		d: "badminton",
		correct: "a"
	},
	{
		question: "What is the capital city of jharkhand?",
		a: "Dhanbad",
		b: "Bokaro",
		c: "Ranchi",
		d: "Jamshedpur",
		correct: "c"
	},
	{
		question: "In which year manjesh passout from BIV 8C?",
		a: "2013",
		b: "2015",
		c: "2019",
		d: "2010",
		correct: "a"
	}
];

console.log(quizData);

const questionEl = document.getElementById('question');
const a = document.getElementById('al');
const b = document.getElementById('bl');
const c = document.getElementById('cl');
const d = document.getElementById('dl');
const submitBtn = document.getElementById('submit');


let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	const currentQuiz = quizData[currentQuestion];
	questionEl.innerText = currentQuiz.question;

	a.innerText = currentQuiz.a;
	b.innerText = currentQuiz.b;
	c.innerText = currentQuiz.c;
	d.innerText = currentQuiz.d;

}

function getSelected() {
	const answerEl = document.querySelectorAll('.answer');

	var ans = undefined;

	answerEl.forEach((answer) => {

		if(answer.checked) {	
			  ans = answer.id;
				return ans;
		} 
	
	})

	return ans;

}

// function reverseQuestion() {

// }

submitBtn.addEventListener("click", () => {

	const answer =  getSelected();
	console.log('selected '+ answer);
	console.log('answeris '+ quizData[currentQuestion].correct);

	console.log(answer == quizData[currentQuestion].correct);

	if(!answer) {
		return undefined;
	}

	if(answer == quizData[currentQuestion].correct) {

		score++;
		currentQuestion++;

			if(currentQuestion < quizData.length) {

				loadQuiz();
			} else {
				alert("Hurry !!!! Your score is "+ score);
				alert("Question is over");

			}	
	} else {
			currentQuestion++;
			if(currentQuestion < quizData.length) {
				
				loadQuiz();

			} else{
				alert("Hurry !!!! Your score is "+ score);
				alert("Question is over");
			}
			
	}
	
})

// reverseBtn.addEventListener("click", () => {
// 	currentQuestion--;
// 	if(currentQuestion != 0) {
// 		loadQuiz();	
// 	} else if(currentQuestion <  quizData.length) {
// 		loadQuiz();
// 	}
	
// })