"use strict";
var OSRM = require('osrm');
var osrm = new OSRM({ algorithm: 'MLD', path: './osrm/kor.osrm' });
osrm.route({ coordinates: [[13.438640, 52.519930], [13.415852, 52.513191]] }, function (err, result) {
    if (err)
        throw err;
    console.log(result.waypoints); // array of Waypoint objects representing all waypoints in order
    console.log(result.routes); // array of Route objects ordered by descending recommendation rank
});
var version = require('../package.json').version;
console.log('==version:', version);
