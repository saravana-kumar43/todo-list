import { model, Schema } from 'mongoose';

// phno , name , rollno , email , socials ..etc .

const todoSchema = new Schema({
    todo : {
        type : String ,
        required : true ,
    } ,
    completed : {
        type : Boolean ,
        default : false 
    }
})

const todoModel = model('todo' , todoSchema)

// models define the collection name
// models will have the functions (quring function in a database)

export default todoModel ;