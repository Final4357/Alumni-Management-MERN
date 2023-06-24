import jwt from 'jsonwebtoken'
import { createError } from '../utils/error.js'

export const verifyToken = (req, res, next) =>{
<<<<<<< HEAD
       const token = req.headers.token;
    //   const token = req.cookies.access_token
=======
        const token = req.headers.token;
      // const token = req.cookies.access_token
>>>>>>> ffdecb0dc6969c434d41a75882b0a24b051f4aed
    if(!token) return next(createError(401, "You are not authenticated."));
    else{
        jwt.verify(token, process.env.JWT,(err, user)=>{
            if(err) return next(createError(403, "Token is not valid."));
            else{
                req.user = user;
                next();
            }
        });
    }
}