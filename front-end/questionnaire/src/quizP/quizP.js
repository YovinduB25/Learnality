import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'I have a vivid imagination.',
			answerOptions: [
				{ answerText: 'Disagree', isCorrect: true },
				{ answerText: 'Agree', isCorrect: true },
			],
		},
		
		{
			questionText: 'Consistently predicts political orientation.',
			answerOptions: [
				{ answerText: 'Disagree', isCorrect: true },
				{ answerText: 'Agree', isCorrect: true },
			],
		},
		{
			questionText: 'I usually plan ahead and follow a schedule to get a work done.',
			answerOptions: [
				{ answerText: 'Disagree', isCorrect: true },
				{ answerText: 'Agree', isCorrect: true },
			],
		},
		{
			questionText: 'I like to keep things clean, and organized. ',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: true },
			],
		},
		{
			questionText: 'I do love to teach and share information. ',
			answerOptions: [
				{ answerText: 'Disagree', isCorrect: true },
				{ answerText: 'Agree', isCorrect: true },
			],
		},
		{
			questionText: 'I am likely to talk often and socialize with others ',
			answerOptions: [
				{ answerText: 'Disagree', isCorrect: true },
				{ answerText: 'No', isCorrect: true },
			],
		},
		{
			questionText: "I sympathize with others' feelings.",
			answerOptions: [
				{ answerText: 'Disagree', isCorrect: true },
				{ answerText: 'Agree', isCorrect: true },
			],
		},
		{
			questionText: 'I enjoy helping and contributing to the happiness of other people',
			answerOptions: [
				{ answerText: 'Disagree', isCorrect: true },
				{ answerText: 'No', isCorrect: true },
			],
		},
		{
			questionText: 'Easily jealous about what others have. ',
			answerOptions: [
				{ answerText: 'Disagree', isCorrect: true },
				{ answerText: 'Agree', isCorrect: true },
			],
		},
		{
			questionText: 'I am unable to handle stress well.',
			answerOptions: [
				{ answerText: 'Disagree', isCorrect: true },
				{ answerText: 'Agree', isCorrect: true },
			],
		},
	];

	const [currentQuestionPers, setCurrentQuestionPers] = useState(0);
	const [showPers, setShowPers] = useState(false);
	const [persType, setPersType] = useState(String);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setPersType(persType + 1);
		}

		const nextQuestion = currentQuestionPers + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestionPers(nextQuestion);
		} else {
			setShowPers(true);
		}
	};
	return (
		<div className='backRectangleP'>
			<div className= 'headingTextP'>
			What's Your Personality Trait ?
			</div>
			<span className='paraP'> This quiz consist of 10 questions </span>
				<div className='pApp'>
					{showPers ? (
						<div className='score-sectionP'>
							You possess {persType} personality type .
						</div>
								
					) : (
						<>
							<div className='questionSection'>
								<div className='questionCount'>
									<span>Question {currentQuestionPers + 1}</span>/{questions.length}
								</div>
								<div className='questionText'>{questions[currentQuestionPers].questionText}</div>
							</div>
							
							<div className='answerSection'>
								
								{questions[currentQuestionPers].answerOptions.map((answerOption) => (
									<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
								))}
								
							</div>
						</>
					)}
				</div>
			
		</div>
	);
}