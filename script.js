document.addEventListener('DOMContentLoaded', function() {
    const riddles = [
        { question: "I am the schedule that lists substances holding the highest standards, official and legal. What am I?", answer: "Schedule I" },
        { question: "When it comes to devices that save lives, my standards are the guide. Which schedule am I?", answer: "Schedule M" },
        { question: "I list drugs that can form habits, requiring strict control. Identify me.", answer: "Schedule H" },
        { question: "I ensure the colors in your medicines are safe and sound. Which schedule am I?", answer: "Schedule Q" },
        { question: "I regulate the standards for products that are biological. What schedule am I?", answer: "Schedule R" }
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
        checkButton.textContent = 'Check Answer';
        checkButton.onclick = () => checkAnswer(index, riddle.answer);

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

function checkAnswer(index, correctAnswer) {
    const userAnswer = document.getElementById(`answer-${index}`).value;
    const answerPara = document.getElementById(`correct-answer-${index}`);
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        answerPara.style.display = 'block';
        answerPara.style.color = 'green';
        answerPara.textContent = `Correct! The answer is: ${correctAnswer}`;
    } else {
        answerPara.style.display = 'block';
        answerPara.style.color = 'red';
        answerPara.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
    }
}
