const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    tittle : {
        type : String,
        required : true,
        trim : true,
        maxLength : 50 
    },
    amount : {
        type : Number,
        maxLength : 20,
        required : true,
        trim : true 
    },
    type : {
        type : String,
        default: "income"
    },
    date : {
        type : Date,
        required : true,
        trim : true 
    },
    category : {
        type : String,
        required : true,
        trim : true 
    },
    description : {
        type : String,
        required : true,
        trim : true 
    },

}, {timestamps: true})

module.exports = mongoose.model('Income', IncomeSchema)