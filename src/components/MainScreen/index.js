import {useState} from 'react'

import {QRCodeSVG} from 'qrcode.react'

import './index.css'

const questions = [
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correct: 'Mars',
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      'Charles Dickens',
      'Jane Austen',
      'William Shakespeare',
      'Mark Twain',
    ],
    correct: 'William Shakespeare',
  },
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    correct: 'Paris',
  },
  {
    question: 'Which element is needed for combustion?',
    options: ['Nitrogen', 'Hydrogen', 'Oxygen', 'Carbon'],
    correct: 'Oxygen',
  },
  {
    question: 'How many continents are there?',
    options: ['5', '6', '7', '8'],
    correct: '7',
  },
]

const MainScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const currentQuestion = questions[currentQuestionIndex]

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }
  const b = 'c'
  localStorage.setItem('a', b)
  return (
    <div className="main-screen">
      <h1>Scan to Join the Game</h1>
      <div className="qr-code">
        <QRCodeSVG
          value={`https://kbcgame.ccbp.tech/${currentQuestionIndex}`}
          size={200}
        />
      </div>
      <h2 className="question">
        {currentQuestionIndex + 1}. {currentQuestion.question}
      </h2>
      <ul>
        {currentQuestion.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ul>

      <div className="buttons-container">
        <button
          type="button"
          onClick={handleBack}
          className="main-screen-button"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNextQuestion}
          className="main-screen-button"
        >
          Next Question
        </button>
      </div>
    </div>
  )
}

export default MainScreen
