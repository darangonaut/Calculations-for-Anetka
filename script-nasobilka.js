
let correctAnswer;
let allCorrect = 0;
let council = 0;

function generateQuestion() {


    const num1Array = [1, 2, 3, 4, 5];
    const num2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    //const num1 = Math.floor(Math.random() * 10) + 1;
    //const num2 = Math.floor(Math.random() * 10) + 1;

    const num1 = num1Array[Math.floor(Math.random() * num1Array.length)];
    const num2 = num2Array[Math.floor(Math.random() * num2Array.length)];

    
    correctAnswer = num1 * num2;

    document.getElementById("example").innerHTML = `${num1} x ${num2} =`;
    

    const answers = [correctAnswer];
    console.log(correctAnswer);
    while (answers.length < 4) {
        
        //vytvor nahodne cislo ktore ale nebude rovnake ako spravna odpoved a bude to nasobok num1 a nebude sa opakovat
        const randomAnswer = getRandomAnswer(num1, num2, correctAnswer);

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

function getNumber(bigger, smoller){
    if(bigger == 1){
        return Math.floor(Math.random() * 10) + 10;
    }else{
        let number = Math.floor(Math.random() * 10) + 1;
        while(number >= smoller){
            number = Math.floor(Math.random() * 10) + 1;
        }
        return number;
    }
}

function getRandomAnswer(num1, num2, correctAnswer){
    let randomAnswer = num1 * num2;
    while(randomAnswer == correctAnswer){
        let bigger = Math.floor(Math.random() * 2);
        if(bigger == 0){
            randomAnswer = getNumber(num1, num2) * num2;
        }else{
            randomAnswer = num1 * getNumber(num2, num1);
        }
    }
    console.log(randomAnswer);
    return randomAnswer;
}