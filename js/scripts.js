//Business Logic
function Destination(location, landmarks, year) {
  this.location = location;
  this.landmarks = landmarks;
  this.year = year;
}
//UI
$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
   event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmarks = $("input#new-landmarks").val();
    var inputtedYear = $("input#new-year").val();

    var newDestination = new Destination(inputtedLocation, inputtedLandmarks, inputtedYear);
    $("ul#places").append("<li><span class = 'place'>" + newDestination.location + "</span></li>");
  });
});
