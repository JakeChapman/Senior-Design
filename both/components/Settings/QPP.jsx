this.QPP = React.createClass({
   render(){



       return(

           <div className="ui labeled input">
               <div className="ui label">
                   Number of Questions:
               </div>
               <input name="questions-per-period" id="qpp" placeholder={this.props.QPD ? this.props.QPD : 0}/>
           </div>
       )
   }
});