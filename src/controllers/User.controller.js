import ModelUser from "../models/User.models.js" 

export  const getUsers = async(req,res) =>{
    const query = req.query ?? {}
            // {
            //     brand: new RegExp ("Sams", "i"),
            //     model: "a"
            // }
            const users = await ModelUser.find(query)
            res.json(users)    
}

export  const getUsersById = async (req,res) =>{
    const {id} = req.params
    try {
        const user = await ModelUser.findOne( {_id: id} )
        res.json(user ?? {}) 

    } catch (e) {
        res.status(500).json({errMsg: "Error al buscar el usuario", e})
    }
}

export  const deleteUsersById =async (req,res) =>{
    const {id} = req.params 
    try {
        const result = await ModelUser.deleteOne({ _id:id })
        res.json({deleted: !!result.deletedCount})
    } catch (e) {
        res.status(500).json({errMsg: "Error al borrar el usuario", e})
    }
}

export  const updateUsersById = async (req,res) =>{
    const {id} = req.params 
    const {body} = req
    try {
        const users = await ModelUser.findOneAndUpdate(
                                {_id:id},
                                body,
                                {new:true}
                            )
        res.json(users)

    } catch (e) {
        res.status(500).json({errMsg: "Error al modificar el usuario", e})
    }
}

export const createUsers = async (req, res) => {
    const {body} = req

    const user = new ModelUser
    
    user.name = body.name
    user.lastname = body.lastname
    user.email= body.email
    user.password= body.password
    user.comment = body.comment


    try{

        await user.save()
        res.json( user  )
        
    }
    catch(e){
        res.status(500).json({errMsg: "Error al crear el Usiario", e})
    }
}
