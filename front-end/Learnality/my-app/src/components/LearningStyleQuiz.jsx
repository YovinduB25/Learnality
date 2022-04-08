import React, { useState } from 'react';
import { SideBar } from "../components/SideBar";
import { CgProfile } from "react-icons/cg"
import "../LearningStyleQuiz.css"

export default function LearningStyleQuiz() {

	const userId = localStorage.getItem('userId') || '';

	const handleEndQuiz = (isLearning) => {
		var axios = require('axios');
		var data = JSON.stringify({
			"userId": userId,
			"answers": isLearning? ansArray.slice(0, 10) : ansArray.slice(10, 21),
			"is_learning": isLearning
		});
		console.log(data);

		var config = {
			method: 'post',
			url: 'https://learnality-api.herokuapp.com/api/question/storeAnswers',
			headers: {
				'Content-Type': 'application/json'
			},
			data: data
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				getLearningStyle();
			})
			.catch(function (error) {
				alert("An error has occured while storing data.");
			});
	}

	const getLearningStyle = () => {
		var axios = require('axios');

		var config = {
			method: 'get',
			url: 'https://learnality-api.herokuapp.com/api/user/getLstyle?userId=' + userId,
			headers: { }
		};

		axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
			setType(response.data.learning_style);
		})
		.catch(function (error) {
			alert("An error occured while getting personality data.");
		});
	};
	
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
				{ answerText: 'Least', isCorrect: true },
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'Neutral', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
				{ answerText: 'Most', isCorrect: true },
			],
		},
		{
			questionText: 'Prefer spoken directions over written directions?',
			answerOptions: [
				{ answerText: 'Least', isCorrect: true },
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'Neutral', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
				{ answerText: 'Most', isCorrect: true },
			],
		},
		{
			questionText: 'How often do you read?',
			answerOptions: [
				{ answerText: 'Least', isCorrect: true },
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'Neutral', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
				{ answerText: 'Most', isCorrect: true },
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
				{ answerText: 'Least', isCorrect: true },
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'Neutral', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
				{ answerText: 'Most', isCorrect: true },
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
		{
			questionText: 'I have a vivid imagination.',
			answerOptions: [
				{ answerText: 'Least', isCorrect: true },
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'Neutral', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
				{ answerText: 'Most', isCorrect: true },
			],
		},

		{
			questionText: 'Consistently predicts political orientation.',
			answerOptions: [
				{ answerText: 'Least', isCorrect: true },
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'Neutral', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
				{ answerText: 'Most', isCorrect: true },
			],
		},
		{
			questionText: 'I usually plan ahead and follow a schedule to get a work done.',
			answerOptions: [
				{ answerText: 'Least', isCorrect: true },
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'Neutral', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
				{ answerText: 'Most', isCorrect: true },
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
				{ answerText: 'Least', isCorrect: true },
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'Neutral', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
				{ answerText: 'Most', isCorrect: true },
			],
		},
		{
			questionText: 'I am likely to talk often and socialize with others ',
			answerOptions: [
				{ answerText: 'Least', isCorrect: true },
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'Neutral', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
				{ answerText: 'Most', isCorrect: true },
			],
		},
		{
			questionText: "I sympathize with others' feelings.",
			answerOptions: [
				{ answerText: 'Least', isCorrect: true },
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'Neutral', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
				{ answerText: 'Most', isCorrect: true },
			],
		},
		{
			questionText: 'I enjoy helping and contributing to the happiness of other people',
			answerOptions: [
				{ answerText: 'Least', isCorrect: true },
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'Neutral', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
				{ answerText: 'Most', isCorrect: true },
			],
		},
		{
			questionText: 'Easily jealous about what others have. ',
			answerOptions: [
				{ answerText: 'Least', isCorrect: true },
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'Neutral', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
				{ answerText: 'Most', isCorrect: true },
			],
		},
		{
			questionText: 'I am unable to handle stress well.',
			answerOptions: [
				{ answerText: 'Least', isCorrect: true },
				{ answerText: 'Less', isCorrect: true },
				{ answerText: 'Neutral', isCorrect: true },
				{ answerText: 'More', isCorrect: true },
				{ answerText: 'Most', isCorrect: true },
			],
		},
		{
			questionText: 'Completed?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [resultType, setType] = useState(String);
	const [ansArray, setAnsArray] = useState([]);

	// let answersArray = [];

	const handleAnswerOptionClick = (chosenAnswer) => {


		// this.setAnsArray(this.answersArray.push(chosenAnswer));
		setAnsArray(ansArray => [...ansArray, chosenAnswer]);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			console.log(ansArray);
			setShowResult(true);
			handleEndQuiz(true);
			handleEndQuiz(false);
		}
	};
	return (
		<div className="LearningQuiz">
			<div className="sidebar">
				<SideBar />
			</div>

			<div className='center-container'>

				<h1 className="center-container-main-heading">What's your Learning and personality Style?</h1>
				<div className="icon-container">
					<div className="profile">
						<CgProfile />
					</div>
				</div>
				<span className='learning-style-sub-heading'> This quiz consist of 20 questions.</span>
				<div className='LearningStyleQuestionContainer'>
					{showResult ? (
						<div className='score-section'>
							You are a {resultType} learner.For more information navigate to dashboard.
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

								{questions[currentQuestion].answerOptions.map((answerOption, answerIndex) => (
									<div className="choose-answer-option">
										<button data-index={answerIndex} onClick={() => handleAnswerOptionClick(answerIndex + 1)}>{answerOption.answerText}</button>
									</div>
								))}

							</div>
						</>
					)}
				</div>

			</div>
		</div>


	);
}