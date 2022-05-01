import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Are you quiet by nature?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: true },
			],
		},
		
		{
			questionText: 'Do you remember the faces of people you meet for the first time?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: true },
			],
		},
		{
			questionText: 'How often do you listen to music? ',
			answerOptions: [
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
			],
		},
		{
			questionText: 'Prefer spoken directions over written directions?',
			answerOptions: [
				{ answerText: 'Disagree', isCorrect: true },
				{ answerText: 'Agree', isCorrect: true },
			],
		},
		{
			questionText: 'How often do you read?',
			answerOptions: [
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
			],
		},
		{
			questionText: 'Do you consider reading written notes as a method of study?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: true },
			],
		},
		{
			questionText: 'Do you like to explore new things?',
			answerOptions: [
				{ answerText: 'Disagree', isCorrect: true },
				{ answerText: 'Agree', isCorrect: true },
			],
		},
		{
			questionText: 'When you talk do you talk with hands or gestures?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: true },
			],
		},
		{
			questionText: 'When you are not sure how to understand the notes or the theory, what are you most likely to do?',
			answerOptions: [
				{ answerText: '1) Watch tutorial or explanation videos', isCorrect: true },
				{ answerText: '2) Use rhymes to help memorize the notes', isCorrect: true },
				{ answerText: '3) Read notes silently again and again', isCorrect: true },
				{ answerText: '4) Associate a feeling with information', isCorrect: true },
			],
		},
		{
			questionText: 'When a instructor is teaching a particular subject, what are you most likely to do?',
			answerOptions: [
				{ answerText: '1) Observe rather than acts or talks', isCorrect: true },
				{ answerText: '2) Discuss the material among students and the instructor', isCorrect: true },
				{ answerText: '3) Takes short notes', isCorrect: true },
				{ answerText: '4) Use hands-on activities with objects that can be touched', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showLearner, setShowLearner] = useState(false);
	const [learnerType, setType] = useState(String);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setType(learnerType + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowLearner(true);
		}
	};
	return (
		<div className='backRectangle'>
			<div className= 'headingText'>
			What's Your Learning Style ?
			</div>
			<span className='para'> This quiz consist of 10 questions </span>
				<div className='app'>
					{showLearner ? (
						<div className='score-section'>
							You are a {learnerType} learner.
						</div>
						
					) : (
						<>
							<div className='question-section'>
								<div className='question-count'>
									<span>Question {currentQuestion + 1}</span>/{questions.length}
								</div>
								<div className='question-text'>{questions[currentQuestion].questionText}</div>
							</div>
							
							<div className='answer-section'>
								
								{questions[currentQuestion].answerOptions.map((answerOption) => (
									<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
								))}
								
							</div>
						</>
					)}
				</div>
			
		</div>
		
		
	);
}