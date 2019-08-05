module.exports = function () {
 const mongoose = require('mongoose');
 //mongoose.connect('mongodb://localhost:27017/wbdv-su19', {useNewUrlParser: true});
 mongoose.connect('mongodb://heroku_674vnd6l:qvie32tkbjru83t21rsoml39ml@ds019638.mlab.com:19638/heroku_674vnd6l',
 {useNewUrlParser: true});

};