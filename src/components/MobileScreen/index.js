import {useState} from 'react'

import KBCContext from '../../context/KBCContext'

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

const MobileScreen = props => {
  const {match} = props
  const {questionIndex} = match.params

  const [playerName, setPlayerName] = useState('')
  const [playersList, setPlayerList] = useState([])

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')

  const [feedback, setFeedback] = useState('')

  const currentQuestion = questions[questionIndex]

  const onChangeNameInput = event => {
    setPlayerName(event.target.value)
  }

  return (
    <KBCContext.Consumer>
      {value => {
        const {setWinnerName, winnerName} = value
        const handleSubmit = () => {
          if (selectedOption === currentQuestion.correct) {
            setWinnerName('vivek sai')
            if (currentQuestionIndex < questions.length - 1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1)
              setFeedback('Right answer!')
              const {history} = props
              history.replace(`/${currentQuestionIndex + 1}`)
            }
          } else {
            setFeedback('Wrong answer.')
          }
        }
        return (
          <div className="mobile-screen">
            {winnerName !== '' && (
              <div className="winner">
                <h1>Congratulations 🎉, {winnerName}!</h1>
              </div>
            )}
            {playersList.length === 0 ? (
              <div>
                <h2>Enter your name to join the game :</h2>
                <input
                  type="text"
                  value={playerName}
                  placeholder="Enter your name.."
                  onChange={onChangeNameInput}
                />
                <button
                  type="button"
                  onClick={() => setPlayerList([...playersList, playerName])}
                >
                  Join
                </button>
              </div>
            ) : (
              <div>
                <h2 className="question">
                  {currentQuestionIndex + 1}. {currentQuestion.question}
                </h2>
                <form>
                  {currentQuestion.options.map(option => (
                    <div key={option} className="radio-option">
                      <input
                        type="radio"
                        id={option}
                        name="answer"
                        value={option}
                        onChange={() => setSelectedOption(option)}
                        checked={selectedOption === option}
                      />
                      <label htmlFor={option}>{option}</label>
                    </div>
                  ))}
                </form>
                <p
                  className={feedback === 'Right answer!' ? 'correct' : 'wrong'}
                >
                  {feedback}
                </p>
                <button type="button" onClick={handleSubmit}>
                  Submit Answer
                </button>
              </div>
            )}
          </div>
        )
      }}
    </KBCContext.Consumer>
  )
}

export default MobileScreen
