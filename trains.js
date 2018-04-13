var totalTrains = 12;
var trainsOperational = 8;

var trainNumber = 1;
while (trainNumber <= trainsOperational) {
  console.log("Train # " + trainNumber + " is running.");
  trainNumber++;
}

for ( var stoppedTrains = trainsOperational + 1; stoppedTrains <= totalTrains; stoppedTrains++ ) {
  console.log("Train # " + stoppedTrains + " is not operational.");
}
