document.addEventListener('DOMContentLoaded', function() {
    const riddles = [
        { question: "I list the standards for drugs to be imported. Which schedule am I?", answer: "Schedule A" },
        { question: "I provide the form for the application of import of drugs. Which schedule am I?", answer: "Schedule B" },
        { question: "I set the standards for biological products. Which schedule am I?", answer: "Schedule C" },
        { question: "I extend the standards of Schedule C for other drugs. Which schedule am I?", answer: "Schedule C1" },
        { question: "I am about the standards for ophthalmic preparations. Which schedule am I?", answer: "Schedule D" },
        { question: "I provide the standards for poisonous substances. Which schedule am I?", answer: "Schedule E1" },
        { question: "I am related to the fees for the analysis of samples. Which schedule am I?", answer: "Schedule F" },
        { question: "I provide the standards for vaccines and sera. Which schedule am I?", answer: "Schedule F1" },
        { question: "I provide the standards for ophthalmic preparations. Which schedule am I?", answer: "Schedule F2" },
        { question: "I provide the standards for surgical dressings. Which schedule am I?", answer: "Schedule F3" },
        { question: "I provide the standards for disinfectants. Which schedule am I?", answer: "Schedule FF" },
        { question: "I am the schedule for the standards for disinfectants. Which schedule am I?", answer: "Schedule G" },
        { question: "I provide the standards for various substances not included in other schedules. Which schedule am I?", answer: "Schedule H" },
        { question: "I provide the standards for certain drugs that require special handling. Which schedule am I?", answer: "Schedule HX" },
        { question: "I set the standards for surgical dressings. Which schedule am I?", answer: "Schedule J" },
        { question: "I am for the standards for drugs requiring refrigeration. Which schedule am I?", answer: "Schedule K" },
        { question: "I set the standards for good manufacturing practices (GMP) for drugs and cosmetics. Which schedule am I?", answer: "Schedule M" },
        { question: "I extend the standards of Schedule M for medical devices. Which schedule am I?", answer: "Schedule M1" },
        { question: "I extend the standards of Schedule M for active pharmaceutical ingredients. Which schedule am I?", answer: "Schedule M2" },
        { question: "I set the standards for quality control of vaccines. Which schedule am I?", answer: "Schedule M3" },
        { question: "I provide the standards for cosmetics. Which schedule am I?", answer: "Schedule N" },
        { question: "I provide the form for the license application for cosmetics. Which schedule am I?", answer: "Schedule O" },
        { question: "I set the standards for opium. Which schedule am I?", answer: "Schedule P" },
        { question: "I provide the standards for patent or proprietary medicines. Which schedule am I?", answer: "Schedule P1" },
        { question: "I am for the standards for colors used in drugs and cosmetics. Which schedule am I?", answer: "Schedule Q" },
        { question: "I provide the standards for biological and special products. Which schedule am I?", answer: "Schedule R" },
        { question: "I extend the standards of Schedule R for diagnostic kits. Which schedule am I?", answer: "Schedule R1" },
        { question: "I set the standards for imported drugs. Which schedule am I?", answer: "Schedule S" },
        { question: "I list the standards for the storage of drugs. Which schedule am I?", answer: "Schedule T" },
        { question: "I am about the standards for the manufacture of drugs. Which schedule am I?", answer: "Schedule U" },
        { question: "I set the standards for drugs manufactured by large volume parenterals. Which schedule am I?", answer: "Schedule V" },
        { question: "I list the standards for the storage of certain drugs. Which schedule am I?", answer: "Schedule W" },
        { question: "I provide the standards for clinical trials and studies. Which schedule am I?", answer: "Schedule X" },
        { question: "I am about the standards for imported cosmetics. Which schedule am I?", answer: "Schedule Y" }
    ];

    const riddlesContainer = document.getElementById('riddles-container');

    riddles.forEach((riddle, index) => {
        const riddleDiv = document.createElement('div');
        riddleDiv.classList.add('riddle');

        const questionPara = document.createElement('p');
        questionPara.textContent = riddle.question;

        const inputAnswer = document.createElement('input');
        inputAnswer.type = 'text';
        inputAnswer.classList.add('input-answer');
        inputAnswer.placeholder = 'Your answer here...';

        const checkButton = document.createElement('button');
        checkButton.textContent = 'Show Answer';
        checkButton.onclick = () => showAnswer(index, riddle.answer);

        const answerPara = document.createElement('p');
        answerPara.classList.add('answer');
        answerPara.id = `correct-answer-${index}`;
        answerPara.style.display = 'none';
        answerPara.textContent = `The answer is: ${riddle.answer}`;

        riddleDiv.appendChild(questionPara);
        riddleDiv.appendChild(inputAnswer);
        riddleDiv.appendChild(checkButton);
        riddleDiv.appendChild(answerPara);

        riddlesContainer.appendChild(riddleDiv);
    });
});

function startQuiz() {
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('riddles-container').classList.remove('hidden');
}

function showAnswer(index, correctAnswer) {
    const answerPara = document.getElementById(`correct-answer-${index}`);
    answerPara.style.display = 'block';
    answerPara.style.color = 'green';
    answerPara.textContent = `The answer is: ${correctAnswer}`;
}
