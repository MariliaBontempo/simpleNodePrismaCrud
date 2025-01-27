import { Router } from "express";
import {CategoryController} from "../controllers/filmController"

const categoryController = new CategoryController();

const filmsRouter = Router();

filmsRouter.get('/getFilmsCategories',(res,req) => categoryController.getCategoryOfFilms(res,req));
filmsRouter.post('/addCategory',(req,res) => categoryController.createCategory(req,res));
filmsRouter.delete('/delCategory/:id',(req,res) => categoryController.delCategory(req,res));

export default filmsRouter;