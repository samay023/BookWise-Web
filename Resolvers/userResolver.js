const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require('jsonwebtoken');
const config = require("config");
const secretKey = config.get("jwtSecret");

const getUsers = async () => {
  try{
    const AllUsers = await User.find();
    return AllUsers;
  }
  catch(e){
    console.log(e);
  }
  
};

const getUser = async userID => {
    try{
        const result = await User.findById(userID);
        return result;
    }
    catch(e){
        console.log(e);
    }
   
}

const loginUser = async ({email, password}) =>{
    try{
        // Check if User exists and password matches
        const user = await User.findOne({email:email});

        if(!user){
            throw new Error("Email does not exist");
        };

        const passwordMatches = await bcrypt.compare(password, user.password);

        if(!passwordMatches){
            throw new Error("Invalid password");
        };

        const token = jwt.sign({userID: user.id, email: user.email}, secretKey, {
            expiresIn: "1h"
        });

        return ({user, token, tokenExpiration: "1h"});

    }
    catch(e){
        return e;
    }
}

const addUser = async user => {

    try{
        // Check if user with the email already exists
        const userAlreadyExists = await User.findOne({email:user.email});
        if(userAlreadyExists){
          throw new Error("User already exists");
        }

        const hashedPassword = await bcrypt.hash(user.password, 10);
        let newUser = new User({
            name: user.name,
            email: user.email,
            password: hashedPassword,
            businessName: user.businessName,
            ABN: user.ABN
        });
    
        let result = await newUser.save();
        return result;
    }
    catch(e){
        return e;
    }
};

const updateUser = async user => {
  // Update the user where the email id matches
  let updatedUser = await User.findOneAndUpdate({email:user.email},user,{
    new:true,
    useFindAndModify:false
  });

  if(!updatedUser){
    throw new Error("User with the email ID not found");
  }
  else{
    return updatedUser;
  }
  
}

const UserResolver = {
  Query: {
    getAllUsers: (parent, args, {authData, validateLogin } ) => {
        return getUsers();
    },

    getUser: (parent, args, {authData, validateLogin } ) => {
      validateLogin(authData.isLoggedIn);
      return getUser(args.id);
    },
    login: (parent, args, context) => {
        return loginUser(args);
    }
  },
  Mutation: {
    addUser: (parent, args) => {
      return addUser(args);
    },
    updateUser: (parent,args, {authData, validateLogin}) => {
      validateLogin(authData.isLoggedIn);
      return updateUser(args);
    }
  }
};

module.exports = UserResolver;
