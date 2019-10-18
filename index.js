// const router = require('express').Router();
// const distance = require('google-distance-matrix');

// router.use('/robots', require('./robots'));
// router.use('/projects', require('./projects'));

// router.use((req, res, next) => {
//   const err = new Error('API route not found!');
//   err.status = 404;
//   next(err);

//   router.post('/', (req, res, next) => {
//     const origins = req.body.origins;
//     const destinations = req.body.destinations;
//     const mode = req.body.travelMode;

//     distance.matrix(origins, destinations, mode, function(err, distances) {
//       if (!err) res.json(distances.rows);
//     });
//   });
// });
// module.exports = router;
