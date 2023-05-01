import ModelProduct from "../models/Product.models.js" 

export  const getProducts = async(req,res) =>{
    const query = req.query ?? {}
            // {
            //     brand: new RegExp ("Sams", "i"),
            //     model: "a"
            // }
            const products = await ModelProduct.find(query)
            res.json(products)    
}

export  const getProductsById = async (req,res) =>{
    //res.json("get products_id")
    const {id} = req.params
    try {
        const product = await ModelProduct.findOne( {_id: id} )
        res.json(product ?? {}) 

    } catch (e) {
        res.status(500).json({errMsg: "Error al buscar el recurso", e})
    }
}

export  const deleteProductById =async (req,res) =>{
    const {id} = req.params 
    try {
        const result = await ModelProduct.deleteOne({ _id:id })
        res.json({deleted: !!result.deletedCount})
    } catch (e) {
        res.status(500).json({errMsg: "Error al borrar el recurso", e})
    }
}

export  const updateProductsById = async (req,res) =>{
    const {id} = req.params 
    const {body} = req
    try {
        const product = await ModelProduct.findOneAndUpdate(
                                {_id:id},
                                body,
                                {new:true}
                            )
        res.json(product)

    } catch (e) {
        res.status(500).json({errMsg: "Error al modificar el recurso", e})
    }
}

export const createProducts = async (req, res) => {
    const {body} = req

    const product = new ModelProduct 
    product.name = body.name
    product.brand = body.brand
    product.model = body.model
    product.category = body.category
    product.price = body.price
    product.colors = body.colors
    product.descriptions = body.descriptions
    product.descriptionsLarge = body.descriptionsLarge
    product.img = body.img
    product.shipping = body.shipping
    product.stock = body.stock
    product.ageMin = body.ageMin
    product.ageMax = body.ageMax

    try{

        await product.save()
        res.json( product  )
        
    }
    catch(e){
        res.status(500).json({errMsg: "Error al crear el Producto", e})
    }
}

