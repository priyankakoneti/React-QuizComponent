import React, {Component} from 'react';
class QuizEnd extends Component
{
    //resetClickHandler(prop) : this.handleResetClick.bind(this);
    handleResetClick()
    {
        this.props.resetClickHandler();
        this.setState({quiz_position : 1});
        <a onClick = {this.handleResetClick.bind(this)}></a>
       
    }
    render()
    {
        return(
            <div>
        <p>Thanks for playing!</p>
        <a href=''>Reset Quiz</a>
      </div>
        );
    }
}
export default QuizEnd;