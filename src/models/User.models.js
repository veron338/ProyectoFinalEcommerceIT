import mongoose, {Schema,now} from "mongoose"

const  modelSchema = new mongoose.Schema ({

  name: 	{type:String, required:true },
  lastname: {type:String},
  email: 	{type: String },
  password: {type:String},
  comment:{type:String} 
})

const ModelUser = mongoose.model("Users",modelSchema)

export default  ModelUser




