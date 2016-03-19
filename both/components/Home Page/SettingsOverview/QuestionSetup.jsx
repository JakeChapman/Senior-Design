this.QuestionSetup = React.createClass({

    GoToSettings(){
      FlowRouter.go("/settings");
    },

    render(){
       return (
           <div>
               <button onClick={this.GoToSettings} className="huge ui black basic button">Go to Settings</button>
           </div>
       )
   }

});