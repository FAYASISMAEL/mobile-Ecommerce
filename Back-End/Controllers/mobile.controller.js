import mobileSchema from "../models/mobile.model.js";

export default async function addMobile(req,res) {
    console.log("------add mobile------");

    try {
        const {name,brand,ram,storage,price,quantity,color,img_arr} = req.body;

        if(!(name && brand && ram && storage && price && quantity && color && img_arr)){
            return res.status(404).send({error:"Please fill all the options"});
        }
        
    } catch (err) {
        res.status(500).send({error:err});
    }
    
}