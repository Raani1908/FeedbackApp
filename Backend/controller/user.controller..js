import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';
 
 
export const SignUp = (req,res,next)=>{
const email = req.body.email;
console.log(req.body);
    const payload = {email};
    const secretKey = "asjdflasjdfasjkfldoctor";
    const token = jwt.sign(payload,secretKey)
    User.create(req.body).then(result=>{
        return res.status(200).json({ message: "User Sign up successfully...", user: result,token })
    }).catch(err=>{
        console.log(err);
        return res.status(401).json({message:"Internal server error..."})
    });
};
 
 
export const SignIn = async (request, response, next) => {
    // console.log(req.body)
    try {
        let user = await User.findOne({ email: request.body.email });
        if(user){
            return user ? User.checkPassword(request.body.password, user.password) ? response.status(200).json({ message: "User Sign In successfully...", user })
                : response.status(401).json({ error: "Bad request (Invalid password)" })
                : response.status(401).json({ error: "Bad request (Unauthorized user)" });
        }
       return  response.status(401).json({ error: "Bad request (Unauthorized user)" });
    }
    catch (err) {
        console.log(err);
        // return response.status(500).json({ error: "Internal server error" });
        
    }
}
