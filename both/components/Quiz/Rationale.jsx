class Rationale extends React.Component{
    moveOn(){

        ReactLayout.render(Layout, {content: <QuizContainer/>});
    }

    render(){

        var answer = this.props.question.answers.filter(function(answer) {
            return answer.correct
        });

        console.log(answer);
        let btnColor;

        if(this.props.correct){
            btnColor = {
                backgroundColor: 'green'
            };
        }else{
            btnColor = {
                backgroundColor: 'red'
            };
        }
        return (
            <div className="container" id="quiz-wrapper">
                <Question text={this.props.question.text}/>
                <div className="correctAnswer">
                    <Answer key={answer[0].index} text={answer[0].answer} correct={true} style={btnColor}/>
                </div>
                <div className="card" id="rationale">
                    {this.props.question.rationale}
                </div>

                <button className="btn btn-primary" onClick={this.moveOn}>Next Question</button>
            </div>
        )
    }
}

Rationale.propTypes = {
    question: React.PropTypes.object,
    correct: React.PropTypes.bool
};

this.Rationale = Rationale;