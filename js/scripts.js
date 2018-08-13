$("document").ready(function() {
  $("#clicks").click(function(event) {
    var iceCreams = ["vanilla", "strawberry", "chocolate", "mudslide"];
    iceCreams.forEach(function(icecream) {
      $(".output").append(icecream + " <br> ");
      console.log(icecream);
    });
    event.preventDefault();
  });


});
