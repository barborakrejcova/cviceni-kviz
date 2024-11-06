const question = document.querySelector('.question');
question.textContent = 'Uveďte jméno nejnovějšího prezidenta USA';

const actualAnswer = prompt('Uveďte jméno nejnovějšího prezidenta USA', 'Trump/Harris').trim();

const answerText = document.querySelector('.answer__text');
answerText.innerHTML = `<p>${actualAnswer}</p>`;

const answer = document.querySelector('.answer');

if (actualAnswer === 'Trump') {
    answer.classList.add('answer--correct');
} else {
    answer.classList.add('answer--wrong');
}

//Reseni z webu:

/*
const questionElm = document.querySelector('.question');
const question =
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

questionElm.textContent = question;

const userAnswer = prompt(question);

const answerTextElm = document.querySelector('.answer__text');
answerTextElm.textContent = userAnswer;

const answerElm = document.querySelector('.answer');

if (userAnswer === 'Bell') {
  answerElm.classList.add('answer--correct');
} else {
  answerElm.classList.add('answer--wrong');
}
  */
