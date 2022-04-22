import {theQuestions} from './preguntas.js';
import {Quiz} from './quiz.js';
import {Ui} from './ui.js';

function start () {  // funcion para empezar el juego
    let index = 0; //indice para moverse por el array de preguntas y respuestas
    const renderPage = (quiz, ui) => {
        if (quiz.end()) {
            ui.showEnd(quiz.score);
        }
        else if (quiz.score == -1) {
            ui.showEnd(0);
        }
        else {
            ui.showCategory(quiz.getQuestion().category);
            ui.showRound(quiz.round);
            ui.showScore(quiz.score);
            ui.showQuestions(quiz.getQuestion().text[index]);
            ui.showChoices(quiz.getQuestion().choices[index].sort(() => Math.random() - 0.5), (current) => {
                quiz.guess(current, index);
                renderPage(quiz, ui);
            });
            index++
            ui.showSalida(() => ui.showEnd(quiz.score)); // si el user se equivoca termina el juego
        }
    }
    const quiz = new Quiz(theQuestions);
    const ui = new Ui();
    renderPage(quiz, ui);
}

start();

