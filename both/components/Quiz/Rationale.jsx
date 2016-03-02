class Rationale extends React.Component{
    render(){

        var answer = this.props.question.answers.filter(function(answer) {
            return answer.correct
        });

        console.log(answer);

        return (
            <div className="container" id="quiz-wrapper">
                <Question text={this.props.question.text}/>
                <div className="correctAnswer">
                    <Answer key={answer[0].index} text={answer[0].answer} correct={true}/>
                </div>
                <div className="card" id="rationale">
                    {this.props.question.rationale}
                </div>
            </div>
        )
    }
}

Rationale.propTypes = {
    question: React.PropTypes.object
};

this.Rationale = Rationale;