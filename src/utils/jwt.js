import jwt from "jsonwebtoken";

export const generateToken = (payload)=>{
    return jwt.sign(payload,process.env.SECRET,{
        expiresIn:"1h"
    })
}

export const decodeToken = (token) =>{
    return jwt.verify(token,process.env.SECRET)
}