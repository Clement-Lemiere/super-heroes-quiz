import React, { Component } from 'react'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'
import { Quiz } from '../QuizHeroes'

class Quiz extends Component {

  state = {
    levelNames: ['debutant', 'confirme', 'expert'],
    quizLevel : 0,
    maxQuestions : 10,
    storedQuestions : [],
    questions: null,
    options: [],
    idQuestion: 0
  }

  loadQuestions = level => {
    const fetchedArrayQuiz = QuizHeroes.level[level];
    if (fetchedArrayQuiz.length >= this.state.maxQuestions) {
      const newArray = fetchedArrayQuiz.map( ({answer, ...keepRest}) => keepRest);

      this.setState({
        storedQuestions: newArray
      })
    } else {
      console.log('pas assez de questions!');
    }
  }
  componentDidMount() {
    this.loadQuestions(this.state.levelNames[this.state.quizLevel])
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.storedQuestions !== prevState.storedQuestions) {
      this.setState ({
        questions: this.state.storedQuestions[this.state.idQuestion], question,
        options: this.state.storedQuestions[this.state.idQuestion].options
      })
    }
    
  }
  render() {
    
    const displayOptions = this.state.options.map((option, index) => {
      return (
        <p key={index} className='answerOptions'>{option}</p>
      )
    })

    return (
      <div>
        <Levels />
        <ProgressBar />
        <h2>{ this.state.question }</h2>
        {displayOptions}
        <button className='btnSubmit'>Suivant</button>
      </div>
    )
  }
}

export default Quiz