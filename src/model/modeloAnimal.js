// modelo 


import mongoose from 'mongoose';
import Coleira from'../class/ClasseColeira.js';
import Animal from '../class/ClassAnimal.js';
import Racao from '../class/ClassRacao.js';

//const racaoDB = racao

const AnimalSchema = new mongoose.Schema ({
  

        idAnimal : {
            type: Number,
            required: false,
            unique: true
        },

        idTutor : {
            type: Number,
            required : true,
        },
        nomeAnimal:{ 
            type : String,
            required : true,
        },   

        idade: {
            type: Number,
            required : false,
        },
        

        peso : {
            type : Number,
            required : false,
        },

        raca : {
            type : String,
            required : false,
        },

        especie : {
            type : String,
            required : true,
        },

        imagem: {
            type: String,
            required: false
        },
        anexos: {
            type: Array,
            required: false
        }

       

    // quero ver se vai 
})





AnimalSchema.loadClass(Animal)


const ModeloAnimal = mongoose.model("ANIMAI", AnimalSchema);

export default  ModeloAnimal;
