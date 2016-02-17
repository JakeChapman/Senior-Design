class Loading extends React.Component{

    componentDidMount(){
        $body = $("body");

        $(document).on({
            ajaxStart: function() { $body.addClass("loading");    },
            ajaxStop: function() { $body.removeClass("loading"); }
        });
    }

    render(){
        return(
            <div className="container" id="loading-wrapper">
                <div className="modal">
                    <h1>Loading</h1>
                </div>
            </div>
        )
    }
};

this.Loading = Loading;