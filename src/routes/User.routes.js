import {Router} from  "express"
import * as UserController from "../controllers/User.controller.js"

const UserRoutes = Router()

//All views user
UserRoutes.get("/user",UserController.getUsers)
//Views user for ID
UserRoutes.get("/user/:id",UserController.getUsersById)
//Create Item user
UserRoutes.post("/user",UserController.createUsers)
//Put update user for ID
UserRoutes.put("/user/:id",UserController.updateUsersById)
//Delete Item user for ID
UserRoutes.delete("/user/:id",UserController.deleteUsersById)

export default UserRoutes