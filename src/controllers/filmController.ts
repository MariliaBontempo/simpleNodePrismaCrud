import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";

const prisma = new PrismaClient();

export class CategoryController{
    async getCategoryOfFilms(req:Request,res:Response){

        try{
            const films = await prisma.category.findMany({
                
                
                select:{
                  name:true
                }
                
            }); res.json(films);           

        }
    

    catch(error){
        console.error("Err",error);
        res.status(500).json({error:'Could not list films!'});

    }
    }


    async createCategory(req:Request,res:Response){
        console.log(req.body.name);
        try{


            const category = await prisma.category.create({
                data: {
                  
                  name: req.body.name,
                  last_update: new Date()
                },
              });
            res.json(category);

        }catch(error){
            res.status(500).json({error: 'Could not create'})
        }
        

    }


    async delCategory(req:Request,res:Response){
        

        try{
            const cat=parseInt(req.params.id);
            console.log(cat);
            const deleteCategory = await prisma.category.delete({
                where: {
                    category_id: cat,
                },
              });
              res.json(deleteCategory);
            
        } catch(error){
            res.status(500).json({error:"Could not delete category"})
        }

    }

    


}