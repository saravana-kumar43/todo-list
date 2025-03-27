import todoModel from "../models/todo.model.js";

export async function getList(req,res){
    try {
        let data = await todoModel.find();
        res.status(200).json({success : true , message : "success" , data : data})
    } catch (error) {
       return res.status(500).json({success : false , message : error.message , data : error.stack}) 
    }
}

export async function addListItem(req,res) {
    try {
        let reqBody = req.body ;
        let newTodo = new todoModel({
            todo : reqBody.todo 
        })
        await newTodo.save();
        res.status(200).json({success : true , message : "added" , data : []});
    } catch (error) {
       return res.status(500).json({success : false , message : error.message}) 
    }
}

export async function updateListItem(req,res) {
    try {
        let reqBody = req.body ;
        let _id = req.params._id ;
        await todoModel.updateOne({_id : _id} , { $set : reqBody });
        res.status(200).json({success : true , message : "updated" , data : []});
    } catch (error) {
        console.log(error.message);
       return res.status(500).json({success : false , message : error.message}) 
    }
}

export async function deleteListItem(req,res) {
    try {
        let params = req.params ;
        await todoModel.deleteOne({_id : params._id});
        res.status(200).json({success : true , message : "deleted" , data : []});
    } catch (error) {
       return res.status(500).json({success : false , message : error.message}) 
    }
}