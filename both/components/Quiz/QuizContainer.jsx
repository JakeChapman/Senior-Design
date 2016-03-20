// QuizData handles all data subscriptions and pushes data down to
// children via props.
//
// This component is a container or 'view controller' and will gather
// any data needed from the domain objects and handle subscriptions
//
// In a future version the children will be able to specify what fields
// they need, however currently they're stored in this component.

/*global QuizPage, ReactMeteorData, QuizDomain */

this.QuizContainer = React.createClass({

    mixins: [ReactMeteorData],

    getInitialState(){
        return{
            answered: false
        };
    },

    componentDidMount() {
        $("#navQuiz").toggleClass("nonfocus");
        $("#navQuiz").toggleClass("focus");
    },

    componentWillUnmount() {
        $("#navQuiz").toggleClass("nonfocus");
        $("#navQuiz").toggleClass("focus");
    },

    startMeteorSubscriptions(){
        return Meteor.subscribe("questions", User.id());
    },

    getMeteorData(){
        var sub = this.startMeteorSubscriptions();
        return {
            quizReady: sub.ready(),
            question: QuizDomain.getQuestion()
        };
    },

    getRationale(){
        console.log("setting state");
      this.setState({answered: true});
    },

    render(){

        if(typeof this.data.question === 'undefined'){
            console.log("getting Loading page");
            return <Loading/>
        }else{
            console.log("getting Actual page");
            let answer;
            answer = this.data.question.answers.filter(function (answer) {
                return answer.correct
            });

            return (
                <QuizPage question={this.data.question} correctAnswer={answer} answered={this.state.answered} onClick={this.getRationale}/>
            )
        }
    }
});
