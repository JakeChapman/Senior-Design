/*global User:true */
/**
 * Created by jacob on 2/15/16.
 */
// User 'model' namespace
// allows your code to read a bit nicer with a
// few convenience methods and abstracts away the db
// in case we ever switch dbs in the future

User = {
    pushIntervalId:  null,
    nxtQuestionIntervalId: null,
    shouldUpdate: false,
    calledTimer: false,
    // returns user {Object} of current user or
    // returns empty object if not logged in to prevent
    // undefined if chaining helper methods
    current: function() {
        return (Meteor.user()) ? Meteor.user() : {};
    },

    // returns the user's id {String}
    id: function() {
        return Meteor.userId();
    },

    name: function(){
        var user = Meteor.user();
        if(typeof user === 'undefined'){
            return;
        }
        return user.profile.name;
    },

    // returns user profile {Object}
    username: function() {
        return Meteor.user() && Meteor.user().username;
    },

    // returns first role {String} in user's role array if found
    profile: function() {
        var user = Meteor.user();
        if (user && user.profile) {
            return user.profile;
        }
    },

    // returns user email {String}
    email: function() {
        var user = Meteor.users.findOne(this.id());
        if (user && user.emails && user.emails[0]) {
            return user.emails[0].address;
        }
    },

    // returns {Bool}
    loggedIn: function() {
        return !!Meteor.userId();
    },

    // returns {Bool}
    loggedOut: function() {
        return !this.loggedIn();
    },

    // returns {Bool}
    loggingIn: function() {
        return Meteor.loggingIn();
    },

    // returns {Bool}
    notLoggingIn: function() {
        return !Meteor.loggingIn();
    },

    parseTime(s) {
        var c = s.split(':');
        console.log(c[0] + ' ' + c[1]);
        if (c[1].search("p") != -1) {
            console.log("pm");
            return (parseInt(c[0]) + 12) * 60 + parseInt(c[1])
        } else {
            return parseInt(c[0]) * 60 + parseInt(c[1]);
        }
    },
    //Quiz Timer Stuff
    quizControl: function(){
        if(typeof Meteor.user() != 'undefinded') {
            console.log("Starting timer maybe?");
            let curUser = Meteor.user();
            //Make sure user is defined
            if (typeof curUser != 'undefined') {
                //Check if profile settings are defined
                if (typeof curUser.profile.startDate != 'undefined') {
                    //Profile Settings have been defined
                    //Check if in date window
                    console.log("Checking date window");
                    let sDate = curUser.profile.startDate.split("/");
                    let eDate = curUser.profile.endDate.split("/");
                    let curDate = moment().toArray();

                    //check for correct month
                    if(curDate[1] + 1 >= +sDate[0] && curDate[1] + 1 <= +eDate[0]) {
                        //Month is correct
                        if (curDate[2] >= +sDate[1] && curDate[2] <= +eDate[1]) {
                            //Day is correct; Continue on about the function
                            //Within Date window
                            //Check if within time window
                            console.log("Checking time window");

                            let sTime = curUser.profile.startTime;
                            let eTime = curUser.profile.endTime;
                            let curMoment = moment();

                            curMoment = User.parseTime("" + (curMoment.hour() > 12 ? curMoment.hour() - 12 : curMoment.hour()) + ":" + curMoment.minute() + (curMoment.hour() > 12 ? "p.m." : "a.m."));

                            if (curMoment >= sTime && curMoment <= eTime) {
                                //It is within Time window
                                //Check to see if it has been answered yet
                                console.log("Within Time window; checking if answered");
                                if (!curUser.profile.answered) {

                                    //Make sure question timer is cleared
                                    if(User.calledTimer){
                                        //Clear it
                                        User.nextQuestionTimer([curUser.profile.qph, curUser.profile.answered, User.nxtQuestionIntervalId]);
                                        User.calledTimer = false;
                                        console.log("clearing question interval");
                                        User.nxtQuestionIntervalId = null;
                                    }

                                    console.log("Calling push.pester");
                                    User.pushIntervalId = User.pushPester([curUser._id, curUser.profile.answered, User.pushIntervalId]);
                                } else {
                                    //Already been answered make sure the push timer has been cleared and that the next question timer has been started
                                    if (User.pushIntervalId != null) {
                                        console.log("clearing push notifications");
                                        //Clear the interval function; stop the notifications
                                        User.pushPester([curUser._id, curUser.profile.answered, User.pushIntervalId]);
                                    } else {
                                        //Push Notifications have been clear already
                                        //Check for the next question timer
                                        if (User.nxtQuestionIntervalId != null) {
                                            //Timer has been started nothing needs to be done
                                            console.log("Here");
                                        } else {
                                            console.log(User.shouldUpdate);
                                            console.log(User.calledTimer);
                                            //Time to start the next question timer
                                            if (User.shouldUpdate) {
                                                User.updateProfile();
                                            } else {
                                                if (!User.calledTimer) {
                                                    console.log("Calling question timer");
                                                    User.nxtQuestionIntervalId = User.nextQuestionTimer([curUser.profile.qph, curUser.profile.answered, User.nxtQuestionIntervalId, curUser._id]);
                                                    User.calledTimer = true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }else{
                                console.log("Not within time window");
                            }
                        }else{
                            console.log("Wrong day");
                        }
                    }else{
                        console.log("Wrong month");
                    }

                } else { //profile is not defined yet exit
                    console.log("Cannot start timer; Please have user set profile first");
                }
            }
        }
    },

    updateProfile(){
        console.log("updating...");
        let curUser = Meteor.user();
        let curProfile = curUser.profile;
        curProfile.answered = false;
        Meteor.users.update(curUser._id, {$set: {profile: curProfile}});
    },

    serverUpdate(){
        console.log("setting update var");
        User.shouldUpdate = true;
    },

    pushPester(args){
        console.log(args);
        if(!args[1]) {
            console.log("sending push");
            return Meteor.setInterval(function () {
                Push.send({
                    from: 'StudyLock',
                    title: 'Quiz Time',
                    text: 'Hey, guess what?! Its time for a question!',
                    query: {
                        userId: args[0]
                    }
                })
            }, 30 * 1000);
        }else{
            Meteor.clearInterval(args[2]);
            User.pushIntervalId = null;
        }
    },

    nextQuestionTimer(args){
        let qph = args[0];
        let diff = Math.round(60 / qph);
        diff = diff * 60;
        console.log("inside question timer");
        console.log(qph);
        console.log((args[1] ? "true" : "false"));
        if(!args[1]){
            console.log("clear question");
            Meteor.clearInterval(args[2]);
        }else{
            console.log("Calling interval timer");
            return Meteor.setInterval(function(){
                //Time has been up lets start messing with them again
                //First need to adjust profile answered value to false
                //Update profile


                console.log("Updating profile to start pestering");

                User.shouldUpdate = true;
                User.nxtQuestionIntervalId = null;

            }, diff * 1000);
        }
    }
    // CRUD

    // Create handles with Meteor login buttons
};

