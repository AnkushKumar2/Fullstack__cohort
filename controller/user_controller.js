const registerUser = async(req,res)=>{
    // res.send("Registered");
//get data

//validate


//check if user already exists


//creat a user in database



//create a verification token


//save token in database


//send token as email to user


//send success status to user

const  {name, email, password} =  req.body;

if(!name || !email || !password){
    return res.status(400).json({
        message:"All fields are required",
    });
}


}

export{ registerUser };