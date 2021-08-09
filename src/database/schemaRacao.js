const mongoose = require('./schema.js');
const racao = require('../class/ClassRacao.js');
//const racaoDB = racao

const RacaoSchema = new mongoose.Schema ({
    
        fabricante : {
            type : String,
            required : true,
        },
        sabor : {
            type : String,
            required : true,
        },
        
        preco : {
            type : Number,
            required : true,
        },
        tipo : {
            type : Number,
            required : true,
        }
    
})

const RacaoDB = mongoose.model('RacaoDB', RacaoSchema);

module.exports = RacaoDB;
