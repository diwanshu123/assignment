const userschema = require('../models/user.model');


const createUser = async(user) => {
    try{
       return await userschema.userschema.create(user)
    } catch(err) {
      return err
    }
}

const getUser = async() => {
    try{
      return await userschema.userschema.find()
    } catch(err) {
      return err;
    }
}

const getUserByEmail = async(email) => {
    try{
        return await userschema.userschema.find({email: email}).exec()
    } catch(err) {
        return err;
    }
}

module.exports = {
    createUser,
    getUser,
    getUserByEmail
}