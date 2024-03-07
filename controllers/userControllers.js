const userService = require('../services/user.service');


const createUser = async(req, res) => {
      try{
        const { name, email, password, role} = req.body;
        const getUser = await userService.getUserByEmail(email);
        if(getUser)  {
            
        } else {
            let user = {
                name: name,
                email: email,
                password: password,
                role: role
            }
            const createUser = await userService.createUser(user);
            if(createUser) {
                res.status(201).json({message: "user Created", user: createUser})
            }
        }
      } catch(err) {
        return res.status(401).json({message: err.message})
      }
}


module.exports = {
    createUser
}