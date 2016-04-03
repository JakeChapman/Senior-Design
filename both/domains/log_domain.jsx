
LogDomain = {
    getQuestionLog(){
        return QuestionsLog.find().fetch();
    },

    getQuestionsIdfromLog(){
        return Questions.find({}, {fields: {_id: 1}}).map(doc => doc._id);
    },

    getQuestionFromLog(qId) {
        return Questions.findOne(qId);
    },

    getCorrectDay(offset){
        var now = new Date().getDate();
        var curMonth = new Date().getMonth();
        if(now - offset <= 0){
            var remainder = Math.abs(now - offset);
            if(curMonth % 2 === 0){
                return 30 - remainder;
            }else{
                return 31 - remainder;
            }
        }else{
            return now - offset;
        }
    },

    //Javascript for chart below
    drawChart() {
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];


        console.log(QuestionsLog);

        var now = new Date();

        var totalData =[];
        var correctData = [];
        var Labels = [];
        for(var i = 6; i >=0; i--){
            var day = this.getCorrectDay(i);
            var tempCount = QuestionsLog.find({answeredOn: day}).count();
            if(tempCount > 0){
                totalData.push(tempCount);
                correctData.push(QuestionsLog.find({ $and: [{answeredOn: day}, {correct: true}]}).count());
                Labels.push(days[(((now.getDay() - i) >= 0) ? Math.abs(now.getDay() - i) : 7 - Math.abs(now.getDay() - i))]);
            }
        }

        var data = {
            labels: [
                days[(((now.getDay() - 6) >= 0) ? Math.abs(now.getDay() - 6) : 7 - Math.abs(now.getDay() - 6))],
                days[(((now.getDay() - 5) >= 0) ? Math.abs(now.getDay() - 5) : 7 - Math.abs(now.getDay() - 5))],
                days[(((now.getDay() - 4) >= 0) ? Math.abs(now.getDay() - 4) : 7 - Math.abs(now.getDay() - 4))],
                days[(((now.getDay() - 3) >= 0) ? Math.abs(now.getDay() - 3) : 7 - Math.abs(now.getDay() - 3))],
                days[(((now.getDay() - 2) >= 0) ? Math.abs(now.getDay() - 2) : 7 - Math.abs(now.getDay() - 2))],
                days[(((now.getDay() - 1) >= 0) ? Math.abs(now.getDay() - 1) : 7 - Math.abs(now.getDay() - 1))],
                days[(((now.getDay()) >= 0) ? Math.abs(now.getDay()) : 7 - Math.abs(now.getDay()))]

            ],
            datasets: [
                {
                    label: "Questions",
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: totalData
                }, {
                    label: "Correct Answers",
                    fillColor: "rgba(151,187,205,0.5)",
                    strokeColor: "rgba(151,187,205,0.8)",
                    highlightFill: "rgba(151,187,205,0.75)",
                    highlightStroke: "rgba(151,187,205,1)",
                    data: correctData
                }
            ]
        };
        var options = {
            //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
            scaleBeginAtZero: true,

            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: true,

            //String - Colour of the grid lines
            scaleGridLineColor: "rgba(0,0,0,.05)",

            //Number - Width of the grid lines
            scaleGridLineWidth: 1,

            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,

            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,

            //Boolean - If there is a stroke on each bar
            barShowStroke: true,

            //Number - Pixel width of the bar stroke
            barStrokeWidth: 2,

            //Number - Spacing between each of the X value sets
            barValueSpacing: 5,

            //Number - Spacing between data sets within X values
            barDatasetSpacing: 1,

            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

        };

        //Remove empty days
        console.log(totalData.length);
        if(totalData.length > 0){
            var ctx = document.getElementById("activitiesChart").getContext("2d");
            var canvas = document.getElementById("activitiesChart");
            this.fitToContainer(canvas);
            var myBarChart = new Chart(ctx).Bar(data, options);

        }

    },

    fitToContainer(canvas){
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    }


};