let mongoose = require("mongoose");
const bookSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required:true,
        },
        publishYear:{
            type:Number,
            required:true,
        },
    },
    {
        timestamps:true,
    }
);
 const Book = mongoose.model('book',bookSchema);
 module.exports = Book;