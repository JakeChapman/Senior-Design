Template.notes.events({
  "change .myFileInput": function(event, template) {
    console.log(this.value);
    document.getElementById("file-text").innerHTML = this.value;
  }
});
