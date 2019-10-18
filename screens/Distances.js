var distance = require('google-distance-matrix');

var origins = ['San Francisco CA', '40.7421,-73.9914'];
var destinations = [
  'New York NY',
  'Montreal',
  '41.8337329,-87.7321554',
  'Honolulu'
];

distance.key(process.env.GOOGLE);
distance.units('imperial');

distance.matrix(origins, destinations, function(err, distances) {
  if (err) {
    return console.log(err);
  }
  if (!distances) {
    return console.log('no distances');
  }
  if (distances.status === 'OK') {
    for (var i = 0; i < origins.length; i++) {
      for (var j = 0; j < destinations.length; j++) {
        var origin = distances.origin_addresses[i];
        var destination = distances.destination_addresses[j];
        if (distances.rows[0].elements[j].status === 'OK') {
          var length = distances.rows[i].elements[j].distance.text;
          console.log(
            'Distance from ' + origin + ' to ' + destination + ' is ' + length
          );
        } else {
          console.log(destination + ' is not reachable by land from ' + origin);
        }
      }
    }
  }
});
