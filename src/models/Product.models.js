import mongoose, {Schema} from "mongoose"

const  modelSchema = new mongoose.Schema ({
    name: {type: String, require: true, match: /[\w\s]{2,}/ },
    model: {type: String, require: true, match: /[\w\s]{2,}/ },
    brand: {type: String, require: true, match: /[\w\s]{2,}/ },
    category: {type: String, require: true, match: /[a-zA-Z\s]{2,}/ },
    price: {type: Number, require: true, min: 0 },
    colors: [String],
    descriptions:{type:String},
    descriptionsLarge:{type:String},
    shipping:{type:String},
    img:{type:String},
    stock: {type: Number, require: true, min: 0 },
    ageMin: {type: Number, require: true, min: 0 },
    ageMax: {type: Number, require: true, min: 0 }
    
})

const ModelProduct = mongoose.model("ProductOne",modelSchema)

export default  ModelProduct 