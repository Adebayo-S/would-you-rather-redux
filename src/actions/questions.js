// import { _getQuestions } from "../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function recieveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	};
}

// export function handleRecieveQuestions() {
// 	return (dispatch) => {
// 		return _getQuestions().then((questions) => {
// 			dispatch(recieveQuestions(questions));
// 		});
// 	};
// }
