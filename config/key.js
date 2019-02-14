if(process.env.NODE_ENV === 'production'){
  module.exports = require('./prod');
} else {
  // we are in dev
  module.exports = require('./dev');
}