Push.allow({
    send: function(userId, notification) {
        // Allow all users to send to everybody - For test only!
        console.log("Here");
        return true;
    }
});
Push.debug = true;