export class Ui {
    constructor () {}

    showCategory (category) { // metodo para mostrar la categoria en el documento
        const categoryTitle = document.getElementById('category');
        categoryTitle.innerText = category;
    }

    showRound (round) { // metodo para mostrar la ronda en el documento
        const roundContenedor = document.getElementById('round');
        roundContenedor.innerText = `Round ${round}`;
    }

    showScore (score) { // metodo para mostrar el puntaje en el documento
        const scoreContenedor = document.getElementById('score');
        scoreContenedor.innerText = score;
    }

    showEnd (score) { // metodo para mostrar el puntaje al finalizar el juego
        const quizEnd =  `<h1>Result</h1>
        <p>Your score is: ${score}</p>`;

        const content = document.getElementById('card');
        content.innerHTML = quizEnd;
    }

    showSalida (callback) { // metodo para poder salir del juego
        const salida = document.getElementById('salir');
        salida.addEventListener('click', () => callback());
    }

    /**
     *
     * @param {string} text this is the text of the question
     */

    showQuestions (text) { // metodo para mostrar las preguntas en el documento
        const questionTitle = document.getElementById('question');
        questionTitle.innerText = text;
    }

    /**
     *
     * @param {string[]} choices these are the choices of the user
     * @param {function} callback this function select the choice of the user
     */

    showChoices (choices, callback) { // metodo para mostrar las opciones de preguntas en el documento
        const choicesContenedor = document.getElementById('choice');
        choicesContenedor.innerHTML = '';
        for (let i = 0; i < 4; i++) {
            const button = document.createElement('button');
            button.innerText = choices[i];
            button.className = 'card__op';
            choicesContenedor.appendChild(button);
            button.addEventListener('click', () => callback(choices[i]));
        }
    }
}
