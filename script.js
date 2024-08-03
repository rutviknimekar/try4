document.addEventListener('DOMContentLoaded', function() {
    const riddles = [
        { question: "I list the standards for drugs to be imported. Which schedule am I?", answer: "Schedule A" },
        { question: "I provide the form for the application of import of drugs. Which schedule am I?", answer: "Schedule B" },
        { question: "I set the standards for biological products. Which schedule am I?", answer: "Schedule C" },
        { question: "I extend the standards of Schedule C for other drugs. Which schedule am I?", answer: "Schedule C1" },
        { question: "I am about the standards for ophthalmic preparations. Which schedule am I?", answer: "Schedule D" },
        { question: "I list the standards for patent or proprietary medicines. Which schedule am I?", answer: "Schedule E" },
        { question: "I am related to the fees for the analysis of samples. Which schedule am I?", answer: "Schedule F" },
        { question: "I am the schedule for the standards for disinfectants. Which schedule am I?", answer: "Schedule G" },
        { question: "I provide the standards for various substances not included in other schedules. Which schedule am I?", answer: "Schedule H" },
        { question: "I am for the standard tests for vaccines and sera. Which schedule am I?", answer: "Schedule I" },
        { question: "I set the standards for surgical dressings. Which schedule am I?", answer: "Schedule J" },
        { question: "I am for the standards for drugs requiring refrigeration. Which schedule am I?", answer: "Schedule K" },
        { question: "I provide the form for license application for manufacturing of drugs. Which schedule am I?", answer: "Schedule L" },
        { question: "I extend the standards of Schedule L for blood products. Which schedule am I?", answer: "Schedule M" },
        { question: "I set the standards for cosmetics. Which schedule am I?", answer: "Schedule N" },
        { question: "I provide the form for the license application for cosmetics. Which schedule am I?", answer: "Schedule O" },
        { question: "I set the standards for opium. Which schedule am I?", answer: "Schedule P" },
        { question: "I am for the standards for colors used in drugs and cosmetics. Which schedule am I?", answer: "Schedule Q" },
        { question: "I provide the standards for biological and special products. Which schedule am I?", answer: "Schedule R" },
        { question: "I extend the standards of Schedule R for diagnostic kits. Which schedule am I?", answer: "Schedule R1" },
        { question: "I set the standards for imported drugs. Which schedule am I?", answer: "Schedule S" },
        { question: "I list the standards for the storage of drugs. Which schedule am I?", answer: "Schedule T" },
        { question: "I am about the standards for the manufacture of drugs. Which schedule am I?", answer: "Schedule U" },
        { question: "I extend the standards of Schedule U for cosmetics. Which schedule am I?", answer: "Schedule U1" },
        { question: "I set the standards for drugs manufactured by large volume parenterals. Which schedule am I?", answer: "Schedule V" },
        { question: "I provide the standards for clinical trials and studies. Which schedule am I?", answer: "Schedule X" },
        { question: "I am about the standards for imported cosmetics. Which schedule am I?", answer: "Schedule Y" }
    ];

    const riddlesContainer = document.getElementById('riddles-container');

    riddles.forEach((riddle, index) => {
        const riddleDiv = document.createElement('div');
        riddleDiv.classList.add('riddle');

        const questionPara = document.createElement('p');
        questionPara.textContent = riddle.question;

        const input = document.createElement('input');
        input.type = 'text';
        input.id = `answer-${index}`;

        const checkButton = document.createElement('button');
        checkButton.textContent = 'Show Answer';
        checkButton.onclick = () => showAnswer(index, riddle.answer);

        const answerPara = document.createElement('p');
        answerPara.classList.add('answer');
        answerPara.id = `correct-answer-${index}`;
        answerPara.textContent = `Correct answer: ${riddle.answer}`;

        riddleDiv.appendChild(questionPara);
        riddleDiv.appendChild(input);
        riddleDiv.appendChild(checkButton);
        riddleDiv.appendChild(answerPara);

        riddlesContainer.appendChild(riddleDiv);
    });
});

function showAnswer(index, correctAnswer) {
    const answerPara = document.getElementById(`correct-answer-${index}`);
    answerPara.style.display = 'block';
    answerPara.style.color = 'green';
    answerPara.textContent = `The answer is: ${correctAnswer}`;
}
