import {Question} from './question.js';
import {datos} from './data.js';

// pasar los datos a la clase Question
export const theQuestions = datos.map(e => new Question(e.category, e.questions.map(e => e.question), e.questions.map(e => e.choices), e.questions.map(e => e.answer)));

