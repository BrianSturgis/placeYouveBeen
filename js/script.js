//Business Logic for Collection of Places
function PlaceID() {
  this.userPlaces = {};
  this.currentID = 0;
}
PlaceID.prototype.addPlace = function (location) {
  location.id = this.assignID();
  this.userPlaces[location.id] = location;
}
PlaceID.prototype.assignID = function() {
  this.currentID += 1;
  return this.currentID;
}
//Business Logic for Places
function Places(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = [];
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}
// let samplePlace = new Places ("Portland", ["Powell's", "Japanese Garden", "Pittock Mansion"], "winter 2021", "Very chill, very fun");
Places
// Places.prototype.propertiesOutput = function() {
//   return this.location + " " +
// }







// user logic
$(document).ready(function() {
  $("*").submit(function(event){
    event.preventDefault();
    $(".output").text();

  });
});