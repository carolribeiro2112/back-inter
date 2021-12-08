import { Router }  from "express";
import userAuthenticated from "../middlewares/userAuthenticated";
 
const pixRouter = Router(); 
// const pixController = new PixController();

pixRouter.use(userAuthenticated)

// userRouter.post('/signin', userController.signin)
// userRouter.post('/signup', userController.signup)
// userRouter.get('/signup', userController.signup)

export default pixRouter;