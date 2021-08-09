const  mongoose = require ('mongoose');
//const {Schema} = mongoose;

mongoose.connect('mongodb://localhost/apiCasaDeRacao' );
mongoose.Promise = global.Promise;


module.exports = mongoose;