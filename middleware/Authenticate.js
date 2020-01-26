const jwt = require('jsonwebtoken');
const config = require("config");
const secretKey = config.get("jwtSecret");


const validateToken = (token) => {
    let result = {
        isLoggedIn:false
    };

    try {
        if(token===""){
            return result;
        }
        else{
            let decodedToken;
            decodedToken =  jwt.verify(token,secretKey);

            if(!decodedToken){
                return result
            }
            else{
                result.isLoggedIn = true
                result.userID = decodedToken.userID
                result.email = decodedToken.email
                return result 
            }
        }
    }
    catch(e){
        return result;
    }
}

const validateLogin = (isLoggedIn) =>{
    if(!isLoggedIn){
      throw new Error("Unauthenticated Request");
    }
};

module.exports = {validateToken, validateLogin};