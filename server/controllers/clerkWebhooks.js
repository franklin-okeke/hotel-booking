import User from "../models/userModels.js";
import { Webhook } from "svix";


const clerkWebhooks = async (req, res) =>{
    try {
        //  create svix instance with clerk webhook secret
        const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        // Getting the headers
        const headers = {
            "svix_id": req.headers["svix_id"],
            "svix_timestamp": req.headers["svix_timestamp"],
            "svix_signature": req.headers["svix_signature"]
        }

        // Verifying headers
        await webhook.verify(JSON.stringify(req.bodey), headers)

        // Getting Data from request body
        const {data, type} = req.body

        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            username: data.last_name + " " + data.first_name,
            image: data.image_url
        }

        // Switch case for different events
        switch (type) {

            case "user.created":{
                await User.create(userData)
                break;
            }

            case "user.updated":{
                await User.findByIdAndUpdate(data.id, userData)
                break;
            }

            case "user.deleted":{
                await User.findByIdAndDelete(data.id)
                break;
            }
                
            default:
            break;
        }

        res.json({success: true, message: 'Webhook Received'})
   
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})    
    }
}

export default clerkWebhooks

