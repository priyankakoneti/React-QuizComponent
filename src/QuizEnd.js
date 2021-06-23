import React, {Component} from 'react';
class QuizEnd extends Component
{
    //resetClickHandler(prop) : this.handleResetClick.bind(this);
    handleResetClick()
    {
        this.props.resetClickHandler()        
    }
    render()
    {
        return(
            <div>
        <p>Thanks for playing!</p>
        <a href='#href' onClick = {this.handleResetClick.bind(this)}>Reset Quiz</a>
      </div>
        );
    }
}
export default QuizEnd;