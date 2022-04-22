export class Question { // clase para las preguntas y respuestas

    /**
     *
     * @param {string} category - Category of the question
     * @param {array} text this is the text of the question
     * @param {array} choices this is the array of choices
     * @param {array} answer this is the answer of the question
     */

    constructor (category, text, choices, answer) { // constructor de la clase
        this.category = category;
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     *
     * @param {string} choice this is the choice of the user
     * @returns {boolean} this is the result of the comparison
     */

    correctAnswer(choice, index) { // metodo para saber si la respuesta es correcta
        if (choice === (this.answer[index])) { // comparison between the user's choice and the answer
            return true;
        }
        else {
            return false;
        }
    }
}


