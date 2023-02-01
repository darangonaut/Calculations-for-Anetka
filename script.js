
let correctAnswer;
let allCorrect = 0;
let council = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;
    document.getElementById("example").innerHTML = `${num1} + ${num2} =`;

    const answers = [correctAnswer];
    while (answers.length < 4) {
        const randomAnswer = Math.floor(Math.random() * 20) + 1;
        if (!answers.includes(randomAnswer)) {
            answers.push(randomAnswer);
        }
    }

    shuffle(answers);

    document.getElementById("answer-1").innerHTML = answers[0];
    document.getElementById("answer-1").style.backgroundColor = null;

    document.getElementById("answer-2").innerHTML = answers[1];
    document.getElementById("answer-2").style.backgroundColor = null;

    document.getElementById("answer-3").innerHTML = answers[2];
    document.getElementById("answer-3").style.backgroundColor = null;

    document.getElementById("answer-4").innerHTML = answers[3];
    document.getElementById("answer-4").style.backgroundColor = null;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

generateQuestion();

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (Number(button.innerHTML) === correctAnswer) {
            generateQuestion();
            allCorrect++;
            document.getElementById("js-all-correct").innerHTML = allCorrect;
            council++;
            document.getElementById("js-council").innerHTML = council;
        } else {
            button.style.backgroundColor = "#931010";
            council = 0;
            document.getElementById("js-council").innerHTML = council;
        }
    });
});