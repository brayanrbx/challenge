import {theQuestions} from  "./preguntas.js";

export class Quiz { //clase de la logica de la trivia
    round = 1; // ronda actual
    score = 0; //puntaje actual
    aleatorio = Math.floor(Math.random() * (5)); // variable para simular hasta cierto grado la aleatoriedad
    /**
     *
     * @param {theQuestions} questions // array de preguntas
     */

    constructor(questions) {
        this.questions = questions;
    }

    /**
     *
     * @returns {theQuestions} the question found
     */

    getQuestion() { // metodo para obtener de manera aleatoria una pregunta del array
        return this.questions[this.aleatorio];
    }

    /**
     *
     * @param {string} answer the answer of the user
     */

    guess(answer, index) { // metodo para saber si el user acierta o no
        if (this.getQuestion().correctAnswer(answer, --index)) {
            this.score+= 2;
            this.round++;
        }
        else {
            this.score = -1;
        }
    }

    end() {  // metodo para saber si ya se han finalizado las preguntas
        return (this.questions.length == this.round -1);
    }
}
